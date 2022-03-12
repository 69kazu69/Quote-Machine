
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
    <div className="App h-100" id="quote-box" >
      <nav class="navbar navbar-dark bg-dark  ">
  <i class="navbar-brand mx-auto h1">Quotes.</i>
</nav>
      <header className="App-header">
      <div class="card bg-dark mx-5 shadow-lg">
  <div class="card-header">
    Quote
  </div>
  <div class="card-body"
  
  
  
  >
    <blockquote class="blockquote mb-0">
      <p>{quote.text}</p>
      <footer class="blockquote-footer">{quote.author}</footer>
    </blockquote>
  </div>
</div>
        <div className="d-flex align-items-center w-25 justify-content-around my-5 ">
          
          <button className="btn btn-warning mr-5 " onClick={getQuote} id="new-quote"> Get Quote.</button>
            
          
          <button className="btn btn-primary"  onClick={() => { window.location.replace("https://twitter.com/intent/tweet")}}>   Tweet   </button>
          
        </div>
      </header>
    </div>
  );
}

export default App;