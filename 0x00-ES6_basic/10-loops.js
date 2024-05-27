export default function appendToEachArrayValue(array, appendString) {
  const arrayUpdate = [];
  for (const value of array) {
    arrayUpdate.push(`${appendString}${value}`);
  }

  return arrayUpdate;
}
