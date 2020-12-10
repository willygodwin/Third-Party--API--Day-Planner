//Global Variables
let currentHour = moment().format('H');

// TODO1: Fetch the time and date for heading from moment.js
//Fetch the currentDay element
currentDay = $("#currentDay");

day = moment().format("dddd")     // => ('Monday' , 'Tuesday' ----)
date = moment().format("Do")      // => ('1st' , '2nd' ----)
month = moment().format("MMMM")   // => ('January','February.....)
year = moment().format("YYYY")    // => ('2012','2013' ...)  

currentDay.text(day + " " + date + " " + month + " " + year)


// TODO2: Build Array to store the data of the planner length 9
// Fetch the stored plans from localStorage
let todoStored = JSON.parse(localStorage.getItem("todoStored"));


if (todoStored !== null) {
    plansArray = todoStored;
  } else {
    // initialise array to store daily plans only requried on first ever creation
    plansArray = []; 
    plansArray[0] = "Good Morning";
  }

// TODO3: Function that creates 9 time slots in the HTML

let plansContainer = $("#plansContainer");

//Builds the HTML elements of the planner using jQuery
function populatePlanner(){
    for (let i = 0; i < 9 ; i ++){

        let hour = i + 9;

        //Build row elements
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
        

        
        // build row components
        let dailyPlanInput = $("<input>");

        dailyPlanInput.attr("hour-index", i);
        dailyPlanInput.attr("id","input-" + i);
        dailyPlanInput.attr("type","text");
        dailyPlanInput.attr("class","inputBox");

        // access index from data array for hour 
        dailyPlanInput.val( plansArray[i] );

        let inputDivCol = $("<div>");
        inputDivCol.addClass("col-md-9");
    
        // add col width and row component to row
        rowDiv.append(inputDivCol);
        inputDivCol.append(dailyPlanInput);
        

        // START building save portion of row
        let saveDivCol = $("<div>");
        saveDivCol.addClass("col-md-1");

        let saveBtn = $("<button>");
        saveBtn.attr("id","saveid-" + i);
        saveBtn.attr("save-id", i);
        saveBtn.attr("class","far fa-save saveIcon saveBtn");
        
        // add col width and row component to row
        rowDiv.append(saveDivCol);
        saveDivCol.append(saveBtn);
        

        plansContainer.append(rowDiv);

        updateRowColor(rowDiv, hour)

    }
}

// TODO4: Change the row colour based on the time 
function updateRowColor(row, time){
  
  if(time < currentHour){
    row.css("background-color","lightgrey")
  }
  else if(time > currentHour)
  {
    row.css("background-color","lightgreen")
  }
  else {
    row.css("background-color","red")
  }
}

// TODO5: Save button that stores the input to the local storage
$(document).on("click", "button", function(event){
  event.preventDefault();  
 
  let index = $(this).attr("save-id");
  console.log(index);
  let inputID = "#input-" + index;

  console.log(inputID);

  plansArray[index] = $(inputID).val();

  console.log(plansArray)

  localStorage.setItem("todoStored", JSON.stringify(plansArray));
  });  



populatePlanner();

