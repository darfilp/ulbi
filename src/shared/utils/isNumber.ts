const isNumber = (num: string | number) => {
  if (typeof num === "string") {
    return false;
  }
  return true;
};

export default isNumber;
