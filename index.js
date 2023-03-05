
var RelojInterval;
var openedWindow;

var tiempo;

abrir();

function timer(){
    
    tiempo = 600000 + Math.floor(Math.random() * 800000);
    console.log(tiempo/(1000*60);
    setTimeout(()=>{
        abrir();
     },tiempo);
  
}

function abrir(){
    openedWindow =  window.open("https://www.bitelchess.com", "bitelchess", "width=300, height=200");

    cerrar();
    
}

function cerrar(){
    setTimeout(()=>{
        openedWindow.close();
    },5000);

    timer();


}
