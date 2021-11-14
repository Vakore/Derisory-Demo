var background = {};
var backgrounds = [];

const collider = function(x, y, w, h, obj, edges, moveVector) {
    if (edges == undefined) {edges = "----";}
    var p = obj;
    if (obj.tag == "player") {//If anything breaks remove '0.' from each of the numbers
        if (!moveVector) {
            moveVector = {x:0,y:0};
        }
        //Above Top
        if (p.x + p.w > x && p.x < x + w && p.y + p.h + p.velY + moveVector.y > y - 8 && p.y + p.h + p.velY + moveVector.y < y + 0.2 + p.velY && p.velY > 0) {p.nearGround = true;}

        //TOP
        if (p.x + p.w > x && p.x < x + w && p.y + p.h > y - 0.2 && p.y + p.h < y + 0.2 + p.velY + moveVector.y && p.velY >= 0 && edges[0] == "-") {
            p.inSlime = false;
        }
        if (p.x + p.w > x && p.x < x + w && p.y + p.h > y && p.y + p.h < y + 0.2 + p.velY + moveVector.y && p.velY > 0 && edges[0] == "-") {
            p.y = y - p.h;
            if (p.flipped == 1) {
                p.velY = 0;
                p.isGrounded = 5;
            } else {
                p.velY = -1;
            }
        }

        //LEFT AND RIGHT
        if (p.y + p.h > y + 0.1 && p.y < y + h - 0.1) {
            if (p.x + p.w > x && p.x + p.w < x + 0.3 + p.velX + moveVector.x && p.velX >= 0 && edges[3] == "-") {//LEFT
                p.x = x - p.w;
                p.isHitting = 0;
                p.velX = 0;
                p.stopTimer = 0;
                p.walkTimer = 1;
            } else if (p.x < x + w && p.x > x + w - 0.3 + p.velX - moveVector.x && p.velX <= 0 && edges[1] == "-") {//RIGHT
                p.x = x + w;
                p.isHitting = 0;
                p.velX = 0;
                p.stopTimer = 0;
                p.walkTimer = 1;
            }
        }

        //BOTTOM
        if (p.x + p.w > x && p.x < x + w && p.y < y + h && p.y > y + h + p.velY - 0.2 - moveVector.y && p.velY < 0 && edges[2] == "-") {
            p.y = y + h;
            if (p.flipped == 1) {
                p.velY = 1;
            } else {
                p.velY = 0;
                p.isGrounded = 5;
            }
        }

        //Ledge grab and Wall Jump tests
        if (p.y >= y && p.y <= y + p.velY && p.x + p.w > x - 2 && p.x < x + w + 2 && p.isGrounded < 0 && p.abilities.ledgeGrab && edges[0] == "-") {
            p.velY = 0;
            p.y = y;
            p.onLedge = (p.x + p.w / 2 > x + w / 2) ? 1 : -1;
        } else if (p.abilities.wallJump && p.y + p.h > y + 1 && p.y < y + h - 2 && p.velY > 0 & p.flipped > 0 | p.velY < 0 & p.flipped < 0 && p.isGrounded < 0 && p.dashTimer < 0) {
            if (p.x + p.w > x - 0.1 && p.x + p.w < x + 2 + p.velX && edges[3] == "-" && !p.inWater/* && p.onWall == -1 | keys[p.controls.d]*/) {
                p.onWall = -1;
            }//left
            if (p.x < x + w + 0.1 && p.x > x + w - 2 + p.velX && edges[1] == "-" && !p.inWater/* && p.onWall == 1 | keys[p.controls.a]*/) {
                p.onWall = 1;
            }//right
        }

        for (var j = 0; j < 2; j++) {
            if (p.attackTimer > 0 && p.swipe.x[j] + p.swipe.w[j] > x && p.swipe.x[j] < x + w &&
p.swipe.y[j] + p.swipe.h[j] > y && p.swipe.y[j] < y + h) {
                if (p.canHit && p.attackTimer > 0) {
                    if (abs(p.attacker) == 1) {
                        //p.canHit = false;
                        //p.isHitting = -p.attackDir * 2;
                        //p.hitTimer = 5;
                        //attackBox2(x, y, w, h, 0);
                    }
                }
            }
        }//End of j loop
    } else if (!moveVector) {
        //Enemy collisions
        if (p.x + p.w > x + 0.1 && p.x < x + w - 0.1 && p.y + p.h > y && p.y + p.h < y + 0.3 + p.velY && p.velY > 0 && edges[0] == "-") {
            p.y = y - p.h;
            if (p.wallTop != undefined) {
                p.wallTop();
            }
        }

        if (p.y + p.h > y + 0.1 && p.y < y + h - 0.1) {
            if (p.x + p.w > x && p.x + p.w < x + 0.2 + p.velX && p.velX > 0 && edges[3] == "-") {
                p.x = x - p.w;
                if (p.wallLeft != undefined) {
                    p.wallLeft();
                }
            }//left
            if (p.x < x + w && p.x > x + w - 0.2 + p.velX && p.velX < 0 && edges[1] == "-") {
                p.x = x + w;
                if (p.wallRight != undefined) {
                    p.wallRight();
                }
            }//right
        }

        if (p.x + p.w > x + 0.1 && p.x < x + w - 0.1 && p.y < y + h && p.y > y + h - 0.2 + p.velY && p.velY < 0 && edges[2] == "-") {
            p.y = y + h;
            if (p.wallBottom != undefined) {
                p.wallBottom();
            }
        }

        if (p.extraCheck != undefined) {
            p.extraCheck(x, y, w, h);
        }
    }
};

