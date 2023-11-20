const countSpouseSocks = (arr) => {
  let freq = {};
  let sumSpouse = 0;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;
    if (freq[num] % 2 === 0) {
      sumSpouse++;
    }
  }

  return sumSpouse;
};

let inputA = [10, 20, 20, 10, 10, 30, 50, 10, 20];
let inputB = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
let inputC = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log('a. Output:', countSpouseSocks(inputA));
console.log('b. Output:', countSpouseSocks(inputB));
console.log('c. Output:', countSpouseSocks(inputC));
