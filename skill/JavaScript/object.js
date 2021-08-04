/* 1.克隆对象 */
const _obj = { a: 0, b: 1, c: 2 }; // 以下方法任选一种
const obj = { ..._obj };
const obj = JSON.parse(JSON.stringify(_obj)); // obj => { a: 0, b: 1, c: 2 }

/* 2.合并对象 */
const obj1 = { a: 0, b: 1, c: 2 };
const obj2 = { c: 3, d: 4, e: 5 };
const obj = { ...obj1, ...obj2 }; // obj => { a: 0, b: 1, c: 3, d: 4, e: 5 }

/* 3.对象字面量 */
const env = "prod";
const link = {
  dev: "Development Address",
  test: "Testing Address",
  prod: "Production Address"
}[env]; // link => "Production Address"

/* 4.对象变量属性 */
const flag = false;
const obj = {
    a: 0,
    b: 1,
    [flag ? "c" : "d"]: 2
}; // obj => { a: 0, b: 1, d: 2 }

/* 5.创建纯空对象 */
const obj = Object.create(null); // obj => {}

/* 6.删除对象无用属性 */
const obj = { a: 0, b: 1, c: 2 }; // 只想拿b和c
const { a, ...rest } = obj; // rest => { b: 1, c: 2 }

/* 7.解构对象属性嵌套 */
const obj = { a: 0, b: 1, c: { d: 2, e: 3 } };
const { c: { d, e } } = obj; // d e => 2 3

/* 8.解构对象属性别名 */
const obj = { a: 0, b: 1, c: 2 };
const { a, b: d, c: e } = obj; // a d e => 0 1 2

/* 9.解构对象属性默认值 */
const obj = { a: 0, b: 1, c: 2 };
const { a, b = 2, d = 3 } = obj; // a b d => 0 1 3


