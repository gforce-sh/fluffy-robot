import { useState } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Icon } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const TabBar = ({ pages, history }) => {
  const [showTabBar, setShowTabBar] = useState(false);
  return (
    <div>
      <div
        css={{
          width: "100%",
          height: showTabBar ? "100px" : "35px",
          background: "transparent",
          position: "absolute",
          top: "0px"
        }}
        onMouseEnter={() => setShowTabBar(true)}
      />
      <div
        css={{
          height: showTabBar ? "100px" : "0px",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
          position: "absolute",
          top: "0px",
          width: "100%"
        }}
        onMouseLeave={() =>
          setTimeout(() => {
            setShowTabBar(false);
          }, 1000)
        }>
        <Button.Group attached="top">
          {pages?.map(page => (
            <Button
              key={page.heading}
              onClick={() => history.push(page.path)}
              color="black">
              <Icon name={page.icon} size="large" color="white" />
            </Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
};

export default withRouter(TabBar);
