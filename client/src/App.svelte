<script>

	import { Router, Link, Route } from "svelte-Navigator";
	import About from "./pages/About/about.svelte";
	import Home from "./pages/Frontpage/frontpage.svelte";
	import Header from "./components/header.svelte";
	import Footer from "./components/footer.svelte";
	import Login from "./pages/login/login.svelte";
	import UserProfile from "./pages/userProfile/userProfile.svelte";

</script>

<Header/>

<Router>
	<Route path="/" component={Home}></Route>
	<Route path="/about" component={About}></Route>
	<Route path="/login" component={Login}></Route>
	<Route path="/userprofile" component={UserProfile}></Route>
</Router>

<Footer/>

<style>

</style>