/* 1.短路运算符 */
const a = d && 1; // 满足条件赋值：取假运算，从左到右依次判断，遇到假值返回假值，后面不再执行，否则返回最后一个真值
const b = d || 1; // 默认赋值：取真运算，从左到右依次判断，遇到真值返回真值，后面不再执行，否则返回最后一个假值
const c = !d; // 取假赋值：单个表达式转换为true则返回false，否则返回true

/* 2.判断数据类型 
 * undefined、null、string、number、
 * boolean、array、object、
 * symbol、date、regexp、function、
 * asyncfunction、arguments、set、map、weakset、weakmap
 */
function DataType(tgt, type) {
  const dataType = Object.prototype.toString.call(tgt).replace(/\[object (\w+)\]/, "$1").toLowerCase();
  return type ? dataType === type : dataType;
}
DataType("young"); // "string"
DataType(20190214); // "number"
DataType(true); // "boolean"
DataType([], "array"); // true
DataType({}, "array"); // false

/* 3.是否为空数组 */
const arr = [];
const flag = Array.isArray(arr) && !arr.length; // true

/* 4.是否为空对象 */
const obj = {};
const flag = DataType(obj, "object") && !Object.keys(obj).length; // true

/* 5.满足条件时执行 */
const flagA = true; // 条件A
const flagB = false; // 条件B
(flagA || flagB) && Func(); // 满足A或B时执行
(flagA || !flagB) && Func(); // 满足A或不满足B时执行
flagA && flagB && Func(); // 同时满足A和B时执行
flagA && !flagB && Func(); // 满足A且不满足B时执行

/* 6.为非假值时执行 */
const flag = false; // undefined、null、""、0、false、NaN
!flag && Func();

/* 7.数组不为空时执行 */
const arr = [0, 1, 2];
arr.length && Func();

/* 8.对象不为空时执行 */
const obj = { a: 0, b: 1, c: 2 };
Object.keys(obj).length && Func();

/* 9.函数退出代替条件分支退出 */
if (flag) {
  Func();
  return false;
}
// 换成
if (flag) {
  return Func();
}

/* 10.switch/case使用区间 */
const age = 26;
switch (true) {
  case isNaN(age):
    console.log("not a number");
    break;
  case (age < 18):
    console.log("under age");
    break;
  case (age >= 18):
    console.log("adult");
    break;
  default:
    console.log("please set your age");
    break;
}


/* 11.逻辑与的取反运算 */
if (flag !=null && typeof(flag) != undefined && flag !='') {
  // flag 有内容才执行的代码
}
// 换成
if (!!flag) {
  // flag 有内容才执行的代码
}