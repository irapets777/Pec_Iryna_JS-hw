function handleInput(event) {
    // get the input element
    let input = event.target;
    console.log(input);

    // get the entered character
    const char = String.fromCharCode(event.which);

    // check if the character is a number
    if (!isNaN(char)) {
        // if it's a number, prevent it from being added to the input
        event.preventDefault();
    }
}
 

 // Get the modal and the button to open it
 let modal = document.getElementById("myModal");
 let btn = document.getElementById("openModal");

 // Get the close button for the modal
 let span = document.getElementsByClassName("close")[0];

 // When the user clicks the button, open the modal
 btn.onclick = function() {
   modal.style.display = "block";
 }

 // When the user clicks on the close button, close the modal
 span.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }



 // JavaScript code to switch the traffic light to the next color
 const redLight = document.querySelector('.traffic-light__red');
 const yellowLight = document.querySelector('.traffic-light__yellow');
 const greenLight = document.querySelector('.traffic-light__green');
 const changeColorBtn = document.querySelector('#change-color-btn');
 let currentColor = 'red';
 changeColorBtn.addEventListener('click', () => {
     switch (currentColor) {
         case 'red':
             redLight.classList.remove('traffic-light__red');
             yellowLight.classList.add('traffic-light__yellow');
             currentColor = 'yellow';
             break;
         case 'yellow':
             yellowLight.classList.remove('traffic-light__yellow');
             greenLight.classList.add('traffic-light__green');
             currentColor = 'green';
             break;
         case 'green':
             greenLight.classList.remove('traffic-light__green');
             redLight.classList.add('traffic-light__red');
             currentColor = 'red';
             break;
     }
 });