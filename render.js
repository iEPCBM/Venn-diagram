var setE = new Set([1]);
var objSets = {};
objSets["E"] = (new EDSet("E", -100, -100, new Set(setE)));

function generateDiagram(expression, canvasId) {
  objSets = {};
  var setsLetters = countSets(expression);
  E = new Set(getBunchAbs(setsLetters.length));
  var sets = getBunchesSet(setsLetters);

  Object.values(sets).forEach((item, i) => {
    if (setsLetters.length === 1) {
      objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 180, 100, new Set(item)));
    }
    else if (setsLetters.length==2) {
        objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 140+i*80, 100, new Set(item)));
    }
    else if (setsLetters.length==3) {
      if (i<2) {
        objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 140+i*80, 70, new Set(item)));
      }
      else {
        objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 180, 140, new Set(item)));
      }
    }
    else if (setsLetters.length==4) {
      if (i%2===0) {
        objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 180, 60+(i/2)*80, new Set(item)));
      }
      else {
        objSets[Object.keys(sets)[i]]=(new EDSet(Object.keys(sets)[i], 140+(i-1)/2*80, 100, new Set(item)));
      }
    }
  });

  objSets["E"] = (new EDSet("E", -100, -100, E));

  var canvas = document.getElementById(canvasId);
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle="Black";
    ctx.font = "20px serif";
    ctx.textAlign = "center";
    Object.values(objSets).forEach((item, i) => {
      item.renderStroke(ctx);
    });
    renderDiagram(setsLetters.length,setExpParser.parse(expression),ctx);
    Object.values(objSets).forEach((item, i) => {
      item.renderTitle(ctx);
    });
    ctx.strokeText("E", 30, 30);
  }
}
var posFlood = [
  [{
    x: 1,
    y: 1
  }],
  [
    {x:1, y:1},
    {x:180,y:100},
  ],
  [
    {x:1,y:1},
    {x:140,y:100},
    {x:180,y:100},
    {x:220,y:100}
  ],
  [
    {x:1,y:1},
    {x:140,y:70},
    {x:180,y:70},
    {x:180,y:93},
    {x:158,y:105},
    {x:220,y:70},
    {x:203,y:105},
    {x:180,y:140}
  ],
  [
    {x:1,y:1},
    {x:180,y:60},
    {x:205,y:75},
    {x:152,y:74},
    {x:200,y:100},
    {x:180,y:80},
    {x:180,y:100},
    {x:163,y:100},
    {x:220,y:100},
    {x:203,y:123},
    {x:180,y:120},
    {x:180,y:140},
    {x:152,y:126},
    {x:140,y:100}
  ]
];
function renderDiagram(setCount,setsFilled, ctx) {
  for (var item of setsFilled) {
    let pos = posFlood[setCount][item];

    ctx.flood(pos.x,pos.y,0xFF6666FF);
  }
}
