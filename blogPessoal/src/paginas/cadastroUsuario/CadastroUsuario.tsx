import { Button, Grid, Link, TextField, Typography } from '@material-ui/core';
import './CadastroUsuario.css'
import { Box } from '@mui/material';


function CadastroUsuario() {
    return(
    <Grid 
    container direction='row' 
    justifyContent='center' 
    alignItems='center'
    className='imgCadastro'
    >
    
    <Box paddingX={10}>
    <form>
        <Typography 
                variant='h4' 
                gutterBottom 
                color='textPrimary' 
                component={"h3"} 
                align='center'
                >
                    Cadastrar
                </Typography>
                <TextField 
                name='none'
                label='Nome completo' 
                variant='outlined'  
                margin='normal' 
                fullWidth 
                
                />
                <TextField 
                name='usuario'  
                label='Endereço de e-mail' 
                variant='outlined' 
                margin='normal'
                fullWidth 
                
                />
                <TextField 
                name='senha' 
                label='senha' 
                variant='outlined' 
                type='password'
                margin='normal' 
                fullWidth 
                />

                <TextField 
                name='confirmarSenha' 
                label='Confirmar Senha' 
                type='password' 
                variant='outlined' 
                margin='normal'
                fullWidth 
                
                />

                <TextField
                name='foto'
                label='Foto de Perfil'
                variant='outlined'
                margin='normal'
                fullWidth
                />

                <Box marginTop={2} textAlign='center'>
                <Link to={'/login'} className="text-decoration-none">
              <Button
                variant="contained"
                color="secondary"
                className="btnCancelar"
              >
                Cancelar
              </Button>
            </Link>
                <Button type='submit' variant='contained' color='primary'>
                            Cadastrar
                    </Button>
                </Box>
            </form>
        </Box>
    </Grid>

    )
}

export default CadastroUsuario;