import React, { useState } from "react";

import "./App.css";

function App() {
  const [appState, changeState] = useState({
    activeObject: [],
    objects: [
      { id: 1, toggled: false },
      { id: 2, toggled: false },
      { id: 3, toggled: false },
      { id: 4, toggled: false }
    ]
  });

  function toggleActive(index) {
    let activeObjectsCopy = [...appState.activeObject];

    if (activeObjectsCopy.length < 2) {
      activeObjectsCopy.push(appState.objects[index]);
      changeState({ ...appState, activeObject: activeObjectsCopy });
    } else {
      changeState({ ...appState, activeObject: [] });
    }
  }

  function toggleActiveStyles(index) {
    if (appState.activeObject.includes(appState.objects[index])) {
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
