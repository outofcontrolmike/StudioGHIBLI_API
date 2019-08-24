//Setting up API Connection

//Find Endpoint


//Display onto front end

const app = document.getElementById('root');
const logo = document.createElement('img');

logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);






// 1) -Retrieve data with API Request

//XMLHttpRequest

var request = new XMLHttpRequest();

//open connection, Get Request on URL endpoint


request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function () {

    //begin accessing json

    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card');

            //create an h1 and set the text contenet to the fil'ms title
            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            //Create a paragraph and set the text content to film description

            const p = document.createElement('p');
            movie.description = movie.description.substring(0, 300) // limits 300 chars

            p.textContent = `${movie.description}...` // end with ellipses

            // append the cards to the container element
            container.appendChild(card);

            //Each card will have h1 and p
            card.appendChild(h1);
            card.appendChild(p);
        })
    }
    else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'NO Bueno!';
        app.appendChild(errorMessage);
    }
}

//send request 
request.send();




