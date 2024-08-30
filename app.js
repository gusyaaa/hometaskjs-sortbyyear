function sortByBirth(arr) {
    return arr.sort((a, b) => {
        
        const yearA = a.split(', ')[1];
        const yearB = b.split(', ')[1];
        return yearA < yearB ? -1 : yearA > yearB ? 1 : 0;
    })
}
let data = ["Ali, 2007", "Huseyn, 2005", "Anar, 1978", "Kamal, 1999", "Ismail, 2004"]

console.log(sortByBirth(data));