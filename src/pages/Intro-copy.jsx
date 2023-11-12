import React, { useState } from 'react';
import {Button, Modal, ModalContent, ModalFooterButtons} from "monday-ui-react-core";
import introImg from "../resources/images/intro-img-bk.png";
import {Board, Forum} from "monday-ui-react-core/icons";

export const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log("Modal 열림");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="content">
        <div className="content-header">
          <Button
            onClick={openModal}
            leftIcon={Board}
          >
            0개의 연결된 보드
          </Button>
          <Modal
            contentSpacing
            description="Subtitle description text goes here"
            id="story-book-modal"
            onClose={closeModal}
            isOpen={isModalOpen}
            title="Modal title"
            triggerElement={null}
          >
            <ModalContent>
              <p>
                Modal content goes here
              </p>
            </ModalContent>
            <ModalFooterButtons
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
              primaryButtonText="Confirm"
              secondaryButtonText="Cancel"
            />
          </Modal>



          <Button
            onClick={function noRefCheck(){}}
            leftIcon={Forum}
            disabled
          >
            GPT
          </Button>
        </div>
        <div className="content-body">
          <div className="intro-content">
            <div className="intro-img">
              <img src={introImg} alt="Intro Image"/>
            </div>
            <div className="intro-message">
              <h3>먼데이의 검색 기능을 강화하세요</h3>
              <p>내 자산을 추가하여 더 높은 성능의 검색을 경험하세요</p>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}
