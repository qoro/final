function findMissingNumber(arr) {
  const n = arr.length + 1;
  // ვითვლით მიმდევრობის ყველა წევრის ჯამს ფორმულის მიხედვით
  const stsorijami = (n * (n + 1)) / 2;

  // ვითვლით მასივის ელემენტების ჯამს
  const arastsorijami = arr.reduce((sum, num) => sum + num, 0);

  // მათი სხვაობა იქნება gამოტოვებული რიცხვი
  return stsorijami - arastsorijami;
}

console.log(findMissingNumber([3, 1, 4, 6, 2]));
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1]));
console.log(findMissingNumber([3, 4, 2, 6, 5]));
console.log(findMissingNumber([3, 4, 2, 6, 5, 1]));
