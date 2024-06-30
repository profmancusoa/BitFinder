import { Cell } from "./cell.js";

const MIN_HINTS = 8;
const MAX_HINT = 15;

export class Board {
    #board = [];
    #rows = 0;
    #cols = 0;
    #solution = [];
  
    constructor(cols) {
        this.#rows = cols;
        this.#cols = cols;
        this.#board = [...Array(cols)].map((row,i) => [...Array(cols)].map((col,j) => new Cell(i, j, 2)));
        
        //init board with a valid solution
        this.#solution = this.#findSolutions()

        console.log("BOARD:", this.#board)
        console.log("SOLUTION:", this.#solution)


        //uncover random cells until board is valid
        this.#showHints(this.#solution);
    }

    #generateDisposition(arr, k) {
        const result = [];
    
        function permute(subset, remaining) {
            if (subset.length === k) {
                result.push([...subset]);
                return;
            }
    
            for (let i = 0; i < remaining.length; i++) {
                const newSubset = [...subset, remaining[i]];
                const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1));
                permute(newSubset, newRemaining);
            }
        }
    
        permute([], arr);
        return result;
    }

    #findSolutions() {
        //generate all the 2^cols combinations
        let binCanidates = [];
        for(let i = 0; i < 2**this.#cols; i++) {
            let binStr = i.toString(2).padStart(this.#cols, '0');
            let line = binStr.split('').map(Number)
            if(this.#isValidLine(line))
                binCanidates.push(line);
        }

        //generate D(14,6) disposition of 6 rows out of 14 possible rows
        let dispositions = this.#generateDisposition(binCanidates, this.#cols)

        let finalBoard = [];
        for(let disposition of dispositions) {
            if(this.isValidBoard(disposition))
                finalBoard.push(disposition)
        }

        //randomly select one correct solution and assign to board
        return finalBoard[this.#random(finalBoard.length)];
    }

    isGameOver() {
        // the game is over when the board is completely filled in
        // and the board is a valid board
        if(this.#board.flat(1).filter(cell => cell.value != 2).length == this.#cols**2) {
            return this.isValidBoard(this.#board);
        }
        return false;
    }

    #showHints(solution) {
        let hints = new Set();
        let maxHints = this.#randomMinMax(MIN_HINTS, MAX_HINT);
        console.log("max HINTS:", maxHints)

        //extract exactly maxHints different row indexes
        while(hints.size < maxHints) {
            let r = this.#random(this.#cols);
            let c = this.#random(this.#cols);
            hints.add(`${r}-${c}`);
        }
    
        hints.forEach(e => {
            let r = +e.split('-')[0];
            let c = +e.split('-')[1];

            this.#board[r][c].value = solution[r][c];
            this.#board[r][c].status = Cell.STATUS_FIX;
        });
    }
    
    #random(max) {  
        return Math.floor(Math.random() * max *  100 / 100);
    }

    #randomMinMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    // given an array of 1's and 0's 
    // return true if there are cols/2 elements with same value
    #hasConsecutiveVals(arr) {
        for (let i = 0; i <= arr.length / 2; i++) {
            if(typeof(arr[0]) != 'number') {
                if (arr[i].value != 2 && arr[i].value == arr[i + 1].value && arr[i + 1].value == arr[i + 2].value)
                    return true;
            } else {
                if (arr[i] != 2 && arr[i] == arr[i + 1] && arr[i + 1] == arr[i + 2])
                    return true;
            }
        }
        return false;
    }
    
    // check if in the given line there are too many 1's or 0's
    #tooManyVals(line, val) {
        return line.filter(cell => { 
            return typeof(line[0]) != 'number' ? cell.value == val : cell == val
        }).length > (this.#cols / 2);
    }

    // validate a line of the board
    #isValidLine(line) {
        // to be valid, a line must not have: 
        // - consecutive numbers of same value
        // - too many 1's
        // - too many 0's
        if(this.#hasConsecutiveVals(line) == true) 
            return false;
        
        if(this.#tooManyVals(line, 0) == true)
            return false;

        if(this.#tooManyVals(line, 1) == true)
            return false;

        return true;
    }

    isValidBoard(board) {
        if(board == undefined) board = this.#board;
        let validRows = true;
        let validCols = true;
        
        // a board to be valid must have:
        // - all valid rows 
        // - all valid columns
        //check if there is at least one row invalid
        for(let row of board)
            validRows &&= this.#isValidLine(row);

        //check if there is at least one col invalid
        for(let col = 0; col < this.#cols; col++) 
            validCols &&= this.#isValidLine(board.map(r => r[col]));

        // if all rows and cols are valid the grid is valid
        return validRows && validCols;
    }

    // check if the current board partailly or fully matches the valid solution
    isValidSolution() {
        for(let [i, row] of this.#solution.entries()) {
            for(let [j, col] of row.entries()) {
                let cellValue = this.getCell(i,j).value;
                if(cellValue != 2 && this.#solution[i][j] != cellValue)
                    return false;
            }
        }
        return true;
    }

    get rows() {
        return this.#rows;
    }

    get cols() {
        return this.#cols;
    }

    getCell(r, c) {
        return r >= 0 && 
            r < this.#rows &&
            c >= 0 &&
            c < this.#cols ? this.#board[r][c] : null;
    }    
}
