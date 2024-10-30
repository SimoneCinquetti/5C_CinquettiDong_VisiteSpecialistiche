const getMondayOfDate = (inputDate) => {
    const date = new Date(inputDate);
    date.setDate(date.getDate() - (date.getDay() - 1));
    return date.toISOString().split('T')[0]
}