const slimeCollider = function(x, y, w, h, obj, edges) {
    if (edges == undefined) {edges = "----";}
    var p = obj;
    if (obj.tag == "player") {//If anything breaks remove '0.' from each of the numbers
        //Above Top
        if (p.x + p.w > x && p.x < x + w && p.y + p.h + p.velY > y - 8 && p.y + p.h + p.velY < y + 0.2 + p.velY && p.velY > 0) {p.nearGround = true;}

        //TOP
        if (p.x + p.w > x && p.x < x + w && p.y + p.h > y - 0.2 && p.y + p.h < y + 0.2 + p.velY && p.velY > 0 && edges[0] == "-") {
            p.inSlime = true;
        }
        if (p.x + p.w > x && p.x < x + w && p.y + p.h > y && p.y + p.h < y + 0.2 + p.velY && p.velY > 0 && edges[0] == "-") {
            p.y = y - p.h;
            if (p.flipped == 1) {
                p.velY = 0;
                p.isGrounded = 2;
            } else {
                p.velY = -1;
            }
        }

        //LEFT AND RIGHT
        if (p.y + p.h > y + 0.1 && p.y < y + h - 0.1) {
            if (p.x + p.w > x && p.x + p.w < x + 0.3 + p.velX && p.velX >= 0 && edges[3] == "-") {//LEFT
                p.x = x - p.w;
                p.isHitting = 0;
                p.velX = 0;
                p.walkTimer = 1;
            } else if (p.x < x + w && p.x > x + w - 0.3 + p.velX && p.velX <= 0 && edges[1] == "-") {//RIGHT
                p.x = x + w;
                p.isHitting = 0;
                p.velX = 0;
                p.walkTimer = 1;
            }
        }

        //BOTTOM
        if (p.x + p.w > x && p.x < x + w && p.y < y + h && p.y > y + h + p.velY - 0.2 && p.velY < 0 && edges[2] == "-") {
            p.y = y + h;
            if (p.flipped == 1) {
                p.velY = 1;
            } else {
                p.velY = 0;
                p.isGrounded = 5;
            }
        }

        //Ledge grab and Wall Jump tests
        if (p.y >= y && p.y <= y + p.velY && p.x + p.w > x - 2 && p.x < x + w + 2 && p.isGrounded < 0 && p.abilities.ledgeGrab && edges[0] == "-") {
            p.velY = 0;
            p.y = y;
            p.onLedge = (p.x + p.w / 2 > x + w / 2) ? 1 : -1;
        }

        for (var j = 0; j < 2; j++) {
            if (p.attackTimer > 0 && p.swipe.x[j] + p.swipe.w[j] > x && p.swipe.x[j] < x + w &&
p.swipe.y[j] + p.swipe.h[j] > y && p.swipe.y[j] < y + h) {
                if (p.canHit && p.attackTimer > 0) {
                    if (abs(p.attacker) == 1) {
                        //p.canHit = false;
                        //p.isHitting = -p.attackDir * 2;
                        //p.hitTimer = 5;
                        //attackBox2(x, y, w, h, 0);
                    }
                }
            }
        }//End of j loop
    } else {
        //Enemy collisions
        if (p.x + p.w > x + 0.1 && p.x < x + w - 0.1 && p.y + p.h > y && p.y + p.h < y + 0.3 + p.velY && p.velY > 0 && edges[0] == "-") {
            p.y = y - p.h;
            if (p.wallTop != undefined) {
                p.wallTop();
            }
        }

        if (p.y + p.h > y + 0.1 && p.y < y + h - 0.1) {
            if (p.x + p.w > x && p.x + p.w < x + 0.2 + p.velX && p.velX > 0 && edges[3] == "-") {
                p.x = x - p.w;
                if (p.wallLeft != undefined) {
                    p.wallLeft();
                }
            }//left
            if (p.x < x + w && p.x > x + w - 0.2 + p.velX && p.velX < 0 && edges[1] == "-") {
                p.x = x + w;
                if (p.wallRight != undefined) {
                    p.wallRight();
                }
            }//right
        }

        if (p.x + p.w > x + 0.1 && p.x < x + w - 0.1 && p.y < y + h && p.y > y + h - 0.2 + p.velY && p.velY < 0 && edges[2] == "-") {
            p.y = y + h;
            if (p.wallBottom != undefined) {
                p.wallBottom();
            }
        }

        if (p.extraCheck != undefined) {
            p.extraCheck(x, y, w, h);
        }
    }
};
/*
FORMULAS:
Big Slope going Up-right: constrain(x - (p.x + p.w), -16, 0)
Big Slope going Up-Left: constrain(this.x - (i * 16) - 16, -16, 0)
Big Slope going Down-Left: ((x + w) - p.x)
Big Slope going Down-Right: constrain((p.x + p.w) - x, 0, 16)
*/
var slopeCollider = function(x, y, w, h, slope, dir, /*steep,*/ obj) {
    var p = obj;
    if (obj.tag == "player") {
        if (p.x + p.w > x && p.x < x + w && p.y + p.h > y + h + slope && p.y + p.h < y + h + p.velY + 2 && dir == 1) {
            p.y = y + h + slope - p.h;
            if (p.flipped == 1) {
                p.velY = 0;
                p.isGrounded = 5;
            } else {
                if (p.velY > 1) {
                    p.velY = -1;
                }
            }
        } else if (p.x + p.w > x && p.x < x + w && p.y < y + slope && p.y > y + p.velY - 2 && dir == 2) {
            p.y = y + slope;
            if (p.flipped == 1) {
                if (p.velY < 1) {
                    p.velY = 1;
                }
            } else {
                p.isGrounded = 5;
                p.velY = -1;
            }
        } else if (p.x + p.w > x + w + slope && p.x + p.w < x + w + p.velX + 2 && p.y + p.h > y && p.y < y + h && dir == 3) {
            p.x = x + w + slope - p.w;
        } else if (p.x < x + slope && p.x > x + p.velX - 2 && p.y + p.h > y && p.y < y + h && dir == 4) {
            p.x = x + slope;
        }
    }
};

