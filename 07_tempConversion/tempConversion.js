const ftoc = function(ftemp) {
  let ctemp = (ftemp -32) * (5/9);
  if ( !(Number.isInteger(ctemp)) && !(Number.isNaN(ctemp)) ) {
    return Math.round(ctemp * 10) / 10;
  } else return ctemp;
};

const ctof = function(ctemp) {
 let ftemp = ctemp * (9/5) + 32;
 if ( !(Number.isInteger(ftemp)) && !(Number.isNaN(ftemp)) ) {
  return Math.round(ftemp * 10) / 10;
 } else return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
