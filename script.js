function upDate(previewPic) {

    // Check that the event is triggering
    console.log("Mouse Over Triggered");

    // Check image information
    console.log("Alt Text:", previewPic.alt);
    console.log("Source:", previewPic.src);

    // Get the preview area
    let imageDiv = document.getElementById("image");

    // Change the text
    imageDiv.innerHTML = previewPic.alt;

    // Change the background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {

    let imageDiv = document.getElementById("image");

    // Restore original background
    imageDiv.style.backgroundImage = "url('')";

    // Restore original text
    imageDiv.innerHTML =
        "Hover over an image below to display here.";
}