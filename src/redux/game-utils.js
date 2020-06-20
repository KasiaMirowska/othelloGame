export const emptyBoard = () => {
    let arr = [];
    for (let i = 0; i < 64; i++) {
        arr.push(i);
    }

    let rowsArr = [];
    let chunk = 8;

    for (let i = 0; i < arr.length; i += chunk) {
        let temp = arr.slice(i, i + chunk);
        rowsArr.push(temp);
    };
    return rowsArr;
}

export const startBoard = () => {
    const startB = emptyBoard();
        
    startB[3].splice(4, 1, 'B');
    startB[4].splice(3, 1, 'B');
    startB[3].splice(3, 1, 'W');
    startB[4].splice(4, 1, 'W');
    
    return startB;
};



