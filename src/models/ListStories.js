export class ListStories{
    #stories = []

    addStories(stories){
        this.#stories.push(stories)
    }

    getStories() {
        return this.#stories
    }
}