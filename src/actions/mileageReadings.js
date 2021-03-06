export function addNewMileage(newMileage) {
  return {
    type: 'MILEAGE.ADD',
    newMileage,
  };
}

export function overwriteMileageReadings(asyncStorageData) {
  const formattedData = JSON.parse(asyncStorageData);
  return {
    type: 'MILEAGE.OVERWRITE',
    mileageReadings: formattedData.mileage_readings,
  };
}

export function deleteMileage(id) {
  return {
    type: 'MILEAGE.DELETE',
    id,
  };
}

export function updateMileage(mileage, index) {
  return {
    type: 'MILEAGE.UPDATE',
    mileage,
    index,
  };
}
