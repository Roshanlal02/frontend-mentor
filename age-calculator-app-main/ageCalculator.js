let daysInput;
let monthsInput;
let yearsInput;

function getDays() {
  daysInput = document.getElementById("days-input").value;
  console.log(daysInput);
}
function getMonths() {
  monthsInput = document.getElementById("months-input").value;
  console.log(monthsInput);
}
function getYears() {
  yearsInput = document.getElementById("years-input").value;
  console.log(yearsInput);
}

function printSubmit(e) {
  e.preventDefault();
  const yearsOutput = document.getElementById("years-output");
  const monthsOutput = document.getElementById("months-output");
  const daysOutput = document.getElementById("days-output");

  const inputDate = new Date(yearsInput, monthsInput - 1, daysInput);
  const currDate = new Date();
  const ageInMilliseconds = currDate - inputDate;
  const ageInSeconds = ageInMilliseconds / 1000;
  const ageInMinutes = ageInSeconds / 60;
  const ageInHours = ageInMinutes / 60;
  const ageInDays = ageInHours / 24;
  const ageInMonths = ageInDays / 30.44; // average number of days in a month
  const ageInYears = ageInMonths / 12;

  yearsOutput.innerHTML = Math.floor(ageInYears);
  monthsOutput.innerHTML = Math.floor((ageInYears - Math.floor(ageInYears)) * 12);
  daysOutput.innerHTML = Math.floor(ageInDays % 30.44);
}
