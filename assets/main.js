function cor( e ) {
    let teste = generateColor();
    //document.body.style.backgroundColor = 'antiquewhite'
    document.body.style.backgroundColor = teste;
}
function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }