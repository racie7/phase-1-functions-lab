function distanceFromHqInBlocks(distance){
    let difference
    difference = Math.abs(distance - 42);

    return difference;
}

function distanceFromHqInFeet(distance){
   let differenceInFeet
   differenceInFeet = distanceFromHqInBlocks(distance) * 264;

   return differenceInFeet;

}

function distanceTravelledInFeet(start,destination){
      let distanceTravelledFeet
      distanceTravelledFeet = Math.abs(destination - start) * 264;

      return distanceTravelledFeet;
}

function calculatesFarePrice(start, destination){
      let farePrice
      let distanceForFare = distanceTravelledInFeet(start,destination);

      if(distanceForFare <=400 ){
        farePrice = 0;
      }
      else if(distanceForFare >400 && distanceForFare <2000){
         let distanceOver400
         distanceOver400 = distanceForFare - 400;
        farePrice = Math.abs(distanceOver400) * 0.02;
      }
      else if(distanceForFare >2000 && distanceForFare <2500){
        farePrice = 25;
      }
      else{
        farePrice = "cannot travel that far";
      }

      return farePrice;

}
