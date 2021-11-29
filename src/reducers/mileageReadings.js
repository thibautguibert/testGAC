import initialMileageReadings from '../data/mileage_readings.json';

const initialState = {
  mileageReadings: initialMileageReadings.mileage_readings,
};

export default function mileageReadings(state = initialState, action = {}) {
  switch (action.type) {
    case 'MILEAGE.ADD':
      return { ...state, mileageReadings: [...initialState.mileageReadings, action.newMileage] };
    default:
      return state;
  }
}
