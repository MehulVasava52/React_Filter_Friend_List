import Actions from "../Actions/Actions";

const initState = {
  friendList: [],
  filteredList: null,
  filter: ""
};

const mainReducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_DATA:
      return {
        ...state,
        friendList: action.value
      };
    case Actions.SET_FILTER:
      if (action.filterValue) {
        let friendList = state.friendList.filter((friend) => {
          if (action.filterType === "age") {
            action.filterValue = Number(action.filterValue);
          }
          return friend[action.filterType] === action.filterValue;
        });

        return {
          ...state,
          filteredList: friendList,
          filter: action.filterValue
        };
      } else {
        return state;
      }
    case Actions.REMOVE_FILTER:
      return {
        ...state,
        filteredList: null,
        filter: ""
      };
    default:
      return state;
  }
};

export default mainReducer;
