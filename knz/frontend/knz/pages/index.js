import { Typography, AppBar, Tabs } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { useTheme } from "@mui/styles";
import * as React from "react";
import Paper from "@mui/material/Paper";
import ClientOnly from "../components/ClientOnly";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function HomePage() {
  const theme = useTheme();
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "1rem",
          }}
        >
          <Card
            sx={{
              width: "100%",
              maxWidth: "sm",
              marginTop: "1rem",
              marginBottom: "1rem",
              padding: "1rem",
              height: "50vh",
              width: "50vw",
              borderRadius: "10px",
              backgroundColor: "#1C3144",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" gutterBottom color="white">
              Welcome to KNZ Flashcards & Snippets
            </Typography>
          </Card>
        </Box>
      </Container>
    </>
  );
}
