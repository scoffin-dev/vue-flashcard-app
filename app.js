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
      setSortLevel(level) {
        if(level == 'all' || level == 'totally' || level == 'almost' || level == 'not') {
          sortLevel == level;
        } else {
          sortLevel == 'all';
        }
      },
      setMasteryLevel(card, level) {
        if(level == 'totally') {
          card.flipped = !card.flipped;
          card.masteryLevel = 'totally';
          /*card.totallyMastered = true;
          card.almostMastered = false;
          card.notMastered = false;*/
        } else if(level == 'almost') {
          card.flipped = !card.flipped;
          card.masteryLevel = 'almost';
          /*card.totallyMastered = false;
          card.almostMastered = true;
          card.notMastered = false;*/
        } else {
          card.flipped = !card.flipped;
          card.masteryLevel = 'not';
          /*card.totallyMastered = false;
          card.almostMastered = false;
          card.notMastered = true;*/
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