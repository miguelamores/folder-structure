import React, { Fragment, useState } from "react";
import Icon from "./Icon";
import Item from "./Item";

const Folder = ({ files }: { files: FileType | undefined }) => {
  return (
    <ul className="list">
      <p>{files?.name}</p>
      {files?.isFolder &&
        files.children?.map((item: FileType) => (
          <li key={item.name} className="item">
            <Folder files={item} />
          </li>
        ))}
    </ul>
  );
};

export default Folder;
