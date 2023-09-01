import "./App.css";
import React, { useState } from "react";
import Updatecom from "./Updatecom";
import Mapcom from "./Mapcom";
import NavScrollExample from "./Navbar";
import Deletecompo from "./Deletecompo";
import Multiinput from "./Multiplinput";
import LocalStorage from "./Localstorage";
import Body from "./Body";

function App() {
  const [searchtext, SetSearchText] = useState("");

  return (
    <>
      <NavScrollExample SetSearchText={SetSearchText} />
      <Body />
      <Mapcom searchtext={searchtext} />

      {/* <Deletecompo /> */}
      {/* <Updatecom /> */}
      {/* <Multiinput/> */}
      {/* <LocalStorage/> */}
    </>
  );
}

export default App;
