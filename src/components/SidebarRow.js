import { Avatar } from "@material-ui/core";
import React from "react";

const SidebarRow = () => {
  return (
    <div>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarRow;
{
  src && <Avatar src={src} />;
}
{
  Icon && <Icon />;
}
<h4>{title}</h4>;
