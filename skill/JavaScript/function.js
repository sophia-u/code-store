/* 1.函数自执行 */
const Func = function () { }(); // 常用

(function () { })(); // 常用
(function () { }()); // 常用

/* 2.隐式返回值
 * 只能用于单语句返回值箭头函数，如果返回值是对象必须使用()包住
 */
const Func = function (name) {
  return "I Love " + name;
};
// 换成
const Func = name => "I Love " + name;

/* 3.一次性函数
 * 适用于运行一些只需执行一次的初始化代码
 */
function Func() {
  console.log("x");
  Func = function () {
    console.log("y");
  }
}
Func(); // x
Func(); // y

/* 4.惰性载入函数
 * 函数内判断分支较多较复杂时可大大节约资源开销
 */
function Func() {
  if (a === b) {
    console.log("x");
  } else {
    console.log("y");
  }
}
// 换成
function Func() {
  if (a === b) {
    Func = function () {
      console.log("x");
    }
  } else {
    Func = function () {
      console.log("y");
    }
  }
  return Func();
}

/* 5.检测非空参数 */
function IsRequired() {
  throw new Error("param is required");
}
function Func(name = IsRequired()) {
  console.log("I Love " + name);
}
Func(); // "param is required"
Func("You"); // "I Love You"

/* 6.字符串创建函数 */
const Func = new Function("name", "console.log(\"I Love \" + name)");
// ƒ anonymous(name
// ) {
// console.log("I Love " + name)
// }

/* 7.优雅处理错误信息 */
try {
  Func();
} catch (e) {
  location.href = "https://stackoverflow.com/search?q=[js]+" + e.message;
}

/* 8.优雅处理Async/Await参数 */
function AsyncTo(promise) {
  return promise.then(data => [null, data]).catch(err => [err]);
}
const [err, res] = await AsyncTo(Func());

/* 9.优雅处理多个函数返回值 */
function Func() {
  return Promise.all([
    fetch("/user"),
    fetch("/comment")
  ]);
}
const [user, comment] = await Func(); // 需在async包围下使用
