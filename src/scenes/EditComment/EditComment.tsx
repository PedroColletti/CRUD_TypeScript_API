import React from "react";
import { Header } from "../../components";
import { Container, Home } from "./styles";

type Props = {
  handleClick: any;
};

const EditComment: React.FC<Props> = ({ handleClick }) => {
  return (
    <Container>
      <Header />
      Edit Scene <br />
      <Home onClick={handleClick}> Go Home </Home>
    </Container>
  );
};

export default EditComment;
