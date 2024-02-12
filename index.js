const returnFirstTwoDrivers = function(drivers) {
    let firstTwoDrivers = [...drivers.slice(0, 2)];
    return firstTwoDrivers;
}


const returnLastTwoDrivers = function(drivers) {
    let lastTwoDrivers = [...drivers.slice(drivers.length -2)];
    return lastTwoDrivers;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function (fare=5) {
        return fare * num;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(drivers, n) {
    return n(drivers);
} 