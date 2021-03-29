import React from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function Tweetbox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media.newyorker.com/photos/5da91499ada3240008c1fb73/master/pass/191028_r35206.jpg"></Avatar>
            <input placeholder="What's happening?" type="text" />
            
        </div>
      </form>
    </div>
  );
}
export default Tweetbox;
