const BASE_URL = 'https://thatcopy.pw/catapi/rest/'; // link url
const catBtn = document.getElementById('change-cat');
//const catImg = document.getElementById('cat');

//Função para carregar as imagens

const getCats = async () =>{
    try{
        const data = await fetch (BASE_URL); // recebendo os dados/data
        const json = await data.json();      //convertendo string p/ Json
        return json.webpurl;
    }
    catch(e) {
        console.log(e.message);
    } 
    
}

const loadIMG = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadIMG);//se click no botão, chama a função loading

loadIMG(); // inicializa a pag já com uma imagem