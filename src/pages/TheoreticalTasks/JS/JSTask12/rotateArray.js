export function rotateArray(array) {
    const result = [];
    if(!Array.isArray(array)){
        return result;
    }
    for(let i = 0; i < array[0].length; i++) {
        const row = array.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
}
