import { Avatar, Input } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import "./MessageSender.css";

const MessageSender = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");

  const handleChange = (e) => {
    if (e.target.files[0]) {
    }
  };

  const handleSubmit = () => {
    console.log("Submitting");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGxzq36_GgMYg/profile-displayphoto-shrink_200_200/0/1556770619827?e=1622678400&v=beta&t=udDg1O-hpLfEycFpaQYsJolGW8QWpDbKSXgiAcehfeM" />
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind?`}
          />
          <Input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />

          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
