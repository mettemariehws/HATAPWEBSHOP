<script>
  import { Router, Link, Route } from "svelte-Navigator";
  import About from "./pages/About/about.svelte";
  import Home from "./pages/Frontpage/frontpage.svelte";
  import Header from "./components/header.svelte";
  import Footer from "./components/footer.svelte";
  import Login from "./pages/login/login.svelte";
  import UserProfile from "./pages/userProfile/userProfile.svelte";
  import { SvelteToast } from "@zerodevx/svelte-toast";

  const options = {
    theme: {
      "--toastBackground": "#48BB78",
      "--toastBarBackground": "#2F855A",
    },
  };
</script>

<Header />

<Router>
  <Route path="/" component={Home} />
  <Route path="/about" component={About} />
  <Route path="/login" component={Login} />
  <Route path="/userprofile" component={UserProfile} />
  <SvelteToast {options} />
</Router>

<Footer />

<style>
</style>
