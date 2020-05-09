class MenusAdapter{
    constructor() {
        this.baseURL = "http://localhost:3000/menus"
    }

    getMenus() {
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

}