import {countIncreases, countIncreasesUsingWindows} from "./day1/day1";

const testMeasurements = require('../resources/day1-measurements.json');

let increases;
increases = countIncreases(testMeasurements);
console.log(`Day 1, part 1: ${increases}`);
increases = countIncreasesUsingWindows(testMeasurements);
console.log(`Day 1, part 2: ${increases}`);