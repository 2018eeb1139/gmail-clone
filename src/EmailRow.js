import React, { forwardRef } from "react";
import "./EmailRow.css";
import Checkbox from "@mui/material/Checkbox";
import { IconButton } from "@mui/material";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";

const EmailRow = forwardRef(
  ({ id, title, subject, description, time }, ref) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const openMail = () => {
      dispatch(
        selectMail({
          id,
          title,
          subject,
          description,
          time,
        })
      );
      navigate("/mail");
    };
    return (
      <div key={id} ref={ref} className="emailRow" onClick={openMail}>
        <div className="emailRow__options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <LabelImportantOutlinedIcon />
          </IconButton>
        </div>
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>
            {subject}{" "}
            <span className="emailRow__description">{description}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    );
  }
);

export default EmailRow;
