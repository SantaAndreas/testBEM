// массивы товаров
let company = ['Henkel', 'Deere', 'McDonalds', 'Ikea', 'Reebok', 'Nike', 'CaterPillar'];

// получаем дом-элементы
let inputs = document.querySelectorAll('.search__input');
let cardWrapper = document.querySelector('.section-cards__content');

//задействуем все фильтра, для работы по всем блокам фильтров на сайте.
inputs.forEach(item => {
    item.addEventListener('input', filter)
})

// рендерим карточки при первой загрузке страницы
window.addEventListener('load', renderCards(company))

// основная функция поиск/фильтр
function filter(e) {
    let filterItem = e.target.value
    let filterCompany = company.filter(item => item.toLowerCase().includes(filterItem.toLowerCase()))
    clearContentCards()
    renderCards(filterCompany)
}

// функция отчистки карточек
function clearContentCards() {
    cardWrapper.innerHTML = ''
}

// функция рендера карточек
function renderCards(arr) {
    if (!arr.length) {
        cardWrapper.innerHTML = 'Список отсутствует...'
        return
    }

    cardWrapper.innerHTML += arr.map(item =>
        `
            <div class="card-partner" data-name="${item}">
                <p>${item}</p>
                <img class="card-partner__image" src="https://placehold.it/150x50" alt="partner-${item}">
            </div>
        `
    ).join('')
}




