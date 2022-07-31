
function maxProfit(prices) {
  let winner = {
    compra: prices[0],
    venta: 0,
    ganancia: 0
  }
  
  for (let i = 0; i < prices.length; i++ ) {
   if (winner.compra >= prices[i]) {
     winner.compra = prices[i]
   } else {
     winner.venta = prices[i];
     const ganancia = winner.venta - winner.compra;
     if (ganancia > winner.ganancia) {
       winner.ganancia = ganancia;
     }
   }
  }
    
  return winner.ganancia === 0 ? -1 : winner.ganancia;
  // ¡Y no olvides compartir tu solución en redes!
}

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7]
maxProfit(pricesDoge) // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3]
maxProfit(pricesAda) // -> -1 (no hay ganancia posible)
