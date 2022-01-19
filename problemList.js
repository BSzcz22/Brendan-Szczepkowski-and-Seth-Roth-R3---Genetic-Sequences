const DNA_STRING_FOR_dna = "AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC";
const DNA_STRING_FOR_rna = "GATGGAACTTGACTACGTAAATT";
const DNA_STRING_FOR_revc = "AAAACCCGGT";
const DNA_STRING_1_FOR_hamm = "GAGCCTACTAACGGGAT";
const DNA_STRING_2_FOR_hamm = "CATCGTAATGACGGCCT";
const DNA_STRING_FOR_subs = "GATATATGCATATACTT";
const DNA_SUBSTRING_FOR_subs = "ATAT";

function problem_dna() {
  let counts = nucleotideCountsOf(DNA_STRING_FOR_dna);
  drawDNAString(DNA_STRING_FOR_dna,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
  let n = DNA_STRING_FOR_dna
  n = n.replaceAll("T","U");
  text(n,width/140,height/1.3);
}

function problem_rna() {
  let counts = nucleotideCountsOf(DNA_STRING_FOR_rna);
  drawDNAString(DNA_STRING_FOR_rna,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
  let x = DNA_STRING_FOR_rna
  x = x.replaceAll("T","U");
  text(x,width/140,height/1.3);
}

function problem_revc() {
  let counts = nucleotideCountsOf(DNA_STRING_FOR_revc);
  drawDNAString(DNA_STRING_FOR_revc,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
  let y = DNA_STRING_FOR_revc
  y = reverse_string(y);
  text(y,width/140,height/1.3);
}

function problem_hamm1() {
  let counts = nucleotideCountsOf(DNA_STRING_1_FOR_hamm);
  drawDNAString(DNA_STRING_1_FOR_hamm,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
  let g = DNA_STRING_1_FOR_hamm
  g = reverse_string(g);
  text(g,width/140,height/1.3);
}

function problem_hamm2() {
  let counts = nucleotideCountsOf(DNA_STRING_2_FOR_hamm);
  drawDNAString(DNA_STRING_2_FOR_hamm,0,0,width);
  drawCounts(counts);
  pieChart(width/2, height/2, width/4, counts);
  let g = DNA_STRING_2_FOR_hamm
  g = reverse_string(g);
  text(g,width/140,height/1.3);
}

function problem_subs1() {
 let counts = nucleotideCountsOf(DNA_STRING_FOR_subs);
 drawDNAString(DNA_STRING_FOR_subs,0,0,width);
 drawCounts(counts);
 pieChart(width/2, height/2, width/4, counts);
 let j = DNA_STRING_FOR_subs
 j = reverse_string(j);
 text(j,width/140,height/1.3);
}

function problem_subs2() {
 let counts = nucleotideCountsOf(DNA_SUBSTRING_FOR_subs);
 drawDNAString(DNA_SUBSTRING_FOR_subs,0,0,width);
 drawCounts(counts);
 pieChart(width/2, height/1.5, width/6, counts);
 let j = DNA_SUBSTRING_FOR_subs
 j = reverse_string(j);
 text(j,width/140,height/1.3);
}
