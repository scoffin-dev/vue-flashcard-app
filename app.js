const flashcardDeck = [
    {
        front: 'Term for a group of cats',
        back: 'Clowder',
        flipped: false
    },
    {
        front: 'Term for a group of crows',
        back: 'Murder',
        flipped: false
    },
    {
        front: 'Term for a group of eagles',
        back: 'Covocation',
        flipped: false
    }
]

new Vue({
    el: '#flashcard-app',
    data: {
        deck: flashcardDeck
    },
    methods: {
        flip: function(card) {
            card.flipped = !card.flipped;
        }
    },
    computed: {

    }
});