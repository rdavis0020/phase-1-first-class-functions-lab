const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}
const fareDoubler = createFareMultiplier(2);
const fare = 10;
const doubledFare = fareDoubler(fare);

const fareTripler = createFareMultiplier(3) ;
const tripledFare = fareTripler(fare);

function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const firstTwoDrivers = selectDifferentDrivers(drivers, returnFirstTwoDrivers);
console.log(firstTwoDrivers); 

const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
console.log(lastTwoDrivers);