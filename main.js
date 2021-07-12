function renderTime() {
  const currentTime = new Date();
  const seconds = addLeadingZero(currentTime.getSeconds());
  const minutes = addLeadingZero(currentTime.getMinutes());
  let hours = currentTime.getHours();

  const isAm = hours < 12 || hours === 0;
  let amPm = isAm ? 'AM' : 'PM';

  const timeElem = document.getElementById('time');
  timeElem.innerText = `${formatHour(hours)}:${minutes}:${seconds} ${amPm}`;
}

function addLeadingZero(number) {
  return number < 10 ? '0' + number : number;
}

function formatHour(hour) {
  hour = hour >= 13 ? hour - 12 : hour;

  hour = hour === 0 ? hour + 12 : hour;
  return hour;
}

function renderDate() {
  const currentDate = new Date();
  const dateElem = document.getElementById('date');
  let day = daysOfTheWeek[currentDate.getUTCDay()];
  let month = monthsOfTheYear[currentDate.getMonth()];
  let date = getOrdinalIndicator(currentDate.getDate());
  let year = currentDate.getFullYear();
  let dateString = `${day}, ${month} ${date} ${year}`;
  dateElem.innerText = dateString;
}

function getOrdinalIndicator(date) {
  if (date < 10 || date > 20) {
    switch (date % 10) {
      case 1:
        return `${date}st`;
      case 2:
        return `${date}nd`;
      case 3:
        return `${date}rd`;
    }
  }
  return `${date}th`;
}

const daysOfTheWeek = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

const monthsOfTheYear = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

renderTime();
renderDate();

setInterval(() => {
  renderTime();
  renderDate();
});
