import React from "react";
import styled from "styled-components";

const SmurfCard = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  width: 200px;
  margin: 2%;
`;

const Smurf = props => {
  return (
    <SmurfCard>
      <p>Name: {props.name}</p>
      <p>Age: {props.age} years</p>
      <p>Height: {props.height}</p>
    </SmurfCard>
  );
};

export default Smurf;