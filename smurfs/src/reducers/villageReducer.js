import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  POST_SMURF_START,
  ADD_SMURF,
  POST_SMURF_SUCCESS,
  POST_SMURF_FAILURE
} from "../actions/index.js";

const initialState = {
  smurfs: null,
  //   [
  //     {
  //       name: null,
  //       age: null,
  //       height: null,
  //       id: null
  //     }
  //   ],

  isFetching: false,
  isPosting: false,
  error: ""
};

const villageReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        isFetching: true,
        isPosting: false
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        isPosting: false,
        error: ""
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        isPosting: false,
        error: action.payload
      };

    case ADD_SMURF:
      const newSmurf = {
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        id: Date.now()
      };

      return {
        ...state,
        smurfs: [...state.smurfs, newSmurf]
      };
    case POST_SMURF_START:
      return {
        ...state,
        isFetching: false,
        isPosting: true,
        error: ""
      };

    case POST_SMURF_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isPosting: false,
        error: ""
      };
    case POST_SMURF_FAILURE:
      return {
        ...state,
        isFetching: false,
        isPosting: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default villageReducer;

// for adding a smurf, need this info: [
//     {
//         name: action.payload.name,
//         age: action.payload.age,
//         height: action.payload.height
//       }
//   ]
