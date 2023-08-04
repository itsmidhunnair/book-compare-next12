/**
 * To Toggle Values from array
 *
 * Will create an empty array if the received array value is not array
 *
 * @param {{array:Array, value:String}}
 */
export const toggleElementFromArray = ({ array, value }) => {
  const newArray = Array.isArray(array) ? array : [];
  newArray.includes(value)
    ? (newArray = newArray.filter((id) => id !== value))
    : newArray.push(value);
  return newArray;
};
