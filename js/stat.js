'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var GAP = 10;

var FONT_GAP = 16;
var LINE_GAP = 20;
var LINE_SHIFT = 40;

var BAR_GAP = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + LINE_GAP, CLOUD_Y + LINE_GAP * 1.5);
  ctx.fillText('Список результатов:', CLOUD_X + LINE_GAP, CLOUD_Y + LINE_GAP * 2 + FONT_GAP);

  var rectX = CLOUD_X + LINE_SHIFT;

  for (var i = 0; i < players.length; i++) {
    var rectHeight = Math.round(BAR_HEIGHT * Math.round(times[i]) / Math.round(getMaxElement(times)));
    var rectY = CLOUD_HEIGHT - LINE_GAP - rectHeight;

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(Math.round(times[i]), rectX, CLOUD_HEIGHT - LINE_GAP * 1.5 - rectHeight);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var saturationLevel = Math.round(Math.random() * 100 + 1);
      ctx.fillStyle = 'hsl(240, ' + saturationLevel + '%, 50%)';
    }

    ctx.fillRect(rectX, rectY, BAR_WIDTH, rectHeight);

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText(players[i], rectX, CLOUD_HEIGHT);

    rectX += BAR_WIDTH + BAR_GAP;
  }

};
