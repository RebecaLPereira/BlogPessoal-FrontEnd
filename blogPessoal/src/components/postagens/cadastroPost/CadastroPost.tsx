import { Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from "@material-ui/core";
import './CadastroPost.css'
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import Postagem from "../../../models/Postagem";
import { busca, buscaId, post, put } from "../../../service/Service";

function CadastroPost() {
  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [temas, setTemas] = useState<Tema[]>([])
  const [token, setToken] = useLocalStorage('token');
  
  useEffect(()=>{
    if (token == "") {
      alert("Você precisa estar logado")
      navigate("/login")
    }
  }, [token])

  const [tema, setTema] = useState<Tema>(
    {
      id:0,
      descricao:''
    })
  const [postagens, setPostagens] = useState<Postagem>({
    id: 0,
    titulo: '',
    texto: '',
    tema: null
  })

  useEffect(()=>{
    setPostagens({
      ...postagens,
      tema: tema
    })
  }, [tema])

  
  useEffect(()=>{
    getTemas()
    if (id!==undefined){
      findByIdPostagem(id)
    }
  },[id])

  async function getTemas() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }

  async function findByIdPostagem(id: string) {
    await buscaId(`postagens/${id}`, setPostagens, {
      headers:{
        'Authorization': token
      }
    })
    
  }

  function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {
    setPostagens({
      ...postagens,
      [e.target.name]: e.target.value,
      tema: tema
    })
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
      if (id !== undefined) {
        put('/postagens', postagens, setPostagens, {
          headers: {
            'Authorization': token
          }
        })
        alert('Postagem atualizada com sucesso');
      } else {
        post('postagens', postagens, setPostagens, {
          headers:{
            'Authorization': token
          }
        })
        alert('Postagem cadastrado com sucesso');
      }
      back()
  }
  function back() {
    navigate('/posts')
  }
 

  return (
    <Container maxWidth="sm" className="topo">
      <form onSubmit={onSubmit}>
        <Typography
          variant="h3"
          color="textSecondary"
          component="h1"
          align="center"
        >
          Formulário de cadastro postagem
        </Typography>
        <TextField
          value={postagens.titulo}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="titulo"
          label="titulo"
          variant="outlined"
          name="titulo"
          margin="normal"
          fullWidth
        />
          <TextField
          value={postagens.texto}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
          id="texto"
          label="texto"
          name="texto"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <FormControl>
          <InputLabel id="demo-simple-select-helper-label">Tema </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            onChange={(e) => buscaId (`/temas/${e.target.value}`, setTema, {
              headers:{
                'Authorization': token
              }
            })}>
            {temas.map((tema) => (
                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
              ))}
          </Select>
          <FormHelperText>Escolha um tema para a postagem</FormHelperText>
          <Button type="submit" variant="contained" color="primary">
            Finalizar
          </Button>
        </FormControl>
      </form>
    </Container>
  );
}
export default CadastroPost;
