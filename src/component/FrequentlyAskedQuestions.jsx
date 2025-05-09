import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const colors = ["#00d0f1"];

const faqs = [
    { question: "What is an Advanced Auto Control Driving System?", answer: "An Advanced Auto Control Driving System is a vehicle that can drive itself without human intervention by using sensors, cameras, and artificial intelligence." },
    { question: "How does the system follow the path?", answer: "The system uses a camera or sensors to detect a predefined line on the road and automatically follows it." },
    { question: "How does the system avoid obstacles?", answer: "The system is equipped with sensors that detect obstacles in its path and automatically change direction to avoid them safely." },
    { question: "Can the system recognize traffic signs?", answer: "Yes, the Advanced Auto Control Driving System is designed to detect and understand traffic signs using image recognition technology." },
    { question: "Does the system park automatically?", answer: "Yes, the system can automatically park itself in a designated parking spot without human assistance." },
    { question: "Why does the system use solar cells?", answer: "Solar cells provide a clean and sustainable energy source, reducing fuel consumption and harmful emissions." },
    { question: "Can the system recognize vehicle license plates?", answer: "Yes, the system is capable of detecting and recognizing license plate numbers." },
    { question: "Is it safe to use the Advanced Auto Control Driving System?", answer: "The system is designed with multiple safety features to reduce accidents and ensure a safer driving experience." },
    { question: "What data does the system store?", answer: "The system stores driving data, recognized signs, and system logs for later analysis." },
    { question: "Where can the Advanced Auto Control Driving System be tested?", answer: "The project includes a smart and safe testing environment that simulates real-world driving conditions." },
  ];

export default function FAQSection() {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        background: "#000409",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ mb: 4 }}>
        Frequently Asked Questions
      </Typography>
      {faqs.map((faq, index) => (
        <Accordion
          key={index}
          sx={{
            backgroundColor: "#02121e",
            color: "white",
            borderRadius: 3,
            mb: 2,
            p: 1,
            border: `2px solid #00d0f142`,
            backdropFilter: "blur(5px)",
            boxShadow: `0 4px 20px #00d0f1 40`,
            "&:before": { display: "none" },
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-5px) scale(1.02)",
              boxShadow: `0 8px 30px #00d0f1 80`,
            },
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: colors[index % colors.length] }} />}
          >
            <Typography variant="h6" fontWeight="bold">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="white">
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
