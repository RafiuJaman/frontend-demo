import { Typography, Box, Card, CardContent, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Card elevation={3}>
          <CardContent sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Hello World
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
