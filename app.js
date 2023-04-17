const fs = require("fs");
const data = require('./in.json');
const task1 = require('./task1');
const task2 = require('./task2');
const task3_1 = require('./task3_1');
const task3_2 = require('./task3_2');
const task4 = require('./task4');

const res1 = {
    "canTransform": task1.canTransform(data.numbers.first, data.numbers.second)
}
const res2 = {
    "arr": task2.findDupes(data.arr)
}
const res3_1 = {
    "nextMinimumWeight": task3_1.findMinWeight(data.weight)
}
const res3_2 = {
    "tshirts": task3_2.findTshirts(data.tshirts)
}
const res4 = {
    "projectors": task4.illuminateActors(data.stage.n, data.stage.m, data.stage.actorsPositions)
}
const result = {...res1, ...res2, ...res3_1, ...res3_2, ...res4}

fs.writeFileSync("out.json", JSON.stringify(result, null, 2));