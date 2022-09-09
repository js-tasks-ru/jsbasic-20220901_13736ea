function factorial(n) {
  // ваш код...
  let num = 1;
  while (n) {
    num *= n--; 
  }
  return num;
}
