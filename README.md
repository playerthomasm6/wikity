# wikity
 schedule app

This app allows user to schedule events in hour time blocks.

If you click on a time block the user will be prompted to enter in the event.

Once the events are typed in the User hits the save button to save all the events.

An instruction button included which gives the user instructions.

the Clear calendar button will wipe both local storage and text in each time block.

I could not seem to get the the time blocks grayed out if the time has already passed.

I tried to use data values for each time block then parse that value to an integer then compare that to the current hour which is already an integer.  then I would add an Id to that timeblock which should turn it gray.  it didn't work and I am out of time.  it looked like this

I used a jquery function to get the current hour which i console.log to make sure it worked an it did.  i put that into a var which is already an Int.

var timeSlot = parseInt($(.input-1).attr("data-number"));
if (timeslot < currentHour){
    $(.input-1).attr("id", "newId");
}

.newId{
    background-color: gray;
}

but it didn't work and i am out of time