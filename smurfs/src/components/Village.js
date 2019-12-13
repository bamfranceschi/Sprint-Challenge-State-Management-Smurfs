import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import styled from "styled-components";

import { getSmurfs } from "../actions";

const VillageCont = styled.div`
  display: flex;
  flexwrap: wrap;
  justify-content: space-around;
`;

const Village = props => {
  return (
    <div>
      {/* {!props.smurfs && !props.isFetching && <>
        
        </>} */}
      <h2>Smurfs are good at hiding...</h2>
      <button onClick={props.getSmurfs}>Show Me The Smurfs</button>

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
