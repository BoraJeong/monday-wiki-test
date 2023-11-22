import React, { useEffect, useState, useMemo } from 'react';
import {Button, Modal, ModalContent, ModalFooterButtons, Search, Checkbox, Icon, IconButton, DialogContentContainer, RadioButton, Avatar, AvatarGroup } from "monday-ui-react-core";
import userThumb from "../resources/images/user-thumb.png";
import person1 from "../resources/images/user-thumb2.png";
import person2 from "../resources/images/user-thumb3.png";
import person3 from "../resources/images/user-thumb4.png";
import {Board, Forum, Filter, Close, Calendar, AddSmall} from "monday-ui-react-core/icons";

export const List = () => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionClick = (index) => {
    const selectedIndex = selectedOptions.indexOf(index);

    if (selectedIndex === -1) {
      // 선택되지 않은 경우 선택 목록에 추가
      setSelectedOptions([...selectedOptions, index]);
    } else {
      // 이미 선택된 경우 선택 목록에서 제거
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions.splice(selectedIndex, 1);
      setSelectedOptions(newSelectedOptions);
    }
  };

  const options = [
    { name: '이형민', src: person1 },
    { name: '정보라', src: person2 },
    { name: '최정연', src: person3 },
    // Add more options as needed
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isFilterDialogOpen, setIsFilterDialogOpen] = useState(false);

  const [isSelectManagerDialogOpen, setIsSelectManagerDialogOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const toggleFilterDialog = () => {
    setIsFilterDialogOpen(!isFilterDialogOpen);
  };
  const toggleSelectManagerDialog = () => {
    setIsSelectManagerDialogOpen(!isSelectManagerDialogOpen);
  };

  return (
    <>
      <div className="content">
        <div className="content-header">
          <Button
            onClick={() => openModal()}
            leftIcon={Board}
          >
            1개의 연결된 보드
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



        <div className="content-search">
          <div className="content-search__input-side">
            <div className="content-search__icon"></div>
            <div className="content-search__input">
              <input type="search" placeholder="찾고 싶은 자산과 관련된 단어를 입력해주세요"/>
            </div>
          </div>
          <div className="content-search__filter-side">
            <div className="content-search__filter">
                <IconButton
                  id="filterBtn"
                  className="content-search__filter-btn"
                  ariaLabel="검색 필터"
                  icon={Filter}
                  onClick={toggleFilterDialog}
                />
                <DialogContentContainer
                  id="filterDialog"
                  className={`content-search__filter-dialog ${isFilterDialogOpen ? 'visible' : ''}`}
                  type="popover"
                >
                  <div className="filter-dialog__body">
                    <div className="filter-list">
                      <h5 className="filter-list__title">날짜</h5>
                      <div className="filter-list__item">
                        <Icon icon={Calendar} iconSize={16} />
                        <span>기간 선택</span>
                      </div>
                    </div>

                    <div className="filter-list">
                      <h5 className="filter-list__title">담당자</h5>
                      <div className="filter-list__item" onClick={toggleSelectManagerDialog}>

                        {selectedOptions.length === 0 ? (
                          <div className="item__inner">
                            <Icon icon={AddSmall} iconSize={16} />
                            <span>담당자 선택</span>
                          </div>
                        ) : (
                          <AvatarGroup max={2} size="small" className="avatar-group">
                            {selectedOptions.map((selectedIndex, index) => (
                              <Avatar key={index} size={Avatar.sizes.SMALL} src={options[selectedIndex].src} type={Avatar.types.IMG} ariaLabel={options[selectedIndex].name}/>
                            ))}
                          </AvatarGroup>
                        )}
                      </div>

                      <DialogContentContainer
                        id="selectManagerDialog"
                        className={`select-manager-dialog ${isSelectManagerDialogOpen ? 'visible' : ''}`}
                        type="popover"
                      >
                        <Search placeholder="이름을 검색하세요."/>
                        <div className="combobox-list">
                          {options.map((option, index) => (
                            <div
                              key={index}
                              className={`combobox-list__option ${selectedOptions.includes(index) ? 'selected' : ''}`}
                              onClick={() => handleOptionClick(index)}
                            >
                              <Avatar size={Avatar.sizes.SMALL} src={option.src} type={Avatar.types.IMG} ariaLabel={option.name}/>
                              <span className="option__name">{option.name}</span>
                            </div>
                          ))}
                        </div>
                      </DialogContentContainer>
                    </div>
                  </div>

                  <div className="filter-dialog__footer">
                    <Button kind="tertiary">취소</Button>
                    <Button >완료</Button>
                  </div>

                </DialogContentContainer>
            </div>

            <div className="content-search__filter-tags">
              <div className="filter-tags__item">
                <span>2023.01.11 ~ 2023.02.11</span>
                <IconButton className="item__close-btn" icon={Close} size="xs"/>
              </div>

              <div className="filter-tags__item">
                <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG}/>
                <span>이형민</span>
                <IconButton className="item__close-btn" icon={Close} size="xs"/>
              </div>

            </div>
          </div>
        </div>

        <div className="content-body">

          {/* 검색어 입력 전 메시지 노출 */}
          {/*<div className="intro-content">
            <div className="intro-content__message">
              <h3>찾고 싶은 자산을 검색하세요</h3>
              <p>찾고 싶은 자산과 관련된 단어, 담당자, 생성일을 지정해 검색을 진행하세요</p>
            </div>
          </div>*/}

          <div className="left-menu">
            <div className="left-menu__list left-menu__list--align">
              <h5>정렬 기준</h5>
              <ul>
                <li>
                  <RadioButton text="관련 순" name="list-align" labelClassName="radio-label" defaultChecked />
                </li>
                <li>
                  <RadioButton text="최신 순" name="list-align" labelClassName="radio-label"/>
                </li>
                <li>
                  <RadioButton text="오래된 순" name="list-align" labelClassName="radio-label"/>
                </li>
              </ul>
            </div>

            <div className="left-menu__list left-menu__list--board">
              <h5>관련 보드</h5>
              <ul>
                <li>
                  <Icon icon={Board} iconSize={16} />
                  <span>2023 기술지원</span>
                </li>
                <li>
                  <Icon icon={Board} iconSize={16} />
                  <span>기능 업데이트 (2023)</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="right-content">

            <div className="result-view">
              <div className="result-view__header">
                <div className="header-block">
                  <div className="header-block__item"><span>아이템 명</span></div>
                  <div className="header-block__item"><span>보드 명</span></div>
                  <div className="header-block__item"><span>담당자</span></div>
                  <div className="header-block__item"><span>업데이트 일</span></div>
                </div>
              </div>
              <div className="result-view__body">
                <div className="search-item">
                  <div className="search-item__header">
                    <div className="header-block">
                      <div className="header-block__item"><span>[문의] 카카오모빌리티 구글맵 textSearch API 문의 건</span></div>
                      <div className="header-block__item"><span>기술지원 (2023)</span></div>
                      <div className="header-block__item">
                        <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} ariaLabel={"이형민"}/>
                      </div>
                      <div className="header-block__item"><span>2022년 11월 1일</span></div>
                    </div>
                  </div>

                  <div className="search-item__body">
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                      <div className="item-card__comment">
                        <Icon icon={Forum} size="16"/>
                        <div>관련된 <span>N</span>개의 답글</div>
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                    </div>
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                    </div>
                  </div>
                </div>

                <div className="search-item">
                  <div className="search-item__header">
                    <div className="header-block">
                      <div className="header-block__item"><span>[문의] 카카오모빌리티 구글맵 textSearch API 문의 건</span></div>
                      <div className="header-block__item"><span>기술지원 (2023)</span></div>
                      <div className="header-block__item">
                        <Avatar size={Avatar.sizes.SMALL} src={person1} type={Avatar.types.IMG} ariaLabel={"이형민"}/>
                      </div>
                      <div className="header-block__item"><span>2022년 11월 1일</span></div>
                    </div>
                  </div>

                  <div className="search-item__body">
                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                      <div className="item-card__comment">
                        <Icon icon={Forum} size="16"/>
                        <div>관련된 <span>N</span>개의 답글</div>
                      </div>
                    </div>

                    <div className="item-card">
                      <div className="item-card__main">
                        [문의] 카카오모빌리티 구글맵 textSearch API 문의
                        건안녕하세요.카카오모빌리티 공통플랫폼개발팀
                        김기연입니다.저희가 이용중인 구글맵 API 중
                        textSearch API 관련하여 문의가 있어 메일 드립...
                      </div>
                      <div className="item-card__comment">
                        <Icon icon={Forum} size="16"/>
                        <div>관련된 <span>N</span>개의 답글</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>
      </div>

    </>
  );
}
