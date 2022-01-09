import React from "react";
import styled from "styled-components";

const EmptyCell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: darkgrey;
`;

const StyledCell = styled(EmptyCell)<Props>`
  display: flex;
  position: relative;
  background-color: aqua;
  
  :hover {
    cursor: pointer;
    background-color: aliceblue;
  }

  :after {
    position: absolute;
    top: 0;
    right: 0;
    content: "${({ item }) => item.title}";
  }
`;

export interface Item {
  title?: string;
}

interface Props {
  item: Item;
}

const Cell = ({ item }: Props) => {
  return item?.title ? <StyledCell item={item}/> : <EmptyCell />;
};

export default Cell;
