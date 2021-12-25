function getWidth(height) {
  return (height * 2) - 1;
}

function createXmasTree(height) {
  const maxWidth = getWidth(height);
  let tree = ""
  
  for (let currentHeight = 1; currentHeight <= height; currentHeight++)   {
    const width = getWidth(currentHeight);
    const excessWidth = maxWidth - width;
    const excessWidthMid = excessWidth / 2;
    
    const leaves = "*".repeat(width);
    let excess = "_".repeat(excessWidthMid);
    let branch = `${excess}${leaves}${excess}`;
    
    tree = tree + `${branch}\n`;
    
    if (currentHeight === height) {
      excess = "_".repeat((maxWidth - 1) / 2);
      branch = `${excess}#${excess}`;
      tree = tree + `${branch}\n${branch}`
    }    
  }
  return tree;
}

createXmasTree(20)