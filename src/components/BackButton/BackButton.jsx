import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";

const Back = styled.div`
  position: absolute;
  top: -20px;
  left: -130px;
  color: #a8bec9;
  cursor: pointer;
  z-index: 10;
`;

function BackButton({ handleBackClick }) {
  return (
    <Back onClick={handleBackClick}>
      <BiArrowBack size={40} />
    </Back>
  );
}

export default BackButton;
