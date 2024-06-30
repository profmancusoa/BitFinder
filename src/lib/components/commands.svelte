<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
</svelte:head>

<script>
    import { goto } from '$app/navigation';
    import { restart } from '$lib/js/store.js';

    const POPOVER_DELAY = 2000;
    export let board = null;
    let isValid = false;
    let isValidating = false;

    const validating = () => {
        // goto('/score');
        isValid = board.isValidSolution();
        isValidating = true;
        setTimeout(() => { isValidating = false} , POPOVER_DELAY);
    }
</script>

<!-- check button to start board validation -->
<div class="wrapper">
    <div>
        <span class="material-symbols-outlined icon" on:click={validating}>
            check
        </span>
    </div>
    <div>
        <span class="material-symbols-outlined icon" on:click={() => { $restart = false; $restart = true }}>
            restart_alt
        </span>
    </div>
</div>

<!-- popover to show validation feedback
probably better to use a separate component -->
{#if isValidating }
<div class="popup">
    <span class="material-symbols-outlined icon {isValid ? 'valid' : 'invalid'}">
        {isValid ? 'thumb_up' : 'thumb_down'}
    </span>
</div>
{/if}

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;
    }

    .popup {
        width: 14vw;
        aspect-ratio: 1;
        background-color: rgba(0,0,0, 0.9);
        border-radius: 20px;
        position: absolute;
        top: 34vh;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 100;
    }

    .icon {
        font-size: 5vw;
        font-weight: bolder;
        color: #663300;
        text-shadow: 2px 2px 12px #663300;
        cursor: pointer;
    }

    .icon:hover {
        color: #32cd32;
        text-shadow: 2px 2px 12px #32cd32;
    }

    .valid {
        color:#32cd32;
    }

    .invalid {
        color:#ff6347;
    }

    @media only screen and (max-width: 600px) and (orientation: portrait) {
        .popup {
            width: 50vw;
            top: 40vh;
        }

        .icon {
            font-size: 15vw;
        }

        .icon:hover {
            color: #663300;
            text-shadow: none;
            text-shadow: 2px 2px 12px #663300;
        }
    }
</style>