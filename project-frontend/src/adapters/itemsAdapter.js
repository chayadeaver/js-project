class ItemsAdapter {
    constructor() {
        this.baseURL = "http://localhost:3000/items"
    }

    getItems(){
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

    postItems(data) {
        return fetch(this.baseURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
    }

    deleteItems(id) {
        return fetch(`${this.baseURL}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
    }
}

