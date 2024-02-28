// Get all elements with the class 'showTextButton'
var showTextButtons = document.querySelectorAll('.showTextButton');

// Loop through each button and add click event listener
showTextButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        // Get the data-text-id attribute of the clicked button
        var textId = button.getAttribute('data-text-id');

        // Get the element with the matching ID
        var displayText = document.getElementById(textId);

        // Toggle the visibility of the text
        if (displayText.style.display === 'none') {
            displayText.style.display = 'block';
        } else {
            displayText.style.display = 'none';
        }
    });
});