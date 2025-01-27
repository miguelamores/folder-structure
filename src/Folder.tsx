import { useState } from "react";
import Icon from "./Icon";
import Item from "./Item";

function getIconName(file: string) {
  return file.split(".").pop();
}

const Folder = ({ files }: { files: FileType | undefined }) => {
  const [expanded, setExpanded] = useState(false);

  const showChildren = files?.isFolder && expanded;

  const handleExpand = () => setExpanded((prev) => !prev);
  return (
    <ul className="list">
      <button onClick={handleExpand}>
        <p>{files?.name}</p>
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
