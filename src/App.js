
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Row } from 'react-bootstrap';
function App() {
  const [quote, setQuote] = useState('');
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then((data) => {
      let randomNum = Math.floor(Math.random() * data.length);
      setQuote(data[randomNum]);
    });
    /* this functions first fetch the response from the api  than the  respose is passed through json() method and we will get an object and this will 
    contain a quote and the name of the author and we will now get an random member of the project*/
  };
  useEffect(() => {
    getQuote();
  }, {});
  return (
    <div className="App" id="quote-box">
      <header className="App-header">
        <div id="text">
          {quote.text}
        </div>
        <div id="author">
          <span> - {quote.author}</span>
        </div>
        <Button className="btn" onClick={getQuote} className = "mt-3 mb-3" id="new-quote"> Get Quote.</Button>
        <div id="tweet-quote">
          
          <a href="https://twitter.com/intent/tweet"><Button>   Tweet   </Button></a>
          
        </div>
      </header>
    </div>
  );
}

export default App;