import React, { Fragment, useState } from "react";
import Icon from "./Icon";
import Item from "./Item";

function getIconName(file: string) {
  return file.split(".").pop();
}

const Folder = ({ files }: { files: FileType | undefined }) => {
  return (
    <ul className="list">
      <p>{files?.name}</p>
      {files?.isFolder &&
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
