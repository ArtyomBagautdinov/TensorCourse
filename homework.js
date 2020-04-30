/**
 * ДЗ-03 
 */

/**
 * 0. Исправь ошибки
 */

//complite
function initVal(str) {
    var s = "String";
    var a = 10;
    var b = true;
    const c = 5;
}

/**
 * 1. Напиши функцию которая принимает на вход строку и преобразует ее в число
 * @param {string} str 
 * 
 * @returns (number)
 */

//complite
function stringToNumber(str) {
    var result = '';
    var flag=0;
    for(let i =0;i<str.length;i++){
      if(result=='' && isNaN(Number(str[i]))) break;
      if(!isNaN(Number(str[i])) && Number(str[i])!=0) {
          flag=1;
          result+=str[i];
      }
      if(isNaN(Number(str[i])) && flag==1) break;

    }

   return result=='' ? NaN : Number(result);
}

/**
 * 2. Функции возвращают значение val, если оно существует, иначе def
 * @param {*} val
 * @param {*} def
 * 
 * @returns val или def
 */


//complite
function checkVal1 (val, def) {
    // 2.1. if ... else
    if(typeof(val)!=NaN && val!=0) return val;
    else return def;
}

//complite
function checkVal2 (val, def) {
    // 2.2. тернарный оператор
    return typeof(val)!=NaN && val!=0 ? val : def;
}


//complite
function checkVal3 (val, def) {
    // 2.3. логическое или
    var result = typeof(val)!=NaN && val!=0 || false;
    return result ? val : def;
}

/**
 * 3. Фунция рендера
 * @param {string} title
 * @param {number} width
 * @param {number} height
 * @param {bool} isBox
 * 
 * @returns {string} строка формата 'Товар title, шириной width, высотой height, коробка' или '... не коробка'
 */

//complite
function renderItem (title, width, height, isBox) {
    var param = isBox ? `коробка` : `не коробка`;
    width = width==null ? 0 : width; 
    title = title==null ? '' : title;
    height = height==null ? 0 : height;
    var result = `Товар ${title}, шириной ${width}, высотой ${height}, ` + param;
    return result;
}

/**
 * 4. Напиши функцию oddNum с помощью цикла for
 * @param {number} max максимальное число
 * 
 * @returns {string} только не четные 1 3 5 7 9 ...max 
 */

//complite
function oddNum (max) {
    var s = '';
    for(let i = 1 ;i<=max;i++){
        if(i%2!=0) s+=i.toString(10)+' '; 
    }
    return s.substr(0,s.length-1);
}

/**
 * 5. Напиши функцию factorial рекурсивно
 * @param {number} n максимальное число для вычисления
 * 
 * @returns {number} факториал 
 */

//complite
function factorial(n) {
    if(n < 0) return 0; 
    if (n == 0) return 1; 
    else return n * factorial(n - 1);
}

module.exports = {
    initVal,
    stringToNumber,
    renderItem,
    checkVal1,
    checkVal2,
    checkVal3,
    oddNum,
    factorial
};
