import React from "react";
import "./index.css";
import NavBar from "./Components/NavBar";
import UserProfile from "./Components/UserProfile";
import Posts from "./Components/Posts";
import Post from "./Components/Post";
import Contacts from "./Components/Contacts";
import ContactUserCard from "./Components/ContactUserCard";

const App = () => {
  return (
    <>
  <NavBar />
  <UserProfile />
  <div class="border profile">
  <Posts />
  <Post />
  <Post />
  <Post />
  </div>

<div class="border contacts">
  <Contacts />
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
  <ContactUserCard />
</div>
  </>
  )
}

export default App;
