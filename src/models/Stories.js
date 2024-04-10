export class Stories{
    #id
    #title
    #description
    #characters = []
    #series = []
    #comics = []
    #creators = []
    #events = []
    #type
    #modified
    #thumbnail

    setId(id){this.#id = id}
    getId() { return this.#id }

    setTitle(title){this.#title = title}
    getTitle() { return this.#title }

    setDescription(description){this.#description = description}
    getDescription() { return this.#description }

    addCharacters(character){this.#characters.push(character)}
    getCharacters(){return this.#characters}

    addSeries(series){this.#series.push(series)}
    getSeries(){return this.#series}

    addCreators(creators){this.#creators.push(creators)}
    getCreators(){return this.#creators}

    setThumbnail(thumbnail){ this.#thumbnail = thumbnail}
    getThumbnail() { return this.#thumbnail}

    addComics(comics){this.#comics.push(comics)}
    getComics(){return this.#comics}

    addEvents(events){ this.#events.push(events)}
    getEvents() { return this.#events}

    setType(type){ this.#type = type}
    getType() { return this.#type}

    setModified(modified){ this.#modified = modified}
    getModified() { return this.#modified}

}