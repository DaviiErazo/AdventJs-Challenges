function shouldBuyFidelity(times) {
  const price = 12;
  const discount = 0.75;
  
  let totalMember = 0;
  let totalNomal = price * times;
  let totalLoyaltyCard = 250;
  
  for (let i = 0; i < times.length; i++) {
    totalLoyaltyCard = totalLoyaltyCard + price * discount * (discount * i);
  }
  
  console.log(totalLoyaltyCard);
  return true
}

shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad