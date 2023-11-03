<script>
    // import svelte animations
    import { fly} from "svelte/transition";
    import { page } from "$app/stores";
</script>


<!--key rebuilds all children on change. In this case when url changes.-->
{#key $page.url}
    <div in:fly={{  x:'-100%', duration: 500 }}>
        <slot  />
    </div>
{/key}