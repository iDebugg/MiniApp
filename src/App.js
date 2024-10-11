// App.js
import React, { useEffect, useState } from "react";
import { UserProvider, useUserContext } from "../src/Store/UserContext.jsx";
import Loader from "../src/Components/Loader.jsx";
import HomeApp from "./Pages/HomeApp.jsx";
import "./App.css";

function App() {
  const { userData, setUserData } = useUserContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    const user = tg.initDataUnsafe?.user;
    if (user) {
      setUserData({
        username: user.username || "N/A",
        firstName: user.first_name || "N/A",
        lastName: user.last_name || "N/A",
        profilePicUrl: user.photo_url || "",
      });
    }

  
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      tg.offEvent("mainButtonClicked");
    };
  }, [setUserData]);

  return (
    <div className="App">
      {isLoading ? (
        <Loader />
      ) : (
        <>
            <HomeApp />
        </>
      )}
    </div>
  );
}

// Wrap App component with UserProvider to enable global access to user data
export default function WrappedApp() {
  return (
    <UserProvider>
      <App />
    </UserProvider>
  );
}
