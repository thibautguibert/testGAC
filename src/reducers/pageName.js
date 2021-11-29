const initialState = {
  name: 'odometerList',
  previousName: '',
};

export default function pageName(state = initialState, action = {}) {
  switch (action.type) {
    case 'PAGENAME.UPDATE':
      return { ...state, previousName: state.name, name: action.name };
    default:
      return state;
  }
}
