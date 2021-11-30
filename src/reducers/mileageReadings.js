import AsyncStorage from '@react-native-async-storage/async-storage';
import initialMileageReadings from '../data/mileage_readings.json';

const initialState = {
  mileageReadings: initialMileageReadings.mileage_readings,
  overwrittenOnLaunch: false,
};

export default function mileageReadings(state = initialState, action = {}) {
  switch (action.type) {
    case 'MILEAGE.ADD': {
      const newMileageReadings = [...state.mileageReadings, action.newMileage];
      const mileageReadingsToParse = { mileage_readings: newMileageReadings };
      AsyncStorage.setItem(
        'MILEAGE_READINGS',
        JSON.stringify(mileageReadingsToParse),
      );
      return { ...state, mileageReadings: newMileageReadings };
    }
    case 'MILEAGE.OVERWRITE':
      return {
        ...state,
        mileageReadings: action.mileageReadings,
        overwrittenOnLaunch: true,
      };
    default:
      return state;
  }
}
