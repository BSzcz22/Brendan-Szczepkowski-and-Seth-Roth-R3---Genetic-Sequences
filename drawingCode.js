function drawCounts(counts) {
  strings = {whole:''};
  for( const n in counts ) {
    if( n != "U" ) {
      const string = `${n}: ${counts[n]} `;
      strings.whole += string;
      strings[n] = string;
    }
  }

  let x = 10;
  let y = height/1.75;
  for( let n of ["A","C","G","T"] ) {
    fill(colorTable[n]);
    text(strings[n],x,y);
    x += textWidth(strings[n]);
  }  
}

function adjustTextSizeToWidth( string, maxWidth ) {
  let ts = height*0.15; 
  textSize(ts);
  while( 20 + textWidth(string) > maxWidth ) {
    ts -= 1;
    textSize(ts);
  }
  while( 20 + textWidth(string) < maxWidth ) {
    ts += 1;
    textSize(ts);
  }
}

function pieChart( x, y, r, counts ) {
  const total = Object.values(counts).reduce((sum,current) => sum + current);
  let startAngle = 0;
  for( const n in counts ) {
    const theta = 2*PI*counts[n]/total;
    const endAngle = startAngle + theta;
    fill(colorTable[n]);
    arc( x,y,r,r,startAngle, endAngle);
    startAngle = endAngle;
  }
}

function drawDNAString(string,x,y,width) {
  const s = width/string.length;
  noStroke();
  for( let i = 0; i < string.length; i++ ) {
    fill(colorTable[string.charAt(i)]);
    square(x + i * s, y, s);
  }
}

const colorTable = {
  A: 'Blue',
  C: 'Red',
  G: 'Green',
  T: 'Yellow',
  U: 'Black'
}