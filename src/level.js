const form = document.querySelector('.level-form');
        const radioButtons = form.querySelectorAll('label');
        const radioBtn = form.querySelector('.level-radio');

        function handleRadioChange(e) {
            LEVEL = e.target.value;
            radioButtons.forEach((item) => {
                item.classList.remove('level-checked_button');
            });
            e.target.parentElement.classList.add('level-checked_button');
        }

        radioBtn.addEventListener('change', handleRadioChange);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (LEVEL) {
                console.log(LEVEL, "переходим к игре");
            };
        });