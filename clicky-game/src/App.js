import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import RuthCard from "./components/RuthCard";
import DebbieCard from "./components/DebbieCard";
import CherryCard from "./components/CherryCard";
import CarmenCard from "./components/CarmenCard";
import SamCard from "./components/SamCard";
import RhondaCard from "./components/RhondaCard";
import SheilaCard from "./components/SheilaCard"; 
import TammeCard from "./components/TammeCard"; 

function App() {
  return (
    <Wrapper>
      <Title>Glow Game</Title>
      <RuthCard />
      <DebbieCard />
      <CherryCard />
      <CarmenCard />
      <SamCard />
      <RhondaCard />
      <SheilaCard />
      <TammeCard />
     
    </Wrapper>
  );
}

export default App;