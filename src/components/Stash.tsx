import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import Cell, { Item, StyledCell } from "./Cell";

const StyledStash = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  width: 150px;
  background-color: aliceblue;
`;

interface DraggedCellProps {
  item: Item;
  top: number;
  left: number;
}

const DraggedCell = styled(StyledCell).attrs(
  ({ top, left }: DraggedCellProps) => ({
    style: {
      top,
      left,
    },
  })
)<DraggedCellProps>`
  transform: translateX(-50%) translateY(-50%);
  position: fixed;
  background-color: red;
`;

export type MousePosition = {
  y: number;
  x: number;
};

const initialItems = [
  { id: 1, title: "Rubles" },
  { id: 2, title: "Rubles" },
  { id: 3, title: "Rubles" },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Stash = () => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [draggedItem, setDraggedItem] = useState<Item>({ id: 0 });
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    y: 0,
    x: 0,
  });
  // const memoizedValue = useMemo(() => {
  //
  // }, []);

  const handlePick = (id: number) => {
    console.log(id);
    const pickedItem = items.find((item) => item.id === id);

    setDraggedItem(pickedItem!);
  };

  const handleDrop = (e: any) => {
    console.log(e);
    setDraggedItem({ id: 0 });
  };

  const getMousePosition = (e: any) => {
    setMousePosition({
      y: e.clientY,
      x: e.clientX,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", getMousePosition);
    window.addEventListener("mouseup", handleDrop);

    return () => {
      window.removeEventListener("mousemove", getMousePosition);
      window.removeEventListener("mouseup", handleDrop);
    };
  }, []);

  return (
    <div>
      <StyledStash>
        {items.map((item, idx) => (
          <Cell
            item={item}
            key={idx}
            handlePick={handlePick}
            mousePosition={mousePosition}
            isDragging={!!draggedItem.id}
          />
        ))}
      </StyledStash>

      {draggedItem.id > 0 ? (
        <DraggedCell
          item={draggedItem}
          top={mousePosition.y}
          left={mousePosition.x}
          hovered={false}
        />
      ) : null}
    </div>
  );
};
