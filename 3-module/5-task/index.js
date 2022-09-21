function getMinMax(str) {
  // ваш код...
  let num = str.split(' ').filter(item => Number(item));
  let result = {
    min: Math.min(...num),
    max: Math.max(...num)
  };
  return result;
}
