import React from "react";
import { logo } from "../../assets";
import { useHistory } from "react-router-dom";
import { Container, LogoIcon } from "./styles";

const Header: React.FC = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  };
  return (
    <Container>
      <LogoIcon src={logo} onClick={handleClick} />
    </Container>
  );
};

export default Header;
