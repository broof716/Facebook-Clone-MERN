import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://media-exp1.licdn.com/dms/image/C5603AQGxzq36_GgMYg/profile-displayphoto-shrink_200_200/0/1556770619827?e=1622678400&v=beta&t=udDg1O-hpLfEycFpaQYsJolGW8QWpDbKSXgiAcehfeM"
        title="Bryan Roof"
      />
      <SidebarRow Icon={LocalHospital} title="COVID -19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
};

export default Sidebar;
