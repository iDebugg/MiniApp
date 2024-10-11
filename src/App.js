import { useEffect, useState } from "react";
import "./App.css";
import Loader from "../src/Components/Loader.jsx";
import HomeApp from "./Pages/HomeApp.jsx";

function App() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.ready();

    // Get user data
    const user = tg.initDataUnsafe?.user;
    if (user) {
      setUsername(user.username || "N/A");
      setFirstName(user.first_name || "N/A");
      setLastName(user.last_name || "N/A");
      setProfilePicUrl(user.photo_url || "");
    }

   
    setTimeout(() => {
      setIsLoading(false);
    }, 4000); 

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

        {/* <HomeApp /> */}
          
          <p>Username: {username}</p>
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          {profilePicUrl && <img src={profilePicUrl} alt="Profile" />}
        </>
      )}
    </div>
  );
}

export default App;
