import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        profilePic={
          "https://media-exp1.licdn.com/dms/image/C5603AQGxzq36_GgMYg/profile-displayphoto-shrink_200_200/0/1556770619827?e=1622678400&v=beta&t=udDg1O-hpLfEycFpaQYsJolGW8QWpDbKSXgiAcehfeM"
        }
        message="Wow, this works!"
        timestamp="This is a timestamp"
        username="Bryan Roof"
        image="https://hackernoon.com/hn-images/0*3C8jCZetH7jqSQG_.jpg"
      />
      <Post
        profilePic={
          "https://media-exp1.licdn.com/dms/image/C5603AQGxzq36_GgMYg/profile-displayphoto-shrink_200_200/0/1556770619827?e=1622678400&v=beta&t=udDg1O-hpLfEycFpaQYsJolGW8QWpDbKSXgiAcehfeM"
        }
        message="Wow, this works!"
        timestamp="This is a timestamp"
        username="Bryan Roof"
      />
      <Post />
    </div>
  );
};

export default Feed;
