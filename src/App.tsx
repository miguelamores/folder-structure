import { files } from "../data.ts";
import Folder from "./Folder.tsx";
import "./style.css";

export default function App() {
  return (
    <div className="grid">
      <aside className="structure">
        <Folder files={files} />
      </aside>
    </div>
  );
}
