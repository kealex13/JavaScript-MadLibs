/* Given the 'id' attribute of a form element, 
   this will return the value entered by the user 
	 into that form element. */
function formValue(id) {
  // this is creating a function (lines of code) to be called upon and repeated later 
  let formElement = document.getElementById(id);
  
  // setting formElement to get the info from the coresponding id
  
  if (formElement === null) {
    return `[${id} NOT FOUND]`;
  }

  let value = formElement.value;

	// if its left empty display "not found" the value is setting the value to be a string representing the value of the specified field
  if (formElement.value.trim() === "") {
    return `[${formElement.placeholder}]`;
  }

  return document.getElementById(id).value;
}

/* Given the 'id' of an HTML element and a 
   'className', this will add that class to
   the HTML element. */
function addClassToElement(id, className) {
  let element = document.getElementById(id);
  element.classList.add(className);
}

/* The code here will be executed each time
   that the form button is clicked. */
function generate() {

  let relative = formValue("relative");
  let adj1 = formValue("adj1");
  let adj2 = formValue("adj2");
  let adj3 = formValue("adj3");
  let famous = formValue("famous");
  let noun = formValue("noun");
  let dessert = formValue("dessert");
  let petName = formValue("petName");

  let madLib = `
    Dear ${relative},
    <br><br>
    I have been having a really ${adj1} time 
    at camp. The counselour is ${adj2} and
    the food is ${adj3}. I met ${famous}
    and we quickly became ${noun}. Talk soon!
    <br><br>
    Your ${dessert},
    <br>
    ${petName}
  `;
  
  //doesn't work the way it should when generate is clicked "mad libs" stays and the new text is just layered on top
  //also unable to scroll which made the whole SkillBuilder very tedious and annoying
  //if I edit pre-exisiting code I'm worried I'll spend to much time trying to de-bug and not move on
  
  document.getElementById("output").innerHTML = madLib;
  addClassElement("container", "generated");
}