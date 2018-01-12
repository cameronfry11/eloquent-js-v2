var brick = '#';
var lay = function(bricks) {
    return console.log(bricks);
};
var thisManyBricks = function(level) {
    return brick.repeat(level);
};

for (level = 1; level <=7; level++) lay(thisManyBricks(level));

