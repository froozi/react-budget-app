const INCOME_CATEGORIES = {
    salary: "Заработная плата",
    cashback: "Кэшбэк",
    deposit: "Вклад"
}

const EXPENSE_CATEGORIES = {
    products: "Проудкты",
    services: "Комумунальные услуги",
    car: "Автомобиль",
    health:"Здоровье и красота"
}

const CATEGORIES = {...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES};

export {
    INCOME_CATEGORIES,
    EXPENSE_CATEGORIES,
    CATEGORIES
}