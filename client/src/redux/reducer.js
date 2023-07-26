import { GET_DETAIL, GET_DOGS, GET_NAME_DOGS, GET_TEMPERAMENTS_DOGS, POST_DOG } from './actions';

const initialState = {
  temperaments: [],
  allDogs: [],
  nameDogs: [],
  detail: [],
};



export default function rootReducer(state = initialState, action) {
  console.log("Reducer called");
  
  switch (action.type) {
    case GET_DOGS:
      if (action.payload) {
        return {
          ...state,
          allDogs: action.payload,
        };
      } else {
        return {
          ...state,
          allDogs: [],
        };
      }
      
    case GET_NAME_DOGS:
        console.log("Dogs data in reducer:", action.payload);
        return {
          ...state,
          nameDogs: action.payload,
          loading: false,
          error: null,
        };  
    case GET_TEMPERAMENTS_DOGS:
      if (action.payload) {
        return {
          ...state,
          temperaments: action.payload,
        };
      } else {
        return {
          ...state,
          temperaments: [],
        };
      }
      case GET_DETAIL:
         {
          console.log("Action payload:", action.payload);
          return {
            ...state,
            detail: action.payload,
          };
        }
    case POST_DOG:
      return {
        ...state,
        allDogs: [...state.allDogs, action.payload],
      };
    default:
      return state;
  }
}



