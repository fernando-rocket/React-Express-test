class Database{
    Database(){

    }

    #videos = new Map()

    read(){
        return Array.from(this.#videos.values())
    }

    create(Create_id, video){
        this.#videos.set(Create_id, video)
    }
}

module.exports = Database
