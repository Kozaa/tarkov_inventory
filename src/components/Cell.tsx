import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { MousePosition } from "./Stash";

const EmptyCell = styled.div<{
  hovered: Boolean;
}>`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  background-color: ${({ hovered }) => (hovered ? "yellow" : "darkgrey")};
`;

export const StyledCell = styled(EmptyCell)<{ item: Item; hovered: Boolean }>`
  display: flex;
  position: relative;
  background-color: ${({ hovered }) => (hovered ? "red" : "aqua")};

  :hover {
    cursor: pointer;
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
  mousePosition: MousePosition;
  isDragging: Boolean;
  handlePick?: (id: number) => void;
}

const Cell = ({ item, handlePick, isDragging, mousePosition }: Props) => {
  const cellRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cellRef.current || !isDragging) {
      setIsHovered(false);
      return;
    }

    const cellPosition = cellRef.current.getBoundingClientRect();

    const xAxis =
      mousePosition.x > cellPosition.x && mousePosition.x < cellPosition.x + 50;
    const yAxis =
      mousePosition.y > cellPosition.y && mousePosition.y < cellPosition.y + 50;

    console.log(
      "useEffect cell position",
      mousePosition,
      xAxis,
      yAxis,
      item.id
    );
    setIsHovered(xAxis && yAxis);
  }, [mousePosition]);

  return item.title ? (
    <StyledCell
      ref={cellRef}
      draggable
      onMouseDown={() => (handlePick ? handlePick(item.id) : null)}
      onMouseOver={() => console.log("yo")}
      item={item}
      hovered={isHovered}
    />
  ) : (
    <EmptyCell ref={cellRef} hovered={isHovered} />
  );
};

export default Cell;
