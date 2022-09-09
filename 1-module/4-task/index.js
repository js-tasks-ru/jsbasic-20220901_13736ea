function checkSpam(str) {
  // ваш код...
  let low = str.toUpperCase();

  if (low.includes('XXX') || low.includes('1XBET')) {
    return true;
  } else {
    return false;
  }
  
  
}
