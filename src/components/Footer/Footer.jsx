import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "#333",
        color: "white",
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        textAlign: "center",
      }}
    >
      {/* Links */}
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
          About Us
        </Link>
        <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
          Contact
        </Link>
        <Link href="#" sx={{ color: "white", textDecoration: "none" }}>
          Privacy Policy
        </Link>
      </Box>

      {/* Social Media Icons */}
      <Box
        sx={{
          display: "flex",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        <Link href="#" sx={{ color: "white", fontSize: "1.5rem" }}>
          🌐
        </Link>
        <Link href="#" sx={{ color: "white", fontSize: "1.5rem" }}>
          📘
        </Link>
        <Link href="#" sx={{ color: "white", fontSize: "1.5rem" }}>
          🐦
        </Link>
      </Box>

      {/* Copyright */}
      <Typography variant="body2" sx={{ marginTop: "10px" }}>
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
