const btn = document.getElementById('btn');

const text = document.getElementById('text');

btn.addEventListener('click', () => {

    const ChildList = document.createElement('li');

    ChildList.textContent = 'ボタンをクリックしました';

    text.appendChild(ChildList);

    text.textContent ="ボタンをクリックしました";
});