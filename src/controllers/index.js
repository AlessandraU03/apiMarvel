import { listStories } from "./dependencies.js";
import { Stories } from "../models/Stories.js";
import { Characters } from "../models/components/Characters.js";
import { Comics} from "../models/components/Comics.js";
import { Creators } from "../models/components/Creators.js";
import { Events } from "../models/components/Events.js";
import { Series } from "../models/components/Series.js";

const api = document.getElementById("btn-api");
api.addEventListener("click", function(){
    const url = "https://gateway.marvel.com:443/v1/public/stories?apikey=05d2a75e921406dcd7542a9f4ff3b5ad&ts=14/02/2024, 22:21:28&hash=723f1ff194266e48eee5087bb3fd792e"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.data.results.forEach( element => {
            let stories = new Stories();
            stories.setId(element.id);
            stories.setTitle(element.title);
            stories.setDescription(element.description);
            stories.setType(element.type);
            stories.setModified(element.modified);
            element.characters.items.forEach(item => {
                let character = new Characters()
                character.setName(item.name)
                stories.addCharacters(character)
            })   
            element.series.items.forEach(item =>{
                let serie = new Series()
                serie.setName(item.name)
                stories.addSeries(serie)
            })
            element.comics.items.forEach(item =>{
                let comic = new Comics()
                comic.setName(item.name)
                stories.addComics(comic)
            })
            element.creators.items.forEach(item =>{
                let creator = new Creators()
                creator.setName(item.name)
                creator.setRole(item.role)
                stories.addCreators(creator)
            })
            element.events.items.forEach(item =>{
                let event = new Events()
                event.setName(item.name)
                stories.addSeries(event)
            })
            stories.setThumbnail(element.thumbnail)
            listStories.addStories(stories);
        });
    });
})


function loadAndDisplayStories() {
    const ul = document.getElementById("container-card");
    ul.innerHTML = ''; 

    listStories.getStories().forEach(stories => {
        const card = document.createElement("div");
        card.classList.add("card");

        const thumbnail = document.createElement("img"); 
        thumbnail.src = stories.getThumbnail();
        card.appendChild(thumbnail);

        const title = document.createElement("h2");
        title.textContent = stories.getTitle();
        card.appendChild(title);

        const id = document.createElement("p");
        id.textContent = `Id: ${stories.getId()}`;
        card.appendChild(id);

        const description = document.createElement("p");
        description.textContent = `Descripcion: ${stories.getDescription()}`;
        card.appendChild(description);

        const type = document.createElement("p");
        type.textContent = `Tipo: ${stories.getType()}`;
        card.appendChild(type);

        const modified = document.createElement("p");
        modified.textContent = `Modificado: ${stories.getModified()}`;
        card.appendChild(modified);

        stories.getCharacters().forEach(character => {
            const divCharacter = document.createElement("div");
            const nameCharacater = document.createElement("p");
            nameCharacater.textContent = `Personaje: ${character.getName()}`;
            divCharacter.appendChild(nameCharacater);
            card.appendChild(divCharacter);
        });

        stories.getEvents().forEach(event => {
            const divEvent = document.createElement("div");
            const nameEvent = document.createElement("p");
            nameEvent.textContent = `Evento: ${event.getName()}`;
            divEvent.appendChild(nameEvent);
            card.appendChild(divEvent);
        });

        stories.getCreators().forEach(creator => {
            const divCreator = document.createElement("div");
            const divNameCreator = document.createElement("div");
            const divRolCreator = document.createElement("div");

            const nameCreator = document.createElement("p");
            const roleCreator = document.createElement("p");
            nameCreator.textContent = `Creador: ${creator.getName()}`;
            roleCreator.textContent = `Rol: ${creator.getRole()}`;

            divNameCreator.appendChild(nameCreator);
            divRolCreator.appendChild(roleCreator);

            divCreator.appendChild(divNameCreator);
            divCreator.appendChild(divRolCreator);

            card.appendChild(divCreator);
        });

        stories.getSeries().forEach(serie => {
            const divNameSerie = document.createElement("div");
            const nameSerie = document.createElement("p");
            nameSerie.textContent = `Serie: ${serie.getName()}`;
            divNameSerie.appendChild(nameSerie);
            card.appendChild(divNameSerie);
        });

        stories.getComics().forEach(comic => {
            const divNameComic = document.createElement("div");
            const nameComic = document.createElement("p");
            nameComic.textContent = `Cómic: ${comic.getName()}`;
            divNameComic.appendChild(nameComic);
            card.appendChild(divNameComic);
        });

        ul.appendChild(card);
    });
}

const btnView = document.getElementById("btn-view");
btnView.addEventListener("click", loadAndDisplayStories);

