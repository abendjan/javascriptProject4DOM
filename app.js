const list = document.querySelector('.list');
const input = document.querySelector('.input');

// Move items up or down
list.addEventListener('click', (event) => {

  if (event.target.className === 'button-remove') {

    let li = event.target.parentNode;
    let ul = li.parentNode;
    ul.removeChild(li);
    // console.log("Works. Its a button.");
  }

  if (event.target.className === 'button-up') {
    let li = event.target.parentNode;
    let prevLi = li.previousElementSibling;
    let ul = li.parentNode;

    if (prevLi) {
      ul.insertBefore(li, prevLi);
      console.log("Moved Up");
    }
  }


  if (event.target.className === 'button-down') {
    let li = event.target.parentNode;
    let nextLi = li.nextElementSibling;
    let ul = li.parentNode;

    if (nextLi) {
      ul.insertBefore(nextLi, li);
      console.log("Moved Down");
    }
  }
});

// insert new Items at the bottom of the List
input.addEventListener('click', (event) => {

  if (event.target.className === 'button-add') {

    let inputfield = document.querySelector('#input-field');
    let newItem = document.createElement('li');
    newItem.innerHTML = inputfield.value;
    newItem.innerHTML += '<button class="button-remove" type="button" name="button">Remove </button>';
    newItem.innerHTML += '<button class="button-up" type="button" name="button">Up </button>';
    newItem.innerHTML += '<button class="button-down" type="button" name="button">Down </button>';

    //append to UL declared at the top
    list.appendChild(newItem);

  }

});
