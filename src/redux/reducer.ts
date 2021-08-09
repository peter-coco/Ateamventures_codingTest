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
}

const initialState: GlobalState = {
  currentRequestLists: [],
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
  }
  return state;
}

export default reducer;
