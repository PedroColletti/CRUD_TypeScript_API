import React from "react";
import EditComment from "./EditComment";
import { useHistory } from "react-router-dom";

const EditCommentContainer: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return <EditComment handleClick={handleClick} />;
};

export default EditCommentContainer;