var killBox = function(x, y, w, h, obj) {
    var p = obj;
    if (p.tag != "player" && p.tag != "notEnemy" && p.x + p.w > x && p.x < x + w && p.y + p.h > y && p.y < y + h) {
        p.ded = true;
    }
};

const waterCollider = function(x, y, w, h, p, isPlayer) {
    if (isPlayer && p.x + p.w > x && p.x < x + w && floor(p.y + p.h / 4) > y && p.y < y + h ||
        !isPlayer && p.x + p.w > x && p.x < x + w && p.y + p.h > y && p.y < y + h) {
        p.inWater = (currentLevel[currentLevel.length - 1][0].attributes.underWater != true);
    }
};

//For player's grapple shot hitting bottom of stuff
var grappleCollider = function(x, y, w, h, obj) {
};



//"-----------------------------", Minimum width, minimum height is 16

var levels = [
[
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{blockType:[0,0]},
},],
],
];

var currentLevel = levels[0];
//var displayedLevel = [];


var return4s = function(a, b, c, d, notDis, orDis) {
    if (orDis == undefined && notDis.length == 1) {
        if (a != notDis && a != undefined) {a = "-";} else {a = "1";}
        if (b != notDis && b != undefined) {b = "-";} else {b = "1";}
        if (c != notDis && c != undefined) {c = "-";} else {c = "1";}
        if (d != notDis && d != undefined) {d = "-";} else {d = "1";}
    } else if (orDis == undefined && notDis.length > 1) {
        var aNotDis = false;
        var bNotDis = false
        var cNotDis = false;
        var dNotDis = false;
        for (var i = 0; i < notDis.length; i++) {
            if (a == notDis[i]) {aNotDis = true;}
            if (b == notDis[i]) {bNotDis = true;}
            if (c == notDis[i]) {cNotDis = true;}
            if (d == notDis[i]) {dNotDis = true;}
        }
        if (a != undefined && !aNotDis) {a = "-";} else {a = "1";}
        if (b != undefined && !bNotDis) {b = "-";} else {b = "1";}
        if (c != undefined && !cNotDis) {c = "-";} else {c = "1";}
        if (d != undefined && !dNotDis) {d = "-";} else {d = "1";}
        /*if (a != notDis[0] && a != notDis[1] && a != undefined) {a = "-";} else {a = "1";}
        if (b != notDis[0] && b != notDis[1] && b != undefined) {b = "-";} else {b = "1";}
        if (c != notDis[0] && c != notDis[1] && c != undefined) {c = "-";} else {c = "1";}
        if (d != notDis[0] && d != notDis[1] && d != undefined) {d = "-";} else {d = "1";}*/
    } else {
        if (a != notDis && a != orDis && a != undefined) {a = "-";} else if (a == orDis) {a = "2";} else {a = "1";}
        if (b != notDis && b != orDis && b != undefined) {b = "-";} else if (b == orDis) {b = "2";} else {b = "1";}
        if (c != notDis && c != orDis && c != undefined) {c = "-";} else if (c == orDis) {c = "2";} else {c = "1";}
        if (d != notDis && d != orDis && d != undefined) {d = "-";} else if (d == orDis) {d = "2";} else {d = "1";}
    }

    return "" + a + "" + b + "" + c + "" + d;
};

