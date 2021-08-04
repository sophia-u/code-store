/* 1.对比完整格式的时间 */
const time1 = "2019-02-14 21:00:00";
const time2 = "2019-05-01 09:00:00";
const overtime1 = time1 > time2; // overtime1 => false

const time3 = "20190214210000";
const time4 = "20190501090000";
const overtime2 = time3 > time4; // overtime2 => false

/* 2.格式化金钱 */
const ThousandNum = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
const money = ThousandNum(20190214); // money => "20,190,214"
 
/* 3. 生成随机ID 
 * Math.random() 结果是 0.xxx
 * Number.prototype.toString() 入参默认为10，若是36则为0-9+a-z
 * substr(3, len) 从0.后面开始取值（0 1 2）
 */
const RandomId = len => Math.random().toString(36).substr(2, len);
const id = RandomId(10); // id => "jg7zpgiqva"
console.log(id);

/* 4.生成随机HEX色值 */
const RandomColor = () => "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
const color = RandomColor(); // color => "#f03665"

/* 5.生成星级评分 */
const StartScore = rate => "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
const start = StartScore(3); // start => "★★★"

/* 6.操作URL查询参数 */
const params = new URLSearchParams(location.search.replace(/\?/ig, "")); // location.search = "?name=young&sex=male"
params.has("young"); // true
params.get("sex"); // "male"