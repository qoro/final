function findMissingNumber(arr) {
  // ჯერ მასივში ელემენტები დავალაგოთ ზრდადობით
  arr.sort((a, b) => a - b);
  // თუ პირველი რიცხვი არ არის 1, დაბრუნდეს 1, რადგან პირობის მიხედვით დიაპაზონია [1, n]
  if (arr[0] !== 1) {
    return 1;
  }
  // ვამოწმებთ, თუ შემდეგი ელემენტი არაა +1
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] !== arr[i] + 1) {
      // გამოტოვებული რიცხვი არის arr[i] + 1
      return arr[i] + 1;
    }
  }
  
  // თუ ყველა რიცხვი თანმიმდევრულია, გამოტოვებული არის n, რადგან, პირობის მიხედვით, მიმდევრობაში 1 რიცხვი უეჭველად აკლია
  return arr.length + 1;
}

// მაგალითები
console.log(findMissingNumber([3, 1, 4, 6, 2]));
console.log(findMissingNumber([1, 2, 3, 5]));
console.log(findMissingNumber([9, 6, 4, 2, 3, 5, 7, 1]));
console.log(findMissingNumber([3, 4, 2, 6, 5]));
console.log(findMissingNumber([3, 4, 2, 6, 5, 1]));
