import makeArrayFromString from './makeArrayFromString.js';

const convertObjectArray = (value) => {
  const itemsAndQuantityArray = makeArrayFromString(value);
  let itemsAndQuantityObject = [];
  itemsAndQuantityArray.map((array) => {
    const unnecessary = array.replace(/\[/g, '').replace(/\]/g, '').split('-');
    const purchasedItemAndQuantity = { name: unnecessary[0], quantity: Number(unnecessary[1]) };
    return (itemsAndQuantityObject = [...itemsAndQuantityObject, purchasedItemAndQuantity]);
  });
  return itemsAndQuantityObject;
};

export default convertObjectArray;
