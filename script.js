

// TODO1: Build Array to store the data of the planner length 9
// Get the stored plans from localStorage
// Parsing the JSON string to an object
let plansStored = JSON.parse(localStorage.getItem("plansStored"));

if (plansStored !== null) {
    plansArray = storedPlans;
  } else {
    // this should only occur on first time the app is loaded in the browser
    // Array to store daily plans 
    let plansArray = [9]; 
    plansArray[0] = "Good Morning";
  }

// TODO2: Function that creates 9 time slots in the HTML

let plansContainer = $("#plansContainer");

function populatePlanner(){
    for (let i = 0; i < 9 ; i ++){

        let hour = i + 9;

        //Build row componetns
        let rowDiv = $("<div>"); 
        rowDiv.addClass('row');
        rowDiv.addClass('plannerRow');
        rowDiv.attr('hour-index', hour)


        // Start building Time box portion of row
         let timeDivCol = $('<div>');
         timeDivCol.addClass('col-md-2');

        // create timeBox element (contains time)
        const timeBoxSpn = $('<span>');
        // can use this to get value
        timeBoxSpn.attr('class','timeBox');
        
        // format hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour > 12) { 
        displayHour = hour - 12;
        ampm = "pm";
        } else {
        displayHour = hour;
        ampm = "am";
        }

        // populate timeBox with time
        timeBoxSpn.text(displayHour + " " + ampm);

        // insert into col inset into timebox
        rowDiv.append(timeDivCol);
        timeDivCol.append(timeBoxSpn);
        // STOP building Time box portion of row

    }
}
// TODO3: Function that creates 9 inputs associated with the time slots
// TODO4: Save button that stores the input to the local storage
// TODO5: Change the row colour based on the time 

populatePlanner();