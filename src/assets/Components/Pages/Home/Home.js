import React, { useState } from 'react';
import ButtonPillBlue from "../../Shared/Buttons/PillBlue";
import { globals, setGlobals } from "../../Shared/globals";

export default function Home() {
    const [count, setCount] = useState(0);

    const appQuit = (e) =>{ 
        if(!globals.isTesting){
            window.close();
        }
    }  
    const testingSet = (e) =>{
        (globals.isTesting) ? setGlobals("isTesting", false) : setGlobals("isTesting", true);
        console.log((globals.isTesting) ? "Testing is ON" : "Testing is OFF");
    }
    return (
        <div>
            <h2 className='text-red-600'>Hello from Home!</h2>
            <ButtonPillBlue
                onMouseUp={appQuit.bind(this)}
                        text="Exit"
                    />
            <ButtonPillBlue
                onMouseUp={testingSet.bind(this)}
                        text="Set Testing"
                    />
            <div id="exit-btn"
                onMouseUp={appQuit.bind(this)}
            >Exit</div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}