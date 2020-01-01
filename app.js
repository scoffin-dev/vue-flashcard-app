const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
      totallyMastered: false,
      almostMastered: false,
      notMastered: true
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
      totallyMastered: false,
      almostMastered: false,
      notMastered: true
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
      totallyMastered: false,
      almostMastered: false,
      notMastered: true
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
      totallyMastered: false,
      almostMastered: false,
      notMastered: true
    },
  ]; 

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      newCardFront: '',
      newCardBack: '',
      error: false
    },
    methods: {
      toggleCard(card) {
        card.flipped = !card.flipped;
      },
      setCardToTotallyMastered(card) {
        card.flipped = !card.flipped;
        card.totallyMastered = true;
        card.almostMastered = false;
        card.notMastered = false;
      },
      setCardToAlmostMastered(card) {
        card.flipped = !card.flipped;
        card.totallyMastered = false;
        card.almostMastered = true;
        card.notMastered = false;
      },
      setCardToNotMastered(card) {
        card.flipped = !card.flipped;
        card.totallyMastered = false;
        card.almostMastered = false;
        card.notMastered = true;
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