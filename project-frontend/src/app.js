class App{
    items = []
    menus = []
    url = "http://localhost:3000"

    getItems() {
        // make a fetch request to /items
        fetch(`${this.url}/items`)
            .then(resp => resp.json())
            .then(data => console.log(data))
        // populate the items and menus properties with the returned data
        // call renderItems
        .catch(err => alert(err))
    }

    renderItems(){
        // create DOM nodes and insert data into them to render in the DOM
    }
}