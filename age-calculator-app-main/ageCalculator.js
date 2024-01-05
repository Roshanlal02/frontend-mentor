let daysInput;
let monthsInput;
let yearsInput;

function getDays() {
  const days = document.getElementById("days-input");
  const daysError = document.getElementById("days-error");
  daysInput = days.value;
  if (days.classList.contains("input-error")) {
    days.classList.remove("input-error");
    document
      .querySelector('label[for="days-input"]')
      .classList.remove("text-error");
    daysError.innerHTML = "";
  }
}
function getMonths() {
  const months = document.getElementById("months-input");
  const monthsError = document.getElementById("months-error");
  monthsInput = months.value;
  if (months.classList.contains("input-error")) {
    months.classList.remove("input-error");
    document
      .querySelector('label[for="months-input"]')
      .classList.remove("text-error");
    monthsError.innerHTML = "";
  }
}
function getYears() {
  const years = document.getElementById("years-input");
  const yearsError = document.getElementById("years-error");
  yearsInput = years.value;
  if (years.classList.contains("input-error")) {
    years.classList.remove("input-error");
    document
      .querySelector('label[for="years-input"]')
      .classList.remove("text-error");
    yearsError.innerHTML = "";
  }
}

function getAllDates() {
  const input = new Date(yearsInput, monthsInput - 1, daysInput);
  const lastDay = new Date(yearsInput, monthsInput - 1, 0);
  var allDates = [];

  for (var i = 1; i <= lastDay.getDate(); i++) {
    var currentDate = new Date(yearsInput, monthsInput - 1, i).getDate();
    allDates.push(currentDate);
  }

  return allDates.includes(input.getDate());
}

function printSubmit(e) {
  e.preventDefault();
  const validDate = getAllDates();
  const daysInput1 = document.getElementById("days-input");
  const daysError = document.getElementById("days-error");
  const monthsInput1 = document.getElementById("months-input");
  const monthsError = document.getElementById("months-error");
  const yearsInput1 = document.getElementById("years-input");
  const yearsError = document.getElementById("years-error");

  if (
    daysInput1.value.trim() === "" ||
    monthsInput1.value.trim() === "" ||
    yearsInput1.value.trim() === ""
  ) {
    if (daysInput1.value.trim() === "") {
      daysInput1.classList.add("input-error");
      document
        .querySelector('label[for="days-input"]')
        .classList.add("text-error");
      daysError.innerHTML = "This field is required";
    }
    if (monthsInput1.value.trim() === "") {
      monthsInput1.classList.add("input-error");
      document
        .querySelector('label[for="months-input"]')
        .classList.add("text-error");
      monthsError.innerHTML = "This field is required";
    }
    if (yearsInput1.value.trim() === "") {
      yearsInput1.classList.add("input-error");
      document
        .querySelector('label[for="years-input"]')
        .classList.add("text-error");
      yearsError.innerHTML = "This field is required";
    }
    if (
      daysInput1.value.trim() === "" &&
      monthsInput1.value.trim() === "" &&
      yearsInput1.value.trim() === ""
    ) {
      daysInput1.classList.add("input-error");
      document
        .querySelector('label[for="days-input"]')
        .classList.add("text-error");
      daysError.innerHTML = "This field is required";

      monthsInput1.classList.add("input-error");
      document
        .querySelector('label[for="months-input"]')
        .classList.add("text-error");
      monthsError.innerHTML = "This field is required";

      yearsInput1.classList.add("input-error");
      document
        .querySelector('label[for="years-input"]')
        .classList.add("text-error");
      yearsError.innerHTML = "This field is required";
    }
  } else if (
    daysInput1.value > 31 ||
    daysInput1.value == 0 ||
    monthsInput1.value > 12 ||
    monthsInput1.value == 0 ||
    yearsInput1.value >= new Date().getFullYear()
  ) {
    if (daysInput1.value > 31 || daysInput1.value == 0) {
      daysInput1.classList.add("input-error");
      document
        .querySelector('label[for="days-input"]')
        .classList.add("text-error");
      daysError.innerHTML = "Must be a valid day";
    }
    if (monthsInput1.value > 12 || monthsInput1.value == 0) {
      monthsInput1.classList.add("input-error");
      document
        .querySelector('label[for="months-input"]')
        .classList.add("text-error");
      monthsError.innerHTML = "Must be a valid month";
    }
    if (yearsInput1.value >= new Date().getFullYear()) {
      yearsInput1.classList.add("input-error");
      document
        .querySelector('label[for="years-input"]')
        .classList.add("text-error");
      yearsError.innerHTML = "Must be in the past";
    }
  } else if (!validDate) {
    daysInput1.classList.add("input-error");
    document
      .querySelector('label[for="days-input"]')
      .classList.add("text-error");
    daysError.innerHTML = "Must be valid date";
  } else {
    daysInput1.classList.remove("input-error");
    document
      .querySelector('label[for="days-input"]')
      .classList.remove("text-error");
    daysError.innerHTML = "";

    monthsInput1.classList.remove("input-error");
    document
      .querySelector('label[for="months-input"]')
      .classList.remove("text-error");
    monthsError.innerHTML = "";

    yearsInput1.classList.remove("input-error");
    document
      .querySelector('label[for="years-input"]')
      .classList.remove("text-error");
    yearsError.innerHTML = "";

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
    monthsOutput.innerHTML = Math.floor(
      (ageInYears - Math.floor(ageInYears)) * 12
    );
    daysOutput.innerHTML = Math.floor(ageInDays % 30.44);
  }
}
