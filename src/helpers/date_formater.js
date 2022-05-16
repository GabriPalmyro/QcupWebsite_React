function dateToString(date) {
    var newDate = date.split("/",2);
    return newDate[2] + '-' + newDate[1] + '-' + newDate[0]
}