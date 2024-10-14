// async await para manejar promesas

const obtenerMemes = async () =>{

    const memeContainers = document.getElementById("list-memes");
    const memeTemplate = document.getElementById("meme");

    const request = await fetch('https://api.imgflip.com/get_memes');
    const respuesta = await request.json();

    respuesta.data.memes.slice(10,50).forEach(meme => {
        
        const newMemeCard = memeTemplate.cloneNode(true);
        const img = newMemeCard.querySelector('img');
        img.src = meme.url;
        memeContainers.appendChild(newMemeCard);
    });

    memeTemplate.remove();
}

obtenerMemes();