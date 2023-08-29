var dice, rolls, sum, item;

// Describe this function...showTotal
function showTotal() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
}

// Describe this function...showTotal
function showrolls() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  let element_list = document.getElementById('list');
  element_list.replaceChildren();
  rolls.forEach((item) => {
    let element_list2 = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = item;

    element_list2.appendChild(new_li);
  });
}

// Describe this function...showTotal
function showinfo() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  showrolls();
  showTotal();
  showresult();
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}

// Describe this function...
function showresult() {
  if(--window.LoopTrap <= 0) throw "Infinite loop.";
  if (rolls.reduce((a,b) => a+b, 0) == sum) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won';
    element_info.style.color = '#cc0000';
  } else if (rolls.reduce((a,b) => a+b, 0) < sum) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'Keep playing';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'You lost';
    element_info3.style.color = '#3366ff';
  }
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];
sum = 11;
showinfo();


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.push(randomMember(dice));
  showinfo();

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  rolls.pop();
  showinfo();

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  rolls = [];
  let element_list3 = document.getElementById('list');
  element_list3.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = '0';
  let element_info4 = document.getElementById('info');
  element_info4.innerText = 'Keep playing';

});