export const Types = {
  EXAMPLE: 'EXAMPLE/Action',
};
const initialState = {
  value: 'value',
};
export default function Reducer(state = initialState, action) {
  switch (action.Type) {
    case Types.EXAMPLE:
      return {
        ...state,
        value: action.payload,
      };
    default:
      return {
        state,
      };
  }
}

export function setValue(value) {
  return {
    Type: Types.EXAMPLE,
    payload: value,
  };
}
