import { files } from "../data.ts";
import Folder from "./Folder.tsx";
import "./style.css";

export default function App() {
  return (
    <div>
      <div className="container">
        <h1>Folder Structure</h1>
        <span>Algochurn</span>
        <p>Please read he description to start solving the problem.</p>
      </div>
      <Folder files={files} />
    </div>
  );
}
