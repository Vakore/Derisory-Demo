//"-----------------------------", Minimum width, minimum height is 16
var infestedMinesPropsImgs = {
    "crate":{x:61,y:46,w:15,h:15},
    "bigCrate":{x:77,y:46,w:32,h:15},
    "minecart":{x:37,y:46,w:23,h:13},
    "lamp1Off":{x:37,y:60,w:7,h:12},
    "lamp2Off":{x:37,y:73,w:7,h:9},
    "verticalBucketsTop":{x:5,y:82,w:15,h:13},
    "verticalBucketsMid":{x:5,y:96,w:15,h:70},
    "verticalBucketsBottom":{x:5,y:167,w:15,h:10},
    "horizontalBucketsLeft":{x:21,y:83,w:19,h:14},
    "horizontalBucketsMid":{x:40,y:83,w:62,h:14},
    "horizontalBucketsRight":{x:102,y:83,w:16,h:14},
    "redFlyNest1":{x:21,y:147,w:48,h:37},
    "redFlyNest2":{x:70,y:147,w:48,h:37},
    "redFlyNest3":{x:21,y:185,w:30,h:16},
    "redFlyNest4":{x:52,y:185,w:30,h:16},
    "redFlyNest5":{x:21,y:202,w:30,h:16},
    "redFlyNest6":{x:52,y:202,w:30,h:16},
    "rails":{x:45,y:62,w:75,h:3},
    "sign":{x:37,y:22,w:10,h:23},

    "signStatic1":{x:48,y:22,w:8,h:7},
    "signStatic2":{x:48,y:30,w:8,h:7},
    "signStatic3":{x:48,y:38,w:8,h:7},
    "signArrow":{x:57,y:22,w:8,h:7},
    "signFire1":{x:57,y:30,w:8,h:7},
    "signFire2":{x:57,y:38,w:8,h:7},

    "malfunctioningMiningMachineBg":{x:119,y:139,w:54,h:92},
};
backgrounds = [
  //First BG
  {
    "bgTimer":0,
    "bgTimerDir":0.1,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
            background.bgTimer += background.bgTimerDir;
        }
        if (background.bgTimer >= 9) {
            background.bgTimerDir = -0.1;
            background.bgTimer = 8;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.1;
            background.bgTimer = 1;
        }
        save();
        translate(-544, -128);
        image("infestedMinesProps", infestedMinesPropsImgs.sign, 145, 201);
        translate(154, 202);
        scale(-1, 1);
        image("infestedMinesProps", infestedMinesPropsImgs[["signArrow","signArrow","signArrow",
                                                            "signStatic1","signStatic2","signStatic3",
                                                            "signFire1","signFire2","signFire1"][floor(background.bgTimer)]], 0, 0);
        restore();
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -143, 81);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -128, 81);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -135, 66);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 335, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, -235, 83);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest1, 465, -33);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 403, -65);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 143, -65);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 351, 31);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, -513, -65);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, -350, -81);
    },1],
  },{
    "bgTimer":0,
    "bgTimerDir":0.01,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        background.bgTimer += background.bgTimerDir;
        if (background.bgTimer >= 4) {
            background.bgTimerDir = -0.02;
            background.bgTimer = 3;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.02;
            background.bgTimer = 1;
        }

        image("infestedMinesProps", infestedMinesPropsImgs.crate, -116, 225);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -93, 213);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -96, 225);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 20, 240);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, -48, 400);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 48, 272);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, -48, 96);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -128, 17);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -112, 5);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -80, 17);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -192, -303);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -128, -303);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -123, -315);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 0, -367);


        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 160, 12);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 160, 25);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 160, 95);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 160, 165);

        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, -146, 212);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -146, 225);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -146, 295);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, -146, 365);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 160, 387);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 160, 400);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 160, 470);

        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, -216, -17);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, -133, 63);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 139, -368);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 11, -321);
    },1],
  },{
    "bgTimer":0,
    "bgTimerDir":0.01,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        background.bgTimer += background.bgTimerDir;
        if (background.bgTimer >= 4) {
            background.bgTimerDir = -0.02;
            background.bgTimer = 3;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.02;
            background.bgTimer = 1;
        }
        image("infestedMinesProps", infestedMinesPropsImgs.rails, 266, -3);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, 311, -3);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, 356, -3);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, 356, -13);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, 816, -115);


        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, -312, -90);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -312, -77);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, -312, -7);

        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, -134, -106);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -134, -93);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, -134, -23);

        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, -456, 76);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -456, 89);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -456, 159);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -456, 229);
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, -456, 299);


        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -606, 16);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -596, 4);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -653, 16);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -638, 16);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -645, 1);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -643, -11);

        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -706, 192);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -653, 192);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -638, 192);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -645, 177);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -643, 165);

        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, -515, 64);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, -515, 176);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, -545, 272);

        image("infestedMinesProps", infestedMinesPropsImgs.rails, -721, 349);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, -796, 349);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, -871, 349);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, -946, 349);
        image("infestedMinesProps", infestedMinesPropsImgs.rails, -821, 349);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, -756, 339);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, -796, 339);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, -696, 339);

        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, -1189, 223);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, -1237, 207);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, -1465, 223);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, -1561, 271);
    },1],
  },{
    "bgTimer":0,
    "bgTimerDir":0.05,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        if (!paused) {
            background.bgTimer += background.bgTimerDir;
        }
        if (background.bgTimer >= 9) {
            background.bgTimerDir = -0.1;
            background.bgTimer = 8;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.1;
            background.bgTimer = 1;
        }

        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, -86, -290);
        for (var i = 0; i < 7; i++) {
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, -86, -277 + i * 70);
        }
        image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, -86, 213);

        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 3, -352);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 207, -352);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, -449, -352);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, -481, -336);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest6, -481, -272);
        image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, -513, -320);

        image("infestedMinesProps", infestedMinesPropsImgs.sign, 187, -103);
        
        image("infestedMinesProps", infestedMinesPropsImgs[["signArrow","signArrow","signArrow",
                                                            "signStatic1","signStatic2","signStatic3",
                                                            "signFire1","signFire2","signFire1"][floor(background.bgTimer)]], 188, -102);

        image("infestedMinesProps", infestedMinesPropsImgs.sign, -47, 329);
        save();
        translate(-38, 330);
        scale(-1, 1);
        image("infestedMinesProps", infestedMinesPropsImgs[["signArrow","signArrow","signArrow",
                                                            "signStatic1","signStatic2","signStatic3",
                                                            "signFire1","signFire2","signFire1"][floor(background.bgTimer)]], 0, 0);
        restore();
    },1],
  },{
    "bgTimer":0,
    "bgTimerDir":0.05,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        if (!paused) {
            background.bgTimer += background.bgTimerDir;
        }
        if (background.bgTimer >= 9) {
            background.bgTimerDir = -0.1;
            background.bgTimer = 8;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.1;
            background.bgTimer = 1;
        }
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -116, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -163, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -148, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -155, -79);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, -153, -91);

        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 116, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 123, -79);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 163, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 148, -64);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 155, -79);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, 157, -91);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, 147, -91);
        image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, 127, -91);

        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -156, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -156, -15);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -196, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, -196, -15);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -118, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -103, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, -110, -15);

        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 70, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 78, -15);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 146, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 146, -15);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 118, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 103, 0);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 110, -15);

        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 70, 80);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 78, 65);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 95, 65);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 110, 65);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 90, 50);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 105, 50);
        image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 146, 80);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 146, 65);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 161, 65);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 118, 80);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 103, 80);
        image("infestedMinesProps", infestedMinesPropsImgs.crate, 110, -15);
    },1],
  },{
    "bgTimer":0,
    "bgTimerDir":0.05,
    "backFuncs":[function() {
    },5000,function() {
    },50,function() {
        if (!paused) {
            background.bgTimer += background.bgTimerDir;
        }
        if (background.bgTimer >= 9) {
            background.bgTimerDir = -0.1;
            background.bgTimer = 8;
        } else if (background.bgTimer <= 0) {
            background.bgTimerDir = 0.1;
            background.bgTimer = 1;
        }
        for (var i = 0; i < 5; i++) {
            image("infestedMinesProps", infestedMinesPropsImgs.rails, -586 + i * 45, 93);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 286 + i * 45, 61);
        }
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, -386, 83);
        image("infestedMinesProps", infestedMinesPropsImgs.minecart, 386, 51);
    },1],
  },
  //Red Fly Boss BG
  {
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-233, -128);
            image("redFlyAssets", {x:329,y:87,w:81,h:37,shiftX:0,shiftY:0}, 320, 32); 
            image("redFlyAssets", {x:1,y:159,w:51,h:57,shiftX:0,shiftY:0}, 64, 167); 
            image("redFlyAssets", {x:53,y:159,w:70,h:70,shiftX:0,shiftY:0}, 331, 154);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-233, -128);
            image("redFlyAssets", {x:329,y:87,w:81,h:37,shiftX:0,shiftY:0}, 380, 126); 
            save();
            translate(224, 184);
            scale(-1, -1);
            image("redFlyAssets", {x:1,y:159,w:51,h:57,shiftX:0,shiftY:0}, 0, 0);
            restore();
            image("redFlyAssets", {x:1,y:159,w:51,h:57,shiftX:0,shiftY:0}, 0, 124); 
            image("redFlyAssets", {x:1,y:159,w:51,h:57,shiftX:0,shiftY:0}, 224, 119); 
            image("redFlyAssets", {x:53,y:159,w:70,h:70,shiftX:0,shiftY:0}, 331, 114);
            save();
            translate(131, 114);
            scale(-1, 1);
            image("redFlyAssets", {x:53,y:159,w:70,h:70,shiftX:0,shiftY:0}, 0, 0);
            restore();
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-1168, -128);

            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 570, 209);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 588, 177);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 508, 209);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 525, 209);
            for (var i = 0; i < 5; i++) {
                image("infestedMinesProps", infestedMinesPropsImgs.rails, 1286 + i * 45, 157);
                if (i < 3) {
                    image("infestedMinesProps", infestedMinesPropsImgs.rails, 1586 + i * 45, 173);
                }
                image("infestedMinesProps", infestedMinesPropsImgs.rails, 1886 + i * 45, 221);
            }
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 1386, 147);
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 1416, 147);
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 1446, 147);
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 1946, 211);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, 0, 190);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 202, 176);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-928, -224);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 196, 244);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 196, 257);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 196, 327);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 196, 397);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 670, 401);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 705, 401);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 288, 272);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 310, 336);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-792, -200);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 296, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 296, 77);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 296, 147);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 296, 217);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 40, 208);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 80, 208);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 123, 176);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 235, 144);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 79, 63);


            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, 367, 15);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 529, 192);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 559, 192);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 559, 15);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 589, 15);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 659, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest6, 689, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 882, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 1010, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 1428, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 1428, 207);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 1375, 15);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-752, -312);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 7, 589);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 77, 589);
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 87, 579);

            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 352, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 352, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 366, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 387, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 401, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 457, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 471, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 457, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 471, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 557, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 571, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 557, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 571, 577);

            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 621, 549);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 621, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 621, 577);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 653, 549);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 653, 563);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 653, 577);

            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 751, 494);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 722, 527);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest6, 716, 576);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 1043, 576);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest1, 1424, 209);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-464, -288);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 463, 111);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, 703, 111);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-232, -128);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest5, 387, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 67, 47);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 232, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 232, 128);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 232, 192);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0,
    "backFuncs":[
        function() {
            save();
            translate(-568, -128);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 244, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 332, 128);
            for (var i = 0; i < 5; i++) {
                image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 832 + i * 32, 177);
                image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 832 + i * 32, 162);
                image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 832 + i * 32, 147);
            }
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":0.01,
    "backFuncs":[
        function() {
            if (!paused) {
                background.bgTimer += background.bgTimerDir;
                if (background.bgTimer > 360) {background.bgTimer -= 360;}
            }
            save();
            translate(-696, -200);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 31, 143);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, 31, 256);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 239, 95);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 244, 16);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 308, 240);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 518, 240);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 748, 256);
            for (var i = 0; i < 5; i++) {
                image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 832 + i * 32, 353);
                image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 832 + i * 32, 338);
            }
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 562, 343 + sin(background.bgTimer) * 3);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 462, 333 - sin(background.bgTimer) * 3);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 262, 333 + sin(background.bgTimer) * 3);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 1092, 112);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            save();
            translate(-464, -288);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 47, 95);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest2, 31, 208);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 259, 31);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 144, 192);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 708, 192);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp2Off, 796, 240);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest3, 870, 240);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                background.bgTimer += background.bgTimerDir;
            }
            if (background.bgTimer >= 9) {
                background.bgTimerDir = -0.1;
                background.bgTimer = 8;
            } else if (background.bgTimer <= 0) {
                background.bgTimerDir = 0.1;
                background.bgTimer = 1;
            }
            save();
            translate(-1624, -232);
            image("infestedMinesProps", infestedMinesPropsImgs.redFlyNest4, 31, 367);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 0, 429);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 70, 429);
            image("infestedMinesProps", infestedMinesPropsImgs.rails, 140, 429);
            image("infestedMinesProps", infestedMinesPropsImgs.minecart, 140, 419);

            image("infestedMinesProps", infestedMinesPropsImgs.sign, 1199, 233);
            save();
            translate(1208, 234);
            scale(-1, 1);
            image("infestedMinesProps", infestedMinesPropsImgs[["signArrow","signArrow","signArrow",
                                                            "signStatic1","signStatic2","signStatic3",
                                                            "signFire1","signFire2","signFire1"][floor(background.bgTimer)]], 0, 0);
            restore();
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                background.bgTimer += background.bgTimerDir;
            }
            if (background.bgTimer >= 9) {
                background.bgTimerDir = -0.1;
                background.bgTimer = 8;
            } else if (background.bgTimer <= 0) {
                background.bgTimerDir = 0.1;
                background.bgTimer = 1;
            }
            save();
            translate(-768, -128);

            image("infestedMinesProps", infestedMinesPropsImgs.sign, 1415, 153);
            image("infestedMinesProps", infestedMinesPropsImgs[["signArrow","signArrow","signArrow",
                                                            "signStatic1","signStatic2","signStatic3",
                                                            "signFire1","signFire2","signFire1"][floor(background.bgTimer)]], 1416, 154);
            restore(); 
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                if (background.bgTimer >= 11) {
                    background.bgTimer -= 11;
                }
                background.bgTimer += background.bgTimerDir;
            }
            save();
            translate(-464, -128);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 256, 32);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 456, 32);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 547, 32);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 747, 32);

            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 256, 123);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 456, 123);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 547, 123);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 747, 123);

            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 256, 214);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 456, 214);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 547, 214);
            image("infestedMinesProps", {"x":121,"y":36 + 11 - background.bgTimer,"w":96,"h":102 - 11}, 747, 214);
            restore();
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                if (background.bgTimer >= 11) {
                    background.bgTimer -= 11;
                }
                background.bgTimer += background.bgTimerDir;
            }
            save();
            translate(-668, -128);
            image("infestedMinesProps", infestedMinesPropsImgs.malfunctioningMiningMachineBg, 300, 116);
            image("infestedMinesProps", infestedMinesPropsImgs.malfunctioningMiningMachineBg, 450, 116);
            image("infestedMinesProps", infestedMinesPropsImgs.malfunctioningMiningMachineBg, 750, 116);
            restore();
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                if (background.bgTimer >= 11) {
                    background.bgTimer -= 11;
                }
                background.bgTimer += background.bgTimerDir;
            }
            save();
            translate(-668, -128);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 208, 184);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 232, 184);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 264, 184);
            restore();
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                if (background.bgTimer >= 11) {
                    background.bgTimer -= 11;
                }
                background.bgTimer += background.bgTimerDir;
            }
            save();
            translate(-768, -128);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 96, 94);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 96, 107);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 96, 177);

            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsLeft, 136, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsMid, 154, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsMid, 216, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsMid, 268, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsMid, 330, 64);
            image("infestedMinesProps", infestedMinesPropsImgs.horizontalBucketsRight, 392, 64);

            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 496, 94);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 496, 107);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 496, 177);
            restore();
        },1
    ]
  },{
    "bgTimer":0,
    "bgTimerDir":1,
    "backFuncs":[
        function() {
            if (!paused) {//(!!!) need to make it so that whenever the game is frozen, like death or dramatic timers
                if (background.bgTimer >= 11) {
                    background.bgTimer -= 11;
                }
                background.bgTimer += background.bgTimerDir;
            }
            save();
            translate(-232, -184);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsTop, 80, 126);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsMid, 80, 139);
            image("infestedMinesProps", infestedMinesPropsImgs.verticalBucketsBottom, 80, 209);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 233, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.bigCrate, 240, 211);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 264, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 330, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 344, 225);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 351, 211);
            image("infestedMinesProps", infestedMinesPropsImgs.lamp1Off, 338, 213);
            image("infestedMinesProps", infestedMinesPropsImgs.crate, 358, 225);
            restore();
        },1
    ]
  },
];

