<script>

    import {navigate} from "svelte-navigator";

    let loginUser = {};
    let errorMessage = "";


    async function login(){
        const info = await fetch(`/api/login`, {
            headers: {
                "content-type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(loginUser),
        });
        errorMessage = info.text();
        if( info.status === 200){
            navigate("/about", {replace: true});
        }
    }

</script>

<main>
    
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Username</label>
    <!--slå op bind value-->
    <input type="text" placeholder="username" bind:value={loginUser.username}/>
    <input type="password" placeholder="password" bind:value={loginUser.password}>
    <button type="button" class="login-button" on:click = {() => login()}>Login</button>

</main>

<style>
    
</style>