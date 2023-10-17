//Referencias do DOM - HTML
const btnClique = document.getElementById('btnClique');
const lblValor = document.getElementById('lblValor');

const btntemp = document.getElementById('btntemp');
const lbltemp = document.getElementById('lbltemp');
const lblcidade = document.getElementById('lblcidade');
const lblcond = document.getElementById('lblcond');

const btncep = document.getElementById('btncep');
const lbllogra = document.getElementById('lbllogra');
const lblcompl = document.getElementById('lblcompl');
const lblbairro = document.getElementById('lblbairro');
const lbllocal = document.getElementById('lbllocal');
const lblcep = document.getElementById('lblcep');
const lbluf = document.getElementById('lbluf');

const btndolar = document.getElementById('btndolar');
const lbldolar = document.getElementById('lbldolar');

//lógica de programação

const api = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
})

const apitemp = axios.create({
    baseURL:'https://api.hgbrasil.com/weather?format=json-cors&key=2fc8040e&city_name=Volta_Redonda,Rj'
})

const apicep = axios.create({
    baseURL:'https://viacep.com.br/ws/27256712/json/'
})

const apidolar = axios.create({
    baseURL:'https://economia.awesomeapi.com.br/last/USD-BRL'
})

async function consulta(){
    const response = await api.get();
    lblValor.innerHTML = 'Valor:R$ ' + response.data.ticker.buy;
}

async function consultatemp(){
    const responsetemp = await apitemp.get();
    lblcidade.innerHTML = 'Cidade:' + responsetemp.data.results.city;
    lbltemp.innerHTML = 'Temperatura:' + responsetemp.data.results.condition_code + '°';
    lblcond.innerHTML = 'Condição:' + responsetemp.data.results.description;
}

async function consultacep(){
    const responsecep = await apicep.get();
    lblcep.innerHTML = 'CEP:' + responsecep.data.cep;
    lbllogra.innerHTML = 'Logradouro:' + responsecep.data.logradouro;
    lblcompl.innerHTML = 'Complemento:' + responsecep.data.complemento;
    lblbairro.innerHTML = 'Bairro:' + responsecep.data.bairro;
    lbllocal.innerHTML = 'Localidade:' + responsecep.data.localidade;
    lbluf.innerHTML = 'UF:' + responsecep.data.uf;
}

async function consultadolar(){
    const  responsedolar = await apidolar.get();
    lbldolar.innerHTML = 'Valor:R$' + responsedolar.data.USDBRL.bid;
}

btnClique.onclick = ()=>{
    consulta();
};

btntemp.onclick = ()=>{
    consultatemp();
}


btncep.onclick = ()=>{
    consultacep();
}

btndolar.onclick = ()=>{
    consultadolar();
}

/*
function calcular(){
    total = 3+6;
}

function(){

}

() =>{}
*/