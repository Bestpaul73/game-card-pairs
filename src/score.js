function renderScoreScreen(timerInterval, timer, win) {
    clearInterval(timerInterval);

    const background = document.createElement('div');
    background.classList.add('background');
    document.body.appendChild(background);

    const scoreScreen = document.createElement('div');
    scoreScreen.classList.add('score-screen');
    scoreScreen.classList.add('center');

    const resultImg = document.createElement('img');
    resultImg.classList.add('result-img');
    win
        ? resultImg.setAttribute('src', './img/win.png')
        : resultImg.setAttribute('src', './img/lost.png');
    scoreScreen.appendChild(resultImg);

    const resultTitle = document.createElement('div');
    resultTitle.classList.add('result-title');
    win
        ? (resultTitle.textContent = 'Вы выиграли!')
        : (resultTitle.textContent = 'Вы проиграли!');
    scoreScreen.appendChild(resultTitle);

    const resultText = document.createElement('div');
    resultText.classList.add('result-text');
    resultText.textContent = 'Затраченное время:';
    scoreScreen.appendChild(resultText);

    const resultTime = document.createElement('div');
    resultTime.classList.add('result-time');
    let second = Math.floor(timer) - Math.floor(timer / 60) * 60;
    let minute = Math.floor(timer / 60);
    second = second.valueOf() < 10 ? `0${second}` : second;
    minute = minute.valueOf() < 10 ? `0${minute}` : minute;
    resultTime.textContent = `${minute}.${second}`;
    scoreScreen.appendChild(resultTime);

    const resultBtn = document.createElement('button');
    resultBtn.classList.add('result-btn');
    resultBtn.textContent = 'Играть снова';
    resultBtn.addEventListener('click', () => {
        background.remove();
        scoreScreen.remove();
        renderLevelScreen();
    });
    scoreScreen.appendChild(resultBtn);

    document.body.appendChild(scoreScreen);
}
