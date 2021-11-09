<template>
	<div>
			<div class="container-small">
				
				<div class="hidden-xs">
					<ul class="desktop-nav">
						<li>
							<a><img src="../assets/images/heineken/HeinekenNOWlogo.svg" alt="Heineken Now" width="50" height="43"></a>
						</li>
					</ul>
				</div>
				
				<div class="visible-xs">
					<ul class="desktop-nav">
						<li><a><img src="../assets/images/heineken/HeinekenNOWlogo.svg" alt="Heineken Now" width="44" height="38"></a></li>
					</ul>
				</div>
				
			</div>
			<main class="target-menuclosed">

				<div id="stretch-bg" class="bg-ligthgray">
					<div class="container reset-form-wrapper">								

						<h1 class="form-title">Wachtwoord wijzigen</h1>
						
						<p class="post-error" style="display: none;">Er is iets fout gegaan, probeer het nog eens.</p>
						<p class="post-busy" style="display: none;">Je wachtwoord wordt verstuurd...</p>
						<p class="post-success" style="display: none;">Je wachtwoord is gewijzigd. Je kunt inloggen in de app met je nieuwe wachtwoord.</p>

						<form class="register-form" id="reset-form">
							<input class="form-control form-group input-lg" name="password" id="password" type="password" placeholder="Nieuw wachtwoord" data-rule-required="true" data-rule-minlength="5" />
							<input class="form-control form-group input-lg" name="password-again" id="password-again" type="password" placeholder="Herhaal" data-rule-required="true" data-rule-equalTo="#password" />

							<button type="submit" class="btn btn-block  btn-hei">Wijzig ></button>
						</form>

					</div>
				</div>

			</main>
	</div>
</template>

<script>
export default {
  layout: 'heineken_now'

}

</script>

<style scoped>

.container-small {
	background: #118547;
	margin: 0;
	padding-top: 0;
	padding-bottom: 20px;
}

.container {
	padding-bottom: 300px;
}

h1 {
	margin-top: 0px;
}

</style>