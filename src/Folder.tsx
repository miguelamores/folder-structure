import { useState } from "react";
import Icon from "./Icon";
import Item from "./Item";

function getIconName(file: string) {
  return file.split(".").pop();
}
function getFolderIconName(expanded: boolean) {
  return expanded ? "caretDown" : "caretRight";
}

const Folder = ({ files }: { files: FileType | undefined }) => {
  const [expanded, setExpanded] = useState(false);

  const showChildren = files?.isFolder && expanded;

  const handleExpand = () => setExpanded((prev) => !prev);

  return (
    <ul className="list">
      <button onClick={handleExpand} className="folder">
        {files?.isFolder && <Icon name={getFolderIconName(expanded)} />}
        {files?.name}
      </button>
      {showChildren &&
        files.children?.map((item: FileType) => (
          <li key={item.name} className="item">
            {!item.isFolder && <Icon name={getIconName(item.name)} />}
            <Folder files={item} />
          </li>
        ))}
    </ul>
  );
};

export default Folder;
