<script>

    import {navigate} from "svelte-navigator";

    async function logout(){
        const response = await fetch(`/api/logout`);
        navigate("/", {replace: true});
    }

</script>

<main>
    <h1>dette er about siden</h1>

    <button type="button" on:click = {logout}>Log out</button>
</main>

<style>

</style>
