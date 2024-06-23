<slot />
<!-- <script>
    import { onNavigate } from '$app/navigation';

    onNavigate((navigation) => {
        console.log(navigation)
        if (!document.startViewTransition) return;
        
        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
</script>

<slot />

<style>
@keyframes fade-in {
	from {
		opacity: 0;
	}
}

@keyframes fade-out {
	to {
		opacity: 1;
	}
}

@keyframes effect-in {
	from {
		scale: 0;
        rotate: 0deg;
	}
}

@keyframes effect-out {
	to {
		scale: 1;
        rotate: 720deg;
	}
}

:root::view-transition-old(root) {
	animation: 500ms cubic-bezier(0.4, 0, 1, 1) both fade-out, 500ms cubic-bezier(0.4, 0, 0.2, 1) both effect-out;
}

:root::view-transition-new(root) {
	animation: 500ms cubic-bezier(0, 0, 0.2, 1) 500ms both fade-in, 500ms cubic-bezier(0.4, 0, 0.2, 1) both effect-in;
}
</style> -->
