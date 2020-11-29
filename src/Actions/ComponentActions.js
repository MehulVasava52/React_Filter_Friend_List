import Actions from "./Actions";
import { fetchFriends } from "../Api/Api";
const setFilter = (filterType, filterValue) => {
  return {
    type: Actions.SET_FILTER,
    filterType,
    filterValue
  };
};

const removeFilter = () => ({
  type: Actions.REMOVE_FILTER
});

// Using redux thunk
const setData = () => (dispatch) => {
  fetchFriends().then((resp) => {
    dispatch({
      type: Actions.SET_DATA,
      value: resp.friendList
    });
  });
};

export default { setFilter, removeFilter, setData };
