const pxToRem = (px) => {
  if (typeof px === "number") {
    return `${String(px / 16)}rem`;
  } else {
    throw new TypeError(`${px} is not a number`);
  }
};

export default pxToRem;
