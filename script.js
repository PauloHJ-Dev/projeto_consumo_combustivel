function calcular(){
    let etanol = parseFloat(document.getElementById('etanol').value);
    let gasolina = parseFloat(document.getElementById('gasolina').value);
    
    let resultado = etanol/gasolina;

    if (resultado < 5) {
        document.getElementById('status').src= "imgs/ruim_re.png";
        document.getElementById("mensagem").innerHTML=`CONSUMO RUIM - ${resultado.toFixed(2)} km/l`;
    }else if(resultado < 9 ) {
        document.getElementById('status').src= "imgs/regular_re.png";
        document.getElementById("mensagem").innerHTML=`CONSUMO REGULAR - ${resultado.toFixed(2)} km/l`;
    }
    else{
        document.getElementById('status').src= "imgs/bom_re.png";
        document.getElementById("mensagem").innerHTML=`CONSUMO BOM - ${resultado.toFixed(2)} km/l`;
    }


}

function limpar(){
    document.getElementById('status').src='/projeto_consumo_combustivel/imgs/ruim.png';
    document.getElementById('mensagem').innerHTML='';
    document.getElementById('etanol').value='';
    document.getElementById('gasolina').value='';

}