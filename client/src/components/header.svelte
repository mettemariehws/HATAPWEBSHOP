<script>
	import { Router, Link } from "svelte-Navigator";


</script>
<Router>

	<nav class="navbar">
		<div class="logo-container">
			<img class="logo-image" src="img/logo.png" alt="logo">
		</div>
		<ul class="nav-menu">
			<li class="menu-item">
				<Link to="/">CATEGORIES</Link>
			</li>
			<li class="menu-item">
				<Link to="/about">ABOUT</Link>
			</li>
			<li class="menu-item">
				<Link to="/about">CONTACT</Link>
			</li>
		</ul>
		<Link to="/login">Go to login page</Link>
	</nav>

</Router>

<style>

.navbar {
/* make it stick */
position: sticky;
position: -webkit-sticky;
top: 0;
/* in front of all other elements */
z-index: 99;
/* set background */
background-color: white;
padding: 10px 5%;
/* define flex */
display: flex;
justify-content: space-between;
align-items: center;
}
.logo-image {
display: block;
height: 48px
}
.nav-menu {
justify-content: center;


}
.menu-item {
display: inline-block;

}


</style>
