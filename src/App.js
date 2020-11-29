import React, { useEffect } from "react";
import "./css/styles.css";
import Tile from "./components/Tile";
import FilterBar from "./components/FilterBar";
import { connect } from "react-redux";
import ActionCreator from "./Actions/ComponentActions";

const App = (props) => {
  useEffect(() => {
    props.setData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let list = props.filteredList ? props.filteredList : props.list;
  return (
    <div className="appContainer">
      <FilterBar />
      <div className="tilesContainer">
        {list.map((friend, index) => (
          <Tile friend={friend} key={index} className="tile" />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: state.friendList,
  filteredList: state.filteredList
});
export default connect(mapStateToProps, { setData: ActionCreator.setData })(
  App
);
