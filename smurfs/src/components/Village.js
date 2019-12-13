import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import styled from "styled-components";
import Form from "./Form";

import { getSmurfs } from "../actions";

const VillageCont = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: space-around;
`;

const VillageButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  padding: 10px;
  margin: 4%;
`;

const Village = props => {
  return (
    <div>
      {!props.smurfs && !props.isFetching && (
        <>
          <h2>Smurfs are good at hiding...</h2>
          <VillageButton onClick={props.getSmurfs}>
            Show Me The Smurfs
          </VillageButton>
        </>
      )}

      {props.smurfs && !props.isFetching && (
        <>
          <h2>You found them!</h2>
          <VillageCont>
            {props.smurfs.map(smurf => (
              <Smurf
                key={smurf.id}
                name={smurf.name}
                age={smurf.age}
                height={smurf.height}
              />
            ))}
          </VillageCont>
          <Form />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getSmurfs })(Village);
