// 1.1

let userInput = +prompt("Введіть число: ");
if (userInput === 10) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};

//  1.2

const test = true;
if (test) {
    console.log('Вірно');
} else {
    console.log('Невірно');
};

if (!test) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

// 1.3

let purchaseAmount = +prompt("Введіть суму покупки: ");
let discount = 0;
if (purchaseAmount > 800) {
    discount = 5;  
} else if (purchaseAmount > 500) {
    discount = 3;
};

let discountAmount = purchaseAmount - (purchaseAmount * (discount / 100));
console.log(`Сума зі знижкою: ${discountAmount} гривень.`);

// ------------------------------------------------------------------------

// 2.1

let num1 = 25;
while (num1 >= 0) {
    console.log(num1);
    num1--;
}

let num2 = 25;
do {
    console.log(num2);
    num2--;
} while (num2 >= 0);

// 2.2

let num3 = 10;
while (num3 <= 50) {
    if (num3 % 5 === 0) {
        console.log(num3);
    }
    num3++;
}

let num4 = 10;
do {
    if (num4 % 5 === 0) {
        console.log(num4);
    }
    num4++;
} while (num4 <= 50);

// 2.3

let sum = 0;
let num5 = 1;
while (num5 <= 100) {
    sum += num5;
    num5++;
}
console.log(`Цикл while. 
Сума чисел від 1 до 100 дорівнює: ${sum}`);

let sum2 = 0;
let num6 = 1;
do {
    sum2 += num6;
    num6++;
} while (num6 <= 100);
console.log(`Цикл do ... while. 
Сума чисел від 1 до 100 дорівнює: ${sum2}`);