export class game_details{
    constructor(game_id){
        this.id = game_id;
        this.close = document.getElementById("close-btn");
        this.getGame(this.id);
        this.hideMain();
        this.displayGameInfo();
        this.hideDetails();
    }

    async getGame(id){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3d01b5d0e6msha078c31c75124fep15694cjsn91fffe232f6a',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
        let result = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options);
    
        result = await result.json();
        this.hideMain();
        this.displayGameInfo(result);
        this.hideDetails();
        
    }

    displayGameInfo(result){
        let temp = `<div class="col-md-4">
        <img src="${result.thumbnail}" class="w-100" alt="">

      </div>

      <div class="col-md-8 text-white">
        <p class="display-6">${result.title}</p>
        <h5>Category: <small class="bg-info rounded-3 text-black p-1">${result.genre}</small></h5>
        <h5 class="my-3">Platform: <small class="bg-info rounded-3 text-black p-1">${result.platform}</small></h5>
        <h5>Status: <small class="bg-info rounded-3 text-black p-1">${result.status}</small></h5>

        <p>${result.description}</p>

        <a class="btn btn-outline-warning text-white rounded-3 mt-4 p-2" target="_blank" href="${result.freetogame_profile_url}">Show Game</a>

      </div>`

      document.getElementById('game-details').innerHTML = temp;
    }

    hideMain(){
        document.getElementById("games-page").classList.add("d-none");
        document.getElementById("details-page").classList.remove('d-none');
        document.getElementById("details-page").classList.add('d-block');
    }

    hideDetails(){
        this.close.addEventListener('click', () => {
            document.getElementById("games-page").classList.remove('d-none');
            document.getElementById("games-page").classList.add("d-block");
            document.getElementById("details-page").classList.add('d-none');
        });
        
    }
}