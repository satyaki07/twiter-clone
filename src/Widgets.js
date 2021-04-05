import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
// import { Twitter } from "@material-ui/icons";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening? </h2>
        <TwitterTweetEmbed tweetId={"1377173622335307781"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="satyaki_07"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url={"https://github.com/satyaki07"}
          options={{ text: "#reactjs is awesome", via: "satyaki_07" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
