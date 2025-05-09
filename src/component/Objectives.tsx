import { Box, Grid, Typography, Card, CardContent, IconButton } from "@mui/material";
import SmartToyIcon from '@mui/icons-material/SmartToy';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import TrafficIcon from '@mui/icons-material/Traffic';
import ParkIcon from '@mui/icons-material/LocalParking';
import StorageIcon from '@mui/icons-material/Storage';
import NumbersIcon from "@mui/icons-material/Numbers";
import SafetyIcon from '@mui/icons-material/SafetyCheck';

const objectives = [
  { title: "Design & Implement", desc: "A miniature self-driving car model.", icon: <SmartToyIcon fontSize="large" /> },
  { title: "Path Following", desc: "Make the car follow a specific track.", icon: <TrackChangesIcon fontSize="large" /> },
  { title: "Obstacle Avoidance", desc: "Detect and avoid obstacles safely.", icon: <DirectionsCarIcon fontSize="large" /> },
  { title: "Traffic Sign Recognition", desc: "Read and respond to traffic signs.", icon: <TrafficIcon fontSize="large" /> },
  { title: "Automatic Parking", desc: "Enable the car to park automatically.", icon: <ParkIcon fontSize="large" /> },
  { title: "Database Integration", desc: "Save and retrieve driving data.", icon: <StorageIcon fontSize="large" /> },
  { title: "Vehicle Plate Detection", desc: "Recognize vehicle license plates.", icon: <NumbersIcon fontSize="large" /> },
  { title: "Safe Test Environment", desc: "Setup a smart and safe test area.", icon: <SafetyIcon fontSize="large" /> },
];

export default function ObjectivesSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        background: "#000409",
        color: "white",
      }}
    >
      <Typography variant="h3" textAlign="center" fontWeight="bold" mb={6}>
        Project Objectives
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {objectives.map((obj, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                backgroundColor: "#02121e",
                color: "white",
                borderRadius: 4,
                height: "100%",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
                border: "2px solid #00d0f142",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 30px rgba(0, 208, 241, 0.4)",
                },
              }}
              elevation={0}
            >
              <CardContent sx={{ textAlign: "center" }}>
                <IconButton
                  sx={{
                    color: "#00d0f1",
                    width: 60,
                    height: 60,
                    mb: 2,
                  }}
                >
                  {obj.icon}
                </IconButton>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {obj.title}
                </Typography>
                <Typography variant="body2" color="gray">
                  {obj.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
