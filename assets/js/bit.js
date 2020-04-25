$(document).ready(function(){

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })

  const dogeFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 6
  })

// Load cryptocurrency prices
  $.ajax({
    url: "https://api.coinbase.com/v2/prices/spot?currency=USD",
    type: "GET",
    dataType: 'json',
  })
  .done(function(data){
    $('#btc-price').append(
      "<span><b>" + formatter.format(data.data.amount) + "</span> ");
  });

  $.ajax({
    url: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=209e1a11-8ebc-4fc2-954c-eccc65c94c1e",
    type: "GET",
    dataType: 'json'
  })
  .done(function(data){
    if (data !== undefined){
    $('#alt-price').append(
      "<span> • Dogecoin: <b>" + dogeFormatter.format(data.data[31].quote.USD.price) + "</b></span><span>  • Ethereum: <b>" + formatter.format(data.data[1].quote.USD.price) + "</b></span><span>  • Monero: <b>" + formatter.format(data.data[13].quote.USD.price) + "</b></span><span> • Ripple: <b>" + formatter.format(data.data[2].quote.USD.price) + "</b></span> ");
    }
  });

  //209e1a11-8ebc-4fc2-954c-eccc65c94c1e
});