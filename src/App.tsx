import React from "react";
import "./App.css";
import styled from "styled-components";
import { Stash } from "./components/Stash";

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: rgb(40, 35, 35);
`;

const Section = styled.section`
  height: 100%;
  width: 100%;
`;

const App = () => {
  return (
    <Wrapper>
      <Section>Loadout</Section>
      <Section>Inventory</Section>
      <Section>
        <Stash></Stash>
      </Section>
    </Wrapper>
  );
};

export default App;