var returnSurrounds = function(a, b, c, d) {
    if (a == "2") {a == "1";}
    if (b == "2") {b == "1";}
    if (c == "2") {c == "1";}
    if (d == "2") {d == "1";}
    return "" + a + "" + b + "" + c + "" + d;
};

var updateLevelMusic = function() {
  if (currentLevel[currentLevel.length - 1][0].attributes.blockType != undefined) {
    musicPlaying.volumeTo = currentLevel[currentLevel.length - 1][0].attributes.music.volume;
    musicPlaying.nextTrack = currentLevel[currentLevel.length - 1][0].attributes.music.track;
    musicPlaying.loop = currentLevel[currentLevel.length - 1][0].attributes.music.loop;
    musicPlaying.smoothTransition = currentLevel[currentLevel.length - 1][0].attributes.music.smoothTransition;
    musicPlaying.smoothTransition = currentLevel[currentLevel.length - 1][0].attributes.music.transitionSpeed;
  }
};
var updateLevelDisplayX = 0;
var updateLevelDisplayY = 0;
var updateLevelDisplayT = 0;
var updateLevelDisplay = function() {
try {
    updateLevelDisplayX = 0;
    updateLevelDisplayY = 0;
    updateLevelDisplayT = performance.now();
    bufferCanvas.width = currentLevel[0].length * 16;
    bufferCanvas.height = (currentLevel.length - 1) * 16;
    if (currentLevel[currentLevel.length - 1][0].attributes.underWater == true) {
        bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
        bufferCan.fillRect(0, 0, bufferCanvas.width, bufferCanvas.height);
    }
var displayUpdater = setInterval(function() {
updateLevelDisplayT = performance.now();
for (var j = updateLevelDisplayY; j < currentLevel.length - 1 && performance.now() - updateLevelDisplayT < 5; updateLevelDisplayY++) {
    j = updateLevelDisplayY;
    //if (j * 16 < -scrollY - 16 || j * 16 > -scrollY + 256) {continue;}
    updateLevelDisplayX = 0;
    for (var i = updateLevelDisplayX; i < currentLevel[j].length; updateLevelDisplayX++) {
        i = updateLevelDisplayX;
        //if (i * 16 < -scrollX - 16 || i * 16 > -scrollX + 455) {continue;}
         var elSelector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["8"]);
         var elSelector2 = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["-"]);
         var elSelector3 = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["*"]);
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector[0] == "1" && !currentLevel[currentLevel.length - 1][0].attributes.underWater) {
            bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
            bufferCan.fillRect(i * 16, j * 16, 16, 4);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector[2] == "1" && !currentLevel[currentLevel.length - 1][0].attributes.underWater) {
            bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
            bufferCan.fillRect(i * 16, j * 16 + 12, 16, 4);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector[3] == "1" && !currentLevel[currentLevel.length - 1][0].attributes.underWater) {
            bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
            bufferCan.fillRect(i * 16, j * 16, 4, 16);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector[1] == "1" && !currentLevel[currentLevel.length - 1][0].attributes.underWater) {
            bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
            bufferCan.fillRect(i * 16 + 12, j * 16, 4, 16);
        }


        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector3[0] == "1") {
            bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
            bufferCan.fillRect(i * 16, j * 16, 16, 4);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector3[2] == "1") {
            bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
            bufferCan.fillRect(i * 16, j * 16 + 12, 16, 4);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector3[3] == "1") {
            bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
            var isLiquidTall = 0;
            if (currentLevel[constrain(j - 1, 0, j)][constrain(i - 1, 0, i)]) {isLiquidTall = 3;}
            bufferCan.fillRect(i * 16, j * 16 + isLiquidTall, 4, 16 - isLiquidTall);
        }
        if (currentLevel[j][i] == "1" | currentLevel[j][i] == "2" && elSelector3[1] == "1") {
            bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
            var isLiquidTall = 0;
            if (currentLevel[constrain(j - 1, 0, j)][constrain(i + 1, i, currentLevel[0].length)]) {isLiquidTall = 3;}
            bufferCan.fillRect(i * 16 + 12, j * 16 + isLiquidTall, 4, 16 - isLiquidTall);
        }

        switch (currentLevel[j][i]) {
          case "1":
            fill(255, 255, 255);
            //rect(i * 16, j * 16, 16, 16);
            //Up, right, down, left
            var selector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["1","3","9"]);
            var disImg = [0,0];
            //rect(i * 16, j * 16, 16, 16);
            switch (selector) {
                case "----":disImg = [52,52];break;
                case "1---":disImg = [52,35];break;
                case "-1--":disImg = [1,52];break;
                case "11--":disImg = [1,35];break;
                case "--1-":disImg = [52,1];break;
                case "1-1-":disImg = [52,18];break;
                case "-11-":disImg = [1,1];break;
                case "111-":disImg = [1,18];break;
                case "---1":disImg = [35,52];break;
                case "1--1":disImg = [35,35];break;
                case "-1-1":disImg = [18,52];break;
                case "11-1":disImg = [18,35];break;
                case "--11":disImg = [35,1];break;
                case "1-11":disImg = [35,18];break;
                case "-111":disImg = [18,1];break;
                case "1111":disImg = [18,18];break;
            }
            if (currentLevel[currentLevel.length - 1][0].attributes.blockType != undefined) {
                disImg[0] += currentLevel[currentLevel.length - 1][0].attributes.blockType[0];
                disImg[1] += currentLevel[currentLevel.length - 1][0].attributes.blockType[1];
            }
            bufferImage("blockSprites", {x:disImg[0],y:disImg[1],w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "2":
            fill(255, 255, 255);
            //rect(i * 16, j * 16, 16, 16);
            //Up, right, down, left
            var selector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["1","2","9"]);
            var disImg = [0,0];
            //rect(i * 16, j * 16, 16, 16);
            switch (selector) {
                case "----":disImg = [52,52];break;
                case "1---":disImg = [52,35];break;
                case "-1--":disImg = [1,52];break;
                case "11--":disImg = [1,35];break;
                case "--1-":disImg = [52,1];break;
                case "1-1-":disImg = [52,18];break;
                case "-11-":disImg = [1,1];break;
                case "111-":disImg = [1,18];break;
                case "---1":disImg = [35,52];break;
                case "1--1":disImg = [35,35];break;
                case "-1-1":disImg = [18,52];break;
                case "11-1":disImg = [18,35];break;
                case "--11":disImg = [35,1];break;
                case "1-11":disImg = [35,18];break;
                case "-111":disImg = [18,1];break;
                case "1111":disImg = [18,18];break;
            }
            if (currentLevel[currentLevel.length - 1][0].attributes.blockType.length > 2) {
                disImg[0] += currentLevel[currentLevel.length - 1][0].attributes.blockType[2];
                disImg[1] += currentLevel[currentLevel.length - 1][0].attributes.blockType[3];
            }
            bufferImage("blockSprites", {x:disImg[0],y:disImg[1],w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "3":
            //Slopes
            //Up, right, down, left
            var selector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            "1","3");
            var disImg = [0,0];
            switch (selector) {
                case "-21-":disImg = [1,69];break;
                case "-112":disImg = [18,69];break;
                case "-211":disImg = [35,69];break;
                case "--12":disImg = [52,69];break;
                case "12--":disImg = [1,86];break;
                case "11-2":disImg = [18,86];break;
                case "12-1":disImg = [35,86];break;
                case "1--2":disImg = [52,86];break;
                case "-12-":disImg = [69,1];break;
                case "211-":disImg = [69,18];break;
                case "112-":disImg = [69,35];break;
                case "21--":disImg = [69,52];break;
                case "--21":disImg = [86,1];break;
                case "2-11":disImg = [86,18];break;
                case "1-21":disImg = [86,35];break;
                case "2--1":disImg = [86,52];break;
                //Steep slopes
                case "-11-":disImg = [69,69];break;
                case "--11":disImg = [86,69];break;
                case "11--":disImg = [69,86];break;
                case "1--1":disImg = [86,86];break;
            }
            if (currentLevel[currentLevel.length - 1][0].attributes.blockType != undefined) {
                disImg[0] += currentLevel[currentLevel.length - 1][0].attributes.blockType[0];
                disImg[1] += currentLevel[currentLevel.length - 1][0].attributes.blockType[1];
            }
            bufferImage("blockSprites", {x:disImg[0],y:disImg[1],w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "4":
            bufferImage("blockSprites", {x:86,y:255,w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "5":
            bufferImage("blockSprites", {x:103,y:238,w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "6":
            bufferImage("blockSprites", {x:69,y:238,w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "7":
            bufferImage("blockSprites", {x:86,y:221,w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "8":
            if (currentLevel[currentLevel.length - 1][0].attributes.underWater != true /*&& currentLevel[constrain(j - 1, 0, j)][i] == "-"*/) {
              bufferCan.fillStyle = "rgba(0, 0, 255, 0.5)";
              bufferCan.fillRect(i * 16, j * 16, 16, 16);
            } else {
              bufferCan.clearRect(i * 16, j * 16, 16, 16);
            }
          break;
          case "*":
              var maxThingyY = 1;
              if (currentLevel[constrain(j - 1, 0, j)][i] != "*" && currentLevel[constrain(j - 1, 0, j)][i] != "1" && currentLevel[constrain(j - 1, 0, j)][i] != "2" && currentLevel[constrain(j - 1, 0, j)][i] != "9" && currentLevel[constrain(j - 1, 0, j)][i] != "0") {
                  bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
                  bufferCan.fillRect(i * 16, j * 16 + 3, 16, 13);
                  maxThingyY = 4;
              } else {
                  bufferCan.fillStyle = "rgba(163, 73, 164, 0.7)";
                  bufferCan.fillRect(i * 16, j * 16, 16, 16);
              }
              /*bufferCan.fillStyle = "rgba(255, 255, 255)";
              for (var o = 0; o < 16; o++) {
                  bufferCan.fillRect(i * 16 + floor(random(0, 15)), j * 16 + floor(random(maxThingyY, 15)), 1, 1);
              }*/
          break;
          case "9":
            fill(255, 255, 255);
            //rect(i * 16, j * 16, 16, 16);
            //Up, right, down, left
            var selector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            ["1","3","9"]);
            var disImg = [0,0];
            //rect(i * 16, j * 16, 16, 16);
            switch (selector) {
                case "----":disImg = [52,52];break;
                case "1---":disImg = [52,35];break;
                case "-1--":disImg = [1,52];break;
                case "11--":disImg = [1,35];break;
                case "--1-":disImg = [52,1];break;
                case "1-1-":disImg = [52,18];break;
                case "-11-":disImg = [1,1];break;
                case "111-":disImg = [1,18];break;
                case "---1":disImg = [35,52];break;
                case "1--1":disImg = [35,35];break;
                case "-1-1":disImg = [18,52];break;
                case "11-1":disImg = [18,35];break;
                case "--11":disImg = [35,1];break;
                case "1-11":disImg = [35,18];break;
                case "-111":disImg = [18,1];break;
                case "1111":disImg = [18,18];break;
            }
            if (currentLevel[currentLevel.length - 1][0].attributes.blockType.length > 4) {
                disImg[0] += currentLevel[currentLevel.length - 1][0].attributes.blockType[4];
                disImg[1] += currentLevel[currentLevel.length - 1][0].attributes.blockType[5];
            }
            bufferImage("blockSprites", {x:disImg[0],y:disImg[1],w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
          case "0":
            var selector = return4s(
            currentLevel[constrain(j - 1, 0, j)][i],
            currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
            currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
            currentLevel[j][constrain(i - 1, 0, i)],
            "0");
            if (selector == "-111") {selector = "-1-1";}
            if (selector == "111-") {selector = "11--";}
            var disImg = [0, 0];
            switch (selector) {
                case "-1--":disImg = [69,137];break;
                case "-1-1":disImg = [86,137];break;
                case "---1":disImg = [103,137];break;
                case "--1-":disImg = [120,137];break;
                case "1-1-":disImg = [120,154];break;
                case "1---":disImg = [120,171];break;
                case "-11-":disImg = [69,154];break;
                case "--11":disImg = [86,154];break;
                case "11--":disImg = [69,171];break;
                case "1--1":disImg = [86,171];break;
            }
            bufferImage("blockSprites", {x:disImg[0],y:disImg[1] + 16,w:16,h:16}, i * 16, j * 16, 16, 16);
          break;
        }
    }
}
    if (updateLevelDisplayY >= currentLevel.length - 1) {
        clearInterval(displayUpdater);
    }
        //alert(currentLevel[0].length + ", " + updateLevelDisplayX + "\n" + currentLevel.length + ", " + updateLevelDisplayY);
}, 16);
} catch(e){alert(e);}
};


updateLevelDisplay();

var spawnEntities = function() {
    enemies = [];
    for (var j = 0; j < currentLevel.length - 2; j++) {
        for (var i = 0; i < currentLevel[j].length; i++) {
            var l = currentLevel[j][i];
            switch(l) {
                case "~":
                enemies.push(new Campfire(i * 16, j * 16, 0));
                break;

                case "W":
                enemies.push(new Worm(i * 16, j * 16, 1));
                break;
                case "A":
                enemies.push(new pancakeBeetle(i * 16, j * 16, 1));
                break;
                case "S":
                enemies.push(new Slime(i * 16, j * 16, 1));
                break;
                case "H":
                enemies.push(new FlyEggs(i * 16, j * 16));
                break;
                case "h":
                enemies.push(new FlyEggsGone(i * 16, j * 16));
                break;
                case "P":
                enemies.push(new redParasite(i * 16, j * 16, 1));
                break;
                case "Y":
                enemies.push(new YellowSlime(i * 16, j * 16));
                break;
                case "F":
                enemies.push(new BigRedFly(i * 16, j * 16));
                break;
                case "B":
                var selector = return4s(
                currentLevel[constrain(j - 1, 0, j)][i],
                currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
                currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
                currentLevel[j][constrain(i - 1, 0, i)],
                ["1", "2"]);
                enemies.push(new Bat(i * 16, j * 16, selector));
                break;
                case "D":
                var selector = return4s(
                currentLevel[constrain(j - 1, 0, j)][i],
                currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
                currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
                currentLevel[j][constrain(i - 1, 0, i)],
                ["1", "2"]);
                enemies.push(new sleepDropper(i * 16, j * 16, selector));
                break;
                case "Z":
                    enemies.push(new malfunctioningPerson(i * 16, j * 16 + 9));
                break;
                case "R":
                    enemies.push(new malfunctioningRobot(i * 16, j * 16 + 9));
                break;


                case "*":
                var selector = return4s(
                currentLevel[constrain(j - 1, 0, j)][i],
                currentLevel[j][constrain(i + 1, i, currentLevel[j].length - 1)],
                currentLevel[constrain(j + 1, j, currentLevel.length - 2)][i],
                currentLevel[j][constrain(i - 1, 0, i)],
                ["1", "2","0","9","8"]);
                if (selector[2] == "1") {
                    enemies.push(new sleepParticleSpawner(i * 16, j * 16 + 15));
                }
                break;

                case "`":currentLevel[currentLevel.length - 1][0]["`"](i, j);break;
                case "!":currentLevel[currentLevel.length - 1][0]["!"](i, j);break;
                case "@":currentLevel[currentLevel.length - 1][0]["@"](i, j);break;
                case "#":currentLevel[currentLevel.length - 1][0]["#"](i, j);break;
                case "$":currentLevel[currentLevel.length - 1][0]["$"](i, j);break;
                case "%":currentLevel[currentLevel.length - 1][0]["%"](i, j);break;
                case "^":currentLevel[currentLevel.length - 1][0]["^"](i, j);break;
            }
        }
    }
};

var loadingArea = false;

const loadLevel = function(whichOne) {
    currentLevel = levels[whichOne];
    currentScreen = whichOne;
    updateLevelDisplay();
    enemies = [];
    spawnEntities();
};

const loadArea = function(area) {
    if (currentArea != area) {
        currentArea = area;
        loadingArea = true;
        var areaElement = document.getElementById("currentAreaData");
        areaElement.remove();
        var newArea = document.createElement("script");
        newArea.src = "https://raw.githubusercontent.com/Vakore/Derisory-Demo/main/derisory-demo/Scripts/levels/" + area + ".js";
        newArea.id = "currentAreaData";
        newArea.onload = function() {loadingArea = false;};
        document.getElementById("areaDummy").appendChild(newArea);
    } else {
    }
};