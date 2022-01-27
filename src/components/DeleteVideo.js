import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DeleteVideoModal from "./DeleteVideoModal";
import Button from "../styles/DeleteButton";
import { logout } from "../reducers/user";

const Wrapper = styled.div`
  svg {
    width: 30px;
    height: 30px;
    margin-left: 1rem;
    fill: ${(props) => props.theme.darkGrey};
  }

  div {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 440px) {
    margin-top: 1rem;
  }
`;

const DeleteVideo = () => {

  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Wrapper>
        <div>
          <Button grey onClick={() => setShowModal(true)}>
            Delete Video
          </Button>
        </div>
      </Wrapper>
      {showModal && <DeleteVideoModal closeModal={closeModal} />}
    </>
  );
};
export default DeleteVideo;
