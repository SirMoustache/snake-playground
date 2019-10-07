"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log('start');
// const world = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0]
// ];
var random = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};
var createWorld = function (x, y) {
    if (y === void 0) { y = x; }
    return Array.from({ length: y }).map(function () { return Array.from({ length: x }, function () { return '.'; }); });
};
var addToRow = function (row, index, value) {
    var rowCopy = __spreadArrays(row);
    rowCopy[index] = value;
    return rowCopy;
};
var addToWorld = function (world, vector, value) {
    return world.map(function (row, rowIndex) {
        return rowIndex === vector.y ? addToRow(row, vector.x, value) : __spreadArrays(row);
    });
};
var rowReducer = function (cells, cell) { return cells + " " + cell; };
var worldReducer = function (rows, row) {
    return rows + "\n" + row.reduce(rowReducer, "");
};
var worldToString = function (world) {
    var result = world.reduce(worldReducer, "");
    return result;
};
var printWorld = function (world) {
    clearConsole();
    console.log(worldToString(world));
};
var createRandomVector = function (maxX, maxY) { return ({
    x: random(0, maxX),
    y: random(0, maxY),
}); };
var clearConsole = function () {
    // process.stdout.write("\033c");
    // process.stdout.write("\x1bc");
    console.log('\x1Bc');
};
// printWorld(world);
var WORLD_SIZE = 5;
var world = createWorld(WORLD_SIZE);
var randomVector = createRandomVector(WORLD_SIZE, WORLD_SIZE);
var newWorld = addToWorld(world, randomVector, 'x');
var play = function () {
    setInterval(function () { return printWorld(newWorld); }, 1000);
};
exports.play = play;
//# sourceMappingURL=index.js.map