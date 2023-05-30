import { Button, Container, TextField, Typography } from "@material-ui/core";
import './CadastroTema.css'

function CadastroTema(){
    return(
        <Container maxWidth="sm" className="topo">
            <form >
                <Typography variant="h3" color="textSecondary" component="h1" align="center">
                    Cadastro de Temas
                </Typography>
                <TextField value="" id="descricao" label="descricao" variant="outlined" name="descricao" margin="normal" fullWidth></TextField>
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;