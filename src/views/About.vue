<template>
<div class="container">
	<div class="about">
		<div class="text">
			<h1>ABOUT US</h1>
			
			
		</div>
	</div>
	<div class="content">
		<p>WThe Beach Shop is a family run business situated a stones throw from the beach in Westward Ho! We sell Gifts, Novelties, Westward Ho! Souvenirs, Toys, Beachwear, Wetsuits, Bodyboards, Kites, Beach Games and of course Rock, Clotted Cream Fudge and Clotted Cream Shortbread. We are also Bodyglove and Old Guys Rule stockists.
		Great beach to be enjoyed by all. What an asset to the North Devon coast. If you prefer things to do, slot machines, pubs etc, you can join the westward
		</p>
		<p> Wetsuits, Bodyboards, Kites, Beach Games and of course Rock, Clotted Cream Fudge and Clotted Cream Shortbread. We are also Bodyglove and Old Guys Rule stockists..
		Great beach to be enjoyed by all. What an asset to the North Devon coast. If you prefer things to do, slot machines, pubs etc, you can join the westward
		<p>WThe Beach Shop is a family run business situated a stones throw from the beach in Westward Ho! We sell Gifts, Novelties, Westward Ho! Souvenirs, Toys, Beachwear, Wet</p>
		</p>
		<h3 class="font">Our Clients</h3>
		<p>Explore the mythology and magic of west Wales on this adventurous sightseeing tour from Cardiff. Following pickup at your hotel, spin into the Welsh countryside by private vehicle and enjoy sweeping views over the pretty scenery. Explore traditional old towns and charming villages where time stands still, discover attractions like Kidwelly Castle and the Dylan Thomas boathouse, and gain insight into local Welsh folklore.</p>
		<p>WThe Beach Shop is a family run business situated a stones throw from the beach in Westward Ho! We sell Gifts, Novelties, Westward Ho! Souvenirs, Toys, Beachwear, Wet</p>
		
		<h3 class="font">Our Fleet</h3>
		<p>Our fleet of Great beach to be enjoyed by all. What an asset to the North Devon coast. If you prefer things to do, slot machines, pubs etc, you can join the westward ho end and if you want a place more natural and relaxed you can travel towards the Northam burrows.Large long beach good for walking and dogs. Great for wind surfing, swimming with RNLI Lifeguards on duty during the summer months</p>
		<p>WThe Beach Shop is a family run business situated a stones throw from the beach in Westward Ho! We sell Gifts, Novelties, Westward Ho! Souvenirs, Toys, Beachwear, Wet.</p>

	</div>
</div>

<div class="Boxes">
	<div class="column">
		<div class="card">
			<div class="fa fa-thumbs-o-up fa-3x"></div>
			<h2>Beach Apparel</h2>
			<p>Beach clothing, including accessories, bags, footwear, swimsuits, cover-ups, hats, eyewear (prescription & regular), scarves & more!.Graphic - Sport (NFL, MLB, NBA, Colleges) towels, Disney towels, Star War, Animals, Sea Life, Scenery, Funny, Patriotic, and truly so much more!
Towels big enough for two, or small enough for a kid!</p>
	
		</div>
	</div>
	<div class="column">
		<div class="card" >
			<div  class="fa fa-car fa-3x" ></div>
			<h2>Sun-Related</h2>
			<p>Umbrellas, anchors, tents, sunscreen, face/lip/body lotions/sprays/balms, SPF rash-guards, SPF headwear.safety wings and rings to multi-person boats and large animal shapes, and so much more!Water Headwear - Huge variety of masks, goggles, snorkels, fins, swimming cap, ear & nose plugs
.</p>
		</div>
	</div>
	<div class="column">
		<div class="card">
			<div  class="fa fa-child fa-3x" ></div>
			<h2>Sand-Related</h2>
			<p>Sand - Chairs - A perfect variety of sizes, weights, materials, at the right prices!
Toys - a variety of buckets, shovels, sifters, molds, and creative toys to spark the fun at the beach!
Sport - footballs, volleyballs, soccer balls, float-on-water balls, freebees, lacrosse, softball, throw-and-catch Velcro balls, and more!.</p>
		</div>
	</div>	
</div>
</template>

    
<script>
export default {
    name: 'About',
}
</script>
    
<style scoped>
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    list-style: none;
}
:root{
    --bg-color: #222;
    --text-color: #fff;
    --main-color: orange;
}


.font{
	color:#000;
	background-color:orange;
	width:13%;
	border-radius: 7px;
	padding: 15px 32px;
	font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.content{
	color:White;
	padding:15px;
	text-align: left;
	
}

.container{
	width:100%;
	height:auto;
	display:flex;
	align-items:flex-start;
	flex-wrap:wrap;
}

.about{
	
	width:100%;
	height:600px;
	background-image:url(../assets/about1.jpg);
	background-size:cover;
	background-position:center;
	background-repeat:no-repeat;
	display:flex;
	align-items:center;
	justify-content:center;
	opacity:0.8;
	
}

.text{
	
	padding: 15px 22px;
	font-size:30px;
	color:orange;
	font-family: 'Libre Baskerville', serif;
	text-shadow:0px 15px 12px #000;
}
p{
	color: #000;
	font-weight: 600;
}


.Boxes{
	max-width:1170px;
	width:100%;
	margin:0 auto;
	display:flex;
}

.column{
	margin:0 15px 25px;
	box-shadow:0 1px 3px rgba(0,0,0,0.12), o 1px 2px rgba(0,0,0.24);
	border-radius:10px;
	flex-basis:33%;
	background-color:wheat;
}

.card{
	padding:15px 25px;
}

.column:hover{
	background-color:orange;
}


</style>
