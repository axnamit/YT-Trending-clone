import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/index";

import Item from "../components/items/item";
import Store from "../store/index";

const DashBoard = () => {
  const history = useHistory();
  const [list, setList] = useState([]);
  const { dispatchState } = useContext(Store);

  const apiCall = () => {
    api
      .get("/fetch_saved_vide0")
      .then((data) => {
        setList(data.data.data.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const updateTrendingList = () => {
    api
      .get("/yt_trending")
      .then((response) => {
        if (response) {
          apiCall();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOnSubmit = (value) => {
    console.log({ value });
    dispatchState(value);
    history.push(`/item`);
  };

  const listItems = list.map((value, i) => (
    <div className="col-md-4" key={i} onClick={() => handleOnSubmit(value)}>
      <Item object={value} />
    </div>
  ));

  useEffect(() => {
    apiCall();
    updateTrendingList();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row">{listItems}</div>
      </div>
    </div>
  );
};

export default DashBoard;
