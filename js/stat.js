'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;

var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_GAP = 50;

var GAP = 10;
var FONT_GAP = 16;
var LINE_GAP = 20;
var LINE_SHIFT = 40;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color || '#fff';
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText(text, x, y);
};

var renderScoreBar = function (ctx, x, y, width, height, color) {
  ctx.fillStyle = color || '#000';
  ctx.fillRect(x, y, width, height);
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

var getSaturation = function () {
  return Math.round(Math.random() * 100 + 1);
};

var getRectColor = function (name) {
  return (name === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'hsl(240, ' + getSaturation() + '%, 50%)';
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  renderText(ctx, 'Ура вы победили!', CLOUD_X + LINE_GAP, CLOUD_Y + LINE_GAP * 1.5);
  renderText(ctx, 'Список результатов:', CLOUD_X + LINE_GAP, CLOUD_Y + LINE_GAP * 2 + FONT_GAP);

  var rectX = CLOUD_X + LINE_SHIFT;
  var maxTime = Math.round(getMaxElement(times));

  for (var i = 0; i < names.length; i++) {
    var currentTime = Math.round(times[i]);
    var rectHeight = Math.round(BAR_HEIGHT * currentTime / maxTime);
    var rectY = CLOUD_HEIGHT - LINE_GAP - rectHeight;
    var scoreY = CLOUD_HEIGHT - LINE_GAP * 1.5 - rectHeight;

    renderText(ctx, currentTime, rectX, scoreY);

    renderScoreBar(ctx, rectX, rectY, BAR_WIDTH, rectHeight, getRectColor(names[i]));

    renderText(ctx, names[i], rectX, CLOUD_HEIGHT);

    rectX += BAR_WIDTH + BAR_GAP;
  }

};
