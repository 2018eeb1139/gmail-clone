import React from "react";
import "./Sidebar.css";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import SidebarOption from "./SidebarOption";
import InboxIcon from "@mui/icons-material/Inbox";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import { IconButton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import DuoIcon from "@mui/icons-material/Duo";
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
        onClick={() => dispatch(openSendMessage())}
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number="54"
        selected="true"
      />
      <SidebarOption Icon={StarIcon} title="Starred" number="54" />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number="54" />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number="54" />
      <SidebarOption Icon={NearMeIcon} title="Sent" number="54" />
      <SidebarOption Icon={NoteIcon} title="Draft" number="54" />
      <SidebarOption Icon={ExpandMoreIcon} title="More" />
      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
