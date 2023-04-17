module.exports.findDupes = (arr) => {
    return arr.filter((number, index, numbers) => numbers.indexOf(number) !== index)
}