import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const StyledStash = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  width: 150px;
  background-color: aliceblue;
`;

const items = [
  { id: 1, title: "Rubles" },
  { id: 2, title: "Rubles" },
  { id: 3, title: "Rubles" },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export const Stash = () => {
  return (
    <StyledStash>
      {items.map((item, idx) => (
        <Cell item={item} key={idx} />
      ))}
    </StyledStash>
  );
};
