var NODE_COOKIE = $(".cookie");
var NODE_COOKIE_NAME = $(".cookie-name");

var chocChunc = function() {
  NODE_COOKIE_NAME.html("Choc Chunk")
  NODE_COOKIE.addClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forrest")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var blackForrest = function() {
  NODE_COOKIE_NAME.html("Black Forrest")
  NODE_COOKIE.addClass("cookie--black-forrest")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var snickers = function() {
  NODE_COOKIE_NAME.html("Snickers")
  NODE_COOKIE.addClass("cookie--snickers")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forrest")
}
