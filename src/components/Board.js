import React, { useState } from "react";
import styled from "styled-components";

const BoardContainer = styled.div`
  max-width: 1200px;
  padding: 0 15px 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-items: stretch;
  flex-wrap: wrap;
  height: 100%;
  @media (max-width: 1100px) {
    justify-content: space-around;
  }
`;

const CardWrapper = styled.div`
  border: 1px solid #333;
  min-width: 33.3%;
  min-height: max-content;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  padding-right: 50px;
  margin-bottom: 50px;
  @media (max-width: 960px) {
    width: 50%;
    padding-right: 0px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  &:last-child {
    @media (max-width: 960px) {
      padding-right: 50px;
    }
    @media (max-width: 740px) {
      width: 100%;
    }
  }
`;

const CardHeader = styled.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(185, 185, 185);
  height: 50px;
  color: #333;
`;

const CardText = styled.h4`
  color: #333;
  font-size: 20px;
  @media (max-width: 500px) {
    font-size: 17px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 5px;
  width: 180px;
  height: 180px;
  color: #333;
  margin: 0 auto 20px auto;
  cursor: grab;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
  }
  &::last-child {
    margin-bottom: -20px;
    @media (max-width: 370px) {
      margin-left: 0 !important;
      width: 100% !important;
    }
  }
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    font-size: 15px;
  }
`;

const ItemDate = styled.span`
  position: absolute;
  bottom: 5px;
  left: 5px;
  font-size: 12px;
`;

const ItemFinish = styled.span`
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 12px;
`;

function getDate() {
  let d = new Date();
  let date = d.getDate();
  let month = d.getMonth() + 1;
  let year = d.getFullYear();
  return `${date}.${month}.${year}`;
}

const Board = (props) => {
  const [boards, setBoards] = useState(props.boardData);
  const [currentItem, setCurrentItem] = useState({});
  const [currentBoard, setCurrentBoard] = useState({});

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragEndHandler(e) {
    e.target.style.boxShadow = "none";
  }
  function dragOverHandler(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.style.boxShadow = "0 2px 3px gray";
  }
  function dragStartHandler(e, item, board) {
    setCurrentBoard(board);
    setCurrentItem(item);
  }
  function dropHandler(e, card, board) {
    e.preventDefault();
    const currentIndex = currentBoard.todos.indexOf(currentItem);
    currentBoard.todos.splice(currentIndex, 1);
    const dropIndex = board.todos.indexOf(card);
    board.todos.splice(dropIndex + 1, 0, currentItem);
    setBoards(
      boards.map((b) => {
        if (b.id === board.id) {
          return board;
        }
        if (b.id === currentBoard.id) {
          return currentBoard;
        }
        return b;
      })
    );
  }
  let marginL = 30;

  return (
    <BoardContainer>
      {boards.map((board) => {
        return (
          <CardWrapper key={board.id}>
            <CardHeader>
              <CardText> {board.header} </CardText>
            </CardHeader>

            {board.todos.map((item) => {
              return (
                <ItemWrapper
                  style={{
                    backgroundColor: `${item.bg}`,
                    marginLeft:
                      board.header === "Done" ? `${(marginL += 20)}px` : "",
                    marginBottom: board.header === "Done" ? "-50px" : "",
                  }}
                  draggabe={true}
                  onDragOver={(e) => dragOverHandler(e)}
                  onDragLeave={(e) => dragLeaveHandler(e)}
                  onDragStart={(e) => dragStartHandler(e, item, board)}
                  onDragEnd={(e) => dragEndHandler(e)}
                  onDrop={(e) => dropHandler(e, item, board)}
                  key={item.id}
                >
                  {item.text}
                  <ItemDate>
                    <span style={{ display: "block", fontSize: "10px" }}>
                      Start
                    </span>
                    {item.date}
                  </ItemDate>
                  {board.header === "Done" && (
                    <ItemFinish>
                      <span style={{ display: "block", fontSize: "10px" }}>
                        Finish
                      </span>
                      {getDate()}
                    </ItemFinish>
                  )}
                </ItemWrapper>
              );
            })}
          </CardWrapper>
        );
      })}
    </BoardContainer>
  );
};

export default Board;
