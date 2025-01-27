import React, { Fragment, useState } from "react";
import Icon from "./Icon";
import Item from "./Item";

const Folder = ({ files }: { files: FileType | undefined }) => {
  return (
    <ul>
      <p>{files?.name}</p>
      {files?.isFolder ? <Item children={files.children} /> : null}
    </ul>
  );
};

export default Folder;
