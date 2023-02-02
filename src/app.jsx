import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';

function App({ callback }) {
  // Callback will be called when the div is first created.
  return (
    <div ref={callback}>
      <h2 className='text-red-600'>Hello from React in Electron!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");

const root = ReactDOMClient.createRoot(rootElement);
root.render(<App callback={() => console.log("src/app:rendered")} />);