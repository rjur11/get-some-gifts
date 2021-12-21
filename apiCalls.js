export const fetchGifts = () => {
  return fetch("https://mysterious-mesa-00016.herokuapp.com/items")
    .then((response) => response.json())
    .then((data) => data.giftsData)
    .catch((error) => console.log(error));
};
