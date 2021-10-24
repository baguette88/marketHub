console.log("api")


function createArr() {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then(response => response.json())
      .then(data => {
       
      console.log('Success:', data); //btc
      console.log('Success:', data.coins[0].item); //eth
      document.getElementById("stat1").innerHTML="Top Trending Token: "+ data.coins[0].item.id
      document.getElementById("stat2").innerHTML="Price: "+ data.coins[0].item.price_btc
      document.getElementById("stat3").innerHTML="Symbol: "+ data.coins[0].item.symbol
      document.getElementById("img1").innerHTML=data.coins[0].item.small
      let grabby = data[0]
      console.log(grabby) //WORKS
    })
    .then(data => {
      // console.log(data); //btc
    })
    
    .catch((error) => {
      console.error('Error:', error);
    });
    }
    
    createArr()