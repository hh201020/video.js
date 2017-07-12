videojs.registerPlugin('navigateOnVideoEnd', function (options) {
  var myPlayer = this;
  myPlayer.on("ended", function () {
    console.log("This log indicates the page can be redirected to brightcove.");
    // window.location.href = options.redirectURL;
  });
});