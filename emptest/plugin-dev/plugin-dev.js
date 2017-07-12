videojs.plugin('pluginDev', function(options) {
  var player = this,
  overlay = document.createElement('p');
  overlay.className = 'vjs-overlay';
  overlay.innerHTML = (options != null && options.overlayText != null) ? options.overlayText : "Becoming a plugin developer";
  player.el().appendChild(overlay);
});