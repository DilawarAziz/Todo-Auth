let INITIAL_STATE = {
  users:[
    {
      name:"ahmed",
      location :"state"
    }
  ]
};
// export default Reducer (state=INITIAL_STATE,action) {
//     switch (action.type) {
//         case "SETDATA":
//             return ({
//                 ...state,
//                 users: action.users
//             })

//         }

//         return state
//     }

export default function Reducer(state = INITIAL_STATE, { type, payload }) {
  // console.log(state);
  switch (type) {
    case "SETDATA":
      // console.log(payload);
      return {
        ...state,
        name: [...state.users,payload],
      };
    default:
      return state;
  }
}
