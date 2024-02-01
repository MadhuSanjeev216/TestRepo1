function reqListener() {
  console.log(this.responseText);
}

const request = new XMLHttpRequest();
request.addEventListener('load', reqListener);
request.open('GET', 'https://restcountries.com/v3.1/name/india');
request.send();
