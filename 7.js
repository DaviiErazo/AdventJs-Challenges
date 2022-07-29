function contains(store, productToSearch) {
  for (const value of Object.values(store)) {
    if (value === productToSearch) {
      return true;
    } else if (typeof value === 'object') {
      if (contains(value, productToSearch)) return true;
    }
  }
  return false;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true