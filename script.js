/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */

const input = document.getElementById('input');
const items = document.getElementById('items');

function createItem(text) {
    const item = document.createElement('div');
    item.textContent = text;
    item.className = 'item';
    item.title = 'Кликни, чтобы отметить как сделано';
    item.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('done');
    });

    return item;
}

function addItemFromInput() {
    const value = input.value.trim();
    if (!value) return;
    const item = createItem(value);
    items.append(item);
    input.value = '';
    input.focus();
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        addItemFromInput();
    }
});