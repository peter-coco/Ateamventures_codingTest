import Actions from "./actions";

export interface requestListContent {
  id: string;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: string[];
  material: string[];
  status: string;
}

export interface GlobalState {
  currentRequestLists: requestListContent[];
  requestListOnConsultingToggle: boolean;
  filteringMethodLists: string[];
  filteringMaterialLists: string[];
}

const initialState: GlobalState = {
  currentRequestLists: [],
  requestListOnConsultingToggle: false,
  filteringMethodLists: [],
  filteringMaterialLists: [],
};

function reducer(
  state: GlobalState = initialState,
  action: { type: Actions; payload: any }
): GlobalState {
  // return type !!
  switch (action.type) {
    case Actions.SET_CURRENT_REQUEST_LISTS:
      return {
        ...state,
        currentRequestLists: action.payload.currentRequestLists,
      };
    case Actions.SET_REQUEST_LISTS_ON_CONSULTING_TOGGLE:
      return {
        ...state,
        requestListOnConsultingToggle: !state.requestListOnConsultingToggle,
      };
    case Actions.ADD_FILTERING_METHOD_LIST:
      return {
        ...state,
        filteringMethodLists: [
          ...state.filteringMethodLists,
          action.payload.checkedList,
        ],
      };
    case Actions.SUB_FILTERING_METHOD_LIST:
      return {
        ...state,
        filteringMethodLists: state.filteringMethodLists.filter(
          (e) => e !== action.payload.checkedList
        ),
      };

    case Actions.ADD_FILTERING_MATERIAL_LIST:
      return {
        ...state,
        filteringMaterialLists: [
          ...state.filteringMaterialLists,
          action.payload.checkedList,
        ],
      };

    case Actions.SUB_FILTERING_MATERIAL_LIST:
      return {
        ...state,
        filteringMaterialLists: state.filteringMaterialLists.filter(
          (e) => e !== action.payload.checkedList
        ),
      };

    case Actions.RESET_FILTERING_OPTIONS:
      return {
        ...state,
        filteringMaterialLists: [],
        filteringMethodLists: [],
      };
  }
  return state;
}

export default reducer;
