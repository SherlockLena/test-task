module.exports.canTransform = (start, end) => {
    const visited = new Set();
    const queue = [start];
    let curr = start;
    
    while (queue.length > 0 && curr <= end) {
      curr = queue.shift();
      
      if (curr === end) return true;
      
      const next1 = curr * 2;
      const next2 = curr * 10 + 1;
      if (next1 || next2 === end) return true;
      if (!visited.has(next1)) {
        queue.push(next1);
        visited.add(next1);
      }
      if (!visited.has(next2)) {
        queue.push(next2);
        visited.add(next2);
      }
    }
    return false;
}