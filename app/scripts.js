const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var request = new XMLHttpRequest();

main();

async function main() {
  request.open('GET', 'https://72vzilaj29.execute-api.eu-west-2.amazonaws.com/dev', true);
  request.onload = async function () {


    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {

      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      const h2 = document.createElement('h2');
      const h3 = document.createElement('h3');
      const h4 = document.createElement('h3');

      h1.textContent = data.Items[0].env_values.Device_ID
      h2.textContent = data.Items[0].env_values.Temperature
      h3.textContent = data.Items[0].env_values.Humidity
      h4.textContent = data.Items[0].env_values.Seconds

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(h4);

    } else {
      const errorMessage = document.createElement('marquee');
      errorMessage.textContent = `Something went wrong`;
      app.appendChild(errorMessage);
    }
  }
}
request.send();

