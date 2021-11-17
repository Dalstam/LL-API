<template>
    <div>
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
    </div>
</template>

