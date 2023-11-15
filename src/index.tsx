import { createRoot } from 'react-dom/client'
import "./global.css";
import { FileTemp } from './files';
import { App } from './app';

function Open() {
  return (
    <div className="Open"> 
      {"starter for react application next"}
    </div>
  );
}

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);