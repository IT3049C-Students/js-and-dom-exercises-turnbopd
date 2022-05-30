// 🤖: create 2 constants with references to textarea input and the stats section from the DOM




const inputText = document.querySelector('#text');
const statSelect = document.querySelector('#stat');


inputText.addEventListener("input", () =>{
  var val = inputText.value;
  var word = val.split(/[^\w]+/).filter(z=>z.length>0);
  statSelect.innerHTML= `You've written ${word.length} words and ${val.length} characters.`
});






// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.