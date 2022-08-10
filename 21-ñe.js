const reduce = {
  'ADD': (value, total) => value + total,
  'REMOVE': (value, total) => total - value,
}

function canCarry(capacity, trip) {
  let action = {};
  let total = 0;
  
  action = trip.reduce((acc, tp) => {
    const [amount, pickUp, delivery] = tp;
    
    if (!action[pickUp]) {
      action[pickUp] =  [{'action': 'ADD', 'value': amount }];
    } else {
      action[pickUp] = [...action[pickUp], {'action': 'ADD', 'value': amount }];
    }
    
    if (!action[delivery]) {
      action[delivery] = [{ 'action': 'REMOVE', 'value': amount}];
    } else {
    	action[delivery] = [...action[delivery], {'action': 'REMOVE', 'value': amount }];
    }
    
    return action;
  }, {});
  
  const lastDeliveryPoint = trip[trip.length - 1][2];
  
  for (let i=0; i<lastDeliveryPoint; i++) {
    if (action[i]) {
      const actionTrip = action[i];
      
      for(let j=0; j<actionTrip.length; j++) {
        const ac = actionTrip[j];
        total = reduce[ac.action](ac.value, total);
      }
      if (total > capacity) {
      	return false;
      }
    }
  }
  
  
 // ¡No olvides compartir tu solución en redes!
return true;
}

//canCarry(4, [[2, 5, 8], [3, 6, 10]]) // false
// En el punto 5 recoge 2 regalos...
// En el punto 6 recoge 3 regalos...
// Del punto 6 al 8 tendría 5 regalos en total
// Y su capacidad es 4... así que ¡no podría!


//canCarry(3, [[1, 1, 5], [2, 2, 10]]) // true

// En el punto 1 recoge 1 regalo...
// En el punto 2 recoge 2 regalos...
// En el punto 5 entrega 1 regalo...
// En el punto 10 entrega 2 regalos...
// ¡Sí puede! Nunca superó la carga máxima de 3 regalos


canCarry(3, [[2, 1, 5],[3, 5, 7]]) // true -> nunca supera el máximo de capacidad

/*
canCarry(4, [[2, 3, 8],[2, 5, 7]]) // true -> del punto 5 al 7 lleva 4 regalos y no supera el máximo

canCarry(1, [[2, 3, 8]]) // false -> no podría ni con el primer viaje
canCarry(2, [[1, 2, 4], [2, 3, 8]]) // false -> del punto 3 al 4 supera la capacidad máxima porque llevaría 3 regalos
*/


// ñe :C
