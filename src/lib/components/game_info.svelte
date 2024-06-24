<script>
    import { onMount } from "svelte";
    import { restart } from "$lib/js/store.js";
    import { score_mm, score_ss } from "$lib/js/store.js";

    // let mm = 0;
    // let ss = 0;

    // onMount(() => {
    //     let timer = setInterval(() => {
    //         ss++;
    //         if(ss == 60) {
    //             ss = 0;
    //             mm++;
    //         }
    //     }, 1000);

    //     return () => {
    //         clearInterval(timer);
    //     }
    // });
    onMount(() => {
        $score_mm = 0;
        $score_ss = 0;
        
        let timer = setInterval(() => {
            $score_ss++;
            if($score_ss == 60) {
                $score_ss = 0;
                $score_mm++;
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    });

    //reactivity
    $: {
        if($restart == true) {
            $score_mm = 0;
            $score_ss = 0;
        }
    }
</script>
<div class="spacer">
    <div class="container">
        <span class="text-size">{String($score_mm).padStart(2, '0')}:{String($score_ss).padStart(2, '0')}</span>
    </div>
</div>

<style>
    @font-face {
        font-family: 'Playground';
        src: url('/Playground.ttf');
    }

    .spacer {
        gap: 30vw;
    }

    .container {
        border-top: 2px solid rgba(0,0,0,0.2);
        border-bottom: 2px solid rgba(0,0,0,0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 15vh;
        margin-top: 2vh;
    }

    span { 
            font-family: 'Playground', 'Georgia', serif; 
            color: #663300;
            text-shadow: 2px 2px 2px rgba(255, 255, 255, 0.7);
    }

    .text-size {
        font-size: 6vw;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .spacer {
            gap: 10vw;
        }

        .text-size {
            font-size: 18vw;
        }
    }
</style>