levels = [
[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11-`----`------------`----`11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11------------~--------------",
"!----------------------------",
"88888888811111111111111------",
"88881111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
  "`":function(i, j){enemies.push(new dripSpawner(i * 16 + 4, j * 16));},
 "!":function(i, j) {
    enemies.push(new breakWall(i * 16, j * 16, 16, 48, -1, 7, function(x, y, hp) {
        for (var i = 0; i < 3; i++) {
            image("blockSprites", {x:137,y:18,w:16,h:16}, x, y + i * 16);
        }
    },function(x, y) {
        fill(0, 0, 0);
        rect(x, y - 16, 16, 16);
        rect(x, y + 48, 16, 16);
    }));
  } 
},
{/*area:"plains",*/screen:26,exit:2,x:-3,y:11,w:3,h:5,setX:0.5,setY:13},{screen:1,exit:1,x:29,y:10,w:3,h:5,setX:27.5,setY:12},],
],[//Add secret
"1111111111111111111111111111111111111111111111111111---1111111111111",
"11111111111111111111111111111111111111111111111111------111111111111",
"111111111111111111111111111111111111111111111111---------11111111111",
"11111----`----1111----1111111111111111111111111-----2222211111111111",
"11@-------------------H-1111111111111111111---H-----H-----`--1111111",
"11-----------------------`-------111111------------------------11111",
"11---------------------------------`------------------------------11",
"11---------------------------------------------1111111111---------11",
"11------------------------------------------1111111111111111------11",
"---------------------------------------------11111111111111----11111",
"---------------------------------------111------11111111------111111",
"-----------------------------------P--111118888888888888888888111111",
"111111---------------------------11111111118888888888888888888111111",
"11111111--------------------1111111111111111888888888888888881111111",
"11111111111111111111111111111111111111111111111111188111111111111111",
"11111111111111111111111111111111111111111111111111188111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:false,transitionSpeed:0.5},blockType:[102,0,204,102,120,205]},
"background":backgrounds[0],
"`":function(i, j){enemies.push(new dripSpawner(i * 16 + 4, j * 16));},
"@":function(i, j){enemies.push(new areaNameBox(i, j, 10, 10, "Infested Mines"));},
},
{screen:0,exit:2,x:-3,y:8,w:3,h:5,setX:0.5,setY:10},{screen:2,exit:1,x:51,y:-3,w:5,h:3,setX:53,setY:0},{screen:3,exit:1,x:50,y:16,w:5,h:3,setX:53,setY:12},],
],[
"11111111111111---111111111111",
"1111111111--------11111111111",
"111111--------------111111111",
"1111---------11111-1111111111",
"1--------------h---1111111111",
"1------------------1111111111",
"1------------------1111111111",
"1----------11-------111111111",
"1---------------------1111111",
"1----------------------111111",
"1-----------------P------1111",
"1----------111111111111111111",
"----------1111-11111111111111",
"-----------------111111111111",
"-------------------1111111111",
"111111111----------1111111111",
"111111111-----------111111111",
"11111111111---------111111111",
"1111111--h----------B-1111111",
"1111--h-----------------11111",
"111---------111----------1111",
"11----------111-----------111",
"1-------------B-------------1",
"118888811--------------------",
"1188888111-------------------",
"1118881111-------------------",
"111111111111-----------111111",
"11111111111------------111111",
"111111111---------------11111",
"111111---------11111----11111",
"11111----------11111-------B1",
"11111----------11111--------1",
"1------------111111111------1",
"1-----------1111111111------1",
"1---------P1111111111111----1",
"1--11111111111111111111-----1",
"1-----1111111111111---------1",
"1-------111111111---------111",
"1--------11111------------111",
"111-------------------------1",
"1---------------------------1",
"1----------P----------------1",
"1----1111111111-------------1",
"1--------H------------------1",
"1---------------1111--------1",
"1111-------------H----------1",
"111---------------------11111",
"1------------------------1111",
"1------111-----------------11",
"1------111-----222222-------1",
"1---------------------------1",
"1--11-----------------------1",
"1--11-----------------------1",
"1---H----------11111111-----1",
"1----------------1111111----1",
"1-----------------H--11-----1",
"1---------------------------1",
"1--------222222-----------111",
"1-------------------------111",
"1--------------------------11",
"1---111---------------------1",
"1---111--------------111----1",
"1---------------------------1",
"1---------------------------1",
"1111111111---1111111111111111",
"1111111111---1111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[1],
},
{screen:1,exit:2,x:9,y:66,w:5,h:3,setX:13.5,setY:62,setXL:8.5,setYL:62},{screen:30,exit:1,x:29,y:22,w:3,h:5,setX:27.5,setY:24},
{screen:4,exit:1,x:-3,y:11,w:3,h:5,setX:0.5,setY:13},{screen:11,exit:1,x:13,y:-3,w:5,h:3,setX:15,setY:0},],
],[
"11111111111111111111111111111111111111111--11111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111--11111111111111111111111111111111222222211111111111111111",
"1188888888111111111--------------------------------------1111111111111--------------------118888888",
"1188888888111111-----------------------------------------111111111111---------------------118888888",
"88888888881111111----------------------1----1-------------111111111----------11------------18888888",
"888888888811111111---------------------1----1--------------111111--------P---1111----------1--11111",
"88888888881111111----------------------11---1----------------11116----------51111116-------1@-11111",
"1111118888111-1111----------------11----11111----------------1111-----------51111111----------11111",
"1111111---11----1-----------------11----------P--------------1111-----------511111116----------1111",
"1111111---1---------------------------------------------------111---P--------1111111----------51111",
"1111111-------------------P-----------------------------------1116-----------1111111----------51111",
"1111111-------------------------------------------------------111------------111111P-----------1111",
"1111111-------------------------------------------------------111-----------21111111-2---------1111",
"1111111------------------------------------------------------111-----------22111111122--------51111",
"1111111-----P-----------------------------------------------111-----------221111111111---------1111",
"1111111----------------------------------------------------1111----------221111111111P---------1111",
"1111111!------------------!-!----!----!-------------P------1111-----P-----11111111111----------1111",
"11111111----------------1111111111111111--!----------------2222----------211111111111111-2---------",
"11111111---------------11111111111111111111!------------------------2---1111111111111111122--------",
"1111111111-------------111111111111111111111------------------------22-111111111111111111122-------",
"111111111144444444444441111111111111111111114444444444444411111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205],underWater:true},
  "!":function(i, j){enemies.push(new grass(i * 16, j * 16 - 16, 16, 32, ["seaweed1", "seaweed2", "seaweed3", "seaweed4"], 0.1));},
  "@":function(i, j){
    enemies.push(new breakWall(i * 16, j * 16 - 16, 32, 16, 0.5, 2, function(x,y,hp) {
      image("notEnemySprites", notEnemySprites["breakWallBottom" + constrain(4 - hp, 1, 3)], x, y);
    },function(x,y){
        fill(0, 0, 0);
        rect(x - 8, y - 64, 128, 64);
        rect(x + 32, y, 144, 16);
    }),
        new checkPoint(1, 0, 9, 8, 4.5, 5, false),
        new checkPoint(7, 8, 3, 11, 8.25, 17, false),
        new checkPoint(23, 1, 5, 16, 25.5, 15, false),
        new checkPoint(39, 1, 6, 6, 42, 5, false),
        new checkPoint(39, 8, 5, 10, 41, 16, false),
        new checkPoint(58, 4, 5, 16, 60, 18, false),
        new checkPoint(63, 15, 10, 5, 64, 18, false),
        new checkPoint(77, 0, 2, 5, 77.5, 2, false),
        new checkPoint(81, 0, 2, 6, 81.5, 4, false),
        new checkPoint(92, 0, 5, 6, 95.5, 3, false),
        new checkPoint(85, 15, 13, 5, 94, 18, false),
    );
  },
},
{screen:1,exit:3,x:40,y:-3,w:5,h:3,setX:41.5,setY:0},{screen:20,exit:1,x:-3,y:3,w:3,h:5,setX:0.5,setY:5},
{screen:12,exit:1,x:99,y:1,w:3,h:5,setX:97.5,setY:3},{screen:13,exit:1,x:99,y:16,w:3,h:5,setX:97.5,setY:18},],
],[
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111------------11",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111----------------11",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111------------------11",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111------------------11",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111------------------11",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-------------------11",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111---------------------------",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-h-----------------------------",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111----------------------------------",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-------------------------------1111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111---------------------------------------------11111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111----h-h-----h-B-----------------------------------------111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-----h-------------------------------------------------------P---1111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111---------------------------------B--------------------------11888811111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111----h------------------------------------------------------------W-----1111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111-------H----------------------------------------------------------------111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111----------------------------------------------------------B---------------------11111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111-----H----------------------------------------------------------------------------111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111--H-----------------------11111111-----------F---------------------------------------111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111----F--------------------1111111111--------------------------------------------------111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111--------------------------1111111111--------------------------------------------------111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111---------------------------1111111111----------------------------------W--------1111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111--------------------------111111111111-----------------------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111-----------------------1111111111111111188888888888888811111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111--------------111111111111111111111111888888811111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111112222-------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111-----------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111-----------------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111------F--------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111------------------H-1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111---------------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111---------------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111---H111111111111111111111111111111111111-----------22222-F---111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111------111111111111111111111111111111111111---------------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111--------11111111111111111111111111111111111--W------------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111--------------1111111111111111111111111111111111111--------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111-------------------11111111111111111111111111111111----------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111--------------------------1111-------1111111111111---H----------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111----------------------F--------------------1111111---------222222------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111--------------------------------------------------------------------------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111---------------------------------------------------------------------------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"------------------------------------------------------------------------------11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"-------------------------------------------------------------------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"-----------------------------------------W--------------------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111881111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[2],
},
{screen:2,exit:3,x:203,y:7,w:3,h:5,setX:201.5,setY:9},{screen:5,exit:1,x:-3,y:42,w:3,h:5,setX:0.5,setY:44},],
],[
"1111111111111111111111111111111111111111111111111111111111111111",
"111111-1111111------11111111111111111111111111111111111111111111",
"1111------------------------------11---111111-----------------11",
"11------------------------------------1111111-------------------",
"--------------------F-----------------1111111-------------------",
"--------------------------------------1111111-------------------",
"---------------------------------------11111-----------------111",
"11----------------2222222--------------11111---------------11111",
"1111111---------------------111111--------11-------------1111111",
"11111------1111----------------------------H-------------1111111",
"1111-----------------------------------------------------1111111",
"111-----------------------------------111----------------1111111",
"111------------------------------------------------2222---111111",
"111--------------------111---222222------------------------11111",
"11----------111--------------------------------------------11111",
"11-----------------------------------111----------P--------11111",
"11-----------------2222--------------111-------1111111-----11111",
"11-------------------H----------------11------111111111111111111",
"11-----2222-----------------222222222-1111---111-111111111111111",
"11------------------------------------111111111--h---11111111111",
"11-------------------P----------------11111111----------11111111",
"11---------------11111111-------------1111111------------H111111",
"11-----111111--------------------------11111111-----------------",
"11-------------------------------------11111--h-----------------",
"11--------------------------111111-----1111---------------------",
"11-------------------------------------1111----------------11111",
"11111-----F----------P------------------11111111111----111111111",
"11-----------------222222----------------11111111--------1111111",
"11------------------------------------F---1111111---------111111",
"11----------------------------------------111111----11------1111",
"11------22222222--------------------------11111--------------111",
"11--------------------------222222--------11111---------------11",
"11111--------------1111111-----------------11111-----------11111",
"11111--------------------------------2222--11111---------1111111",
"11111--------------------------------------11111---------1111111",
"11111--------------------------------------11111--------11111111",
"1111111-----------F----------222222---------1111-------111111111",
"1111111---------------------------------------11-------111111111",
"1111111111-------1111---1---------------------11-----11111111111",
"1111111111-------1111---11--------------------118888888111111111",
"11111111111------1111---11--------------111---118888888111111811",
"111111111118888881111888111-------------111888888888888888888811",
"111111118818888888888888111------------1111888888888888888888811",
"1111888888888888888888881111-----------1111888888888888888888811",
"1111888888888888888888888111-----------1118888888888888888888811",
"1118888888888888811118888811----------11118888888888888888888811",
"1111111111111111111111111111111---111111111111111111111111111111",
"1111111111111111111111111111111---111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[3],
},
{screen:4,exit:2,x:64,y:21,w:3,h:5,setX:62.5,setY:23},{screen:6,exit:1,x:64,y:3,w:3,h:5,setX:62.5,setY:4},
{screen:9,exit:1,x:-3,y:3,w:3,h:5,setX:0.5,setY:5},{screen:17,exit:1,x:30,y:48,w:5,h:3,setX:34.5,setY:44,setXL:29.5,setYL:44},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11---------------------------",
"11---------------------------",
"11---------------------------",
"1122222222----------222222211",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"112222222222------22222222211",
"11-------------------------11",
"-------------~-------------11",
"---------------------------11",
"-----------111111----------11",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"calm",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[4],
},
{screen:5,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:7,exit:1,x:29,y:2,w:3,h:5,setX:27.5,setY:3},],
],[
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11--------------------------------------------------------------------------------------------11",
"11--------------------------------------------------------------------------------------------11",
"11----------------------------------------------------------------------------------------------",
"11----------------------------------------------------------------------------------------------",
"11----------------------------------------------------------------------------------------------",
"11-----------------------------------------------------------------------------------------11111",
"11-----------------------------------------------------------------------------------------11111",
"11-----------------------------------1111111111--------------------------------------------11111",
"11-----------------------------------11111111111----------------------------------Z------1111111",
"---------------------------------1111111111111111--------------------------------------111111111",
"------------------------Z--------1111111111111111-------Z--------1111111111111111111111111111111",
"---------------------------------1111111111111111----------------1111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[5],
},
{screen:6,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:14,exit:1,x:96,y:3,w:3,h:5,setX:94.5,setY:5},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111---------------------1111",
"1111-------------------------",
"1111!------------------------",
"1111-------------------------",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205]},
"background":backgrounds[6],
"!":function(i, j){
    //enemies.push(new redFlyBoss(i * 16, j * 16));
    enemies.push(new redFlyBossCacoon(64, 32));
    enemies.push(new redFlyBossDoor(25*16 + 2, 176));
},
},{screen:9,exit:2,x:29,y:10,w:3,h:5,setX:27.5,setY:12},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"-----------------------------",
"-----------!-----------------",
"-----------------------------",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205]},
"background":backgrounds[7],
"!":function(i, j){
    enemies.push(new Campfire(i * 16, j * 16, 1));
},
},
{screen:5,exit:3,x:29,y:7,w:3,h:5,setX:27.5,setY:9},{screen:8,exit:1,x:-3,y:7,w:3,h:5,setX:0.5,setY:9},],
],[
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111-----1--1---11111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111---11-----1--1---1------1---H1-----1-H----1-----1--1--1---1---1--1--1--1--1--1--1--11",
"11111111111111111111111111111111111111------11111111------------11-----1------1------1----1-----1------1-----1--1--1---1---1--1--1--1--1--1--1--11",
"1111111111111111111111111111111111------------------------------11-----1---F--------F1----1-----1------------1--1--1---1---1--1--1--1--1--1--1--11",
"111111111111111111111111111111111-------------------------------11------------------------1---------------------1------1---1--1--1--1--1--1--1--11",
"11111111111111111111111-----------------------------------------`------------------------------------------------------1---1--1--1--1--1--1--1--11",
"11111111111111111111111--------------------1----------------------------------------------------------------------------------1--1--1--1-----1--11",
"111111111111111111111----------------------11---------------------------------------------------------------Z-----------------1-----1--1-----1--11",
"111111111111111111------------------11-----111-----------------1114444111144441111111111111111111-------------------------------F---1--------1--11",
"11111------11----------1-------------------1111-----------111111111111111111111111111111111111111111111111111111----------------------------------",
"-------------------11111---------Z---------111188888888811111111111111111111111111111111111111111111111111111111----------------------------------",
"-------111-------1111111-------------------11111111111111111111111111111111111111111111111111111111111111111111-----------------------------------",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205]},
"`":function(i, j){enemies.push(new breakWall(i * 16, j * 16, 32, 48, -1, 0, function(x, y, hp){
    image("notEnemySprites", notEnemySprites["breakWallLeft" + constrain(4 - hp, 1, 3)], x, y);
    image("blockSprites", {x:103,y:18,w:16,h:16}, x, y - 16);
    rect("blockSprites", {x:137,y:18,w:16,h:16}, x + 16, y + 48);
    for (var i = 0; i < 5; i++) {
        image("blockSprites", {x:137,y:18,w:16,h:16}, x + 16, y - 16 + i * 16);
    }
    fill(0, 0, 0);
    rect(x, y + 48, 16, 16);
}, function(){fill(0, 0, 0);
    if (players[0].x > this.x) {rect(0, 0, this.x + 16, 256);
    } else if (players[0].x < this.x + this.w) {rect(this.x + 16, 0, 455, 256);}
}),
    new checkPoint(58, 0, 7.5, 16, 61, 9, false),
    new checkPoint(70, 0, 4, 16, 71.5, 8, false),
    new checkPoint(78, 0, 4, 16, 79.5, 8, false),
);},
"background":backgrounds[8],
},
{screen:14,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:11,exit:2,x:146,y:10,w:3,h:5,setX:144.5,setY:12},],
],[
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111-----11------------------------1--------------------------1-1111",
"1111111111111111111111111111111111111111111111111111-------------------------------1--------------------------1-1111",
"111111111111111111111111111111111111111111111111111--------------------------------1------------------------------11",
"111111111111111111111111111111111111111111111111111--------------------------------1---------------------------11111",
"11111111111111111111111111111111111111111111111111--------1111----------------1---51----1------------------------111",
"11111111111111111111111111111111111111111111111111-------11111---------111----1---51----1-----4-----4-------------11",
"1111111111111111111111111111111111111111111111111111----111111--------11------1---------1-----1-----1-------------11",
"111111111111111111111111111111111111111111111111111111-111111144444441144444441---------1-----1-----1-------------11",
"111111111111111111111111111111111111111111111111111111-111111111111111111111111444414444144444144444144441111---5111",
"111111111111111111111111111111111111111111111111111111-1111111111111111111111111111111111111111111111111111111---511",
"111111111111111111111111111111111111111111111111111111-1111111111111111111111111111111111111111111111111111111---511",
"111111111111111111111111111111111111111111111111111111-1111111111111111111111111111111111111111111111111111111---511",
"111111111111111111111111111111111111111111111111111111-1111111111111111111111111111111111111111111111111111111----11",
"1111111111-H----------111111-----11------1111111111111-1111111h-h---h--------1111111-B------------------1111116---11",
"11`----H11-------P----1111-------H1------1111111111111-1111111B--------------1111111---------------------11111----11",
"11------1------12222--111---------1------111111111111---h11111----------------11111----------------------11111----11",
"11------1-----11------11----------1-------11111111111-----11111-----------------11111--11-----------------1111---511",
"11------1------1------11----------H--------1111111111------1111-------------------h11111h-----------------1111---511",
"11------1------1------11---------------------1111111-------111-----------------------111------------------1111---511",
"--------11-----1---2221-----------------------------------------------------------------------------------1111----11",
"--------1------1------------------------------F-----------------------------------------------------------11116---11",
"--------1------1---P--------------------------------------------------------------------------------------11116---11",
"11111---------111111111-------------------------------------------------------------111111------------------------11",
"111111---------11111111----------11-----------------------------------------------------B-------------------------11",
"111111--------W-1111111---------1111------------------------------------------------------------------------------11",
"11111111111111111111111111114444111144441111111114441111111111441111111---111111114444444444441114444444411111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111---111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"`":function(i, j){
  i -= 14;
  enemies.push(
    new cameraLock(i * 16, j * 16, 82 * 16, 256, 0, 16000, j * 16, j * 16 + 256),
    new checkPoint(23, 16, 5, 10, 25, 24, false),
    new checkPoint(32, 15, 4, 10, 33.5, 22, false),
    new checkPoint(40, 16, 3, 10, 41, 24, false),
    new checkPoint(46, 16, 3, 10, 47, 24, false),
    new checkPoint(52, 16, 5, 10, 53, 24, false),
    new checkPoint(59, 16, 3, 10, 60, 24, false),
    new checkPoint(64, 16, 3, 10, 65, 24, false),
    new checkPoint(79, 16, 3, 10, 80, 24, false),
    new checkPoint(84, 18, 3, 5, 85, 21, false),
    new checkPoint(87, 18, 3, 5, 88, 21, false),
    new checkPoint(94, 16, 3, 10, 95, 24, false),
    new checkPoint(105, 16, 3, 10, 106, 24, false),
    new checkPoint(105, 16, 3, 10, 106, 24, false),
    new checkPoint(110, 16, 4, 10, 111.5, 24, false),
    new checkPoint(105, 0, 3, 9, 106, 7, false),
    new checkPoint(88, 0, 1, 5, 88, 3, false),
    new checkPoint(83, 4, 1, 5, 83, 7, false),
    new checkPoint(78, 0, 1, 5, 78, 3, false),
    new checkPoint(71, 1, 3, 5, 72, 4, false),
    new checkPoint(69, 1, 1, 7, 69, 6, false),
  );
    
},
"background":backgrounds[9],
},{screen:2,exit:4,x:71,y:28,w:5,h:3,setX:74.5,setY:24,setXL:69.5,setYL:24},{screen:10,exit:2,x:-3,y:19,w:3,h:5,setX:0.5,setY:21},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11--------------------1111111",
"11--------------------1111111",
"11----------------------11111",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11----1--------------------11",
"11--------------1----------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"---------------------------11",
"--------111111111111-------11",
"--`---1111111111111111-----11",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"formerSecret",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205]},
"`":function(i, j){enemies.push(
    new jumpPlatform(10, j - 5, 4, 1, 0),
    new jumpPlatform(15, j - 9, 4, 1, 1),
    new jumpPlatform(10, j - 13, 3, 1, 0),
    new jumpPlatform(5, j - 15, 2, 1, 1),
    new jumpPlatform(12, j - 17, 3, 1, 0),
    new jumpPlatform(20, j - 18, 1, 1, 1),
    new jumpPlatform(18, j - 21, 1, 1, 0),
    new jumpPlatform(11, j - 24, 1, 1, 1),
    new jumpPlatform(5, j - 28, 3, 1, 1),
    new jumpPlatform(2, j - 28, 3, 1, 0),
    new jumpPlatform(11, j - 32, 3, 1, 0),
    new jumpPlatform(15, j - 32, 3, 1, 1),
    new jumpPlatform(19, j - 31, 3, 1, 1),
    new coinPickup(25, j - 33, 0),
);},
},{screen:3,exit:3,x:-3,y:34,w:3,h:5,setX:0.5,setY:36},],
],[
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111---11111111111111",
"1111111111----H------11---------------------------------------------H----------------1-------B---11",
"111111111------------11-------------------------------------------------------------11-----------11",
"11111111----------------------------------------------------------------------------1------------11",
"11111------------------------------------------111--------------------------------111------1-----11",
"11111------------------------------------------111-------------------------------111-------11----11",
"1111----------------111------------------------111-------------------------------11-----22211----11",
"111-----------------111---2222----------2222---1112----22222222222-----222222222211-------H11----11",
"111-----------22----111--------2------2--------111----------------------------1111---------11----11",
"11-------------------11------------------------111-------------------------------------222-11----11",
"11-----22------------11------------------------111-----------------------------------------11----11",
"11------------------111----------2222----------111-------22--------------------------------11----11",
"11------------------111----------------------------------22------------------R----------22211----11",
"11-P----------------111----------------------------------22--------------------------------11----11",
"1111111111----------111----------------------------22-`--22------222---22------------------11----11",
"1111111111111---11111111111111111111111111111111111111111111111111111111111111111111111111111888811",
"1111!--111111---11111111111111111111111111111111111111111111111111111111111111111111111111111888811",
"118888888888888888888888888888881118888888888888888888881188888888888888888888888888888888888888811",
"888888888888888888888888888888881888888888888888888888888888888888888888888888888888888888888888881",
"888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888",
"888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888",
"118888888888888888888888888881188888888888888888888888881112288882888888888888888888888888888888888",
"111188888888888888888888888111888888888888888888888888222112828222288888888888888888888888888888881",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205],underWater:false},
"background":backgrounds[10],
"!":function() {
    enemies.push(
    new cameraLock(22 * 16, 0, 70 * 16, 15 * 16, 0, 16000, 0, 0),
    new redParasite(36 * 16, 17 * 16),
    new redParasite(46 * 16, 22 * 16),
    new spawnRoom(24 * 16, 16, 22 * 16, 15 * 16, 4,
        [new standardDoor(21 * 16, 48), new standardDoor(47 * 16, 16), new standardDoor(47 * 16, 12 * 16)],
        [
            new infestedEggs(23 * 16, 14 * 16, 0, [{"type":1, "x":3, "y":0},{"type":1, "x":7, "y":-1},{"type":2, "x":10, "y":3}],
            function (obj) {
                if (/*players[0].x > obj.x + 96 | players[0].y + players[0].h < this.y & players[0].isGrounded > 0 && */this.parent.currentWave >= 2) {
                    obj.spawnEm = true;
                }
            }),
            new infestedEggs(39 * 16, 14 * 16, 1, [{"type":3, "x":3, "y":0},{"type":2, "x":10, "y":3}],
            function (obj) {
                if (/*players[0].x > obj.x + 96 | players[0].x + players[0].w < obj.x - 48 |
                    players[0].y + players[0].h < this.y & players[0].isGrounded > 0 && */this.parent.currentWave >= 2) {
                    obj.spawnEm = true;
                }
            }),
            new infestedEggs(41 * 16, 8 * 16, 2, [{"type":3, "x":3, "y":-7}],
            function (obj) {
                if (/*players[0].isGrounded > 0 &&*/ this.parent.currentWave >= 0) {
                    obj.spawnEm = true;
                }
            }),
            new infestedEggs(26 * 16, 1 * 16, 2, [{"type":3, "x":3, "y":-9},{"type":3, "x":7, "y":-7}],
            function (obj) {
                if (/*players[0].isGrounded > 0 &&*/ this.parent.currentWave >= 1) {
                    obj.spawnEm = true;
                }
            }),
        ], 3, [1, 2, 5, 0], "infestedMinesDrums"
    ),
    );
},
"`":function(i, j){
    i += 2;
    j += 4;
    enemies.push(new breakWall(i * 16, j * 16, 32, 48, 1, 3, function(x, y, hp){
        image("notEnemySprites", notEnemySprites["breakWallRight" + constrain(4 - hp, 1, 3)], x + 16, y);
        //image("blockSprites", {x:103,y:18,w:16,h:16}, x, y - 16);
        //rect("blockSprites", {x:137,y:18,w:16,h:16}, x + 16, y + 48);
        for (var i = 0; i < 4; i++) {
            image("blockSprites", {x:103,y:18,w:16,h:16}, x, y - 16 + i * 16);
        }
        image("blockSprites", {x:103,y:35,w:16,h:16}, x, y + 48);
        image("blockSprites", {x:137,y:18,w:16,h:16}, x + 16, y - 16);
        fill(0, 0, 0);
        rect(x + 16, y + 48, 16, 16);
}, function(){
    fill(0, 0, 0);
    if (players[0].x > this.x) {
        rect(this.x + 16 - 455, this.y - 32, 455, 256);
        rect(this.x + 16, this.y + 64, 16, 16);
    } else if (players[0].x < this.x + this.w) {
        rect(this.x + 16, this.y - 32, 455, 256);
    }
}));
},},
{screen:3,exit:4,x:-3,y:17,w:3,h:5,setX:0.5,setY:19},{screen:31,exit:3,x:81,y:-3,w:5,h:3,setX:83,setY:-0.5},
{screen:16,exit:1,x:99,y:18,w:3,h:5,setX:97.5,setY:20},],
],[//CARTRIDGE OR DRINK HERE
"111111---1111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111---11-11-1-11-11-1111-111-1-1-111-1111-11-11--11-11-1111-11111-1111-1111-1111-11-1--1-11",
"11----------------------------------B---------------B---------------------------------------11",
"11------------------------------------------------------------------------------------------11",
"11----------------------------------------------------------------------------------------1111",
"11-----------------------------------------------------------------------------------------111",
"11------------------------------A----------------------------------------------------------111",
"11-----------------------111111111111--------------A------A---------------------------------11",
"11111111-------------------------11111--------22222222222222222------222-----222-----------111",
"1111--------------------------------11111--------------------------------------------------111",
"11111--------------------------------------------------------------------------------------111",
"111111B-----111111111-----------------------------------------------------------------------11",
"1111111--------1111------------------------------------------------W----------------2222222211",
"11111111-------------------------------------------------------222-2222--22-------------H---11",
"11111111------------------------------------------------------------------------------------11",
"11111111B-----------------------------------------------------------------------------------11",
"11111111------------------------------------------------------------------------2-------------",
"11111111--------------------------------------------------------------------------------------",
"111111111-------------------------------------------------------------------------------------",
"1111111111-----------------------------------------R--------------------------------2222222211",
"1111111111B-------------------------------11------------------------------------------------11",
"1111111111----------------------W---------11----------------------------------------------2211",
"1111111111--------------11222-2222-222111111112222222222222222221------------------P--------11",
"1111111111-------------111-------------111111-------------------11----------222222222------211",
"1111111111------------11-----------------111---------------------1------------------22------11",
"1111111111------------11------------------11---------------------1-------------------22---F-11",
"1111111111------------11------------------11---------------------1--------------------------11",
"11111111-------------1112222------1-------11---------------------1-------------------------211",
"111111---------------11----22-------------11--------------F------11-------------------------11",
"1111-B--------------11------22------------111---------------------11----------------------2111",
"111---------------------------------------B1111111-F---------------1-----------------------111",
"11----------------------------------1-------111--------------------11--------------------22111",
"11-----------------111----------------------111-----------------2221--------------P--------111",
"11-----------------111222------------------111-------------------H--------------22222---111111",
"------------------1111---------------------11---------------------------------------H---111111",
"------------------1111---------------------11-----------------------11111----------------11111",
"-------------111111111-------W-----------W-11--P-------------------11111------------------1111",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[11],
},
{screen:7,exit:2,x:-3,y:33,w:3,h:5,setX:0.5,setY:35},{screen:10,exit:1,x:94,y:15,w:3,h:5,setX:92.5,setY:17},
{screen:15,exit:1,x:5,y:-3,w:5,h:3,setX:7,setY:-0.3},],
],[//This room will need some editting
"1111111111111111---1111111111",
"1111111111111111---1111111111",
"1122222-------------222222211",
"112222-------------2222222211",
"112222----------2222222222211",
"1122-B---------22222222222211",
"1122------------------2212111",
"112----------222------1111111",
"112-----------A---------11111",
"11----------4--------------11",
"11---------42--------------11",
"11--------42---------------11",
"1A--------2----------------11",
"11------22-----------------11",
"11-----22------------------11",
"11----22-------------------11",
"11----2-------2------------11",
"11-----------222--------B--A1",
"11-------------22----------11",
"11-------------------------11",
"16-------------------A-----11",
"16-----------------22222--211",
"16----------------------22-11",
"16-------------------------A1",
"16-------------------------11",
"16-------------------------11",
"11----------------22-------11",
"11----------------222------11",
"11B-----------------22--A--11",
"16-------------------22222211",
"16-------------------22211111",
"11-------------------51111111",
"11-A-----------------51111111",
"112222222-------------2211111",
"112222222-------------B221111",
"1122--------------------22111",
"112----------------------2111",
"11222---------------------111",
"11111111111111---111111111111",
"11111111111111---111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205]},
"`":function(i, j){},
},{screen:14,exit:3,x:13,y:40,w:5,h:3,setX:12.5,setY:36,setXR:17.5,setYR:36},{screen:15,exit:2,x:15,y:-3,w:5,h:3,setX:17,setY:-0.3},],
],[
"1111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111000000000000000011111",
"1111111111111111111111111111111111110011111111111111001111",
"1111111111111111111111111111111111100111111111111111100111",
"1111111111111111111111111111111111101111111111111111110111",
"1111111111111111111111111111111111101111111111111111110111",
"11111111111111111111111111111`-----0----1111----H-----0-11",
"88888888888888888888888888888888888888881111------------11",
"88888888888888888888888888888888888888881111------------11",
"88888888888888888888888888888888888888881111---F--------11",
"11111111111111111111111111188888888888881111------------11",
"11111111111111111111111111118888888888881111---------11111",
"11111111111111111111111111111888888888881111-0-----1111111",
"1111111111111111111111111111111111111111111110111111111111",
"1111111111111111111111111111111111111111111110000000000111",
"1111111111111111111111111111111111111111111111111111110111",
"11----------------------------------------------------0-11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11-------------------------------0000000000-------------11",
"11------------------------------------------------------11",
"11----------------------------------------------1111111111",
"11------------------------------------------------------11",
"1111111111111111111111111111111111111111111111111111111111",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"11------------------------------------------------------11",
"1111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111",
[
{"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,0,120,205],underWater:false},
"background":backgrounds[12],
"`":function() {
    enemies.push(
    new cameraLock(0, 6 * 16, 42 * 16, 8 * 16, 0, 16000, 0, 0)
    );
},
},
{screen:13,exit:3,x:-3,y:7,w:3,h:5,setX:0.5,setY:9},],
],[
"1111111111111---1111111111111",
"11111111111-------11111111H11",
"1111111111---------111111--11",
"111---1111----22---111111--11",
"11H--F------------------F-111",
"11----11111-------11111111111",
"1111--111111-----111111111111",
"999111911111--222111111111111",
"------------------------11111",
"-----------------------------",
"--------22--P-------2--------",
"1991191112222222----111111111",
"11111111114--------1111111111",
"111111111114------11111111111",
"1111111111114----111111111111",
"1111111111111---1111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[13],
},
{screen:5,exit:4,x:12,y:-3,w:5,h:3,setX:14,setY:-0.3},{screen:19,exit:1,x:29,y:7,w:3,h:5,setX:27.5,setY:9},
{screen:18,exit:2,x:-3,y:7,w:3,h:5,setX:0.5,setY:9},{screen:29,exit:1,x:12,y:16,w:5,h:3,setX:16,setY:13},],
],[
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111999111111199999111111111111111919919991111199991111111111999111111111191111111111111-1111",
"111191-----------------1199911119911-----------99----------------------------------------------1",
"1119-------------------99---------------------------------------------------------------------11",
"99-------------------------------------------------------------------------S--------------------",
"--------------------------------------------------------------------------199-------------------",
"------------------------------------------------S-------------------------111-------------------",
"-----------------------------------------------99-------------------------111--------------11111",
"99--------------------------------------------999---------S--------------------------------11111",
"19-----------------------------------111111111119---------2222-----------------------------11111",
"19---------------S-S-----------------111111111119----------------------------------------1111111",
"119911111-------11999999---------1111111111111119--------------------------------------111111111",
"111111119-----------------------S1111111111111-------------------1111111111111111111111111111111",
"111111119--------------------------------------------------------1111111111111111111111111111111",
"1111111119999999999999999999991111111199999----9999999999999991111111111111111111111111111111111",
"111111111111111111111111111111111111111111191111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
},
{screen:18,exit:1,x:-3,y:4,w:3,h:5,setX:0.5,setY:6},{screen:17,exit:3,x:96,y:3,w:3,h:5,setX:94.5,setY:5},],
],[
"11111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111",
"111111--------11---11----1-------11----------------------------------11",
"1111-----------11---11---1-------1-----------------------------------11",
"11--------------11---1--21------1111----1222222112222222222222222----11",
"-----------------11--1----------1-11-----------11--------------1-----11",
"---------------------1---------11--1------------11-------------1-----11",
"--------------------11----------B--B-----------111-------------11----11",
"11------------------B--------------------------11!-------------111---11",
"11222222222----------------------------------------------------------11",
"11------2------------------------------------------------------------11",
"11------2-------------------22222--222-------------------------------11",
"11------2------22222222-------2----2-------2222222222222222222222222211",
"11------2-------2----2--------2----2------------2-----2-----2-----2--11",
"11222244244444442444424444444424444244444444444424444424444424444424411",
"11111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[14],
"!":function() {
    enemies.push(
    new coinPickup(66.5, 9.5, 1),
    new cameraLock(48 * 16, 5 * 16, 20 * 16, 15 * 16, 43 * 16, 16000, 0, 0),
    new spawnRoom(50 * 16, 16, 22 * 16, 15 * 16, 5,
        [new standardDoor(47 * 16 + 2, 9 * 16),new standardDoor(63 * 16 + 8, 9 * 16)],
        [
            new miscSpawner(23 * 16, 14 * 16, [function() {
                if (!saveData.oneTimers.infestedMines[5]) {
                    enemies.push(new malfunctioningRobot(950, 8 * 16));
                }
            }]),
        ], 0, [0], "infestedMinesDrums"
    ),
    new checkPoint(7, 0, 4, 9, 9, 7, true),
    new checkPoint(15, 3, 8, 9, 18.5, 10, true),
    new checkPoint(28, 3, 5, 8, 30, 9, true),
    new checkPoint(35, 3, 3, 8, 36, 9, true),
    new checkPoint(43, 4, 3, 8, 44, 10, true),);},
},
{screen:17,exit:2,x:-3,y:4,w:3,h:5,setX:0.5,setY:6},],
],[
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111------------------1111111111111111111111111111111111111111111111111111111111111",
"11----------------------------------1111----------------1-H-------11111111111--------11",
"11------------------------------1111111---------------111---------111111111----------11",
"11-----------------------------000000000---000000000000000--------0000000000---------11",
"111111111111111111112222222222221111111----------------11----------111111111---------11",
"111111111111111-----------------------------------------122----2222111111111----1111011",
"1111111---------------------------------------------------------------11111-----1111011",
"1111-------------------------------------------------------------------111-------111011",
"11!--------------------------------------------------------------------111-------111011",
"11---------------------------------------------------------------------1H---------11011",
"11---------------------------------------------------------------------1----------11011",
"----------------------------------------------F------------------------------------1011",
"------------------------------------------------------------------------------------011",
"---------P-------22222--------222222-----------P---------------------------------------",
"11222---2222-----HH-H------------H----------222222-------------------------------------",
"11-------------------F-----------------------H-----------------------------------------",
"11-----------------------------------------------------------------------------------11",
"11----------------------------------------------------------------------------------111",
"118888888888822888888888888888888822288882222222222228888888822222288888888222222221111",
"118888888888888888888888888888888888888888888888888888888888888888888888888888888881111",
"118882288888888888882888888888888888888888888888888888888888888888888888888888888888111",
"118822882888888888222888222222288888888888888888888888888888888888888888888888888888811",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[15],
"!":function() {
    enemies.push(
    new coinPickup(3, 3, 2),
    new redParasite(81 * 16, 20 * 16),
    new redParasite(22 * 16, 21 * 16),
    new spawnRoom(0, 0, 25 * 16, 4 * 16, 6,
        [new standardDoor(6 * 16 + 2, 2 * 16),new standardDoor(26 * 16, 2 * 16)],
        [
            new miscSpawner(23 * 16, 14 * 16, [function() {
                if (!saveData.oneTimers.infestedMines[6]) {
                    enemies.push(new malfunctioningRobot(11 * 16, 2 * 16));
                }
            }]),
        ], 0, [0, 0], "infestedMinesDrums"
    ),);},
},
{screen:3,exit:2,x:87,y:13,w:3,h:5,setX:85.5,setY:15},
{screen:21,exit:2,x:-3,y:11,w:3,h:5,setX:0.5,setY:13},],
],[
"111111111111111111111111---1111111111111111111111111111111",
"111111111111111111111111---1111111111111111111111111111111",
"1111111111`-777---11111----1111111-7-771111111111111111111",
"11111111----------------------111----------7-1111-11111111",
"1111111---------------------------------------11----h-1111",
"11111------------------------------------------h------1111",
"111----------------------------------------------------111",
"11------------------------------------------------------11",
"------------------F---------------------------------------",
"----------------------------------------------------------",
"--------------P------------------W------------------------",
"1111---2222222222211--------11111122222222222222------1111",
"11111---H-------1111---------111111111111---------------11",
"11--11----------1111----------11111111117---------------11",
"11---111111----111H------------1171111111--------222222211",
"11------H-------11-------------7----111111-----------h--11",
"11--------------111------------------h--11W-------------11",
"11-----------11117-----------------------111111---------11",
"11------P-----17-------------------------11111111------B11",
"11---222222------------------------------7--1111111-----11",
"112-----------------------------------------h-----------11",
"11------------------------------------------------------11",
"11----------------------------------------------------2211",
"11------------------------------------------------------11",
"11--222----------------------------------------------22211",
"11----H------------------------------------------------W11",
"11--------------------------------------------------222211",
"11---------P---P----------------------------------------11",
"112--------222222----------------------------------2222211",
"11--------------------------------------------------hW--11",
"11------------------P-----------------------------22222211",
"11---22222--------2222222---------------W---------------11",
"11-------------------------22222----222222222----222222211",
"11-2--------------------------h------h------------------11",
"114244444444444444444444----------4444444444444444444444411",
"1111111111111111111111111111---111111111111111111111111111",
[
{"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205],underWater:false},
"background":backgrounds[16],
"`":function() {
    enemies.push(
        //new cameraLock(0, 6 * 16, 42 * 16, 8 * 16, 0, 16000, 0, 0),
        new checkPoint(0, 7, 4, 5, 2, 9, true),
        new checkPoint(7, 5, 4, 7, 9, 9, true),
        new checkPoint(7, 12, 4, 2, 9, 12, true),
        new checkPoint(16, 5, 4, 7, 18, 9, true),
        new checkPoint(5, 15, 6, 4, 8, 17, true),

        new checkPoint(4, 20, 3, 4, 5, 22, true),
        new checkPoint(5, 25, 5, 6, 7, 29, true),
        new checkPoint(11, 22, 6, 6, 13.5, 26, true),
        new checkPoint(18, 25, 9, 6, 21, 29, false),
        new checkPoint(27, 26, 5, 6, 29, 30, true),
        new checkPoint(37, 26, 8, 6, 40.5, 30, true),
        new checkPoint(49, 15, 2, 4, 49.5, 17, true),
        new checkPoint(52, 16, 4, 10, 54.5, 20, false),

        new checkPoint(49, 10, 5, 4, 51, 12, true),
        new checkPoint(44, 7, 4, 4, 45.5, 9, true),
        new checkPoint(28, 7, 4, 4, 29.5, 9, true),
    );
},
},
{screen:23,exit:1,x:-3,y:7,w:3,h:5,setX:0.5,setY:9},{screen:20,exit:2,x:58,y:7,w:3,h:5,setX:56.5,setY:9},
{screen:22,exit:1,x:27,y:36,w:5,h:3,setX:31.5,setY:33,setXL:26.5,setYL:33},{screen:22,exit:2,x:23,y:-3,w:5,h:3,setX:25,setY:-0.3},],
],[
"1111111111111---1111111111111",
"1111111111111---1111111111111",
"111111----------1111111111111",
"11111-----------1111111771111",
"11-----------2221777777----11",
"11--------------7----------11",
"11-----2222----------------11",
"11--------------------1----11",
"11----------------1---1----11",
"11111111111111111111111----11",
"111111111111111111111111---11",
"11111111111111-------------11",
"11-------------------------11",
"11-------------------------11",
"11------------------------111",
"11------------------------111",
"11-------------------------11",
"11-------------------------11",
"116------5111111-------111111",
"116------51111---------111111",
"116------51111---------111111",
"116------51111---------111111",
"116------51111--------1111111",
"1114------7111111111111111111",
"11114------711111111111111111",
"111114------71111111111111111",
"1111114------1111111111111111",
"11111114-----7111111111111111",
"111---114-----711111111111111",
"111-----14-----71111111111111",
"11-------14-----7111111111111",
"11-------714-----711111111111",
"11--------714-----71111111111",
"11---------714-----7111111111",
"11----------714-----711111111",
"11-4444411---714-----71111111",
"11-1111111----714-----7111111",
"11-------1-----714-----711111",
"11-------1111---714-----71111",
"11-------7111----714-----7111",
"11--------7111----71------711",
"1144-------711-------------11",
"111144------71-------------11",
"116-11-------1111111111111111",
"116---1111-----------------11",
"116----111-----------------11",
"116-----114----------------11",
"116------114---------------11",
"116------1114--------------11",
"116-------1114-------------11",
"116--------11114444444-----11",
"116-----------1111111111---11",
"116------------------------11",
"116-----------------------411",
"116------4---------------4111",
"116-----516-------------41111",
"116------7--------------11111",
"116---------------4-----51111",
"116--------------516-----5111",
"116---------------7-------511",
"116-----------------------511",
"116-----4-----4-----------511",
"116----516---516----------511",
"116-----7-----7------4----511",
"116-----------------516---511",
"116------------------7----511",
"116-----------------------511",
"116-4----4----------------511",
"116516--516-------4----4--511",
"116-7----7-------516--516-511",
"116-4-------------7----74-511",
"116516-----4-----------516511",
"116-7-----516-----------7-511",
"116-4------7--------4-----511",
"116516-4-----------516----511",
"116-7-516-----------7-----511",
"116----7------------------511",
"116-----------------------511",
"116-----------------------511",
"116--44-------------------511",
"116-5116------------------511",
"116-5116---------------4--511",
"116--77---------------516-511",
"116----------222-------7--511",
"116-----------`-----------511",
"116-----------------------511",
"116--------2222222--------511",
"116-----------------------511",
"1111111111---------1111111111",
"1111111111111---1111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"`":function(i, j){
    enemies.push(
        new coinPickup(i, j + 0.1, 3),
        new checkPoint(13, 5, 5, 4, 15, 7, true),
        new checkPoint(19, 5, 3, 4, 20, 7, true),
        new checkPoint(23, 5, 1, 5, 23, 8, true),

        new checkPoint(10, 13, 5, 5, 11, 16, true),
        new checkPoint(20, 38, 7, 5, 21, 41, true),

        new checkPoint(14, 41, 6, 2, 15, 41, true),
        new checkPoint(10, 35, 3, 3, 11, 36, true),
        new checkPoint(8, 32, 2, 3, 8, 33, true),
        new checkPoint(6, 41, 4, 3, 8, 42, true),
        new checkPoint(14, 45, 1, 5, 14, 48, true),
        new checkPoint(22, 46, 2, 5, 22.5, 49, true),

        new checkPoint(0, 78, 29, 5, 14, 81, true),
        new checkPoint(2, 84, 8, 4, 7, 86, true),
        new checkPoint(19, 84, 8, 4, 20, 86, true),
    );
},
},
{screen:21,exit:3,x:12,y:-3,w:5,h:3,setX:14,setY:-0.3},{screen:21,exit:4,x:12,y:90,w:5,h:3,setX:17,setY:87,setXL:11,setYL:87},],
],[//secret needs work
"11111111111111111111111---111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111-----11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111------111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111--------------111111111111111111111111111111111111111111111111",
"111111111111111111111-----11111111111111111111111111111111h--111111111111111111111111111111111111111111111111111111111111111111111111111111h1--------------111111111111111111111111111111111111111111111111",
"1111111111111111111-----11177771111111111111111111111111111-FH1111111111111111111111111111111111111111111111111111111111111111111111111111-----11111111-----11111111111111111111111111111111111111111111111",
"1111111111111111H111-----11----1111111111111111111111111111---111111111111111111111111111111111111111111111111111111111111111111111111111-----11111111-----111111111111111111111111111111111111111111111111",
"1111111111111111--111----------11111111111111111111111111111-111111111111111111111111111111111111111111111111111111111111111111111111111---11111111111-----111111111111111111111111111111111111111111111111",
"1111111111111111-------P----------11111111111111111111111111-11111111111111111111111111111111111111111111111111111111111111111111111111----11111111------11111111111111111111111111111111111111111111111111",
"111111111111111H---1111111--------11111111111111111111111111-111--------11111111111111111111111111111111111111111111111111111111111111----1111111-------111111111111111111111111111111111111111111111111111",
"111111111111111--1111111111111--------11111111----1111111111-111111----------111111111111111111111111111111111111111111111111111111111-----11111h-------111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111---F--------H--------H-----------------------11111111111111111111111111111111111111111111111111111---------11111--------1111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111-------------------------------------------11111111111111--H--111111111111111111111111111111111----------11111B----2222111111111111------11h-11h-11--11-h---h--------11111",
"111111111111111111111111111111111--------------------------------------------11111---------------------------1111111111111111------------111111---------B11111111h--------11--11--11--11-----------------11",
"111111111111111111111111111111111111111141111114411111141411111414111111------11-------------------------------111111111111H------------1111111-------------B-B-----------11--11--11--11-------------------",
"111111111111111111111111111111111111111111111111111111111111111111111111----------------------------------------1111111-----------------111111111111--------------------------11B-----11-------------------",
"11111111111111111111111111111111111111111111111111111111111111111111-------P----------------------------------------H-----------------11111111111111--------------------------B-------11-------------------",
"1111111111111111111111111111111111111111111111111111111111111111----------1111122222-------------------P------------------------------11111111111111--------------------------------------------------11111",
"1111111111111111111111111111111------H--------H---------------------------11111--2----------P-------222222--------111111-------------11111111111111111111----------------------------------------1111111111",
"111111111111111111111111111---------------------------------------P------111111--2-------222222------2--2---------111111111118888811111111111111111111111111--------------------------------111111111111111",
"1111111111111111111111-----------------------------------111111111111111111111188288888888288288888882882888888888811111111111888881111111111111111111111111----------------------------1111111111111111111",
"1111111111111111111H----------------------------11411411111111111111111111111118828888888828828888888288288888888881111111111111111111111111111111111111111111111188888888888888888811111111111111111111111",
"1111111111------H-----F---------------111441111111111111111111111111111111111111110111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110111111111111111111111111",
"11111-------------------------11144411111111111111111111111111111111111111111111110111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110111111111111111111111111",
"11`-------------------------1111111111111111111111111111111111111111111111111111110111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110111111111111111111111111",
"-------------------P----22221111111111111111111111111111111111111111111111111111110111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111110111111111111111111111111",
"-----------------22222222--111111111111111111111111111111111111111111111111111111101111111111111111111111111111111111111110000------11111111111111111111111111111111111111111111110111111111111111111111111",
"------------------2-----2--111111111111111111111111111111111111111111111111111111100000000000000000000000000000000000000000---------11111111111111111111111111111111111111111111110111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-------0000000000000000000000000000000000000000000000000111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111-1111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205],},
"background":backgrounds[17],
"`":function(i, j) {
    enemies.push(
        new cameraLock(80 * 16, 0, 120 * 16, 21 * 16, 0, 16000, 0, 400),
        new checkPoint(30, 17, 3, 5, 31, 20, true),
        new checkPoint(36, 17, 2, 5, 36.5, 20, true),
        new checkPoint(38, 16, 3, 5, 39, 19, true),
        new checkPoint(43, 16, 3, 5, 44, 19, true),
        new checkPoint(48, 16, 2, 4, 48.5, 18, true),
        new checkPoint(51, 16, 2, 4, 51.5, 18, true),
        new checkPoint(54, 16, 3, 4, 55, 18, true),

        new checkPoint(26, 5, 5, 5, 28.5, 7, false),
        new checkPoint(37, 9, 3, 4, 38, 11, true),
        new checkPoint(41, 9, 3, 4, 42, 11, true),
        new checkPoint(44, 9, 3, 4, 45, 11, true),
        new checkPoint(49, 9, 3, 4, 50, 11, true),
        new checkPoint(52, 9, 3, 4, 53, 11, true),
        new checkPoint(58, 9, 2, 4, 59, 11, true),
        new checkPoint(60, 9, 3, 4, 61, 11, true),
        new checkPoint(66, 9, 3, 4, 67, 11, true),
    );
},
},
{screen:21,exit:1,x:203,y:12,w:3,h:5,setX:201.5,setY:14},{screen:29,exit:2,x:-3,y:23,w:3,h:5,setX:0.5,setY:25},
{screen:24,exit:3,x:22,y:-3,w:5,h:3,setX:24,setY:-0.3},{screen:23,exit:4,x:121,y:29,w:5,h:3,setX:124.5,setY:26},],
],[
"1111111111111111111111111111111111111111111111111111111111111111111111111111---11111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111111111111---11111111111111111",
"11111111111111111111111111111111111111111111111111111------h----h---------------------h----h--11",
"1111111111111111111111111111111111111111111111111111------------------------------------------11",
"1111111111111111111111111111111111111111111111111111------------------------------------------11",
"111111111111111111111111111111111111111111111111111-------------------------2222----------------",
"1111111111111111111111111111111111111111111111111-h--------------------------h-h----------------",
"1111111111111111111111111111111----------------------------------------222-------22222-----11111",
"11111111111111111111111111--------------------------------------222-----hh-------h-hh------11111",
"111111111111111111111------------11111---------11--------2222----hh------------------------11111",
"1111111111111111------------1111111111---------11111-------h-----------------Z-------------11111",
"11111111111------------1111111111111111--------111-------------------------------------111111111",
"------------------111111111111111111111-------1111---------------1111111111111111111111111111111",
"-------------11111111111111111111111111-------111----------------1111111111111111111111111111111",
"11111111111111111111111111111111111111111---1111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111---1111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[18],
},
{screen:25,exit:1,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:26,exit:1,x:96,y:3,w:3,h:5,setX:94.5,setY:5},
{screen:23,exit:3,x:40,y:16,w:5,h:3,setX:44.5,setY:12,setXL:39.5,setYL:12},{screen:27,exit:2,x:75,y:-3,w:5,h:3,setX:77,setY:-0.3},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"1111111---------------1111111",
"11111111111111111111111111111",
"1111111---------------1111111",
"11111111111111111121111111111",
"1111111--2---2---2--2-1111111",
"11111111211121112111121111111",
"1111111---------------1111111",
"111111121112111211111111111--",
"1111111---------------11111--",
"111111111111111111111111111--",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
},
{screen:24,exit:1,x:29,y:10,w:3,h:5,setX:27.5,setY:12}],
],[
"1111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111",
"111111111------------`--------`---`-------`---------`---11",
"111111111-----------------------------------------------11",
"111111111-----------------------------------------------11",
"111111111-----------------------------------------------11",
"11111111------------------------------------------------11",
"11111111------------------------------------------------11",
"1111111-------------------------------------------------11",
"1111111-------------------------------------------------11",
"1111111-------------------------------------------------11",
"111111--------------------------------------------------11",
"--------------------------------1------------------------!",
"--------11188811888888881888888811888888888888881188888888",
"1111111111188118888888111888888818888888811118881188888888",
"1111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"waterfall",volume:0.5,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
  "`":function(i, j){enemies.push(new dripSpawner(i * 16 + 4, j * 16));},
  "!":function(i, j){
    enemies.push(new breakWall(i * 16, j * 16, 32, 48, -1, 7, function(x, y, hp){/**/
        image("notEnemySprites", notEnemySprites["breakWallLeft" + constrain(4 - hp, 1, 3)], x, y);
        for (var i = 0; i < 4; i++) {
            //image("blockSprites", {x:103,y:18,w:16,h:16}, x + 16, y - 16 + i * 16);
        }
        //image("blockSprites", {x:103,y:35,w:16,h:16}, x, y + 48);
        //image("blockSprites", {x:137,y:18,w:16,h:16}, x + 16, y - 16);
    },function(x, y) {
        fill(0, 0, 0);
        rect(x, y - 16, 32, 16);
        rect(x, y + 48, 32, 16);
    }));
  },
  "background":backgrounds[19],
},
{screen:24,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:0,exit:1,x:58,y:11,w:3,h:5,setX:56.5,setY:13},],
],[
"1111111111111--1111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111----1111111111111111111111111111111111111111111111111111111111111111111-H1",
"1111111111-----11111111111111111111111111111111111111111111111111----h----11111111--1",
"11111---------211-----1111111777777----1111111111111111111111111---------11111111--11",
"11-------------112222--111177------------1111111111111111111-------------h---------11",
"112----------2211------7777-----------------------111111----------------------1111111",
"11-------------11222---------------------------------------------------------11111111",
"1122--------22211----------------------------------------------1111111111--111111111",
"11-------------1122--------2222---2222-----------------------111111111111111111111111",
"1111-------222211---------------------------------------------11111111111111111111111",
"11111----------112----------------------222-------------111------1------1111111111111",
"111111---------11---------R----------------------------11111--------------11111111111",
"1111111-------------------------------------------1111111111-----------------11111111",
"111111111------------------------------------1111111111111111-----------------1111111",
"1111111111111111111111111111111111111111111111111111111111111111111---111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111---111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
},
{screen:28,exit:1,x:11,y:-3,w:5,h:3,setX:13.5,setY:-0.3},{screen:24,exit:4,x:67,y:16,w:5,h:3,setX:65.5,setY:12,setXR:70.5,setYR:12},],
],[
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11------1111111111111111111111111111111111111111111111111111111111------------------11",
"11-------1111111111111111111111111111111111111111111111111111111--------------------11",
"11-------11111--------------------------------------------1111----------------------11",
"11--------1111--------------------------------------------111-----------------------11",
"11--------1111--------------------------------------------111-----------------------11",
"11---------111--------------------------------------------111-----------------------11",
"11---------111--------------------------------------------111-----------------------11",
"11----------11--------------------------------------------111-----------11-------11111",
"11------------------------------------------------------------------111111-------11111",
"11---------------------------------------------------------------11111111--------11111",
"11-------!-----------------------------------------------------111111111---------11111",
"11---------1111111111111111111111111111111111111111111111111111111111111----@---111111",
"1111---1111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111---1111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
  "background":backgrounds[20],
"@":function(i, j){
    enemies.push(new bootPickup(i * 16, j * 16),
        new spawnRoom(15 * 16, 0, 24 * 16, 16 * 16, 8,
        [new standardDoor(12 * 16 + 2, 10 * 16),new standardDoor(58 * 16, 10 * 16)],
        [
            new miscSpawner(13 * 16, 14 * 16, [function() {enemies.push(new miningRobotBoss(600, 100));}]),
        ], 0, [0, 0]
    ),
    /*new miningRobotBoss(900, 100)*/);
},
"!":function(i, j){
    enemies.push(new Campfire(i * 16, j * 16, 1));
},
},
{screen:27,exit:1,x:3,y:16,w:5,h:3,setX:7.5,setY:12,setXL:2.5,setYL:12},{screen:14,exit:1,x:96,y:3,w:3,h:5,setX:94.5,setY:5},],
],[
"11111111111111---11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111-------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111-------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111-------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111----2221111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111-------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"11111111111-------1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111122------------------B--------------B------------------------h-----------------------------------11111111",
"1111111111!------------------------------------------------------------------------------------------------11111111",
"1111111111--------------------------------------------------------------------------------------------------1111111",
"11111111111-------------------------------------------------------------------------------------------------1111111",
"111111111111111-------------------------------------------------------------------------------B------------11111111",
"111111111111111111--------------------------------------------111441144-------------------------------------1111111",
"11111111111111111-------------------------------------B------B111111111411111144-----------------------------------",
"11111111111111111111111----------------------------------------1111111111111111144111------------------------------",
"1111111111111111111111111112222222222222----22222222222222-----11111111111111111111111---------2222222-------------",
"111111111111111111111111--------2--B----B---2------2-----------111111111111111111111111111------2---2-------1111111",
"111111111111111-----------------2-----------2------2-----------1111111111111111111111111111-----2---2-----111111111",
"1111111111111444444444444444444424444444444424444442444444444441111111111111111111111111111444442444244444111111111",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
  "background":backgrounds[21],
  "!":function() {
      enemies.push(
          new cameraLock(31 * 16, 0, 100 * 16, 30 * 16, 0, 16000, 80, 340),
          new checkPoint(11, 1, 2, 6, 11.5, 5, true),
          new checkPoint(37, 7, 3, 8, 38, 13, true),
          new checkPoint(44, 7, 3, 8, 45, 13, true),
          new checkPoint(55, 7, 3, 8, 56, 13, true),
          new checkPoint(62, 7, 3, 5, 63, 10, true),
          new checkPoint(67, 7, 2, 5, 67.5, 10, true),
          new checkPoint(72, 7, 6, 6, 74.5, 11, true),
          new checkPoint(82, 7, 3, 7, 83, 12, true),
          new checkPoint(86, 7, 5, 10, 88, 14, true),
          new checkPoint(95, 7, 7, 8, 98, 13, true),
          new checkPoint(106, 7, 2, 12, 106.5, 15, false),
      );
  }
},
{screen:17,exit:4,x:13,y:-3,w:5,h:3,setX:15,setY:-0.3},{screen:23,exit:2,x:115,y:12,w:3,h:5,setX:113.5,setY:14},],
],[
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"1111!----------------------H------------------------------------------------------------------11",
"111-------------------------------------------------------------------------------------------11",
"11----------------------------------------------------------------------------------------------",
"11----------------------------------------------------------------------------------------------",
"11---------------------------------------------------------------------------P------------------",
"11------111-------------11111------------------------------------------------1111---------111111",
"11-------116-----------5111116------------P---------------------------------511116-------1111111",
"1111-----116-----------5111116-------1111111111-----------------------111---511116------11111111",
"111------116-11--111---5111116-------11111111111----------P----------51116--511116--111111111111",
"---------116-11-51116--5111116---1111111111111111----2222222222------51116--511116-1111111111111",
"---------116-11-51116--5111116---111111111111111188888828888288881111111111111111111111111111111",
"-------11116-11-51116--5111116---111111111111111188888828888288881111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[22],
  "!":function() {
      enemies.push(
          new checkPoint(8, 2, 3, 5, 9, 5, true),
          new checkPoint(13, 2, 2, 8, 13.5, 8, true),
          new checkPoint(17, 2, 3, 8, 18, 8, true),
          new checkPoint(24, 2, 5, 5, 26, 5, true),
          new checkPoint(33, 2, 4, 9, 34.5, 9, true),
          new checkPoint(65, 2, 3, 10, 66, 10, true),
          new checkPoint(70, 2, 3, 7, 71, 7, true),
          new checkPoint(77, 2, 4, 5, 78.5, 5, true),
          new checkPoint(84, 2, 3, 8, 85, 8, true),
      );
  }
},
{screen:2,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:31,exit:1,x:96,y:3,w:3,h:5,setX:94.5,setY:5},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11---------------------------",
"-----------------------------",
"-----------------------------",
"-------111111-------222222211",
"11-------1111-----------11111",
"11--------111------------1111",
"11--------111--------------11",
"11---------111-------------11",
"111---------11-------------11",
"111111-------1111111111111111",
"11111111----------------11111",
"1111111111---------------1111",
"1111111111222222---------1111",
"11111111111---2-----------111",
"1111111111----2---------11111",
"11111111111111111111---111111",
"11111111111111111111---111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
"background":backgrounds[23],
},
{screen:30,exit:2,x:-3,y:6,w:3,h:5,setX:0.5,setY:8},{screen:32,exit:1,x:29,y:5,w:3,h:5,setX:26.5,setY:7},
{screen:13,exit:2,x:19,y:23,w:5,h:3,setX:18.5,setY:19,setXR:17.5,setYR:19},],
],[
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"117777777777771117777777777711177777777777777111117777777777777777777777777777777777777777777777777777777777111111111772777277727772777117777777771111",
"11!-----------1--------------------------------1111-----------------------------------------------------------111111---2---2---2---2--11---------11111",
"11--------------------------------------------11--------------------------------------------------------------h111111--2---2---2---2--111--------11111",
"11--------------------------------------------H-----------------------------------------------------------------h--12222222222222222221111222222211111",
"11-------------------------------------------------------------------------------------------------------------------------------B-----B--------------",
"1----------------------------------------------------------------------F------------------------------------------------------------------------------",
"1----------------------------------------------------------------------------------------------------F------------------------------------------------",
"--------------------------------------------------------------P---------------------------------------------------------------------------------------",
"------------------------------P-P------------P----------2222222222-------------------------------------------------------------------W--------------11",
"------------------------22222222222-------222222222-------2-----2h--------2222222222222-------22---2---2---2-------2-------2---22222222222-------22211",
"11222222222222222222-----2---2---2----------2---2---------2-----2-----------2---2---2-h--------2---2---2---2-------2-------2---2---2---2-----2---2--11",
"111444244424442444244444424442444244444444442444244444444424444422244444444424442444244444444442444244424442444444424442444244424442444244444244424411",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
"111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111",
[{
"attributes":{music:{track:"infestedMines",volume:1,loop:true,smoothTransition:false,transitionSpeed:0.5},blockType:[102,0,204,102,120,205]},
  "!":function() {
      enemies.push(
          new checkPoint(17, 2, 3, 10, 18, 10, true),
          new checkPoint(24, 2, 3, 9, 25, 9, true),
          new checkPoint(32, 2, 3, 9, 33, 9, true),
          new checkPoint(42, 2, 3, 9, 43, 9, true),
          new checkPoint(48, 2, 3, 9, 49, 9, true),
          new checkPoint(56, 2, 3, 8, 57, 8, true),
          new checkPoint(63, 2, 3, 8, 64, 8, true),
          new checkPoint(74, 2, 3, 9, 75, 9, true),
          new checkPoint(84, 2, 3, 9, 85, 9, true),
          new checkPoint(94, 2, 2, 9, 94.5, 9, true),
          new checkPoint(127, 2, 3, 9, 128, 9, true),
          new checkPoint(135, 2, 3, 9, 136, 9, true),
          new checkPoint(145, 2, 3, 9, 146, 9, true),
          new areaNameBox(140, 2, 10, 10, "Infested Mines"),
      );
  }
},
{screen:31,exit:2,x:-3,y:8,w:3,h:5,setX:0.5,setY:10},{screen:33,exit:1,x:150,y:5,w:3,h:6,setX:148.5,setY:8},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"-----------------------------",
"--------------~--------------",
"-----------------------------",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[102,0,204,102,120,205]},
},
{screen:32,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{screen:34,exit:1,x:29,y:10,w:3,h:5,setX:27.5,setY:12},],
],[
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11111111111111111111111111111",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11-------------------------11",
"11@------------------------11",
"11-------------------------11",
"-----------------------------",
"-----------------------------",
"-----------------------------",
"11111111111111111111111111111",
"11111111111111111111111111111",
[{
"attributes":{music:{track:"",volume:1,loop:true,smoothTransition:true,transitionSpeed:0.01},blockType:[306,0,204,102,120,205]},
"@":function(i, j){
  if (!saveData.bosses.tinyKnightBoss) {
    enemies.push(
        new spawnRoom(5 * 16, 0, 24 * 16, 16 * 16, 9,
        [new standardDoor(2, 11 * 16),new standardDoor(27 * 16, 11 * 16)],
        [
            new miscSpawner(23 * 16, 14 * 16, [function() {enemies.push(new tinyKnightBoss(300, 220));}]),
        ], 0, [0, 0]
    ),);
  }
},
},
{screen:33,exit:2,x:-3,y:10,w:3,h:5,setX:0.5,setY:12},{area:"sleepFrogSwamp",screen:0,exit:1,x:29,y:10,w:3,h:5,setX:27.5,setY:12},],
],];           