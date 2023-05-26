import { Grid, Typography } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { Box } from '@mui/material';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css"

function Footer (){
    return (
        <>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ background: "#524A4E" }}
        >
          <Grid alignItems="center" item xs={12}>
            <Box className="box1">
              <Box
                paddingTop={1}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography
                  variant="h5"
                  align="center"
                  gutterBottom
                  className="textos"
                >
                  Entre em contato:{" "}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a href="https://github.com/RebecaLPereira" target="_blank">
                  <GitHub className="redes" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rebecaleitepereira/" target="_blank">
                  <LinkedInIcon className="redes" />
                </a>
              </Box>
            </Box>
            <Box className="box2">
              <Box paddingTop={1}>
                <Typography
                  variant="subtitle2"
                  align="center"
                  gutterBottom
                  className="textos"
                >
                  © 2023 Copyright:
                </Typography>
              </Box>
              <Box>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    className="textos"
                    align="center"
                  >
                    Rebeca Leite Pereira
                  </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        </>
    )
}

export default Footer;