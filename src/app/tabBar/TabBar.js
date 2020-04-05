// import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const TabBar = ({ pages, history }) => {
  return (
    <Button.Group attached="top">
      {pages?.map(page => (
        <Button onClick={() => history.push(page.path)}>{page.heading}</Button>
      ))}
    </Button.Group>
  );
};

export default withRouter(TabBar);
