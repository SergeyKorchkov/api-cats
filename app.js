const btn = document.querySelector(".custom-btn");
let img = document.querySelector(".kartinka");
const url = "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1";
const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key": "live_cQARuxv3plBplgILWT4p0krXOodR9HUuojYEz1RRpQHTkMAH73y4Gq633VaCrGkB"
});
let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
 async function fetchCat() {
try {
const response = await fetch(url, requestOptions)
const data = await response.json()
img.src = data[0].url
} catch(error) {
console.log(error);
}
 }

