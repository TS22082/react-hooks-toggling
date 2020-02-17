import React, { useState } from "react";

import "./App.css";

function App() {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [
      { id: 1, toggled: false },
      { id: 2, toggled: false },
      { id: 3, toggled: false },
      { id: 4, toggled: false }
    ]
  });

  function toggleActive(index) {
    changeState({ ...appState, activeObject: appState.objects[index] });
  }

  function toggleActiveStyles(index) {
    if (appState.objects[index] === appState.activeObject) {
      return "box active";
    } else {
      return "box inactive";
    }
  }

  return (
    <div className="App">
      {appState.objects.map((element, index) => (
        <div
          key={index}
          className={toggleActiveStyles(index)}
          onClick={() => toggleActive(index)}
        ></div>
      ))}
    </div>
  );
}

export default App;
