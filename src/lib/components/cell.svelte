<script>
    import { Cell } from "$lib/js/cell.js";

    export let cell;

    const changeVal = () => {
        if(cell.status != Cell.STATUS_FIX) {
            cell.value = ++cell.value % 2;
        }
    }
</script>

<div class="cell text-size" on:click={changeVal}>
    <span>{cell.value == 2 ? '' : cell.value}</span>
</div>

<style>
     @font-face {
        font-family: 'Playground';
        src: url('/Playground.ttf');
    }

    span { 
            font-family: 'Playground', 'Georgia', serif; 
            color: #ffcc00;
            text-shadow: 2px 2px 3px black;
    }

    .cell {
        border: 1px solid blue;
        aspect-ratio: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #32cd32; 
        color: #ffffff; 
        font-weight: bolder;
        border: 3px solid #000000;
        border-radius: 10px;
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
    }

    .text-size {
        font-size: 3rem;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .text-size {
           font-size: 1.7rem;
        }
    }
</style>

