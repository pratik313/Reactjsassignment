import React from "react";
import "./Body.css";
import SimpleImageSlider from "react-simple-image-slider";
function Body() {
  const images = [
    { url: "https://images.unsplash.com/photo-1574904735613-d27b0559232c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60" },
    { url: "" },
    { url: "https://images.unsplash.com/photo-1533416784636-2b0ccfea6b97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxjYXIlMjBqcGd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { url: "" },
   
  ];
  return (
    <div>
      <SimpleImageSlider
        width={1550}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
}

export default Body;
