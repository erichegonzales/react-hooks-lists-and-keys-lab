import React from "react";

function NavBar() {
  // array of links
  const links = ["home", "about", "projects"];

  // function that creates an <a> tag for each element in the links array
  const linkElements = links.map((link) => {
    return <a key={link} href={'#' + link}>{link}</a>
  })

  // function that adds created <a> tag and appends it the nav bar
  return(
    <nav>{linkElements}</nav>
  )
}

export default NavBar;
