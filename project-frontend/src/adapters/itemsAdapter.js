class ItemsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/items"
    }

    getItems(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }
}

