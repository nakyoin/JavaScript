


/*alert('Я JavaScript')
console.log ('Ya JavaScript')          */


//Простая страница (1)
/*let name = prompt("Имя", "Никита");
alert(`Ваше имя ${name}`);              */


//Постфиксная и префиксная формы (2)
/*let a = 1, b = 1;
let c = ++a;
let d = b++;
console.log(a)
console.log(b)
console.log(c)
console.log(d)                           */


//Результат присваивания(3)
/*let a = 2;
let x = 1 + (a *=2);
console.log(a)
console.log(x)                           */


//Преобразование типов(4)
/*console.log("" + 1 + 0)   //10
console.log("" - 1 + 0)   //-1
console.log(true + false)   //1 
console.log(6 / "3")   //2
console.log("2" * "3")   //6
console.log(4 + 5 +"px")   //9px
console.log("$" + 4 + 5)   //$45
console.log("4" - 2)   //2 
console.log("4px" - 2)   //NaN
console.log("  -9  " + 5)   // -9  5
console.log("  -9  " - 5)   // -14
console.log(null + 1)   //1
console.log(undefined + 1)   //NaN
console.log(" \t \n" - 2)   //-2            //справа от примеров написан результат       */


//Исправьте сложение (5)
/*let a = prompt ("Первое число?", 1);
let b = prompt ('Второе число?', 2);
var c = +a + +b                            //ошибка была в этой строке <--- 
alert(c); //12                                                                          */


//Работа с переменными (6)

//(1)
/*var num = 3
alert(num)               */

//(2)
/*var a = 10
var b = 2
alert(a + b) //12
alert(a - b) //8 
alert(a * b) //20
alert(a / b) //5            */

//(3)
/*var c = 15
var d = 2
var e = c + d
var result = e
alert(result)    //17  */

//(4)
//var a = 10
/*var b = 2
var c = 5
alert(a + b + c)   //17   */

//(5)
/*var a = 17
var b = 10
var c = a - b
var d = 7
var result = c + d
alert(result)      //14   */

//Работа со строками (7)

//(1)
/*var str = 'Привет, Мир!'
alert(str)*/

//(2)
/*var str1 = 'Привет'
var str2 = 'Мир'
console.log(str1,',',str2,'!')*/

//(3)
/*let name = prompt ('Введите имя', 1);
alert(`Привет, ${name}`);     */

//(4)
/*let age = prompt ('Ваш возраст', 16);
alert(`Мне ${age} лет!`)    */


//Функция promt (8)
//(6)
/*let name = prompt ('Введите имя', 1);
alert(`Ваше имя ${name}`);     */

//(7)
/*let age = prompt ('Введите число', 5);
alert(age * age)    */



//Обращение к символам строки (9)
//(1)
/*var str = 'abcde'; 
alert(str[0]);
alert(str[2]);
alert(str[4]);         */

//(2)
/*var str = '12345'
alert(str[0] * str[1] * str[2] * str[3] * str[4])   */


//Практика (10)
//(3)
/* 
var hour = 60 * 60
var day = 60 * 60 * 24
var month = 60 * 60 * 24 * 30
alert(`В часе ${hour} секунд`)
alert(`В сутках ${day} секунд`)
alert(`В месяце ${month} секунд`)        */

//(4)
/* let time = new Date()
console.log(time.getHours(),':', time.getMinutes(),':', time.getSeconds());      */ 

//(5)
/* var num = prompt('Введите число', 1);
alert(num * num);      */


//(6)
/*var num = 47;
num += 7;
num -= 18;
num *= 10;
num /=15;
alert(num)      //24           */

//(7)
/*var num = 10
num ++;
num ++;
num --;
alert(num);     //11          */