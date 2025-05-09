import { Box, Typography, TextField, Button, Grid, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import bgimage from "../assets/neuralnetwork.jpeg"; 

export default function ContactUs() {
  return (
    <Box
      sx={{
        py: 10,
        px: { xs: 2, md: 8 },
        position: "relative",
        color: "white",
        textAlign: "center",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // يجعل الخلفية ثابتة أثناء التمرير
        animation: "moveBg 30s infinite linear", // تحريك الخلفية بشكل مستمر
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)", // التغطية الشفافة فوق الصورة
          zIndex: 1,
        },
        "@keyframes moveBg": {
          "0%": {
            backgroundPosition: "center", // بداية الحركة من المركز
          },
          "50%": {
            backgroundPosition: "right center", // تحريك الخلفية إلى اليمين
          },
          "100%": {
            backgroundPosition: "center", // العودة إلى المركز
          },
        }
      }}
    >
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h3"
          fontWeight="bold"
          gutterBottom
          sx={{
            textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
            mb: 2,
          }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mb: 5, opacity: 0.9 }}
        >
          Have any questions or inquiries? Feel free to get in touch with us!
        </Typography>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Box
              component="form"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                borderRadius: 4,
                p: 4,
                boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
              }}
            >
              <TextField
                fullWidth
                label="Your Name"
                variant="filled"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Email Address"
                variant="filled"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                sx={{ mb: 3 }}
              />
              <TextField
                fullWidth
                label="Your Message"
                multiline
                rows={4}
                variant="filled"
                InputLabelProps={{ style: { color: "white" } }}
                InputProps={{
                  style: { color: "white", backgroundColor: "rgba(255,255,255,0.1)" },
                }}
                sx={{ mb: 3 }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#00d0f1",
                  color: "#000",
                  fontWeight: "bold",
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "30px",
                  transition: "0.4s",
                  "&:hover": { backgroundColor: "#00a8c4", transform: "translateY(-3px)" },
                }}
              >
                Send Message
              </Button>
            </Box>

            <Box sx={{ mt: 5 }}>
              <Typography variant="subtitle2" sx={{ mb: 2 }}>
                Follow us on social media
              </Typography>
              <Box>
                <IconButton sx={{ color: "#00d0f1", mx: 1, fontSize: 30 }}>
                  <FacebookIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: "#00d0f1", mx: 1, fontSize: 30 }}>
                  <InstagramIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: "#00d0f1", mx: 1, fontSize: 30 }}>
                  <TwitterIcon fontSize="inherit" />
                </IconButton>
                <IconButton sx={{ color: "#00d0f1", mx: 1, fontSize: 30 }}>
                  <EmailIcon fontSize="inherit" />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
