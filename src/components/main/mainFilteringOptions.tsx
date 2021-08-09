import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { findConfigFile } from "typescript";
import Actions from "../../redux/actions";
import { GlobalState } from "../../redux/reducer";

const MainFilteringOptionsWrap = styled.div`
  display: flex;
  gap: 8px;
`;

const MainFilterOptionsSubsCription = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
`;
const MainFilterOptions = styled.div`
  border: 1px solid #939fa5;
  padding: 10px 20px;
  box-sizing: border-box;
  /* border: 1px solid #939fa5; */
  border-radius: 4px;
  display: flex;
  cursor: pointer;
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

const MainFilteringOptions = () => {
  const dispatch = useDispatch();

  const [filteringMaterialLists] = useSelector<GlobalState, [string[]]>(
    (state) => [state.filteringMaterialLists]
  );

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
    // console.log(typeof e.target.name, filteringMethodLists);
    // console.log(e.target.checked);
  };

  // useEffect(() => {
  //   console.log(filteringMaterialLists);
  // }, [filteringMaterialLists]);

  return (
    <MainFilteringOptionsWrap>
      <MainFilterOptions>
        <MainFilterOptionsSubsCription onClick={toggleMethodSubOptionsFunc}>
          <MainFilterTitle>가공방식</MainFilterTitle>
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

      <MainFilterOptions>
        <MainFilterOptionsSubsCription onClick={toggleMaterialSubOptionsFunc}>
          <MainFilterTitle>재료</MainFilterTitle>
          <MainFilterArrow />
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
    </MainFilteringOptionsWrap>
  );
};

export default MainFilteringOptions;
