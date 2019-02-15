// store data
var myList = (JSON.parse(localStorage.getItem('myData')) || []);

// create list items
function createItem() {
  // create movie list item
  var newItem = {text: window.prompt('Add a movie to the list'), style: 'none'};

  // add item to array
  myList.push(newItem);

  // sync array with database
  localStorage.setItem('myData', JSON.stringify(myList));

  // call printItem
  printItem(newItem);
}

// print item
function printItem(item) {
  // create <p> element
  var p = document.createElement('p');
  // add text to <p>
  p.innerHTML = item.text;
  // add style to <p>
  p.className = item.style;
  // add click functionality
  p.onclick =
      function() {
    this.className = item.style =
        (this.className == 'none') ? 'strike' : 'invisible';
    // sync array with database
    localStorage.setItem('myData', JSON.stringify(myList));
  }
      // add <p> to myDiv
      document.getElementById('myDiv')
          .appendChild(p);
}

// loop and print list
myList.forEach(element => {
  printItem(element);
});
