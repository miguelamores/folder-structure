import React, { Fragment, useState } from "react";
import Icon from "./Icon";
import Folder from "./Folder";

const Item = ({ children }: { children: FileType | undefined }) => {
  //   console.log(children);
  return children?.map((item: FileType) => {
    return (
      <li className="item">
        <Folder key={item.name} files={item} />
      </li>
    );
  });
};

export default Item;
