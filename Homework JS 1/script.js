
//Домашня робота

var x = 6,
    y = 14,
    z = 4;

var a = (x += y - x++ * z);
document.write(a + '</br>');
// 1. x++  - інкремент, оскільки він постфіксний, і збільшиться потім на 1, тому буде значення 6.
// 2. виконуємо множення (множення пріорітетніше за мінус) 6*4=24
// 3. x += y те ж саме що x = x + y, тому 6+14+=20
// 4. виконуєио віднімання 20 - 24 = -4
var x = 6,
    y = 14,
    z = 4;
var b = (z = --x - y * 5);
document.write(b + '</br>');
// 1. --x  - декремент, оскільки він префіксний, і зменшується відразу на 1, тому буде значення 5.
// 2. виконуємо множення (множення пріорітетніше за мінус) 14*5=70
// 3. Далі всі дії виконуєио по порядку: 5 - 70 = -65

var x = 6,
    y = 14,
    z = 4;
var c = (y /= x + 5 % z);
document.write(c + '</br>');
// 1. y/=x - це аналог y=y/x
// 2. Взнаємо результат залишку ділення 5 % z = 5 % 4  = 1
// 3. Далі x + 1 = 6 + 1 = 7
// 4. Ділимо у/7 = 14/7=2
var x = 6,
    y = 14,
    z = 4;
var d = (z - x++ + y * 5);
document.write(d + '</br>');
// 1. x++  - інкремент, оскільки він постфіксний, і збільшиться потім на 1, тому буде значення 6.
// 2. виконуємо множення (множення пріорітетніше за плюс) 14*5=70
// 3. Далі всі дії виконуєио по порядку: 4 - 6 + 70 = 68

var x = 6,
    y = 14,
    z = 4;
var e = (x = y - x++ * z);
document.write(e + '</br>');
// 1. x++  - інкремент, оскільки він постфіксний, і збільшиться потім на 1, тому буде значення 6.
// 2. виконуємо множення (множення пріорітетніше за мінус) 6*4=24
// 3. Далі 14 - 24 = -10






