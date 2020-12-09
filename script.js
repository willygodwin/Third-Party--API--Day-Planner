// TODO1: Fetch the time and date for heading from moment.js


// TODO2: Build Array to store the data of the planner length 9
// Fetch the stored plans from localStorage
let plansStored = JSON.parse(localStorage.getItem("plansStored"));
let plansArray = [];

if (plansStored !== null) {
    plansArray = storedPlans;
  } else {
    // this should only occur on first time the app is loaded in the browser
    // Array to store daily plans 
    plansArray = []; 
    plansArray[0] = "Good Morning";
  }

// TODO3: Function that creates 9 time slots in the HTML

let plansContainer = $("#plansContainer");

//Builds the HTML elements of the planner using jQuery
function populatePlanner(){
    for (let i = 0; i < 9 ; i ++){

        let hour = i + 9;

        //Build row componetns
        let rowDiv = $("<div>"); 
        rowDiv.addClass("row");
        rowDiv.addClass("plannerRow");
        rowDiv.attr("hour-index", hour)


        // Start building Time box portion of row
         let timeDivCol = $("<div>");
         timeDivCol.addClass("col-md-2");

        // create timeBox element (contains time)
        const timeBoxSpn = $("<span>");
        // can use this to get value
        timeBoxSpn.attr("class","timeBox");
        
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

        // START building input portion of row
        // build row components
        let dailyPlanInput = $("<input>");

        dailyPlanInput.attr("hour-index", i);
        dailyPlanInput.attr("id","input-" + i);
        dailyPlanInput.attr("type","text");
        dailyPlanInput.attr("class","dailyPlan");

        // access index from data array for hour 
        dailyPlanInput.val( plansArray[i] );

        let inputDivCol = $("<div>");
        inputDivCol.addClass("col-md-9");
    
        // add col width and row component to row
        rowDiv.append(inputDivCol);
        inputDivCol.append(dailyPlanInput);
        // STOP building Time box portion of row

        // START building save portion of row
        let saveDivCol = $("<div>");
        saveDivCol.addClass("col-md-1");

        let saveBtn = $("<button>");
        saveBtn.attr("id","saveid-" + i);
        saveBtn.attr("save-id", i);
        saveBtn.attr("class","far fa-save saveIcon");
        
        // add col width and row component to row
        rowDiv.append(saveDivCol);
        saveDivCol.append(saveBtn);
        // STOP building save portion of row

        // set row color based on time
        // updateRowColor(rowDiv, hour);

        plansContainer.append(rowDiv);

    }
}
// TODO4: Function that creates 9 inputs associated with the time slots
// TODO5: Save button that stores the input to the local storage
// TODO6: Change the row colour based on the time 
function updateRowColor(row, time){
  
}

populatePlanner();

