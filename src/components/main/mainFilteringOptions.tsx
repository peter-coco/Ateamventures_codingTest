import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { findConfigFile } from "typescript";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";

const MainFilteringOptionsWrap = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const MainFilterOptionsSubsCription = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const MainFilterOptions = styled.div`
  border: 1px solid #939fa5;
  padding: 10px 20px;
  box-sizing: border-box;
  /* background-color: #2196f3; */
  /* border: 1px solid #939fa5; */
  border-radius: 4px;
  display: flex;

  position: relative;

  &:hover {
    border: 1px solid #2196f3;
  }
`;
const MainFilterTitle = styled.div`
  font-size: 12px;
`;
const MainFilterArrow = styled.div`
  border-top: 6px solid #939fa5;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
`;

const MainFilteringSubOptions = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  left: 0px;
  gap: 4px;

  height: 164px;
  width: 130px;
  border: 1px solid #939fa5;
  padding: 17px 12px;
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 1;
  background-color: #ffffff;
`;
const MainFilteringSubOptionsLists = styled.div`
  display: flex;
  gap: 10px;
`;
const MainFilteringSubOptionsListsCheckBox = styled.input`
  border: 2px solid #939fa5;
  box-sizing: border-box;
  border-radius: 2px;
`;
const MainFilteringSubOptionsListsTitle = styled.div`
  //styleName: 14pt - 500;
  font-family: Noto Sans KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: left;
`;

const MainFilterAllReset = styled.div`
  display: flex;

  cursor: pointer;
`;
const MainFilterAllResetIcon = styled.div``;
const MainFilterAllResetTitle = styled.div`
  color: #2196f3;
  //styleName: 12pt - 400 (설명용);
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  /* text-align: left; */
`;

const MainFilteringOptions = () => {
  const dispatch = useDispatch();

  const [filteringMaterialLists, filteringMethodLists] = useSelector<
    GlobalState,
    [string[], string[]]
  >((state) => [state.filteringMaterialLists, state.filteringMethodLists]);

  const [toggleMethodSubOptions, setToggleMethodSubOptions] = useState(false);
  const [toggleMaterialSubOptions, setToggleMaterialSubOptions] =
    useState(false);

  const toggleMethodSubOptionsFunc = () => {
    setToggleMethodSubOptions((pre) => !pre);
  };

  const toggleMaterialSubOptionsFunc = () => {
    setToggleMaterialSubOptions((pre) => !pre);
  };

  const addMethodSubsOptions = (e: any) => {
    if (e.target.checked) {
      dispatch({
        type: Actions.ADD_FILTERING_METHOD_LIST,
        payload: {
          checkedList: e.target.name ? String(e.target.name) : "",
        },
      });
    } else {
      dispatch({
        type: Actions.SUB_FILTERING_METHOD_LIST,
        payload: {
          checkedList: e.target.name ? String(e.target.name) : "",
        },
      });
    }
    // console.log(typeof e.target.name, filteringMethodLists);
    // console.log(e.target.checked);
  };

  const addMaterialSubsOptions = (e: any) => {
    if (e.target.checked) {
      dispatch({
        type: Actions.ADD_FILTERING_MATERIAL_LIST,
        payload: {
          checkedList: e.target.name ? String(e.target.name) : "",
        },
      });
    } else {
      dispatch({
        type: Actions.SUB_FILTERING_MATERIAL_LIST,
        payload: {
          checkedList: e.target.name ? String(e.target.name) : "",
        },
      });
    }
  };

  const resetFilteringOptions = () => {
    dispatch({
      type: Actions.RESET_FILTERING_OPTIONS,
    });
  };

  return (
    <MainFilteringOptionsWrap>
      <MainFilterOptions>
        <MainFilterOptionsSubsCription onClick={toggleMethodSubOptionsFunc}>
          <MainFilterTitle>
            가공방식
            {filteringMethodLists.length
              ? `(${filteringMethodLists.length})`
              : ""}
          </MainFilterTitle>
          <MainFilterArrow />
        </MainFilterOptionsSubsCription>
        <MainFilteringSubOptions
          style={{ display: toggleMethodSubOptions ? "flex" : "none" }}
        >
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="밀링"
              onClick={addMethodSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              밀링
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="선반"
              onClick={addMethodSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              선반
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
        </MainFilteringSubOptions>
      </MainFilterOptions>
      <MainFilterOptions
        style={{
          backgroundColor: toggleMaterialSubOptions ? "#1565C0" : "",
        }}
      >
        <MainFilterOptionsSubsCription onClick={toggleMaterialSubOptionsFunc}>
          <MainFilterTitle
            style={{
              color: toggleMaterialSubOptions ? "#ffffff" : "",
            }}
          >
            재료
            {filteringMaterialLists.length
              ? `(${filteringMaterialLists.length})`
              : ""}
          </MainFilterTitle>
          <MainFilterArrow
            style={{
              borderTop: toggleMaterialSubOptions ? "6px solid #ffffff" : "",
            }}
          />
        </MainFilterOptionsSubsCription>
        <MainFilteringSubOptions
          style={{ display: toggleMaterialSubOptions ? "flex" : "none" }}
        >
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="알루미늄"
              onClick={addMaterialSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              알루미늄
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="탄소강"
              onClick={addMaterialSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              탄소강
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="구리"
              onClick={addMaterialSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              구리
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="합금강"
              onClick={addMaterialSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              합금강
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
          <MainFilteringSubOptionsLists>
            <MainFilteringSubOptionsListsCheckBox
              type="checkbox"
              name="강철"
              onClick={addMaterialSubsOptions}
            />
            <MainFilteringSubOptionsListsTitle>
              강철
            </MainFilteringSubOptionsListsTitle>
          </MainFilteringSubOptionsLists>
        </MainFilteringSubOptions>
      </MainFilterOptions>
      {filteringMaterialLists.length + filteringMethodLists.length ? (
        <MainFilterAllReset onClick={resetFilteringOptions}>
          <MainFilterAllResetIcon />
          <MainFilterAllResetTitle>필터링 리셋</MainFilterAllResetTitle>
        </MainFilterAllReset>
      ) : (
        ""
      )}
    </MainFilteringOptionsWrap>
  );
};

export default MainFilteringOptions;
