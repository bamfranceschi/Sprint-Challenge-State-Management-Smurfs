import React, { useState } from "react";
import { connect } from "react-redux";

import { addNewSmurf, postNewSmurf } from "../actions";

//post action goes here

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  //   const handleChangesAge = e => {
  //     setNewSmurf({ ...newSmurf, [e.target.age]: e.target.value });
  //   };

  //   const handleChangesHeight = e => {
  //     setNewSmurf({ ...newSmurf, [e.target.height]: e.target.value });
  //   };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    debugger;
    props.postNewSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={newSmurf.name}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          placeholder="age"
          name="age"
          value={newSmurf.age}
          onChange={handleChanges}
        ></input>
        <input
          type="text"
          placeholder="height"
          name="height"
          value={newSmurf.height}
          onChange={handleChanges}
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

export default connect(mapStateToProps, { addNewSmurf, postNewSmurf })(Form);
//post action comes in here
