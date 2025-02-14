const quotes = [
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Your most unhappy customers are your greatest source of learning. - Bill Gates",
    "Talk is cheap. Show me the code. - Linus Torvalds"
  ];
  
  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }
  
  // Function to remove ads
  function removeAds() {
    const adSelectors = [
      "iframe[src*='ads']", "div[class*='ad']", "div[id*='ad']",
      "[aria-label*='Sponsored']", "div[data-ad]"
    ];
  
    adSelectors.forEach(selector => {
      document.querySelectorAll(selector).forEach(ad => {
        const quoteDiv = document.createElement("div");
        quoteDiv.style.cssText = "padding: 15px; font-size: 14px; font-style: italic; background: #f3f3f3; border: 1px solid #ccc;";
        quoteDiv.textContent = getRandomQuote();
        ad.replaceWith(quoteDiv);
      });
    });
  }
  
  // Run script every few seconds
  setInterval(removeAds, 2000);
  