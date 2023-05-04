import React from "react";
import "./Footer.css"

function Footing() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="foot">
      <p>Made with ❤️ @{year}</p>
    </footer>
  );
}

export default Footing;
