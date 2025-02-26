import { Button, Typography, Box } from "@mui/material";

function ContentSection() {
  return (
    <Box sx={{ margin: 2 }}>
      ContentSection
      <Button variant="outlined" color="customBlue">
        Test
      </Button>
      <button>Basic Button</button>
      <Typography sx={{ color: "primary.main" }}>Test</Typography>
    </Box>
  );
}

export default ContentSection;
