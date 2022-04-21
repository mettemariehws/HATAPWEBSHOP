<script>
  import { navigate } from "svelte-navigator";

  async function logout() {
    const response = await fetch(`/api/logout`);
    navigate("/", { replace:true });
  }
</script>

<main>
  <div class="topbar-welcome">
    <h1>Welcome to your page!</h1>
  </div>

  <div>
    <p>Some text</p>
    <button class="logout-button" on:click={logout}>Log out</button>
  </div>
</main>
