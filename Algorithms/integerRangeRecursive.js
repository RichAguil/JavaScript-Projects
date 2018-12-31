function integerRange(num1, num2) {
  if (num2 - num1 <= 1) {
    console.log("Done!");
    return 0;
  } else {
    console.log(num1 + 1);
    integerRange(++num1, num2);
  };
};
