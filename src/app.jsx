import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { globals, setGlobals } from "./assets/Components/Shared/globals";
import noteToSelf from "./assets/Components/Shared/noteToSelf";

function App({ callback }) {
  // Callback will be called when the div is first created.
  
  setGlobals("testing", true);
  console.log((globals.testing) ? "Testing is ON" : "Testing is OFF");

  const appQuit = (e) =>{ 
    if(!globals.testing){
      window.close();
    }
  }  
  const testingSet = (e) =>{ 
    (globals.testing) ? setGlobals("testing", false) : setGlobals("testing", true);
    console.log((globals.testing) ? "Testing is ON" : "Testing is OFF");
  }
  return (
    <div ref={callback}>
      <h2 className='text-red-600'>Hello from React in Electron!</h2>
      <div id="exit-btn"
        onMouseUp={appQuit.bind(this)}
      >Exit</div>
      <div id="logon-btn"
        onMouseUp={testingSet.bind(this)}
      >Set testing</div>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => noteToSelf("src/app:rendered")} />);