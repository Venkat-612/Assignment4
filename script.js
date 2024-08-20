document.addEventListener('DOMContentLoaded', function() {
    const minValueInput = document.getElementById('minValue');
    const maxValueInput = document.getElementById('maxValue');
    const generateButton = document.getElementById('generateButton');
    const resultParagraph = document.getElementById('result');

    generateButton.addEventListener('click', function() {
        
        const minValue = parseInt(minValueInput.value, 10);
        const maxValue = parseInt(maxValueInput.value, 10);

        if (isNaN(minValue) || isNaN(maxValue) || minValue > maxValue) {
            resultParagraph.textContent = 'Please enter valid minimum and maximum values where minimum is less than or equal to maximum.';
            resultParagraph.style.color = 'red';
            return;
        }


        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;


        resultParagraph.textContent = `Random Number: ${randomNumber}`;
        resultParagraph.style.color = '#007bff';
    });
});
