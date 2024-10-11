import { useEffect, useState } from "react";
import "./App.css"
import "../src/Components/Loader.jsx"
import Loader from "../src/Components/Loader.jsx";
import HomeApp from "./Pages/HomeApp.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();


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
        <Loader />
      ) : (
        <>
        <HomeApp />
          {/* <h1>Welcome to Telegram Mini App</h1>
          <p>Username: {username}</p> */}
        </>
      )}
    </div>
  );
}

export default App;
