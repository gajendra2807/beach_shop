<template>
    <section id="Hero">
    <h4>Trade-in-offer</h4>
    <h2>Super value deals</h2>
    <h1>On all products</h1>
    <p>Save more with coupons $ up to 70% off</p>
    <button>Shop Now</button>
</section>
<section id="product1" class="section-p1">
    <h2>Featured Products</h2>
    <p>Summer collection New Products And Cosmatics</p>
</section>
<div class="wrapper">
    <div class="container">
        <div class="box">
<img src="../assets/hat.jpg" alt="">
<h3>HATS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
        <div class="box">
<img src="../assets/tent.jpeg" alt="">
<h3>BEACH TENTS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
        <div class="box">
<img src="../assets/cloth.webp" alt="">
<h3>BEACH WEAR</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
        <div class="box">
<img src="../assets/cosmetics.jpeg" alt="">
<h3>BEAUTY PRODUCTS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
        <div class="box">
<img src="../assets/drinks.jpeg" alt="">
<h3>DRINKS</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
        <div class="box">
<img src="../assets/sunglasses.jpeg" alt="">
<h3>SUNGLASSES</h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed officia aspernatur magni animi optio enim.</p>
<button class="btn" @click="redirect">Buy Now</button>
        </div>
    </div>
</div>
</template>

  
  
<script>
export default {
    name: 'Home',
    methods: {
    redirect () {
      this.$router.push('/buynow')
    }
}
};
</script>
<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    transition: .2s linear;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
#Hero{
    background-image: url(../assets/image2.jpg);
    height: 90vh;
    width: 100%;
    background-position: top 25% right 0;
    padding: 0 80px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
}
#Hero h4{
    padding-bottom: 15px;
}
#hero h1{
    color: #088178;
}
#Hero button{
    background-image: url(../assets/button.png);
    background-color: transparent;
    color: #088178;
    border: 0;
    padding: 14px 80px 14px 65px;
    background-repeat: no-repeat;
    cursor: pointer;
    font-weight: 700;
    font-size: 15px;

}
#product1{
    text-align: center;
}

.wrapper {
    margin: 10px auto;
    padding: 0 10%;
    padding-bottom: 10px;
    text-transform: capitalize;
}

.scrolling {
    color: black;
    font-size: 45px;
    padding-bottom: 15px;
    text-align: center;
    text-shadow: 0 15px 10px rgba(0 0 0 0.2);
}
@keyframes scrolling{
 0%{
transform: translateX(100%);
    }
    100%{
transform: translateX(-100%);
    }
}

.container {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit,minmax(270px, 1fr));
}

.box {
    height: 310px;
    padding: 20px;
    text-align: center;
    background:#fff;
    box-shadow: 0px 5px 10px rgba(0 0 0 0.2);
    border: 2px solid #cce7d0;
    border-radius: 25px;
}
.box:hover{
    background-color: lightblue;
}
.box img{
    height: 100px;
    width: 120px;
}
.box h3{
    color: #444;
    padding: 10px 0;
    font-size: 20px;
}
.box p{
    color: #777;
    font-size: 14px;
    line-height: 1.6;
}
.btn{
    color: black;
    border: none;
    outline: none;
    font-size: 17px;
    margin-top: 10px;
    padding: 8px 15px;
    background: wheat;
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
}
.btn:hover{
    letter-spacing: 1px;
}
.box:hover{
    transform: scale(1.03);
    box-shadow: 0 10px 15px rgba(0 0 0 0.3);
}
</style>
