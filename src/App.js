import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Set up main button behavior
    tg.MainButton.setText("Submit");
    tg.MainButton.show();

    tg.onEvent("mainButtonClicked", () => {
      tg.sendData("Button clicked"); // Sends data back to bot
    });

    // Get user data
    const user = tg.initDataUnsafe?.user;
    if (user) {
      setUsername(user.username);
      
    }

    return () => {
      tg.offEvent("mainButtonClicked");
    };
  }, []);

  return (
    <div className="App">
      <h1>Welcome to Telegram Mini App</h1>
      <p>Username: {username}</p>
    </div>
  );
}

export default App;
