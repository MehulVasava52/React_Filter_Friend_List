import React, { useState } from "react";
import filterOptions from "../constants/FilterOptions";
import "../css/styles.css";
import { connect } from "react-redux";
import ActionCreator from "../Actions/ComponentActions";

const createFilterOptions = (filter, friendList) => {
  let set = new Set();

  friendList.forEach((friendDetail) => {
    if (friendDetail[filter]) {
      set.add(friendDetail[filter]);
    }
  });
  return [...set];
};

const FilterBar = (props) => {
  const [parentFilter, setParentFilter] = useState(filterOptions.NONE);
  return (
    <div className="filterBar">
      <label> Filter : </label>
      <select
        onChange={(e) => {
          setParentFilter(e.target.value);
          props.onRemoveFilter();
        }}
        value={parentFilter}
      >
        <option value={filterOptions.NONE}> None</option>
        <option value={filterOptions.CATEGORY}>Category</option>
        <option value={filterOptions.AGE}>Age</option>
        <option value={filterOptions.JOB}>Occupation</option>
      </select>
      {parentFilter ? (
        <select
          onChange={(e) => props.onSetFilter(parentFilter, e.target.value)}
          value={props.filter}
        >
          <option value="">Select Option</option>
          {createFilterOptions(parentFilter, props.friendList).map(
            (value, index) => {
              return (
                <option value={value} key={index}>
                  {value}
                </option>
              );
            }
          )}
        </select>
      ) : (
        ""
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  friendList: state.friendList,
  filter: state.filter
});

const mapDispatchToProps = {
  onSetFilter: ActionCreator.setFilter,
  onRemoveFilter: ActionCreator.removeFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
