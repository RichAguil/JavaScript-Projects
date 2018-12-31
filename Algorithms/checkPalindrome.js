function checkPalindrome(string) {
  var stringArray = string.split('');
  var reversedArray = stringArray.slice().reverse();
  if (stringArray.join('')===reversedArray.join('')) {
    return true;
  } else {
    return false;
  };
};
