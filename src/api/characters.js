const URL = "https://pokeapi.co/api/v2/pokemon"

export async function getCharactersApi(){
    try {
        const request = await fetch(`${URL}?limit=500`);
        const response = await request.json();
        return response.results;
    } catch (err) {
        throw Error(err);
    }
}
/*
export async function getCharacterByIdApi(id){
    try {
        const request = await fetch(`${URL}${id}`);
        const response = await request.json();
        return response;
    } catch (err) {
        throw Error(err);
    }
}

export async function getEpisodeName(url){
    try{
        const request = await fetch(url);
        const response = await request.json();
        return response.name;
    }catch (err){
        throw Error(err);
    }
}*/
