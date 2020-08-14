const numberWithComas = (num) => {
    if (num.toString().length > 3) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return num;
    }
}

export default numberWithComas;