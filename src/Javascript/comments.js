function makeCommentBackground() {
    console.log("getting colour");
    const colorElement = document.getElementById('getColor');
    let color = getComputedStyle(colorElement).color;
    let color2 = rbgLighten(0.5, color);
    console.log(color);
    console.log(color2);


    document.getElementById('commentContainer').style.backgroundColor = color;
    document.getElementById('commentHeader').style.backgroundColor = String(color2);
}


function rbgLighten(amount, color) {
    let colorArray = color.split(",");
    console.log(colorArray);

    // Extracts the numbers from the array
    for (let i = 0; i < colorArray.length; i++) {
        colorArray[i] = colorArray[i].match(/\d+/)[0];
    }
    console.log(colorArray);

    // Lightens/Darkens the color 
    for (let x = 0; x < colorArray.length; x++) {
        colorArray[x] = Math.floor(Number(colorArray[x]) + (amount * colorArray[x]));
    }
    console.log(colorArray);

    // Recreates rgb format
    return "rgb(" + colorArray[0] + ", " + colorArray[1] + ", " + colorArray[2] + ")";
}
