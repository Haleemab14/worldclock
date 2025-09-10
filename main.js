const countrySelect = document.getElementById("count");
const citySelect = document.getElementById("cit");
const long1 = document.getElementById("long1");
const long2 = document.getElementById("long2");
const timeDiv = document.querySelector(".time");
const dateDiv = document.querySelector(".date");
const cityshow = document.querySelector(".city");
const countryshow = document.querySelector(".country");
const dateshow = document.querySelector(".date");
//functions
function updateClock(timeZone) {
  if (!timeZone) return;
  const now = new Date();
  // Format time for given city timezone
  const options = {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  };
  const timeStr = new Intl.DateTimeFormat("en-GB", options).format(now);
  // Format date
  const dateOptions = {
    timeZone,
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  };
  const dateStr = new Intl.DateTimeFormat("en-GB", dateOptions).format(now);
  timeDiv.textContent = timeStr;
  dateDiv.textContent = dateStr;
  //getclockimages
  let hour = parseInt(
    new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", hour12: false }).format(now)
  );
  document.querySelectorAll(".clock").forEach(el => el.style.display = "none");
  const img = getwatchimage("time", hour);
  if (img) img.style.display = "block";
  //getbackgroundimages
  document.querySelectorAll(".backs").forEach(el => el.style.display = "none");
  let ampm = "pm";
  if (hour >= 0 && hour < 12) { ampm = "am" }
  const backimage = getbackimage(ampm, hour);
  if (backimage) backimage.style.display = "block";
  //change color text
  if (hour >= 18 || hour <= 5) {
    document.querySelectorAll(".color").forEach(el => {
      el.style.webkitTextFillColor = "rgba(255, 255, 255, 1)"
      el.style.backgroundColor = "#000000ff"
    });
    const body = document.body;
    body.style.webkitTextFillColor = "rgba(255, 255, 255, 1)";
    body.style.backgroundColor = "#000000ff";
    document.getElementById("logo2").style.display = "block";
    document.getElementById("logo1").style.display = "none";
  }
  else {
    document.querySelectorAll(".color").forEach(el => {
      el.style.webkitTextFillColor = "rgba(0, 0, 0, 1)";
      el.style.backgroundColor = "#ffffffff";
    });
    const body = document.body;
    body.style.webkitTextFillColor = "rgba(0, 0, 0, 1)";
    body.style.backgroundColor = "#ffffffff";
    document.getElementById("logo2").style.display = "none";
    document.getElementById("logo1").style.display = "block";
  }
  const formatterHour = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "numeric", hour12: false });
  const formatterMinute = new Intl.DateTimeFormat("en-GB", { timeZone, minute: "numeric" });
  const hours = parseInt(formatterHour.format(now), 10) % 12;
  const minutes = parseInt(formatterMinute.format(now), 10);
  // Calculate angles
  const hourAngle = (hours + minutes / 60) * 30; // 30° per hour
  const minuteAngle = minutes * 6;              // 6° per minute
  // Rotate sticks
  long2.style.transform = `rotate(${hourAngle}deg)`;
  long1.style.transform = `rotate(${minuteAngle}deg)`;
}
function getwatchimage(idBase, hour) {
  return document.querySelector(`.${idBase}${hour}`);
}
function getbackimage(idBase, hour) {
  return document.querySelector(`.${idBase}${hour}`);
}
// Update every second
let clockInterval;
citySelect.addEventListener("change", () => {
  const tz = citySelect.value;
  const selectedIndex = citySelect.selectedIndex;
  const selectedOption = citySelect.options[selectedIndex];
  const optionText = selectedOption.text;
  cityshow.textContent = optionText;

  let slash = tz.search("/")
  countryshow.textContent = tz.substring(0, slash);
  clearInterval(clockInterval);
  if (tz) {
    updateClock(tz);
    clockInterval = setInterval(() => updateClock(tz), 1000);
  }
});
//default time date and year is Islamabad Pakistan
const timezone = "Asia/Karachi";
clearInterval(clockInterval);
if (timezone) {
  updateClock(timezone);
  clockInterval = setInterval(() => updateClock(timezone), 1000);
}
// create a Date object
const now = new Date();
console.log(now);
console.log(now.getHours() + ":" + now.getMinutes());

