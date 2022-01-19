let gc_fasta;
let bg = '';
const nucleotides = ["A","C","G","T","U"];
 
function preload() {
  gc_fasta = loadStrings('gc.fasta');
} 

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bg);
}

const problemDispatch = {
  '1': problem_dna,
  '2': problem_rna, 
  '3': problem_revc,
  '4': problem_hamm1,
  '5': problem_hamm2,
  '6': problem_subs1,
  '7': problem_subs2
}

function keyPressed() {
  if( key in problemDispatch ) {
    background(bg);
    problemDispatch[key]();
  }
}