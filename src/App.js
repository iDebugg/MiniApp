import { useEffect, useState } from "react";
import "./App.css"

function App() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); // You can adjust the timeout duration as needed

    return () => {
      tg.offEvent("mainButtonClicked");
    };
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Welcome to Telegram Mini App</h1>
          <p>Username: {username}</p>
        </>
      )}
    </div>
  );
}

export default App;
