import React, { useRef, useState } from "react";
import Model from "./Model";
import Autoincrementcounter from "./Autoincrementcounter";

const App = () => {
  const ref = useRef(null);

  return (
    <div className="relative h-screen w-screen">
      <Autoincrementcounter />
      {/* <Model ref={ref} />
      <button onClick={() => ref.current.handleModel()}>hello world</button> */}
    </div>
  );
};

export default App;
