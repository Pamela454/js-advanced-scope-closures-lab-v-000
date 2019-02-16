function produceDrivingRange(blockRange){
  return function(startingBlock, endingBlock){

    let start = parseInt(startingBlock);
    let end = parseInt(endingBlock);
    let distanceToTravel = Math.abs(end - start);
    let difference = blockRange - distanceToTravel;

    if( difference > 0){
      return `within range by ${difference}`
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return tip * fare;    
  }
}

function createDriver() {
  let DriverId = 0;
  return class {
    constructor(name, driverId) {
      this.name = name;
      this.id = ++DriverId;
    }
  }
}


function createItem() {
  let ItemId = 0;
  // return the class
  return class {
    constructor(name, manufacturePrice) {
      this.name = name;
      this.manufacturePrice = manufacturePrice;
      this.id = ++ItemId;
    }
 
    retailPrice(marketMultiplier) {
      return marketMultiplier * this.manufacturePrice;
    }
  };
}
 
