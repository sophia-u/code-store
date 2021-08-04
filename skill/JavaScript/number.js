/* 1.取整
 * 代替正数的Math.floor()，代替负数的Math.ceil()
 */
const num1 = ~~ 1.69; // -1
const num2 = 1.69 | 0; // -1
const num3 = 1.69 >> 0; // -1

/* 2.补零 */
const FillZero = (num, len) => num.toString().padStart(len, "0");
const num = FillZero(169, 5); // num => "00169"

/* 3.转数值
 * 只对 null、""、false、数值字符串 有效
 */

const num1 = +null; // 0
const num2 = +""; // 0
const num3 = +false; // 0
const num4 = +"169"; // 169

/* 4.时间戳
 * 时间戳是指格林威治时间自1970年1月1日（00:00:00 GMT）至当前时间的总秒数。
 */
const time = new Date("2019-02-14"); // Thu Feb 14 2019 08:00:00 GMT+0800 (中国标准时间)
const timestamp = +new Date("2019-02-14"); // 1550102400000

/* 5.精确小数
 * 两个乘号等于几次方
 */
const RoundNum = (num, decimal) => Math.round(num * 10 ** decimal) / 10 ** decimal;
const num = RoundNum(1.69, 1); // 1.7
const str = num => num.toFixed(1) // '1.7'（字符串）

/* 6.判断奇偶：even 偶数、odd 基数
 * 二进制位与运算：偶数二进制最后一位为0，偶数二进制最后一位为1
 * ！是逻辑与运算，!! 是逻辑与的取反运算
 * 偶数&1=0，!0=true，!!0=false，偶数为false，基数为odd
 */
const OddEven = num => !!(num & 1) ? "odd" : "even";
const num = OddEven(2); // "even"

/* 7.取最小最大值 */
const arr = [0, 1, 2];
const min = Math.min(...arr); // 0
const max = Math.max(...arr); // 2

/* 8.生成范围随机数 */
const RandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const num = RandomNum(6, 10); // 10