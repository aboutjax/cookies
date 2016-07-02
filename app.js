var NODE_COOKIE = $(".cookie");
var NODE_COOKIE_NAME = $(".cookie-name");

var chocChunc = function() {
  NODE_COOKIE_NAME.html("Choc Chunk")
  NODE_COOKIE.addClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forest")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var blackForest = function() {
  NODE_COOKIE_NAME.html("Black forest")
  NODE_COOKIE.addClass("cookie--black-forest")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var snickers = function() {
  NODE_COOKIE_NAME.html("Snickers")
  NODE_COOKIE.addClass("cookie--snickers")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forest")
}
