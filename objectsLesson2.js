var numbers = {
  10: 10,
  num: 13,
  anotherKey: 34,
  undefined: 12,
  blue: 98
};

var sum = 0;
var arrValues = [];
var oddsFromEvens = 0;
var sumOdds = 0;
var sumEvens = 0;

for (var key in numbers) {
  sum += (numbers[key]);
  arrValues.push(numbers[key]);
  if (numbers[key] % 2 === 0){
       sumEvens += (numbers[key]);
    }else{
      sumOdds += (numbers[key]);
    }
    oddsFromEvens = (sumEvens - sumOdds);
  (numbers[key]) = ((numbers[key]) * (2));

}
console.log(sum);
console.log(arrValues);
console.log(oddsFromEvens);
console.log(numbers);
