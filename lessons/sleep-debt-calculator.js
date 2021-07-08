// get the number of sleep hours based on the day that is passed
const getSleepHours = (day) => {
  switch (day) {
    case "sunday":
      return 8;
      break;
    case "monday":
      return 6;
      break;
    case "tuesday":
      return 5;
      break;
    case "wednesday":
      return 8;
      break;
    case "thursday":
      return 6;
      break;
    case "friday":
      return 7;
      break;
    case "saturday":
      return 8;
      break;
    default:
      "Invalid: Enter a day of the week";
      break;
  }
};

// get total sleep hours for the week
const getActualSleepHours = () => 7 + 5 + 6 + 5 + 7 + 8 + 9;

const getIdealSleepHours = (hours) => {
  return hours * 7;
};

const calculateSleepDebt = (hours) => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(hours);

  if (actualSleepHours < idealSleepHours) {
    return `You didn't get enough sleep. Hours needed: ${idealSleepHours - actualSleepHours}`;
  } else if (actualSleepHours > idealSleepHours) {
    return "You got more sleep than needed!";
  } else {
    return "You got the perfect amount of sleep!";
  }
};

console.log(calculateSleepDebt(8));
