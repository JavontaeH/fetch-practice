const source =
  "https://gist.githubusercontent.com/brendalong/ab2424b0069ed0dd56b01951462a109d/raw/716c0776c45adea089644cffa7eadab139f9f47c/womensday.json";

const source2 = "https://type.fit/api/quotes";

// fetch data
const dataFunc = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((pResponse) => {
      console.log(pResponse);
      return pResponse;
    });
};

// pass both source jsons as objects in an array, and then take the two lengths of each array element and add them together
Promise.all([dataFunc(source), dataFunc(source2)]).then((dataArr) => {
  let sum = dataArr[0].length + dataArr[1].length;
  console.log(sum);
});
