import {game_details} from './details.module.js'
export class Games{
    constructor(defaultC){
        this.category = defaultC;
        this.getGames(this.category);
        this.createListeners();
        this.displayAllGames();
        this.hideMain();

    }

    async getGames(category){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3d01b5d0e6msha078c31c75124fep15694cjsn91fffe232f6a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        
        let result = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        result = await result.json();
        this.displayAllGames(result);

    }

    displayAllGames(results){
        let temp = '';

        for (let i=0; i<results.length;i++){
            temp += `<div class="col-md-3 card-group">
            <div class="card" data-id="${results[i].id}">
                <img class="card-img-top" src="${results[i].thumbnail}" alt="Card image cap">
                <div class="card-body">
                    <div class="d-flex justify-content-between">
                        <h5 class="card-title text-white">${results[i].title}</h5>
                        <div>
                        <button class="free-btn px-2 rounded-3 fw-bolder">Free</button>

                        </div>
                    </div>
                  <p class="card-text text-secondary">${results[i].short_description}</p>
                </div>
                <div class="card-footer">
                    <div class="row">
                        <small class="col-md-6 text-white fw-bolder"><span class="span-footer rounded-3">${results[i].genre}</span></small>
                        <small class="col-md-6 text-white fw-bolder text-end"><span class="span-footer rounded-3">${results[i].platform}</span></small>
                    </div>
                    
                </div>
            </div>
        </div> `
        }

        document.getElementById('games').innerHTML = temp;
        this.createListeners();
    }

    createListeners(){
        document.querySelectorAll(".card").forEach( (item) => {
            item.addEventListener('click',()=>{
                const game_id = item.dataset.id;
                new game_details(game_id);
            });
        });
    }

}




