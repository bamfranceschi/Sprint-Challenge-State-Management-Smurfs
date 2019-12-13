import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { addNewSmurf, postNewSmurf } from "../actions";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled.button`
  border-radius: 8px;
  font-size: 1rem;
  padding: 10px;
  margin: 4%;
`;

const StyledInput = styled.input`
  font-size: 0.75rem;
  margin: 2%;
  padding: 10px;
  border-radius: 8px;
`;

const Form = props => {
  const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" });

  const handleChanges = e => {
    setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addNewSmurf(newSmurf);
    props.postNewSmurf(newSmurf);
    setNewSmurf({ name: "", age: "", height: "" });
  };

  return (
    <div>
      <h3>Add a Smurf to the Village</h3>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          placeholder="name"
          name="name"
          value={newSmurf.name}
          onChange={handleChanges}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="age"
          name="age"
          value={newSmurf.age}
          onChange={handleChanges}
        ></StyledInput>
        <StyledInput
          type="text"
          placeholder="height"
          name="height"
          value={newSmurf.height}
          onChange={handleChanges}
        ></StyledInput>
        <StyledButton type="submit">Add Smurf To The Village!</StyledButton>
      </StyledForm>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(mapStateToProps, { addNewSmurf, postNewSmurf })(Form);
