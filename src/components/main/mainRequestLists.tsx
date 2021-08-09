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
  const [
    currentRequestLists,
    requestListOnConsultingToggle,
    filteringMaterialLists,
    filteringMethodLists,
  ] = useSelector<
    GlobalState,
    [requestListContent[], boolean, string[], string[]]
  >((state) => [
    state.currentRequestLists,
    state.requestListOnConsultingToggle,
    state.filteringMaterialLists,
    state.filteringMethodLists,
  ]);

  useEffect(() => {
    fetch("http://localhost:4000/requests")
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        dispatch({
          type: Actions.SET_CURRENT_REQUEST_LISTS,
          payload: { currentRequestLists: e ? e : [] },
        });
        // console.log(currentRequestLists);
      });
  }, []);

  // console.log(filteringMethodLists);

  return (
    <MainRequestListsWrap>
      {currentRequestLists
        .filter((lists) =>
          filteringMethodLists.length
            ? lists.method.some((e) => filteringMethodLists.includes(e))
            : lists
        )
        .filter((lists) =>
          filteringMaterialLists.length
            ? lists.material.some((e) => filteringMaterialLists.includes(e))
            : lists
        )
        .map((lists) =>
          !requestListOnConsultingToggle ? (
            <MainRequestList key={lists.id} lists={lists} />
          ) : lists.status == "상담중" ? (
            <MainRequestList key={lists.id} lists={lists} />
          ) : (
            ""
          )
        )}
    </MainRequestListsWrap>
  );
};
export default MainRequestLists;
