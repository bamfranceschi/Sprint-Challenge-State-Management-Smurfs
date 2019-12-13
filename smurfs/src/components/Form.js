import React, { useState } from "react";
import { connect } from "react-redux";

import { addNewSmurf } from "../actions";

//post action goes here

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChangesName = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleChangesAge = e => {
    setNewSmurf({ ...newSmurf, [e.target.age]: e.target.value });
  };

  const handleChangesHeight = e => {
    setNewSmurf({ ...newSmurf, [e.target.height]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="smurf_name"
          value={newSmurf.name}
          onChange={handleChangesName}
        ></input>
        <input
          type="text"
          placeholder="age"
          name="smurf_age"
          value={newSmurf.age}
          onChange={handleChangesAge}
        ></input>
        <input
          type="text"
          placeholder="height"
          name="smurf_height"
          value={newSmurf.height}
          onChange={handleChangesHeight}
        ></input>
        <button type="submit">Add Smurf To The Village!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting,
    error: state.error
  };
};

export default connect(mapStateToProps, { addNewSmurf })(Form);
//post action comes in here
