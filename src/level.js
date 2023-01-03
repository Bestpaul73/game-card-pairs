/* eslint-disable no-undef */
function renderLevelScreen() {
    const templateLevelScreen = {
        tag: 'div',
        cls: ['center', 'level-screen'],
        content: {
            tag: 'form',
            cls: 'level-form',
            content: [
                {
                    tag: 'div',
                    cls: 'level-radio',
                    content: [
                        {
                            tag: 'label',
                            cls: 'level-title',
                            content: 'Выбери сложность',
                        },
                        {
                            tag: 'div',
                            cls: 'level-buttons',
                            content: [
                                {
                                    tag: 'label',
                                    attrs: {
                                        for: 'level-basic',
                                    },
                                    content: [
                                        {
                                            tag: 'input',
                                            cls: 'level-buttons',
                                            attrs: {
                                                id: 'level-basic',
                                                name: 'group-level',
                                                type: 'radio',
                                                value: 'basic',
                                            },
                                        },
                                        {
                                            tag: 'img',
                                            attrs: {
                                                src: './img/level1.png',
                                                alt: '1',
                                            },
                                        },
                                    ],
                                },
                                {
                                    tag: 'label',
                                    attrs: {
                                        for: 'level-middle',
                                    },
                                    content: [
                                        {
                                            tag: 'input',
                                            cls: 'level-buttons',
                                            attrs: {
                                                id: 'level-middle',
                                                name: 'group-level',
                                                type: 'radio',
                                                value: 'middle',
                                            },
                                        },
                                        {
                                            tag: 'img',
                                            attrs: {
                                                src: './img/level2.png',
                                                alt: '2',
                                            },
                                        },
                                    ],
                                },
                                {
                                    tag: 'label',
                                    attrs: {
                                        for: 'level-advanced',
                                    },
                                    content: [
                                        {
                                            tag: 'input',
                                            cls: 'level-buttons',
                                            attrs: {
                                                id: 'level-advanced',
                                                name: 'group-level',
                                                type: 'radio',
                                                value: 'advanced',
                                            },
                                        },
                                        {
                                            tag: 'img',
                                            attrs: {
                                                src: './img/level3.png',
                                                alt: '3',
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    tag: 'button',
                    cls: 'level-form-btn',
                    content: 'Старт',
                },
            ],
        },
    };

    APP.innerHTML = '';
    APP.appendChild(templateEngine(templateLevelScreen));

    const form = document.querySelector('.level-form');
    const radioButtons = form.querySelectorAll('label');
    const radioBtn = form.querySelector('.level-radio');

    function handleRadioChange(e) {
        LEVEL = e.target.value;
        radioButtons.forEach((item) => {
            item.classList.remove('level-checked-button');
        });
        e.target.parentElement.classList.add('level-checked-button');
    }

    radioBtn.addEventListener('change', handleRadioChange);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (LEVEL) {
            console.log(LEVEL, 'переходим к игре');
            renderGameScreen();
        }
    });
};

renderLevelScreen();
