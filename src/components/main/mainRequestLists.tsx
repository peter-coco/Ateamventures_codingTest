import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Actions from "../../redux/actions";
import styled from "styled-components";
import axios from "axios";

import MainRequestList from "./mainRequestList";
import { GlobalState, requestListContent } from "../../redux/reducer";

const MainRequestListsWrap = styled.div`
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

const MainRequestLists = () => {
  const dispatch = useDispatch();
  const [currentRequestLists] = useSelector<
    GlobalState,
    [requestListContent[]]
  >((state) => [state.currentRequestLists]);

  useEffect(() => {
    fetch("http://localhost:4000/requests")
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        dispatch({
          type: Actions.SET_CURRENT_REQUEST_LISTS,
          payload: { currentRequestLists: e ? e : [] },
        });
        console.log(currentRequestLists);
      });
  }, []);

  return (
    <MainRequestListsWrap>
      {currentRequestLists.map((lists) => (
        <MainRequestList key={lists.id} lists={lists} />
      ))}
    </MainRequestListsWrap>
  );
};
export default MainRequestLists;
