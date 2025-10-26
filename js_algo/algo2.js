function isPalindrome(str) {
  let cleaned = str
  .toLowerCase()
  .replace(/[^a-z0-9ა-ჰ]/g, "");
  
  let reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("level"));
console.log(isPalindrome("Atami itesa aseti imata"));
console.log(isPalindrome("ატამი ითესა, ასეთი იმატა"));
console.log(isPalindrome("მე არ მაქვს ათასი ლარი"));