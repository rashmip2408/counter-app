// let count = 5
// count = count + 1
// console.log(count)

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;

let countEl = document.getElementById('count');

let saveEl = document.getElementById('save-el');

function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count);
}

function decrement() {
    count = count - 1;
    countEl.innerText = count;
    console.log(count);
}

function save() {
    let entryStr = count + ' - ';
    saveEl.textContent += entryStr
    count = 0

    countEl.textContent = count;
}


