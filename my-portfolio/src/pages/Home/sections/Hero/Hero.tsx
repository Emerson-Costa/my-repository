import { Box, Container, Grid, styled, Typography } from "@mui/material"

import Avatar from "my-portfolio/src/assets/images/avatar.jpg"

import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';

import StyledButton from "../../../../components/StyledButtons/StyledButton";
import AnimatedBackground from "../../../../components/AnimatedBackground/AnimatedBackground";


const Hero =() => {

     
    const StyledHero = styled("div")(({theme})=>({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",

        [theme.breakpoints.up("xs")]: { 
            PaddingTop: "100px"
        },

        [theme.breakpoints.up("md")]: { 
            PaddingTop: "100px"
        }
    }))

    const StyledImg = styled("img")(({theme})=>({
        width: "70%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }))

    return (
      <>
       <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={5}>
                        <Box position = "relative">
                            <Box position = "absolute" width={"130%"} top={-100} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position = "relative" textAlign={"center"}>
                                <StyledImg src={Avatar}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Emerson Costa</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Analista de Sistemas</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <DownloadIcon/> 
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton> 
                            </Grid>
                            <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon/>
                                    <Typography>
                                        Contact me
                                    </Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
       </StyledHero>
      </>
    )
  }
  
  export default Hero