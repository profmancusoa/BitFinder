import { combinations, equal, indexDependencies, matrix, number, numberDependencies } from "mathjs";
import { Cell } from "./cell.js";

const MIN_HINTS = 8;
const MAX_HINT = 15;

export class Board {
    #board = [];
    #rows = 0;
    #cols = 0;
  
    constructor(cols) {
        this.#rows = cols;
        this.#cols = cols;
        this.#board = [...Array(cols)].map((row,i) => [...Array(cols)].map((col,j) => new Cell(i, j, 2)));
        
        //uncover random cells until board is valid
        do {
            this.#resetBoard();
            this.#uncoverRandomCells();
        } while(!this.isValidBoard());
    }

    isGameOver() {
        // the game is over when the board is completely filled in
        // and the board is a valid board
        if(this.#board.flat(1).filter(cell => cell.value != 2).length == this.#cols**2) {
            return this.isValidBoard();
        }

        return false;
    }

    #resetBoard() {
        this.#board.forEach(r => {
            r.forEach(cell => {
                cell.value = 2;
                cell.status = Cell.STATUS_CHANGE;
            } )
        })
    }

    #uncoverRandomCells() {
        let coords = new Set();
        let maxHints = this.#randomMinMax(MIN_HINTS, MAX_HINT);
        let number = 0;
        while(coords.size < maxHints) {
            let r = this.#random(this.#cols);
            let c = this.#random(this.#cols);
            this.#board[r][c].value = this.#randomMinMax(0, 2);
            this.#board[r][c].status = Cell.STATUS_FIX;
            coords.add(`${r}-${c}`);
        }
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
            if (arr[i].value != 2 && arr[i].value == arr[i + 1].value && arr[i + 1].value == arr[i + 2].value)
                return true;
        }
        return false;
    }
    
    // check if in the given line there are too many 1's or 0's
    #tooManyVals(line, val) {
        return line.filter(cell => cell.value == val).length > (this.#cols / 2);
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

    isValidBoard() {
        let validRows = true;
        let validCols = true;
        
        // a board to be valid must have:
        // - all valid rows 
        // - all valid columns
        //check if there is at least one row invalid
        for(let row of this.#board)
            validRows &&= this.#isValidLine(row);

        //check if there is at least one col invalid
        for(let col = 0; col < this.#cols; col++) 
            validCols &&= this.#isValidLine(this.#board.map(r => r[col]));

        // if all rows and cols are valid the grid is valid
        return validRows && validCols;
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
