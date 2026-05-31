export function formatNumberWithCommas(number: number) {
    if (number === undefined || number === null) {
        return "عدد نامعتبر است";
    }
    return number.toLocaleString() //  1,000,000
}