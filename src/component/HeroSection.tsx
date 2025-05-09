import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import video from "../assets/backgroundHero.mp4";
import Logo from "../assets/logo.png";

export default function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <video
        src={video}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom, rgba(0, 15, 25, 0.6), rgba(0, 15, 25, 0.9))",
          zIndex: -1,
        }}
        
      />

      {/* Navbar */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          boxShadow: "none",
          pl: {  md: 12 },
          pr: {  md: 6 },
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 1 }}
          >
            <Box
              component="img"
              src={Logo}
              alt="Self-driving car"
              sx={{
                width: "100px",
                height: "auto",
                display: "block",
              }}
            />
          </Typography>
          {["Home", "About", "Features", "Contact"].map((item) => (
            <Button
              key={item}
              color="inherit"
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              {item}
            </Button>
          ))}
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          px: 2,
          pt: { xs: 6, sm: 8, md: 10 },
        }}
      >
        <Typography
          variant={isSmallScreen ? "h4" : "h3"}
          sx={{
            fontWeight: "bold",
            maxWidth: "700px",
            lineHeight: 1.3,
            mb: 3,
            px: { xs: 1, sm: 2 },
          }}
        >
          ADVANCED AUTO CONTROL DRIVING SYSTEM
        </Typography>

        <Button
          variant="outlined"
          sx={{
            mt: 2,
            px: { xs: 3, sm: 4 },
            py: { xs: 1, sm: 1.5 },
            fontSize: { xs: "0.9rem", sm: "1rem" },
            border: "2px solid #00d0f1",
            color: "white",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#00d0f1",
              color: "#000",
              borderColor: "#00d0f1",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
}
