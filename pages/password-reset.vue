<template>
	<div>
		<header>
			<div href="index.html" class="no-link mobile-menu-logo"><img src="../assets/images/icons/TringTring_logo_white.svg" alt="Tring Tring" width="50" height="43"></div>
		</header>
					
		<main class="target menuclosed">
			<div id="stretch-bg" class="bg-ligthgray">
				<div class="container reset-form-wrapper">								
					<h1 class="form-title">Wachtwoord wijzigen</h1>
					
					<p class="post-error" style="display: none;">Er is iets fout gegaan, probeer het nog eens.</p>
					<p class="post-busy" style="display: none;">Je wachtwoord wordt verstuurd...</p>
					<p class="post-success" style="display: none;">Je wachtwoord is gewijzigd. Je kunt inloggen in de app met je nieuwe wachtwoord.</p>
					<form class="register-form" id="reset-form">
						<input class="form-control form-group input-lg" name="password" id="password" type="password" placeholder="Nieuw wachtwoord" data-rule-required="true" data-rule-minlength="5" />
						<input class="form-control form-group input-lg" name="password-again" id="password-again" type="password" placeholder="Herhaal" data-rule-required="true" data-rule-equalTo="#password" />
						<button type="submit" class="btn btn-block btn-primary">Wijzig ></button>
					</form>
				</div>
			</div>
		</main>

	</div>
</template>

<script>
export default {
  layout: 'password-reset'
} 



</script>

<style scoped>
header {
	background-color: #004bff;
	height: 81.6px;
}

a {
	width: 100px!important;
	height: 100px!important;
}

img {
	margin-top: 20px;
}

.container {
	height: 600px;
	padding: 0;
}

mobile-menu-logo img {
    width: 100%;
    max-width: 50px;
}

</style>
