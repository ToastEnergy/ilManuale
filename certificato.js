const name = document.getElementById("name");
const canvas = document.getElementById("canvas");
const output = document.getElementById("output");

function fitTextOnCanvas(ctx, text, fontface, yPosition) {
    var fontsize = 300;
  
    do {
      fontsize--;
      ctx.font = fontsize + "px " + fontface;
    } while (ctx.measureText(text).width > 145)
    ctx.fillText(text, 68, yPosition);
  }

function gencert() {
    if (!name.value || name.value.trim().length === 0) {
        alert("Inserisci un nome");
        return;
    }

    canvas.width = 602;
    canvas.height = 289;
    const ctx = canvas.getContext("2d");
    var imageObj = new Image();
    imageObj.onload = function () {
        ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
        fitTextOnCanvas(ctx, name.value, "serif", 202);
        ctx.font = "30px serif";
        ctx.fillStyle = "green";
        ctx.fillText(`${score}/100`, 450, 100);
        //const img = canvas.toDataURL("image/png");
        //output.src = img;
    };
    imageObj.src = "assets/certificato.png";
}
