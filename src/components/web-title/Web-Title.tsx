import React from "react";
import { Title, Wrapper } from "./Web-Title.style";
import { useNavigate } from "react-router-dom";

const WebTitle: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>Home</Title>
      <Title onClick={() => navigate("/collection")}>My Collection</Title>
    </Wrapper>
  );
};

export default WebTitle;
