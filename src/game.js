/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function renderGameScreen() {
    APP.innerHTML = '';
    console.log('Game');
    // let cardDeck = [
    //     spade6,
    //     club6,
    //     diamond6,
    //     heart6,
    //     spade7,
    //     club7,
    //     diamond7,
    //     heart7,
    // ];

    let numberOfCards = '';
    switch (LEVEL) {
        case 'basic':
            numberOfCards = 3;
            break;
        case 'middle':
            numberOfCards = 6;
            break;
        case 'advanced':
            numberOfCards = 9;
            break;
        default:
            console.log('no level selected');
            break;
    }

    let cards = [];
    let randomNumber = '';
    for (let i = 0; i < numberOfCards; i++) {
        do {
            randomNumber = Math.ceil(Math.random() * 36);
        } while (cards.includes(randomNumber));
        cards[i] = randomNumber;
    }

    cards = cards.concat(cards);

    function shuffle(cards) {
        for (let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
    }
    shuffle(cards);
    console.log(cards);

    const playHeader = document.createElement('div');
    playHeader.classList.add('play-header');
    playHeader.classList.add('center');

    const timer = document.createElement('div');
    timer.classList.add('timer');
    timer.textContent = '00.00';
    
    const btn = document.createElement('button');
    btn.classList.add('play-btn');
    btn.textContent = 'Начать заново';
    // btn.disabled = true;
    
    playHeader.appendChild(timer);
    playHeader.appendChild(btn);
    APP.appendChild(playHeader);


    const playField = document.createElement('div');
    playField.classList.add('play-field');
    playField.classList.add('center');
    for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img');
        card.classList.add('img');
        card.setAttribute('src', `./img/${cards[i]}.png`);
        playField.appendChild(card);
    }
    APP.appendChild(playField);
}
