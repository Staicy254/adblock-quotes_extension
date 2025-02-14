document.addEventListener("DOMContentLoaded", () => {
    const quotes = [
      "Stay hungry, stay foolish. - Steve Jobs",
      "Don’t compare yourself with anyone in this world. - Bill Gates",
      "The people who are crazy enough to think they can change the world, are the ones who do. - Steve Jobs"
    ];
  
    const quoteElement = document.getElementById("quote");
    const button = document.getElementById("new-quote");
  
    function getRandomQuote() {
      return quotes[Math.floor(Math.random() * quotes.length)];
    }
  
    quoteElement.textContent = getRandomQuote();
  
    button.addEventListener("click", () => {
      quoteElement.textContent = getRandomQuote();
    });
  });
  