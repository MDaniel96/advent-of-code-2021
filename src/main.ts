import {countIncreases, countIncreasesUsingWindows} from "./day1/day1";
import {getPosition, getPositionUsingAim, processCommands} from "./day2/day2";
import {calculateConsumption, calculateLifeConsumption} from "./day3/day3";
import {calculateBoardScore, processRawBingoInput} from "./day4/day4";
import {calculateOverlaps} from "./day5/day5";
import {calculateFishNumberAfter80Days, calculateFishNumberAfterPeriod} from "./day6/day6";
import {calculateLeastFuel, calculateLeastFuelUsingConsumption} from "./day7/day7";
import {calculateOutputSum, countUniqueSegments} from "./day8/day8";
import {calculateHeightsSum, calculateLargestBasinSum} from "./day9/day9";
import {getSyntaxCompletionScore, getSyntaxErrorScore} from "./day10/day10";
import {getFirstSynchronizedFlashStep, getFlashes} from "./day11/day11";
import {getPaths} from "./day12/day12";
import {getDots} from "./day13/day13";
import {calculateQuantityDifference} from "./day14/day14";
import {calculateLowestRisk} from "./day15/day15";
import {findHighestValue, findPossibleVelocities} from "./day17/day17";

const testMeasurements = require('../resources/day1-measurements.json');
const testCommands = require('../resources/day2-commands.json');
const testDiagnostics = require('../resources/day3-diagnostics.json');
const testBingoBoards = require('../resources/day4-bingo-boards.json');
const testPoints = require('../resources/day5-points.json');
const testFish = require('../resources/day6-fish.json');
const testPositions = require('../resources/day7-positions.json');
const testSegments = require('../resources/day8-segments.json');
const testHeights = require('../resources/day9-heights.json');
const testSyntax = require('../resources/day10-syntax.json');
const testEnergies = require('../resources/day11-energies.json');
const testCaves = require('../resources/day12-caves.json');
const testDots = require('../resources/day13-dots.json');
const testInstructions = require('../resources/day13-instructions.json');
const testInsertions = require('../resources/day14-insertions.json');
const testCavern = require('../resources/day15-cavern.json');

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
uniqueSegments = calculateOutputSum(testSegments);
console.log(`Day 8, part 2: ${uniqueSegments}`);

let heightsSum;
heightsSum = calculateHeightsSum(testHeights);
console.log(`Day 9, part 1: ${heightsSum}`);
heightsSum = calculateLargestBasinSum(testHeights);
console.log(`Day 9, part 2: ${heightsSum}`);

let syntaxScore;
syntaxScore = getSyntaxErrorScore(testSyntax);
console.log(`Day 10, part 1: ${syntaxScore}`);
syntaxScore = getSyntaxCompletionScore(testSyntax);
console.log(`Day 10, part 2: ${syntaxScore}`);

let flashes;
flashes = getFlashes(testEnergies);
console.log(`Day 11, part 1: ${flashes}`);
flashes = getFirstSynchronizedFlashStep(testEnergies);
console.log(`Day 11, part 2: ${flashes}`);

let paths;
paths = getPaths(testCaves);
console.log(`Day 12, part 1: ${paths}`);
paths = getPaths(testCaves, true);
console.log(`Day 12, part 2: ${paths}`);

let dots;
dots = getDots(testDots, testInstructions, true);
console.log(`Day 13, part 1: ${dots}`);
dots = getDots(testDots, testInstructions);
console.log(`Day 13, part 2: ${dots}`);

let difference;
difference = calculateQuantityDifference('VNVVKSNNFPBBBVSCVBBC', testInsertions, 10);
console.log(`Day 14, part 1: ${difference}`);
difference = calculateQuantityDifference('VNVVKSNNFPBBBVSCVBBC', testInsertions, 40);
console.log(`Day 14, part 2: ${difference}`);

let cost;
cost = calculateLowestRisk(testCavern);
console.log(`Day 15, part 1: ${cost}`);
cost = calculateLowestRisk(testCavern, true);
console.log(`Day 15, part 2: ${cost}`);

const destination = {minX: 119, maxX: 176, minY: -141, maxY: -84}
const highest = findHighestValue(destination);
console.log(`Day 17, part 1: ${highest}`);
const velocities = findPossibleVelocities(destination);
console.log(`Day 17, part 2: ${velocities}`);