// Get User Input from Page
// Controller Function/ Entry Point
function getValues() {
    //Get Values
    let startValue = document.getElementById('startValue').value
    let endValue = document.getElementById('endValue').value
    //Parse inputs as numbers

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);


    //  Verify our inputs are numbers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // Generate the Numbahs

        let numbersArray = generateNumbers(startValue, endValue);

        // Display the numbahs

        displayNumbers(numbersArray);

    } else {
        // If not, call them a goof.
        Swal.fire(
            {
                icon: 'error',
                title: 'Whoops!',
                text: "Dubloons are numbers only, you goof!"
            }
        )
    }



}


// Generate numbers
// Logic functions
function generateNumbers(start, end) {

    let numbers = [];

    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }

    return numbers;

}


//Display them on the page
//  View Function - Make it show up.
function displayNumbers(numbersArray) {
    let tableBody = document.getElementById('dubloonCount');
    let tableHTML = "";


    for (let i = 0; i < numbersArray.length; i++) {

        let value = numbersArray[i];
        if (numbersArray[i] % 2 != 0) {
            let tableRow = `<tr><td>${value}</td></tr>`;

            tableHTML = tableHTML + tableRow;
            // tableHTML += tableRow;
        } else {
            let tableRow = `<tr><td><strong>${value}</strong></td></tr>`;

            tableHTML = tableHTML + tableRow;
            // tableHTML += tableRow;
        }
    }

    tableBody.innerHTML = tableHTML;

}