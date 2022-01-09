import React from "react";
import styled from "styled-components";

const EmptyCell = styled.div`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: darkgrey;
`;

export const StyledCell = styled(EmptyCell)<Props>`
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
  id: number;
  title?: string;
}

interface Props {
  item: Item;
  handlePick?: (id: number) => void;

}

const Cell = ({ item, handlePick }: Props) => {
  return item.id ? (
    <StyledCell
      onMouseDown={() => (handlePick ? handlePick(item.id) : null)}
      onMouseOver={() => console.log('mouseOver', item.id)}
      item={item}
    />
  ) : (
    <EmptyCell />
  );
};

export default Cell;
