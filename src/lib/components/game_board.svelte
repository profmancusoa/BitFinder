<script>
    import { goto } from "$app/navigation";
    import Cell from "./cell.svelte";
    import Commands from "./commands.svelte";
    import { Board } from '../js/board.js';
    import { restart } from "$lib/js/store.js";

    let board = new Board(6);

    const cellChange = () => {
        if(board.isGameOver() == true)
            goto('/score');
    }   

    $: {
        if($restart == true) {
            board = new Board(6);
        }
    }
</script>

<div class="wrapper">
    <div class="board board-size">
        {#each {length: board.rows} as _, r}
            {#each {length: board.cols} as _, c}
                <Cell cell={board.getCell(r,c)} on:change={cellChange}/>    
            {/each}
        {/each}
    </div>
    <Commands {board} />
</div>

<style>
    .control {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
    }

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