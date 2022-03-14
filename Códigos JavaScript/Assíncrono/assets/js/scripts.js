const catImg = document.getElementById('cat');
const catButton =document.getElementById('change-cat');

const getCats = async ()=>{
    
    const data= await fetch('https://thatcopy.pw/catapi/rest/')
    .then((result)=>result.json())
    .catch((e)=>console.log(e));

    return data.webpurl;
}
const loadImg = async()=>{
    catImg.src= await getCats();
};

catButton.addEventListener('click',loadImg);

// loadImg();