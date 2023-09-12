/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
function renderGameScreen() {
    APP.innerHTML = '';

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

    const timerBlock = document.createElement('div');
    timerBlock.classList.add('timer');
    let second = timeLag;
    let minute = '00';
    timerBlock.textContent = `${minute}.0${second}`;

    const btn = document.createElement('button');
    btn.classList.add('play-btn');
    btn.textContent = 'Начать заново';
    btn.addEventListener('click', () => {
        renderLevelScreen();
    });

    playHeader.appendChild(timerBlock);
    playHeader.appendChild(btn);
    APP.appendChild(playHeader);

    const playField = document.createElement('div');
    playField.classList.add('play-field');
    playField.classList.add('center');
    let card = [];
    for (let i = 0; i < cards.length; i++) {
        card[i] = document.createElement('img');
        card[i].classList.add('img');
        card[i].setAttribute('src', `./img/${cards[i]}.png`);
        card[i].setAttribute('cardID', cards[i]);
        playField.appendChild(card[i]);
    }

    APP.appendChild(playField);

    const idTimeout = setTimeout(() => {
        console.log('прячем карты');
        card.forEach((element) => {
            element.setAttribute('src', `./img/0.png`);
            element.setAttribute('status', 'closed');
        });

        let timer = 0;
        const timerInterval = setInterval(() => {
            timer++;
            second = Math.floor(timer) - Math.floor(timer / 60) * 60;
            minute = Math.floor(timer / 60);
            second = second.valueOf() < 10 ? `0${second}` : second;
            minute = minute.valueOf() < 10 ? `0${minute}` : minute;
            if (minute.valueOf() === 60) {
                console.log('Вы проиграли');
                renderScoreScreen(timerInterval, timer, false);
            }
            timerBlock.textContent = `${minute}.${second}`;
        }, 1000);

        let arrOpenCard = [];
        let firstStep = true;

        playField.addEventListener('click', (e) => {
            const target = e.target;

            if (target.getAttribute('status') === 'open') {
                console.log('Эта карта уже открыта');
                return;
            }

            target.setAttribute('status', 'open');
            arrOpenCard.push(target.getAttribute('cardID'));
            target.setAttribute(
                'src',
                `./img/${arrOpenCard[arrOpenCard.length - 1]}.png`
            );

            if (arrOpenCard.length === cards.length) {
                console.log('Вы выиграли!');
                renderScoreScreen(timerInterval, timer, true);
                return;
            }

            if (firstStep) {
                console.log(
                    'Это первая карта из пары. Пока не с чем сравнивать'
                );
                firstStep = false;
                return;
            }

            if (
                arrOpenCard[arrOpenCard.length - 1] ===
                arrOpenCard[arrOpenCard.length - 2]
            ) {
                console.log('Пара угадана. Продолжаем игру');
                firstStep = true;
                return;
            } else {
                console.log('Пара не угадана. Вы проиграли');
                renderScoreScreen(timerInterval, timer, false);
            }
        });
    }, timeLag * 1000);

    const idCountDown = setInterval(() => {
        second--;
        timerBlock.textContent = `00.0${second}`;
        if (second === 0) {
            clearInterval(idCountDown);
        }
        console.log(second);
    }, 1000);
}
