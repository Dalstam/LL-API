<template>
<div>
    <div class="bg-bike">
	<div class="container wordTringerContainer ">
		<h1 class="wordTringer margin-bottom-2">Fietsen bij het leukste fietsteam van Nederland</h1>
		<p></p>
		<ul class="highlights">
			<li>
				<p>Je fietst op de mooiste bakfietsen die er zijn</p>
			</li> 
			<li >
				<p>Je bent onderdeel van een echt team en geen nummer</p>
			</li>
			<li >
				<p>Bepaal zelf wat je wilt bezorgen ( bier, truffels, bloemen of kreeftjes )</p>
			</li>
			<li >
				<p>Extreem flexibel. Je fietst wanneer jou het uitkomt. Overdag, middag of avond.</p>
			</li>
		</ul>
		<p>
			<a>
                 <NuxtLink to="/aanmelden" class="btn btn-primary" >Aanmelden</NuxtLink>
            </a>
		</p>
	</div>
</div>

<div class="bg-white">
	<div class="container  containerNoPadding caret">
		<h2 class="bodyHome no-margin-bottom">Hoe werkt het?</h2>
		<p>
			Alle ritjes gaan via onze Tringers app. Je ziet meteen wat het ritje inhoudt en wat de vergoeding is. 
			Accepteer je? Dan krijg je na afloop direct betaald. Veel fietsplezier!
		</p>
		
			<div class="step">
				<img src="~/assets/images/TringTring bezorg app stap1.jpg" alt=" TringTring bezorg app stap 1" width="190" height="363" />
				<div class="number">1</div>
				<p>Ontvang
					<br />opdracht</p>
			</div>

			<div class="step">
				<img src="~/assets/images/TringTring bezorg app stap2.jpg" alt="TringTring bezorg app stap 2" width="190" height="363" />
				<div class="number">2</div>
				<p>Stap op
					<br />de bakfiets</p>
			</div>

			<div class="step">
				<img src="~/assets/images/TringTring bezorg app stap3.jpg" alt="TringTring bezorg app stap 3" width="190" height="363" />
				<div class="number">3</div>
				<p>Verdien
					<br />meteen geld</p>
			</div>
		
		<p>
			<a class="btn btn-primary" href="aanmelden.html">Aanmelden</a>
		</p>
	</div>
</div>

<div class="bg-map">
	<div class="container">
		<h2 class="bodyHome no-margin-bottom">Tringers over TringTring</h2>

		<div class="clearfix">

				<div class="popover t1">
						<div class="dot"></div>
						<div class="arrow"></div>
						<img src="~/assets/images/tringer patrick.jpg" alt="" />
						<p>‘Geen pizza’s bezorgen maar kreeftjes bij het Amstel Hotel.’</p>
					</div>
					
					<div class="popover t2">
							<div class="dot"></div>
							<div class="arrow"></div>
							<img src="~/assets/images/tringer charlotte.jpg" alt="" />
							<p>‘Je helpt ondernemers groen te bezorgen. Beter voor onze stad!’ </p>
						</div>

					<div class="popover t3">
						<div class="dot"></div>
						<div class="arrow"></div>
						<img src="~/assets/images/tringer tessel.jpg" alt="" />
						<p>‘Bezorgen bij horeca is leuk. Je hebt echt contact met mensen.’</p>
					</div>
			
					<div class="popover t4">
						<div class="dot"></div>
						<div class="arrow"></div>
						<img src="~/assets/images/tringer nico.jpg" alt="" />
						<p>‘Je krijgt wekelijks betaald en kiest je eigen tijden. Heel erg flexibel.’</p>
					</div>

		</div>

		<p>
			<a class="btn btn-primary" href="aanmelden.html">Aanmelden</a>
		</p>
	</div>
</div>

<div class="bg-blue bbb">
	<div class="container">
		<h1 class=" wordTringer no-margin-bottom">Help jij mee de stad een <br>beetje mooier te maken?</h1>
		<p>
			Alle Tringers die meedoen met TringTring zijn sportief, hebben liefde voor horeca <br>en vinden duurzaamheid belangrijk. 
		</p>
	
			<ul class="highlights">
				<li>
					<img class="svg" src="~/assets/images/icons/icon-euro.svg" alt="" width="40" height="40" />
					<p>5 Euro per rit. Of méér.</p>
				</li>
				<li>
					<img class="svg" src="~/assets/images/icons/icon-calendar.svg" alt="" width="40" height="40" />
					<p>Bepaal zelf je tijden.</p>
				</li>
				<li>
					<img class="svg" src="~/assets/images/icons/icon-speech.svg" alt="" width="40" height="40" />
					<p>Geen baas.</p>
				</li>
				<li>
					<img class="svg" src="~/assets/images/icons/icon-cycler.svg" alt="" width="40" height="40" />
					<p>Gezond lijf. Fris hoofd.</p>
				</li>
			</ul>
	
		<p>
			<a class="btn btn-primary" href="aanmelden.html">Aanmelden</a>
		</p>
	</div>
</div>


</div>
</template>

<script>
export default {}
</script>

<style>
ul {
	margin-top: 20px;
}

li {
    margin-bottom: 1em;
}
</style>
