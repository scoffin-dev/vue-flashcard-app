const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  // Get infor for new cards from user
  // Add new card when user clicks a button
  // Delete cards
  // Animate card flip
  // Display error message if front and/or back isn't provided for new card

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