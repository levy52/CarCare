const navbar = document.getElementById('navbar-toggler')
function showNavigation() {
	document.getElementById('navbarNavAltMarkup').classList.add('show-nav')
}

navbar.addEventListener('click', showNavigation)
addEventListener('mouseout', () => document.getElementById('navbarNavAltMarkup').classList.remove('show-nav'))