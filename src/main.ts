import {countIncreases, countIncreasesUsingWindows} from "./day1/day1";
import {getPosition, getPositionUsingAim, processCommands} from "./day2/day2";
import {calculateConsumption, calculateLifeConsumption} from "./day3/day3";
import {calculateBoardScore, processRawBingoInput} from "./day4/day4";
import {calculateOverlaps} from "./day5/day5";
import {calculateFishNumberAfter80Days, calculateFishNumberAfterPeriod} from "./day6/day6";
import {calculateLeastFuel, calculateLeastFuelUsingConsumption} from "./day7/day7";
import {countUniqueSegments} from "./day8/day8";

const testMeasurements = require('../resources/day1-measurements.json');
const testCommands = require('../resources/day2-commands.json');
const testDiagnostics = require('../resources/day3-diagnostics.json');
const testBingoBoards = require('../resources/day4-bingo-boards.json');
const testPoints = require('../resources/day5-points.json');
const testFish = require('../resources/day6-fish.json');
const testPositions = require('../resources/day7-positions.json');
const testSegments = require('../resources/day8-segments.json');

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

let boardScore;
const bingoInput = processRawBingoInput(testBingoBoards);
boardScore = calculateBoardScore(bingoInput);
console.log(`Day 4, part 1: ${boardScore}`);
boardScore = calculateBoardScore(bingoInput, true);
console.log(`Day 4, part 2: ${boardScore}`);

let overlaps;
overlaps = calculateOverlaps(testPoints);
console.log(`Day 5, part 1: ${overlaps}`);
overlaps = calculateOverlaps(testPoints, true);
console.log(`Day 5, part 2: ${overlaps}`);

let fishNumber;
fishNumber = calculateFishNumberAfter80Days(testFish);
console.log(`Day 6, part 1: ${fishNumber}`);
fishNumber = calculateFishNumberAfterPeriod(testFish, 256);
console.log(`Day 6, part 2: ${fishNumber}`);

let fuel;
fuel = calculateLeastFuel(testPositions);
console.log(`Day 7, part 1: ${fuel}`);
fuel = calculateLeastFuelUsingConsumption(testPositions);
console.log(`Day 7, part 2: ${fuel}`);

let uniqueSegments;
uniqueSegments = countUniqueSegments(testSegments);
console.log(`Day 8, part 1: ${uniqueSegments}`);
