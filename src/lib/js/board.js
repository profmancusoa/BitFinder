import { combinations, equal, indexDependencies, matrix, number, numberDependencies } from "mathjs";
import { Cell } from "./cell.js";

export class Board {
    #board = [];
    #rows = 0;
    #cols = 0;
  
    constructor(cols) {
        this.#rows = cols;
        this.#cols = cols;
        this.#board = [...Array(cols)].map((row,i) => [...Array(cols)].map((col,j) => new Cell(i, j, 2)));
        this.#genRandomVals();        
    }

    #genRandomVals() {
        let coords = new Set();
        let maxHints = this.#randomMinMax(8,15);
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
    
    // given an array of 1's and 0's 
    // return true if the array has exactly cols /2 1's
    #hasones(arr) {
        return arr.reduce((a, e) => a += e.value, 0) == (this.#cols / 2);
    }

    #lineLength(line) {
        //count all the elements either 1's or 0's
        return line.filter(cell => cell.value != 2).length;
    }

    #isValidLine(line) {
        if(this.#hasConsecutiveVals(line) == true) 
            return false;
        
        if(this.#lineLength(line) == this.#cols) 
            return this.#hasones(line);
    
        return true;
    }

    isValidBoard() {
        let validRows = true;
        let validCols = true;
        
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
