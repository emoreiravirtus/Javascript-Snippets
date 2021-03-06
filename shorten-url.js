// Information to reach API
const apiKey = YOUR_API_KEY_FROM_REBRANDLY;
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const xhr = new XMLHttpRequest();
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});

  xhr.responseType = 'json'

  xhr.onreadystatechange = () => {
    if(xhr.readyState === XMLHttpRequest.DONE){
      renderResponse(xhr.response);
    }
  }

  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey)
  xhr.send(data);

}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);
