const country = "Ukraine";
const continent = "Europe";
let population = "41167336";

const isIsland = false;
let language = 'ukrainian';

console.log("My country is " + country)
console.log("It's located on " + continent + " continent")
console.log("Its populations is " + population)
console.log("It is an island " + isIsland)
console.log("Its language is " + language)

// Assignments
// ===========================================
let massMark, heightMark, massJohn, heightJohn;
let option = 2;

if (option === 1) {
  massMark = 78;
  heightMark = 1.69;
  massJohn = 92;
  heightJohn = 1.95;
} else {
  massMark = 95;
  heightMark = 1.88;
  massJohn = 85;
  heightJohn = 1.76;
}

let BMIMark = massMark / heightMark ** 2;
let BMIJohn = massJohn / heightJohn ** 2;

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
// ===========================================

console.log(`My country is ${country} 
with population ${population} 
people`)

const age = 8;

if (age >= 18) {
  console.log(`Is old enough 👌`)
} else if (age <= 18) {
  console.log(`Years left ${18 - age}`)
} else {
  console.log(`Cannot calculate age`)
}

// Assignment #3
// ===========================================
let dolphins1, dolphins2, dolphins3, koalas1, koalas2, koalas3;
// const optionTeams = 1;

for (let optionTeams = 1; optionTeams < 4; optionTeams++) {
  console.log(`Option ${optionTeams}`);

  if (optionTeams === 1) {
    dolphins1 = 96;
    dolphins2 = 108;
    dolphins3 = 89;
    koalas1 = 88;
    koalas2 = 91;
    koalas3 = 110;
  } else if (optionTeams === 2) {
    dolphins1 = 97;
    dolphins2 = 112;
    dolphins3 = 101;
    koalas1 = 109;
    koalas2 = 95;
    koalas3 = 123;
  } else {
    dolphins1 = 97;
    dolphins2 = 112;
    dolphins3 = 101;
    koalas1 = 109;
    koalas2 = 95;
    koalas3 = 106;
  }

  const dolphinsAverge = (dolphins1 + dolphins2 + dolphins3) / 3;
  let koalasAverge = (koalas1 + koalas2 + koalas3) / 3;

  if (dolphinsAverge > koalasAverge && dolphinsAverge >= 100) {
    console.log(`Dolphins won with score ${dolphinsAverge}`);
  } else if (dolphinsAverge < koalasAverge && koalasAverge >= 100) {
    console.log(`Koalas won with score ${koalasAverge}`);
  } else if (dolphinsAverge === koalasAverge && dolphinsAverge >= 100 && koalasAverge >= 100) {
    console.log(`Draw score Dolphins: ${dolphinsAverge} and Koalas: ${koalasAverge}`);
  } else {
    console.log(`No winners`);
  }
}

// Assignment #4
// ===========================================
let tip;
let price = 270;

tip = price >= 50 && price <= 300 ? price*0.15 : price*0.20;
console.log(`The bill was ${price}, the tip was ${tip}, and the total value ${price + tip}`);