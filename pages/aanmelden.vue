<template>
<div>
	<!-- Register bar begin-->
	<div id="register-progress">
		<div class="container relative">
			<a href="word-tringer.html" id="back" class="chevron-left"></a>
			<div class="row">
				<div class="col-xs-8 col-xs-offset-2 col-sm-4 col-sm-offset-4">
					<div class="progress">
						<div class="progress-bar" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"><img src="images/icons/icon-cycler.svg" class="icon-cycler svg" /></div>
						<img src="images/icons/icon-euro.svg" class="icon-euro svg" />
					</div>
				</div>
			</div>
		</div>
	</div>
	<div id="registerbar-fix"></div>
	<!-- Register bar end -->
	<main class="target">

		<div id="stretch-bg" class="bg-ligthgray">
			<div class="container">
				<form id="form" class="register-form" action="" enctype="application/x-www-form-urlencoded" method="post">

					<!-- STEP 1 -->
					<div class="pm-step">

						<h1 class="form-title">Meld je aan als Tringer</h1>

						<input class="form-control form-group input-lg" name="voornaam" type="text" placeholder="Voornaam"  data-rule-required="true" />
						<input class="form-control form-group input-lg" name="achternaam" type="text" placeholder="Achternaam"  data-rule-required="true" />
						<input class="form-control form-group input-lg" name="email" type="email" placeholder="E-mail"  data-rule-required="true" />
						<input class="form-control form-group input-lg" name="plaats" type="text" placeholder="Plaats"  data-rule-required="true" />
						<input class="form-control form-group input-lg" name="telefoon" type="tel" placeholder="Mobiel nr."
						data-rule-required="true"
						maxlength="15"
						/>
						<select class="form-control form-group input-lg" name="toestel" required>
							<option value="">Type toestel</option>
							<option value="android">Android</option>
							<option value="iphone">iPhone</option>
						</select>
					</div>

					<!-- STEP 2 -->
					<div class="pm-step">
						<h1 class="form-title">Hoeveel uur per week kun je Tringen?</h1>

						<select class="form-control form-group input-lg" name="uren"  data-rule-required="true">
							<option value="">Kies aantal uren</option>
							<option value="5-10 uur">5 - 10 uur</option>
							<option value="10-15 uur">10 - 15 uur</option>
							<option value="15-20 uur">15 - 20 uur</option>
							<option value="20-40 uur">20 - 40 uur</option>
						</select>
					</div>
				<!-- STEP 3 -->
					<div class="pm-step">
							<h1 class="form-title">Wat is je leeftijd?</h1>
							<input class="form-control form-group input-lg" type="number"  maxlength="2" name="leeftijd" placeholder=""  data-rule-required="true" />
					</div>

					<!-- STEP 4 -->
					<div class="pm-step">
						<h1 class="form-title">Wil je ‘s ochtends Tringen?</h1>

						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Ochtend" value="Ja" data-rule-required="true">
							<span>Ja, ik ben een vroege vogel</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Ochtend" value="Nee" data-rule-required="true">
							<span>Nee, liever niet</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
					</div>

					<!-- STEP 5 -->
					<div class="pm-step">
						<h1 class="form-title">Wil je ‘s avonds Tringen?</h1>
						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Avonden" value="Ja" data-rule-required="true">
							<span>Ja, ik ben een avondmens</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="radio" name="Avonden" value="Nee" data-rule-required="true">
							<span>Nee, liever niet</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
					</div>


					<!-- STEP 6 -->
					<div class="pm-step">
						<h1 class="form-title">Waar zou je het liefst op fietsen?</h1>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Racefiets" value="Ja">
							<span>Racefiets</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Elektrische bakfiets" value="Ja">
							<span>Elektrische bakfiets</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
						<label class="form-group text-left input-lg form-control">
							<input type="checkbox" name="Goupil" value="Ja">
							<span>Goupil (Picnic wagentje)</span>
							<img class="vink" src="images/vink-blue.png" />
						</label>
					</div>

					<!-- STEP 7 -->
					<div class="pm-step">
						<h1 class="form-title">Je moet mij hebben</h1>

						<textarea class="form-control input-lg" placeholder="Vertel ons waarom" rows="6" name="Waarom"  data-rule-required="true"></textarea>
					</div>


					<!-- STEP 8 -->
					<div class="pm-step">
						<div class="post-busy">
							<p>Je aanmelding wordt verstuurd...</p>
						</div>
						<div class="post-success" style="display: none;">
							<p>Bedankt voor je aanmelding.<br />
							Check je mail voor de volgende stap.</p>
							<a role="button" href="index.html" class="btn btn-primary">Terug naar home</a>
						</div>
						<div class="post-error" style="display: none;">
							<p>Er is iets fout gegaan, probeer het later nog eens.<br />
							We werken aan een oplossing.</p>
							<a role="button" href="index.html" class="btn btn-primary">Terug naar home</a>
						</div>
					</div>

					<!-- NEXT BUTTON -->
					<button type="button" id="next" class="btn btn-block btn-primary">Verder ></button>

				</form>
			</div>
		</div>

	</main>
</div>
</template>

<script>
export default {
  layout: 'blank'

} 


</script>