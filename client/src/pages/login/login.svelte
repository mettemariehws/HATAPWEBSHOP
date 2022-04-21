<script>
  import { navigate } from "svelte-navigator";
  import { toast } from "@zerodevx/svelte-toast";

  let loginUser = {};
  let errorMessage = "";

  async function login() {
    const info = await fetch(`/api/login`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(loginUser),
    });
    errorMessage = info.text();
    if (info.status === 200) {
      toast.push("YES! Your credentials were approved for login");
      navigate("/userprofile", { replace: true });
    } else {
      toast.push("OBS! You credentials were not correct, try again!", {
        theme: {
          "--toastBackground": "#F56565",
          "--toastBarBackground": "#C53030",
        },
      });
    }
  }

  async function signUp() {
    console.log("nu er du før fetch")
    const res = await fetch(`/api/signup`, {
        headers: {
          "content-type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(loginUser),
      });
      console.log("Nu er du udenfor if")
      errorMessage = await res.text();
      if (res.status === 200) {
        console.log("Nu er du i if statement")
        errorMessage = "";
        setTimeout(() => {
          toast.push("Signup was a success. You can now login");
          navigate("/", { replace: true });
        }, 1500);
      }
    }
   
  // async function signUp() {
  //   const res = await fetch(`/api/signup`, {
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     method: "POST",
  //     body: JSON.stringify(loginUser),
  //   });
  //   if(res.status === 200){
  //     toast.push("Woop Woop, you are signed up! You can now login to your page");
  //   }
  // }

</script>

<main>
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label>Username</label>
  <!--slå op bind value-->
  <input type="text" placeholder="username" bind:value={loginUser.username} />
  <input
    type="password"
    placeholder="password"
    bind:value={loginUser.password}
  />
  <button type="button" class="login-button" on:click={() => login()}
    >Login</button
  >
  <button type="button" class="signup-button" on:click={() => signUp()}
    >Sign up</button
  >
</main>

<style>
</style>
