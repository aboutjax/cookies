var NODE_COOKIE = $(".cookie");

var chocChunc = function() {
  NODE_COOKIE.addClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forrest")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var blackForrest = function() {
  NODE_COOKIE.addClass("cookie--black-forrest")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--snickers")
}

var snickers = function() {
  NODE_COOKIE.addClass("cookie--snickers")
  NODE_COOKIE.removeClass("cookie--choc-chunk")
  NODE_COOKIE.removeClass("cookie--black-forrest")
}
