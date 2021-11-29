export function addNewMileage(newMileage) {
  console.log('addNewMileage', newMileage);
  return {
    type: 'MILEAGE.ADD',
    newMileage,
  };
}
