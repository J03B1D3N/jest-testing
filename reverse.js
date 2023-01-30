function reverse (a) {
    let reversed = ''
    let length = a.length
    for(let i = length; 0 <= i; i--) {
        reversed += a.charAt(i)
    }
    return reversed
}
module.exports = reverse