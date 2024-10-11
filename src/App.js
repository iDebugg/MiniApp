import { useEffect, useState } from "react";
import { Button, Container, Typography, TextField, Box } from "@mui/material";

function App() {
  const [username, setUsername] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Set up the main button behavior
    tg.MainButton.setText("Submit");
    tg.MainButton.show();

    tg.onEvent("mainButtonClicked", () => {
      tg.sendData(`User Input: ${inputValue}`); // Sends data back to bot
    });

    // Get user data from Telegram
    const user = tg.initDataUnsafe?.user;
    if (user) {
      setUsername(user.username);
    }

    return () => {
      tg.offEvent("mainButtonClicked");
    };
  }, [inputValue]);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      {/* Header Section */}
      <Typography variant="h4" gutterBottom>
        Welcome to Telegram Mini App
      </Typography>

      {/* Display Telegram Username */}
      <Typography variant="subtitle1" gutterBottom>
        {username ? `Hello, @${username}` : "User not logged in"}
      </Typography>

      {/* User Input Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField
          label="Your Input"
          variant="outlined"
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          fullWidth
          onClick={() => {
            const tg = window.Telegram.WebApp;
            tg.MainButton.show();
          }}
        >
          Send to Bot
        </Button>
      </Box>
    </Container>
  );
}

export default App;
