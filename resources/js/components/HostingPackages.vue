<template>
	<div class="container my-5 hosting-packages text-center">
		<h1>Paket Hosting Singapura yang Tepat</h1>
		<h2>Diskon 40% + Domain dan SLL Gratis untuk Anda</h2>
		<div class="row justify-content-around mt-5">
			<div class="col-md-3">
				<div class="card">
				  <div class="card-header">
				  	<h4>{{ prices[0].name }}</h4>
				  </div>
				  <div class="card-header">
					  <h5>Rp{{ prices[0].price }}</h5>
					  <h3>Rp<strong style="font-size: 1.5em">{{ prices[0].discounted }}</strong>/bln</h3>
				  </div>
				  <div class="card-header">
					  <h6><strong>938</strong> pengguna terdaftar</h6>
				  </div>
				  <div class="card-body">
				    <p class="card-text"><strong>0.5X Resource Power</strong><br>
				    <strong>500MB</strong> Disk Space
				    <strong>Unlimited</strong> Bandwidth
				    <strong>Unlimited</strong> Database
				    <strong>1</strong> Domain
				    <strong>Instant</strong> Backup
				    <strong>Unlimited SSL</strong> Gratis selamanya
					</p>
				  </div>
				  <button class="btn mt-5 btn-primary">Pilih Sekarang</button>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card">
				  <div class="card-header">
				  	<h4>{{ prices[1].name }}</h4>
				  </div>
				  <div class="card-header">
					  <h5>Rp{{ prices[1].price }}</h5>
					  <h3>Rp<strong style="font-size: 1.5em">{{ prices[1].discounted }}</strong>/bln</h3>
				  </div>
				  <div class="card-header">
					  <h6><strong>4.168</strong> pengguna terdaftar</h6>
				  </div>
				  <div class="card-body">
				    <p class="card-text"><strong>1X Resource Power</strong><br>
				    <strong>Unlimited</strong> Disk Space
				    <strong>Unlimited</strong> Bandwidth
				    <strong>Unlimited</strong> Database
				    <strong>Unlimited</strong> POP3 Email
				    <strong>10</strong> Addon Domains
				    <strong>Instant</strong> Backup
				    <strong>Domain</strong> Gratis selamanya
				    <strong>Unlimited SSL</strong> Gratis selamanya
					</p>
				  </div>
				  <button class="btn mt-5 btn-primary">Pilih Sekarang</button>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card best">
				  <div class="card-header banner">
				  	<h4>BEST SELLER!</h4>
				  </div>
				  <div class="card-header">
				  	<h4>{{ prices[3].name }}</h4>
				  </div>
				  <div class="card-header">
					  <h5>Rp{{ prices[3].price }}</h5>
					  <h3>Rp<strong style="font-size: 1.5em">{{ prices[3].discounted }}</strong>/bln</h3>
				  </div>
				  <div class="card-header user">
					  <h6><strong>10.017</strong> pengguna terdaftar</h6>
				  </div>
				  <div class="card-body">
				    <p class="card-text"><strong>2X Resource Power</strong><br>
				    <strong>Unlimited</strong> Disk Space
				    <strong>Unlimited</strong> Bandwidth
				    <strong>Unlimited</strong> Database
				    <strong>Unlimited</strong> POP3 Email
				    <strong>Unlimited</strong> Addon Domains
				    <strong>Instant</strong> Backup
				    <strong>Domain</strong> Gratis selamanya
				    <strong>Unlimited SSL</strong> Gratis selamanya
				    <strong>Private</strong> Name Server
				    <strong>SpamAsassin</strong> Mail Protection				
					</p>
				  </div>
				  <button class="btn mt-5 btn-primary">Pilih Sekarang</button>
				</div>
			</div>
			<div class="col-md-3">
				<div class="card">
				  <div class="card-header">
				  	<h4>{{ prices[2].name }}</h4>
				  </div>
				  <div class="card-header">
					  <h5>Rp{{ prices[2].price }}</h5>
					  <h3>Rp<strong style="font-size: 1.5em">{{ prices[2].discounted }}</strong>/bln</h3>
				  </div>
				  <div class="card-header">
					  <h6><strong>3552</strong> pengguna terdaftar</h6>
				  </div>
				  <div class="card-body">
				    <p class="card-text"><strong>3X Resource Power</strong><br>
				    <strong>Unlimited</strong> Disk Space
				    <strong>Unlimited</strong> Bandwidth
				    <strong>Unlimited</strong> Database
				    <strong>Unlimited</strong> POP3 Email
				    <strong>Unlimited</strong> Addon Domains
				    <strong>Magic Auto</strong> Backup and Restore
				    <strong>Domain</strong> Gratis selamanya
				    <strong>Unlimited SSL</strong> Gratis selamanya
				    <strong>Private</strong> Name Server
				    <strong>Prioritas</strong> Layanan Support
				    <strong>SpamExpert </strong> Pro Mail Protection		
					</p>
				  </div>
				  <button class="btn mt-5 btn-primary">Pilih Sekarang</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
    data() {
        return {
            prices: [],
        }
    },
    methods: {
       loadPrices(){
         axios.get('/api/hosting').then((response => {
            this.prices = response.data;
         }));
       }
    },
    beforeMount() {
        this.loadPrices();
    }
}
</script> 