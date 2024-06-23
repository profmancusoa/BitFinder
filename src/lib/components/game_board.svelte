<script>
    import Cell from "./cell.svelte";
    import Validator from "./validator.svelte";
    import { Board } from '../js/board.js';

    let board = new Board(6);
</script>

<div class="wrapper">
    <div class="board board-size">
        {#each {length: board.rows} as _, r}
            {#each {length: board.cols} as _, c}
                <Cell cell={board.getCell(r,c)}/>    
            {/each}
        {/each}
    </div>
    <Validator board={board}/>
</div>

<style>
    .wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 8vh;
    }

    .board {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
    }

    .board-size {
        width: 25vw;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .board-size {
           width: 90vw;
        }
    }
</style>