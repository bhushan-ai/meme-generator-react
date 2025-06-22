import React from "react";

async function GetAllmemes() {
  const response = await fetch(`https://api.imgflip.com/get_memes`);
  return await response.json();
}

export default GetAllmemes;
