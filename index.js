// Code your solution in this file!


function returnFirstTwoDrivers(array) {
    return [array[0], array[1]];
}

function returnLastTwoDrivers(array) {
    return [array[array.length-2], array[array.length-1]];
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
    return function (fare) {return fare * multiplier};
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, operation) {
    return operation(arrayOfDrivers);
}