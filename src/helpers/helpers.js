export const dateBuilder = (d) => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let month = months[d.getMonth()];
  let day = days[d.getDay()];
  let year = d.getFullYear();
  let date = d.getDate();

  return `${day} ${month} ${date} ${year}`;
};

export const showNotif = (setter) => {
  setter(true);
  setTimeout(() => setter(false), 2000);
};
