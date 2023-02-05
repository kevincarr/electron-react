import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import {HashRouter,Route,Routes} from "react-router-dom";
import { globals, setGlobals } from "./assets/Components/Shared/globals";
import noteToSelf from "./assets/Components/Shared/noteToSelf";
import Home from './assets/Components/Pages/Home/Home';
import ButtonPillBlue from "./assets/Components/Shared/Buttons/PillBlue";

function App({ callback }) {
  // Callback will be called when the div is first created.
  
  setGlobals("isTesting", true);
  console.log((globals.isTesting) ? "Testing is ON" : "Testing is OFF");
 
  const testingSet = (e) =>{
    (globals.isTesting) ? setGlobals("isTesting", false) : setGlobals("isTesting", true);
    console.log((globals.isTesting) ? "Testing is ON" : "Testing is OFF");
  }
  return (
    <div ref={callback}>
      <h2 className='text-red-600'>Hello from React in Electron!</h2>
        <ButtonPillBlue
          onMouseUp={testingSet.bind(this)}
          text="Set Testing in App"
        />
      <HashRouter>
        <Routes>
          <Route
            exact
            path='/'
            element={Home()}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => noteToSelf("src/app:rendered")} />);