var QRCode = require("qrcode");
var canvas = document.getElementById("canvas");

let customTxt = getURLParams();

QRCode.toCanvas(canvas, customTxt, function (error) {
  if (error) console.error(error);
  console.log("success! ", customTxt);
});

function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search);
  let customTxt;
  if (urlParams.has("txt")) {
    customTxt = urlParams.get("txt");
  } else {
    customTxt = "no data";
  }
  return customTxt;
}
