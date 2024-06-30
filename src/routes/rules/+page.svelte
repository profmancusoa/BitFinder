<script>
    import 'animate.css';
    import { goto } from '$app/navigation';
</script>

<div class="wrapper animate__animated animate__fadeInDownBig">
    <div class="instructions">
        Le regole per giocare a BitFinder sono pochissime:
        <ul>
            <li>Ogni linea e ogni colonna deve contenere un numero uguale di 1 e 0</li>
            <li>Ogni linea e ogni colonna non può contenere più di due simboli uguali adiacenti</li>
            <li>Ogni linea e ogni colonna deve essere diversa da tutte le altre</li>
        </ul>
    </div>
    <div class="new-game" on:click={() => goto('/game')}>Nuova Partita</div>
</div>

<style>
    .wrapper {
        --animate-duration: 1.5s;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:space-around;
        height: 100vh;
        background: linear-gradient(to bottom, #FCBD0F,  #FEFA95);
    }

    li {
        margin-bottom: 2rem;
    }

    .instructions {
        border: 0px solid black;
        width: 80%;
        font-weight: bolder;
        font-size: 2rem;
    }

    .new-game {
        background-color: rgba(0, 0, 255, 0.3);
        padding: 1vw;
        border-radius: 1vw;
        font-size: 2vw;
        font-weight: bolder;
        color: white;
    }

    .new-game:hover {
        background-color: blue;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .new-game {
            background-color: blue;
            padding: 3vw;
            border-radius: 3vw;
            font-size: 6vw;
            font-weight: bolder;
        }
    }
</style>