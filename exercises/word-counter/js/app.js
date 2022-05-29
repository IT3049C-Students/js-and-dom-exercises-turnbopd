// 🤖: create 2 constants with references to textarea input and the stats section from the DOM




const inputText = document.querySelector('#text');
const statSelect = document.querySelector('#stat');


inputText.addEventListener("input", () =>{
  var nall = inputText.value;
  var word = val.split(/[^\w]+/).filter(z=>z.length>0);
  statSelect.innerHTML= `You've wriiten ${word.length} words and ${val.length} cahracters.`
});






// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.