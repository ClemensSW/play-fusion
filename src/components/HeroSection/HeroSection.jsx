import heroImage from "../../assets/images/hero-bg.webp";
import { Typography, Box } from "@mui/material";

function HeroSection() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
        }}
        variant="h1"
      >
        Willkommen auf PlayFusion Gate
      </Typography>
    </Box>
  );
}

export default HeroSection;
