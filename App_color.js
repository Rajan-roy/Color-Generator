const getColor = () => {
    // Generate a random hex color code
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16).padStart(6, '0');
    document.body.style.backgroundColor = randomCode;

    // Convert hex to RGB
    const red = parseInt(randomCode.slice(1, 3), 16);
    const green = parseInt(randomCode.slice(3, 5), 16);
    const blue = parseInt(randomCode.slice(5, 7), 16);
    const RGBCode = `rgb(${red}, ${green}, ${blue})`;

    // Display both hex and RGB codes
    document.getElementById("color-code").innerText = `${RGBCode}`;

    // Copy the hex color code to the clipboard
    navigator.clipboard.writeText(randomCode).then(() => {
        console.log("Color code copied to clipboard: " + randomCode);
    }).catch(err => {
        console.error("Could not copy text: ", err);
    });
}

// Event listener for the button
document.getElementById("generate-btn").addEventListener("click", getColor);

// Initial call to set a random color on page load
getColor();