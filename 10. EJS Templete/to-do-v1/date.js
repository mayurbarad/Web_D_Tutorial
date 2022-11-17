module.exports.getDate = function () {
  const d = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  const day = d.toLocaleDateString("en-US", options);

  return day;
};

// module.exports.getDay = function () {
//   const d = new Date();
//   const options = {
//     weekday: "long",
//   };

//   const day = d.toLocaleDateString("en-US", options);

//   return day;
// };
