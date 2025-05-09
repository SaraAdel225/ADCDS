import { Box, Typography, Grid, IconButton, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#000409", 
        color: "white",
        py: 6, 
        px: { xs: 4, md: 10 },
        borderTop: "5px solid #00d0f1", 
        textAlign: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#00d0f1",
            }}
          >
            Quick Links
          </Typography>
          <Box>
            <Link href="/" color="inherit" sx={{ display: "block", mb: 1, fontSize: "1rem" }}>
              Home
            </Link>
            <Link href="#about" color="inherit" sx={{ display: "block", mb: 1, fontSize: "1rem" }}>
              About the Project
            </Link>
            <Link href="#features" color="inherit" sx={{ display: "block", mb: 1, fontSize: "1rem" }}>
              Features
            </Link>
            <Link href="#contact" color="inherit" sx={{ display: "block", mb: 1, fontSize: "1rem" }}>
              Contact Us
            </Link>
            <Link href="#faq" color="inherit" sx={{ display: "block", fontSize: "1rem" }}>
              FAQ
            </Link>
          </Box>
        </Grid>

        {/* قسم التواصل معنا */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#00d0f1",
            }}
          >
            Connect With Us
          </Typography>
          <Box>
            <IconButton sx={{ color: "#00d0f1", mx: 1 }}>
              <FacebookIcon />
            </IconButton>
            <IconButton sx={{ color: "#00d0f1", mx: 1 }}>
              <InstagramIcon />
            </IconButton>
            <IconButton sx={{ color: "#00d0f1", mx: 1 }}>
              <TwitterIcon />
            </IconButton>
            <IconButton sx={{ color: "#00d0f1", mx: 1 }}>
              <LinkedInIcon />
            </IconButton>
          </Box>
        </Grid>

        {/* قسم الحقوق */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#00d0f1",
            }}
          >
            Copyright
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: "0.9rem" }}>
            All rights reserved © 2025 AutonoDrive
          </Typography>
        </Grid>

        {/* قسم الشهادات */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              mb: 2,
              fontWeight: "bold",
              color: "#00d0f1",
            }}
          >
            Testimonials
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, fontSize: "0.9rem" }}>
            "Innovative autonomous driving solutions. Safe and intelligent experience."
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, borderTop: "1px solid #444", pt: 3 }}>
        <Typography variant="body2" sx={{ opacity: 0.6 }}>
          Designed by <Link href="https://your-portfolio-link.com" color="inherit">Sara Adel</Link>
        </Typography>
      </Box>
    </Box>
  );
}
