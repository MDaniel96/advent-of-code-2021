import {countIncreases, countIncreasesUsingWindows} from "./day1/day1";
import {getPosition, getPositionUsingAim, processCommands} from "./day2/day2";
import {calculateConsumption, calculateLifeConsumption} from "./day3/day3";
import {calculateWinnerBoardScore, processRawBingoInput} from "./day4/day4";

const testMeasurements = require('../resources/day1-measurements.json');
const testCommands = require('../resources/day2-commands.json');
const testDiagnostics = require('../resources/day3-diagnostics.json');
const testBingoBoards = require('../resources/day4-bingo-boards.json');

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

let consumption;
consumption = calculateConsumption(testDiagnostics);
console.log(`Day 3, part 1: ${parseInt(consumption.gamma, 2) * parseInt(consumption.epsilon, 2)}`);
consumption = calculateLifeConsumption(testDiagnostics);
console.log(`Day 3, part 2: ${parseInt(consumption.gamma, 2) * parseInt(consumption.epsilon, 2)}`);


const bingoInput = processRawBingoInput(testBingoBoards);
let boardScore = calculateWinnerBoardScore(bingoInput);
console.log(`Day 4, part 1: ${boardScore}`);
