import { Button,Card,CardActions,CardContent,Typography,} from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./ListaPostagem.css";
import Postagem from "../../../models/Postagem";
import { useEffect, useState } from "react";
import { busca, post } from "../../../service/Service";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

function ListaPostagem() {
  window.scrollTo(0,0);
  const [posts, setPosts] = useState<Postagem[]>([]);
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });      navigate("/login");
    }
  }, [token]);

  async function getPost() {
    await busca("/postagens", setPosts, {
      headers: {
        'Authorization': token,
      },
    });
  }

  useEffect(() => {
    getPost();
  }, [posts.length]);

  return (
    <>
    {posts.map((post) => (
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {post.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>
              <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button
                    variant="contained"
                    className="marginLeft"
                    size="small"
                    color="primary"
                  >
                    Atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size="small" color="secondary">
                    Deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
    ))}
  </>

  );
}
export default ListaPostagem;