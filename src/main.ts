import {countIncreases, countIncreasesUsingWindows} from "./day1/day1";
import {getPosition, getPositionUsingAim, processCommands} from "./day2/day2";

const testMeasurements = require('../resources/day1-measurements.json');
const testCommands = require('../resources/day2-commands.json');

let increases;
increases = countIncreases(testMeasurements);
console.log(`Day 1, part 1: ${increases}`);
increases = countIncreasesUsingWindows(testMeasurements);
console.log(`Day 1, part 2: ${increases}`);

let position;
const commands = processCommands(testCommands);
position = getPosition(commands);
console.log(`Day 2, part 1: ${position.horizontal * position.depth}`);
position = getPositionUsingAim(commands);
console.log(`Day 2, part 2: ${position.horizontal * position.depth}`);