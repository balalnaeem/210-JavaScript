/*
Radians to Degrees

180 degrees is equal to PI radians

radian to degrees = * by 180 and divide by PI
*/

function radiantToDegrees(radian) {
  return (radian * 180 / Math.PI).toFixed(2);
}

console.log(radiantToDegrees(1));