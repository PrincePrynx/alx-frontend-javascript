
export default function hasValuesFromArray(set, arrray) {
    return arrray.every((key) => set.has(key));
  }
