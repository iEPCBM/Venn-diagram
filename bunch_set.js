function getBunchAbs(bunches) {
  let tbSets2El = [1,2,4,8,14];
  let elements = tbSets2El[bunches];

  let retVal = [];
  for (let i=0; i<elements; i++) {
    retVal.push(i);
  }
  return retVal;
}

function getBunchesSet(bunches) {
  bunchesSize = bunches.length;
  let val = {};
  switch (bunchesSize) {
    case 0:
      return {};
      break;
    case 1:
      val[bunches[0]] = [1];
      return val;
      break;
    case 2:
      val[bunches[0]] = [1,2];
      val[bunches[1]] = [2,3];
      return val;
      break;
    case 3:
      val[bunches[0]] = [1,2,3,4];
      val[bunches[1]] = [2,3,5,6];
      val[bunches[2]] = [3,4,6,7];
      return val;
    case 4:
      val[bunches[0]] = [1,2,3,4,5,6,7];
      val[bunches[1]] = [13,12,10,6,7,3,5];
      val[bunches[2]] = [11,9,4,6,10,7,12];
      val[bunches[3]] = [2,5,6,4,10,9,8];
      return val;
      break;
  }
}

function countSets(expr) {
  var sets = ["A", "B", "C", "D"];
  var usedSets = [false, false, false, false];
  for (var i = 0; i < expr.length; i++) {
    if (expr[i]=="A") usedSets[0]=true;
    if (expr[i]=="B") usedSets[1]=true;
    if (expr[i]=="C") usedSets[2]=true;
    if (expr[i]=="D") usedSets[3]=true;
  }
  var retVal =[];
  usedSets.forEach((item, i) => {
    if (item) retVal.push(sets[i]);
  });
  return retVal;
}
