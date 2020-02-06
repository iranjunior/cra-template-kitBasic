export const Types = {
  EXAMPLE: 'EXAMPLE/Action',
};
const initialState = {
  value: 'value',
};
export default function Reducer(state = initialState, action) {
  const values = {}; // object with the actions of the reducers
  values[Types.EXAMPLE] = (payload) => ({ ...state, value: payload });
  /**
   * values[Types.EXAMPLE2] = (payload) => ({...state, value2: payload});
   * values[Types.EXAMPLE3] = (payload) => ({...state, value3: payload});
   * .
   * .
   * .
   * values[Types.EXAMPLE_N] = (payload) => ({...state, value_n: payload});
   */

  return values[action.type] ? values[action.type](action.payload) : state;
}

export function setValue(value) {
  return {
    Type: Types.EXAMPLE,
    payload: value,
  };
}
