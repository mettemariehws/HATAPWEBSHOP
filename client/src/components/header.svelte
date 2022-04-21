<script>
  import { Router, Link } from "svelte-Navigator";

  // async function loggedin_loggedout(){
  // 	if (session === true){
  // 		document.getElementById("user-btn").innerHTML("Log out")
  // 	}else{
  // 		document.getElementById("user-btn").
  // 	}
  // }
</script>

<Router>
  <nav class="navbar">
    <div class="logo-container">
      <p class="logo">HATAP</p>
    </div>
    <ul class="nav-menu">
      <li class="menu-item">
        <Link to="/" style="color:black">CATEGORIES</Link>
      </li>
      <li class="menu-item1">
        <Link to="/about">ABOUT</Link>
      </li>
      <li class="menu-item">
        <Link to="/about">CONTACT</Link>
      </li>
    </ul>
    <Link to="/login">LOGIN & SIGN UP</Link>
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
    background-color: #f76868;
	padding: 10px 5%;
    /* define flex */
    display: flex;
    justify-content: space-between;
    align-items: center;
   
  }
  .nav-menu {
	word-spacing: 20px;
	color: black;
  }
  .menu-item {
    display: inline-block;
    font-style: "Montserrat";
    font-weight: bolder;
	font-size: 30px;
  }
  .menu-item1 {
    display: inline-block;
    font-style: "Playfair Display";
    font-weight: bold;
  }
</style>
