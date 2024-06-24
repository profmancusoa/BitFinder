<script>
    import 'animate.css';
    import GameInfo from '$lib/components/game_info.svelte';
    import GameBoard from '$lib/components/game_board.svelte';
    
</script>

<div class="wrapper animate__animated animate__rotateIn">
    <GameInfo />
    <GameBoard />
</div>

<style>
    .wrapper {
        --animate-duration: 1.5s;
        display: grid;
        grid-template-rows: 1fr 8fr;
        height: 100vh;
        /* background-color: #ff6347;
        background-color: #ffcc00;
        background-color: #4682b4;
        background-color: #32cd32; */
        background: linear-gradient(to bottom, #FCBD0F,  #FEFA95);
    }
</style>


