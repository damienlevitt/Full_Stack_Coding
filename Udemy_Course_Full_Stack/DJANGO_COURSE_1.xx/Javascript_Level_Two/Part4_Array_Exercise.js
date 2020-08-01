// PART 4 ARRAY EXERCISE
// This is  a .js file with commented hints, its optional to use this.

// Create Empty Student Roster Array
// This has been done for you!
var roster = []

// Create the functions for the tasks

// ADD A NEW STUDENT
function addNew() {
  var add_name = prompt("What is the name you would like to add?");
  roster.push(add_name)
}
// Create a function called addNew that takes in a name
// and uses .push to add a new student to the array


// REMOVE STUDENT
function remove(){
  var rem_name = prompt("What is the name you would like to remove?");
  var index = roster.indexOf(rem_name);
  roster.splice(index,1)
}
// Create a function called remove that takes in a name
// Finds its index location, then removes that name from the roster

// HINT: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
//

// DISPLAY ROSTER
function display(){
  console.log(roster);
}
// Create a function called display that prints out the orster to the console.
var start = prompt("Would you like to start the roster web app? y/n")
var request = "empty"

if (start === 'y'){
  while (request !== "quit"){
    request = prompt("Please select an action you would like to complete: add, remove, display, or quit.")
    if(request === 'add') {
      addNew();
    } else if (request === 'remove'){
      remove();
    } else if (request === 'display'){
      display();
    } else {
      alert("Please enter a valid command.")
    }
  }
}
// Start by asking if they want to use the web app

// Now create a while loop that keeps asking for an action (add,remove, display or quit)
// Use if and else if statements to execute the correct function for each command.
