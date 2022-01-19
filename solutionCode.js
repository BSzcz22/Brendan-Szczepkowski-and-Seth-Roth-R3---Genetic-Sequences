function nucleotideCountsOf(string) {
  return nucleotides.reduce( (counts,n) => {
    counts[n] = Array.from(string).filter( char => char === n).length
    return counts;
  }, {}) 
}

 function reverse_string(x) {
   x = x;
   return x.split("").reverse().join("");
 }
