const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
      masteryLevel: 'not'
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
      masteryLevel: 'not'
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
      masteryLevel: 'not'
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
      totallyMastered: false,
      almostMastered: false,
      notMastered: true,
      masteryLevel: 'not'
    },
  ]; 

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newCardFront: '',
      newCardBack: '',
      sortLevel: 'all',
      error: false
    },
    methods: {
      toggleCard(card) {
        card.flipped = !card.flipped;
      },
      sortCards(level) {
        let allCards = document.getElementsByClassName('card-container');
        let totallyMasteredCards = document.getElementsByClassName('totally');
        let almostMasteredCards = document.getElementsByClassName('almost');
        let notMasteredCards = document.getElementsByClassName('not'); 
        
        if(level == 'totally') {
          for(let i = 0; i < totallyMasteredCards.length; i++) {
            totallyMasteredCards[i].style.display = 'inline-block';
          }
          for(let i = 0; i < almostMasteredCards.length; i++) {
            almostMasteredCards[i].style.display = 'none';
          }
          for(let i = 0; i < notMasteredCards.length; i++) {
            notMasteredCards[i].style.display = 'none';
          }
        } else if(level == 'almost') {
          for(let i = 0; i < almostMasteredCards.length; i++) {
            almostMasteredCards[i].style.display = 'inline-block';
          }
          for(let i = 0; i < totallyMasteredCards.length; i++) {
            totallyMasteredCards[i].style.display = 'none';
          }
          for(let i = 0; i < notMasteredCards.length; i++) {
            notMasteredCards[i].style.display = 'none';
          }
        } else if(level == 'not') {
          for(let i = 0; i < notMasteredCards.length; i++) {
            notMasteredCards[i].style.display = 'inline-block';
          }
          for(let i = 0; i < almostMasteredCards.length; i++) {
            almostMasteredCards[i].style.display = 'none';
          }
          for(let i = 0; i < totallyMasteredCards.length; i++) {
            totallyMasteredCards[i].style.display = 'none';
          }
        } else {
          for(let i = 0; i < allCards.length; i++) {
            allCards[i].style.display = 'inline-block';
          }
        }
      },
      setMasteryLevel(card, level) {
        if(level == 'totally') {
          card.flipped = !card.flipped;
          card.masteryLevel = 'totally';
        } else if(level == 'almost') {
          card.flipped = !card.flipped;
          card.masteryLevel = 'almost';
        } else {
          card.flipped = !card.flipped;
          card.masteryLevel = 'not';
        }
      },
      addNewCard() {
        if(!this.newCardFront || !this.newCardBack) {
          this.error = true;
        } else {
          this.cards.push({
            front: this.newCardFront,
            back: this.newCardBack,
            flipped: false
          });
          this.newCardFront = '';
          this.newCardBack = '';
          this.error = false;
        }
      }
    }
  });