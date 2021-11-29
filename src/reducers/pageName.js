const initialState = {
  name: 'odometerList',
};

export default function pageName(state = initialState, action = {}) {
  switch (action.type) {
    case 'PAGENAME.UPDATE':
      return { ...state, name: action.name };
    default:
      return state;
  }
}
