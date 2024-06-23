const STATUS_FIX = 'fix';
const STATUS_CHANGE = 'change';

export class Cell {
    #r = 0; // cell's coordinates
    #c = 0;
    #value = 2;  // 3 values (0, 1, 2)
    #status = STATUS_CHANGE;

    constructor(r, c, val) {
        this.#value = val;
        this.#r = r;
        this.#c = c;
    }

    get value() {
        return this.#value;
    }

    set value(val) {
        this.#value = val;
    }

    get status() {
        return this.#status;
    }

    set status(status) {
        this.#status = status;
    }

    static get STATUS_FIX() {
        return STATUS_FIX;
    }

    static get STATUS_CHANGE() {
        return STATUS_CHANGE;
    }
}
