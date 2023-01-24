const formatNumber = (value) =>{
    return Intl.NumberFormat('ru-Ru').format(parseInt(value) || 0);
}

export default formatNumber;