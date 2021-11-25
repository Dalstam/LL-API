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


		<form action="https://hooks.zapier.com/hooks/catch/5974604/bmouat1/" method="post">
			<step1 v-show="activeStep === 0"></step1>
			<step2 v-show="activeStep === 1"></step2>
			<step3 v-show="activeStep === 2"></step3>
			<step4 v-show="activeStep === 3"></step4>
			<step5 v-show="activeStep === 4"></step5>
			<step6 v-show="activeStep === 5"></step6>
			<step7 v-show="activeStep === 6"></step7>
			<step8 v-show="activeStep === 7"></step8>
        	<!-- NEXT BUTTON -->
			<button  v-show="activeStep <6" id="next" type="button"  class="btn btn-block btn-primary" @click="activeStep++">Verder ></button>
			<button v-show="activeStep >5 && activeStep <7" id="next" type="submit" class="btn btn-block btn-primary" @click="activeStep++">Verder</button>
		</form>

	</div>
</template>

<script>


export default {
	layout: 'aanmelden-layout',

	data() {
    	return {
    	  activeStep: 0,
    	}
	}
}


</script>

