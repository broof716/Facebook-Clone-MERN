import React from "react";
import Story from "./Story";
import "./StoryReel.css";

const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxlqUPGilP_zg64MVhzK_5YumcHRjW_oDEAMtBKhTQATLz1Qf9ERr7oh7F37tVr4_CdPk&usqp=CAU"
        profileSrc="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
        title="Sony Sangha"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
        profileSrc="https://i.pinimg.com/originals/97/e4/2a/97e42a82fc7911961d3ca55f54d1372c.jpg"
        title="James Doe"
      />
      <Story
        image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683gettyimages-1032942656.jpeg?v=1597932630"
        title="Frankie"
      />
      <Story
        image="https://schoolsweek.co.uk/wp-content/uploads/2018/09/Computing-feat.jpg"
        profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
        title="Naz"
      />
    </div>
  );
};

export default StoryReel;
