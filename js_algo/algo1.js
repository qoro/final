function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

console.log(findMaxNumber([1, 5, 2, 9, 3]));
console.log(findMaxNumber([-10, -5, -2, -1]));
console.log(findMaxNumber([1000]));
console.log(findMaxNumber([-4, -17, -5687423432, 0, -1]));
console.log(findMaxNumber([0, -1, 0, 0, 0])); //რიცხვების განმეორების შემთხვევაში
console.log(findMaxNumber([-0, -1, 0, 0, 0])); //თუ ნულს უწერია მინუსი, უდიდესად გამოაქვს -0, რა საინტერესოა ჯავასკრიპტის უცნაურობა
console.log(findMaxNumber([+0, -1, +0, +0, +0])); //+0-ის ნაცვლად პირდაპირ ნულს წერს, ლოგიკურია