class MenusAdapter{
    constructor() {
        this.baseURL = "https://cafe-menu-api.herokuapp.com/menus"
    }

    getMenus() {
        return fetch(this.baseURL)
        .then(resp => resp.json())
        .then(json => json.data)
    }

}