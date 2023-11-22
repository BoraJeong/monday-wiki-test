import React, { useState } from 'react';
import {Button, Modal, ModalContent, ModalFooterButtons, Search, Checkbox, Icon} from "monday-ui-react-core";
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
            onClick={() => openModal()}
            leftIcon={Board}
          >
            0개의 연결된 보드
          </Button>

          <Modal
            contentSpacing
            id="story-book-modal"
            onClose={closeModal}
            show={isModalOpen}
            title="WIKI에 자산 연결"
            description="나중에 언제든지 변경할 수 있습니다."
            triggerElement={null}
          >
            <ModalContent>
              <div className="modal-content__inner">
                <Search
                  placeholder="보드의 이름을 검색해 주세요"
                  wrapperClassName="board-search"
                />

                {/*검색된 보드가 없을 시 메시지 노출*/}
                {/*<div className="info-message">검색된 보드가 없습니다.</div>*/}

                <div className="board-list-wrapper">
                  <h4>선택된 자산</h4>
                  <ul className="board-list">
                    <li className="board-list__item">
                      <div className="board-list__checkbox">
                        <Checkbox checked label={
                          <div className="board-list__details">
                            <div className="board-list__board-name">
                              <Icon icon={Board} iconSize={16} />
                              <span>예시보드 1 (2023)</span>
                            </div>
                            <div className="board-list__board-workspace">예시 워크스페이스</div>
                          </div>
                        }/>
                      </div>
                    </li>
                    <li className="board-list__item">
                      <div className="board-list__checkbox">
                        <Checkbox checked label={
                          <div className="board-list__details">
                            <div className="board-list__board-name">
                              <Icon icon={Board} iconSize={16} />
                              <span>예시보드 1 (2023)</span>
                            </div>
                            <div className="board-list__board-workspace">예시 워크스페이스</div>
                          </div>
                        }/>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="board-list-wrapper">
                  <h4>전체 자산</h4>
                  <ul className="board-list">
                    <li className="board-list__item">
                      <div className="board-list__checkbox">
                        <Checkbox label={
                          <div className="board-list__details">
                            <div className="board-list__board-name">
                              <Icon icon={Board} iconSize={16} />
                              <span>예시보드 1 (2023)</span>
                            </div>
                            <div className="board-list__board-workspace">예시 워크스페이스</div>
                          </div>
                        }/>
                      </div>

                    </li>
                    <li className="board-list__item">
                      <div className="board-list__checkbox">
                        <Checkbox label={
                          <div className="board-list__details">
                            <div className="board-list__board-name">
                              <Icon icon={Board} iconSize={16} />
                              <span>예시보드 1 (2023)</span>
                            </div>
                            <div className="board-list__board-workspace">예시 워크스페이스</div>
                          </div>
                        }/>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ModalContent>
            <ModalFooterButtons
              onPrimaryButtonClick={closeModal}
              onSecondaryButtonClick={closeModal}
              primaryButtonText="완료"
              secondaryButtonText="취소"
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
            <div className="intro-content__img">
              <img src={introImg} alt="Intro Image"/>
            </div>
            <div className="intro-content__message">
              <h3>먼데이의 검색 기능을 강화하세요</h3>
              <p>내 자산을 추가하여 더 높은 성능의 검색을 경험하세요</p>
            </div>
            <Button
              onClick={() => openModal()}
              leftIcon={Board}
              size="large"
            >
              보드 연결하기
            </Button>

          </div>
        </div>
      </div>

    </>
  );
}
