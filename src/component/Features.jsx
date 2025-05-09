import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import SecurityIcon from "@mui/icons-material/Security";
import SavingsIcon from "@mui/icons-material/Savings";
import SpeedIcon from "@mui/icons-material/Speed";
import PublicIcon from "@mui/icons-material/Public"; 
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TimerIcon from "@mui/icons-material/Timer";
import UpdateIcon from "@mui/icons-material/Update";

const features = [
  {
    icon: <SecurityIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Increased Safety",
    desc: "Reducing accidents caused by human errors.",
  },
  {
    icon: <SavingsIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Cost Efficiency",
    desc: "Saving fuel using solar cells and reducing driver costs.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Transport Efficiency",
    desc: "Smoother and faster travel with less traffic.",
  },
  {
    icon: <PublicIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Sustainability",
    desc: "Reduced emissions using clean energy.",
  },
  {
    icon: <DirectionsCarIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Comfort & Ease",
    desc: "Provides a comfortable, driverless experience.",
  },
  {
    icon: <TimerIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Time Saving",
    desc: "Auto parking and obstacle avoidance save time.",
  },
  {
    icon: <UpdateIcon sx={{ fontSize: 50, color: "#00d0f1" }} />,
    title: "Future Ready",
    desc: "Easy integration with future technologies.",
  },
];

export default function FeaturesSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        backgroundColor: "#000409",
        color: "white",
      }}
    >
      <Typography variant="h3" textAlign="center" fontWeight="bold" mb={6}>
        Project Features
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                alignItems: "center",
                p: 3,
                border: "2px solid #00d0f142",
                borderRadius: 3,
                backgroundColor: "#02121e",
                cursor: "pointer",
                color: "white",
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": { transform: "scale(1.02)", boxShadow: 4 },
              }}
            >
              <Box sx={{ mr: 3 }}>{feature.icon}</Box>
              <Box sx={{ overflow: "hidden" }}>
                <Typography variant="h6" fontWeight="bold" noWrap>
                  {feature.title}
                </Typography>
                <Divider sx={{ width: 50, borderBottomWidth: 2, borderColor: "#00d0f1", my: 1 }} />
                <Typography variant="body2"  color="gray" sx={{ overflow: "hidden", textOverflow: "ellipsis", display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" }}>
                  {feature.desc}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}