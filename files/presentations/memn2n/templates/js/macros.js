remark.macros.scale = function (percentage) {
  var url = this;
  return '<img src="' + url + '" style="width: ' + percentage + '" />';
};

remark.macros.sup = function () {
  let txt = this;
  return `<sup>${txt}</sup>`
};