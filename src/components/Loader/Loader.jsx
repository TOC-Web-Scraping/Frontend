import React from "react";
import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  color: #5d6577;
`;
function Loader() {
  return (
    <Container>
      <Spinner animation="border" />
    </Container>
  );
}

export default Loader;
