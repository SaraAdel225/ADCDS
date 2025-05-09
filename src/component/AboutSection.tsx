import {
  Box,
  Typography,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useState } from "react";
import carImage from "../assets/AboutCar.png";
import Logo from "../assets/logo.png";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{ p: { xs: 2, md: 15 }, backgroundColor: "#000409", color: "white" }}
    >
      <Grid
        container
        spacing={4}
        justifyContent="space-between"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ maxWidth: "500px" }}>
            <Box
              component="img"
              src={Logo}
              alt="Self-driving car"
              sx={{
                width: "200px",
                height: "auto",
                display: "block",
                marginBottom: "20px",
              }}
            />
            <Typography variant="body1" paragraph>
              The self-driving car project aims to develop an intelligent
              driving system based on AI and sensors to enable safe, efficient
              autonomous driving...
            </Typography>
            <Button
              variant="outlined"
              onClick={handleOpen}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "900px",
              borderRadius: 4,
              background: "#00080e",
              boxShadow: "0 4px 20px #00d0f15c",
              overflow: "hidden",
              p: { xs: 0, md: 3 },
              mx: { xs: "auto", md: 0 },
            }}
          >
            <Box
              component="img"
              src={carImage}
              alt="Self-driving car"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Dialog for detailed content */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        PaperProps={{
          sx: { backgroundColor: "#000409", color: "white", borderRadius: 4 },
        }}
      >
        <DialogTitle
          sx={{ fontWeight: "bold", fontSize: "1.8rem", color: "#00d0f1" }}
        >
          Advanced Auto Control Driving System
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: "white" }}>
            The self-driving car project aims to develop an intelligent driving
            system based on artificial intelligence and advanced sensors to
            enable the car to drive safely and efficiently without direct human
            intervention.
            <br />
            <br />
            The project seeks to solve the problem of accidents caused by human
            errors, reduce traffic congestion, and improve transportation
            efficiency.
            <br />
            <br />
            In addition, the project utilizes solar cells to provide a clean and
            sustainable energy source, helping to reduce fuel consumption and
            harmful emissions, while enhancing the operational efficiency of the
            car’s electronic systems.
            <br />
            <br />
            💡 Through this system, it is possible to achieve higher levels of
            safety and achieve more sustainable, eco-friendly driving.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: "#00d0f1" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
