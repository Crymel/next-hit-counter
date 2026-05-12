import React from "react";

import { readFile, writeFile } from "../helpers/file-helpers";
import ShyButton from "./shy-button";

const DATABASE_PATH = "/src/database.json";

function Home() {
  const db = JSON.parse(readFile(DATABASE_PATH));
  const visitorNumber = db.hits + 1;

  writeFile(DATABASE_PATH, JSON.stringify({ hits: visitorNumber }));

  return (
    <main>
      <h1>Welcome!</h1>
      <p>
        You are visitor number <ShyButton>{db.hits}.</ShyButton>
      </p>
    </main>
  );
}

export default Home;
