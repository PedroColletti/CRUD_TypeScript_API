import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import {
  TableCommentScene,
  CreateCommentScene,
  EditCommentScene,
} from "../scenes";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={TableCommentScene} path="/" exact />
      <Route component={CreateCommentScene} path="/create" />
      <Route component={EditCommentScene} path="/edit/" />
    </BrowserRouter>
  );
};
export default Routes;
