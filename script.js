function getNewAffirmation() {
    const adjectives = [
      "Wonderful",
      "Amazing",
      "Incredible",
      "Brilliant",
      "Talented",
      "Powerful",
      "Strong",
      "Courageous",
      "Worthy",
      "Radiant"
    ];
  
    const nouns = [
      "person",
      "soul",
      "mind",
      "heart",
      "life",
      "journey",
      "being",
      "existence"
    ];
  
    const verbs = [
      "deserves",
      "is",
      "possesses",
      "embodies",
      "radiates",
      "embraces"
    ];
  
    const phrases = [
      "all the love and happiness in the world.",
      "the power to achieve all their dreams.",
      "the strength to overcome any challenge.",
      "the wisdom to navigate life's journey.",
      "the courage to be their authentic selves.",
      "the grace to handle any situation with ease."
    ];
  
    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  
    
    const affirmation = `You, ${randomAdjective} ${randomNoun}, ${randomVerb} ${randomPhrase}`;
  
    
    document.getElementById("affirmation").textContent = affirmation;
  }
  
  
  window.onload = function() {
    getNewAffirmation();
  };
