/* 1.克隆数组 */
const _arr = [0, 1, 2];
const arr = [..._arr]; // [0, 1, 2]

/* 2.合并数组 */
const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2]; // [0, 1, 2, 3, 4, 5];

/* 3.去重数组 */
const arr = [...new Set([0, 1, 1, null, null])]; // [0, 1, null]

/* 4.混淆数组 */
const arr = [0, 1, 2, 3, 4, 5].slice().sort(() => Math.random() - .5); // [3, 4, 0, 5, 1, 2]

/* 5.清空数组 */
const arr = [0, 1, 2];
arr.length = 0; // []

/* 6.截断数组 */
const arr = [0, 1, 2];
arr.length = 2; // [0, 1]

/* 7.交换赋值 */
let a = 0;
let b = 1;
[a, b] = [b, a]; // a b => 1 0

/* 8.过滤空值
 * 空值：undefined、null、""、0、false、NaN
 */
const arr = [undefined, null, "", 0, false, NaN, 1, 2].filter(Boolean); // [1, 2]

/* 9.异步累计 */
async function Func(deps) {
  return deps.reduce(async(t, v) => {
      const dep = await t;
      const version = await Todo(v);
      dep[v] = version;
      return dep;
  }, Promise.resolve({}));
}
const result = await Func(); // 需在async包围下使用

/* 10.数组首部插入成员 */
let arr = [1, 2]; // 以下方法任选一种
arr.unshift(0);
arr = [0].concat(arr);
arr = [0, ...arr];
// arr => [0, 1, 2]

/* 11.数组尾部插入成员 */
let arr = [0, 1]; // 以下方法任选一种
arr.push(2);
arr.concat(2);
arr[arr.length] = 2;
arr = [...arr, 2];
// arr => [0, 1, 2]

/* 12.统计数组成员个数 */
const arr = [0, 1, 1, 2, 2, 2];
const count = arr.reduce((t, v) => {
	t[v] = t[v] ? ++t[v] : 1;
	return t;
}, {});
// count => { 0: 1, 1: 2, 2: 3 }

/* 13.解构数组成员嵌套 */
const arr = [0, 1, [2, 3, [4, 5]]];
const [a, b, [c, d, [e, f]]] = arr;
// a b c d e f => 0 1 2 3 4 5

/* 14.解构数组成员别名 */
const arr = [0, 1, 2];
const { 0: a, 1: b, 2: c } = arr;
// a b c => 0 1 2

/* 15.解构数组成员默认值 */
const arr = [0, 1, 2];
const [a, b, c = 3, d = 4] = arr;
// a b c d => 0 1 2 4

/* 16.获取随机数组成员 */
const arr = [0, 1, 2, 3, 4, 5];
const randomItem = arr[Math.floor(Math.random() * arr.length)];
// randomItem => 1

/* 17.创建指定长度数组 */
const arr = [...new Array(3).keys()];
// arr => [0, 1, 2]

/* 18.创建指定长度且值相等的数组 */
const arr = new Array(3).fill(0);
// arr => [0, 0, 0]

/* 19.reduce代替map和filter */
const _arr = [0, 1, 2];

// map
const arr = _arr.map(v => v * 2);
const arr = _arr.reduce((t, v) => {
    t.push(v * 2);
    return t;
}, []);
// arr => [0, 2, 4]

// filter
const arr = _arr.filter(v => v > 0);
const arr = _arr.reduce((t, v) => {
    v > 0 && t.push(v);
    return t;
}, []);
// arr => [1, 2]

// map和filter
const arr = _arr.map(v => v * 2).filter(v => v > 2);
const arr = _arr.reduce((t, v) => {
    v = v * 2;
    v > 2 && t.push(v);
    return t;
}, []);
// arr => [4]
