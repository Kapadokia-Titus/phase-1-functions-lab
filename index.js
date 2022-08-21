//Distance in Blocks
function distanceFromHqInBlocks(dist){

    if(dist>42 ){
        return dist-42; 
    }else if(dist<42){
        return 42-dist;
    }
}

//Distance in Feet
function distanceFromHqInFeet(feet){
    if(feet>42 ){
        let diff = feet-42
        return 264*diff; 
    }else if(feet<42){
        let diff = 42-feet;
        return 264*diff; 
    }
}

//Distance travelled in feet

function distanceFromHqInFeet (blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
  }
   //distance travelled in blocks
   function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }

  //prices
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return .02 * (distance - 400);
    } else if (distance > 2000 && distance < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }