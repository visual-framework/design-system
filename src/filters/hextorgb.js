
/**
 * Converts a hex color to RBG
 *
 * @param {String} text
 */

module.exports = function(text) {
  function hexToRGB(hex) {
      var r = parseInt(hex.slice(1, 3), 16),
          g = parseInt(hex.slice(3, 5), 16),
          b = parseInt(hex.slice(5, 7), 16);
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }

  var hex = new String(text);

  return hexToRGB(hex);
};
