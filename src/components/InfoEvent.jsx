import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  Slide,
} from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useInView } from "react-intersection-observer";
import ButtonLinks from "./ButtonLinks/ButtonLInks";

const InfoEvent = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        py: 6,
        px: 2,
        backgroundColor: "#F6F4F0",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-evenly"
        alignItems="center"
      >
        {/* Columna Izquierda */}
        <Grid item xs={12} md={6}>
          <Slide in={inView} direction="left" timeout={800}>
            <Box sx={{ textAlign: "center" }}>
            <Box
  component="img"
  src="/images/001/starsicon.gif"
  alt="Ceremonia"
  sx={{
    width: 125,       // equivalente a fontSize: 100
    height: 125,
    mb: 1
  }}
/>

              <Typography
                variant="h5"
                fontWeight="semibold"
                gutterBottom
                sx={{
                  fontFamily: "'GreatVibes'",
                  fontSize: { xs: "2.5rem", md: "3.5rem" },
                  color: "#0B1D4D"
                }}
              >
                 Fiesta
              </Typography>
              <Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{mb: 1, fontFamily: "'LibraSerifModern', serif", fontSize: { xs: "0.9rem", md: "1.5em" }, color: "#0B1D4D",   fontWeight: "bold", }}
>
Sabado 20 de Septiembre de 2025
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 1, fontFamily: "'LibraSerifModern', serif", fontSize: { xs: "0.9rem", md: "1.5rem" },  color: "#0B1D4D",   fontWeight: "bold",}}
>
  21:00 hs.
</Typography>

<Typography 
  variant="body1" 
  color="text.secondary" 
  sx={{ mb: 4, fontFamily: "'LibraSerifModern', serif", fontSize: { xs: "0.9rem", md: "1.5em" } ,  color: "#0B1D4D",   fontWeight: "bold",}}
>
Madero Tango - Salon Dique 1. Elvira Rawson De Dellepiane 150, CABA 
</Typography>

 
<ButtonLinks
  label="Como llegar"
  href="https://www.google.com/maps/place/Estacionamiento+Madero+Tango/@-34.6237737,-58.3659228,17z/data=!3m1!4b1!4m6!3m5!1s0x95a335b91f8b0127:0x347bdbc80390a49a!8m2!3d-34.6237737!4d-58.3633479!16s%2Fg%2F11qg3p0skb?entry=ttu&g_ep=EgoyMDI1MDgxMC4wIKXMDSoASAFQAw%3D%3D"
  newTab
/>
            </Box>
          </Slide>
        </Grid>

   
      </Grid>
    </Box>
  );
};

export default InfoEvent;
