<script>
    import { goto } from '$app/navigation';
    import { score_mm, score_ss } from '$lib/js/store';
    import 'animate.css';
</script>

<div class="wrapper animate__animated animate__lightSpeedInRight">
    <span class="title">Bit Finder</span>
    <div class="score animate__animated animate__rotateIn animate__delay-1s animate__faster">
        <span class="congrats">Complimenti hai risolto la sfida in</span>
        <span class="congrats">{$score_mm} minuti e {$score_ss} secondi</span>
        <div class="restart" on:click={() => goto('/game')}>Nuova Partita</div>
    </div>
</div>


<style>
    @font-face {
        font-family: 'Playground';
        src: url('/Playground.ttf');
    }

    .title {
        font-family: 'Playground', 'Georgia', serif; 
        color: #663300;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.7);
        font-size: 8vw;
    }

    .congrats {
        font-family: 'Playground', 'Georgia', serif; 
        color: white;
        text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.7);
        font-size: 3vw;
    }

    .wrapper {
        --animate-duration: 1.5s;
        /* display: grid; */
        /* grid-template-rows: 1fr 8fr; */
        height: 100vh;
        background: linear-gradient(to bottom, #FCBD0F,  #FEFA95);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 5vh;
    }

    .score {
        background-color: #32cd32bb;
        width: 60vw;
        height: 60vh;
        border-radius: 2vw;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 6vh;
    }

    .restart {
        background-color: rgba(0, 0, 255, 0.3);
        padding: 1vw;
        border-radius: 1vw;
        font-size: 2vw;
        font-weight: bolder;
    }

    .restart:hover {
        background-color: blue;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .title {
            font-size: 16vw;
        }

        .congrats {
            font-size: 6vw;
        }

        .wrapper {
            gap: 5vh;
        }

        .score {
            width: 80vw;
            height: 60vh;
            border-radius: 4vw;
            gap: 8vh;
            padding: 4vw;
            line-height: 4vh;
        }

        .restart {
            padding: 2vw;
            border-radius: 1vw;
            font-size: 6vw;
            font-weight: bolder;
        }

        .restart:hover {
            background-color: blue;
            cursor: pointer;
        }
    }
</style>