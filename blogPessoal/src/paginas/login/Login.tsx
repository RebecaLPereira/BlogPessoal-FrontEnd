import './Login.css'
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";


function Login() {
    return(
        <> 
        <Grid 
        container alignItems="center" 
        className="imgLogin">
        <Grid item xs={6}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            paddingX={20}

          >
            <form>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  color="textPrimary"
                  component={"h3"}
                  align="center"
                  className="textos1"


                >
                  Entrar
                </Typography>
                <TextField
                  label="Nome de Usuario"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                />
                <TextField
                  label="Senha"
                  type="password"
                  variant="outlined"
                  margin="normal"
                  fullWidth

                />
                <Box marginTop={2} textAlign="center">
                  <Link to={"/home"} className="text-decorator-none">
                    <Button type="submit" variant="contained" color="primary">
                      Logar
                    </Button>
                  </Link>
                </Box>
              </Box>
            </form>
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Box marginRight={1}>
                <Typography variant="subtitle1" gutterBottom align="center">
                  Não tem uma conta?
                </Typography>
              </Box>
              <Link to={"/cadastrar"}>
                <Typography
                  variant="subtitle1"
                  gutterBottom
                  align="center"
                  className="textos1"
                >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}  className="imagemLogin"></Grid>
      </Grid>
        </>
    )
}

export default Login;