<script>
    import { goto } from '$app/navigation';
    import 'animate.css';
</script>

<div class="wrapper animate__animated animate__lightSpeedInRight">
    score

<button on:click={() => goto('/game')}>IND</button>
</div>

<style>
    div {
        background-color: yellow;
        width: 100%;
        height: 100vh;
    }

    .wrapper {
        --animate-duration: 1s;
    }
</style>