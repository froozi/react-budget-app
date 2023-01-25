const FILTERES_TYPES = {
    all: "Все операции",
    income: "Все доходы",
    expense: "Все расходы"
}

const Filter = ({items, setFilteredItems}) => {

    const onClickFilterHandle = (type) => {
        switch(type) {
            case TYPES.INCOME:
                setFilteredItems(items.filter((item) => item.type === TYPE.INCOME));
                break;

            case TYPE.EXPENSE:
                setFilteredItems(items.filter((item) => item.type === TYPE.EXPENSE));
                break;
            default:
                setFilteredItems(items);
        }
    }

    const Buttons = Object.keys(FILTER_TYPES).map((type) => {
        return(
            <button 
                key={type}
                onClick={() => onClickFilterHandle(type)}
                className="filter__button"
            >
                {FILTER_TYPES[type]}
            </button>
        )
    })
    return (
        <div className="filter">
            <button onClick = {onClcikFilterAllItems} className="filter__button">Все операции</button>
            <button onClick={onClickFilterIncomeItems} className="filter__button">Все доходы</button>
            <button onClick={onClickFilterExpenseItems} className="filter__button">Все расходы</button>
        </div>
    )
}

export default Filter;