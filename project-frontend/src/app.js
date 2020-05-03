class App {
    static items = []
    menus = []
    url = "http://localhost:3000"
    featureItem = {}

    // bindEventListeners() {
        
    // }

    getFeatureItems() {
        let randomItems = []
        for (let i = 0; i < 4; i++) {
            debugger
            // change this random algorithm to select an item for each menu, rather than across all menus
            randomItems.push(this.items[Math.floor(Math.random()*this.items.length)])
        }
        return randomItems
    }

    getItems() {
        // make a fetch request to /items
        fetch(`${this.url}/items`)
            .then(resp => {
                return resp.json()
            })
            // populate the items and menus properties with the returned data
            .then(items => {
                const allMenus = {
                    breakfast: [],
                    lunch: [],
                    dinner: []
                }
                items.data.forEach(item => {
                    const menuItem = new Item(item.attributes.name, item.attributes.price, item.attributes.description, item.attributes.image_url, item.id, item.attributes.menu.id, item.attributes.menu.name)

                    switch (menuItem.menu_name) {
                        case "Breakfast":
                            allMenus.breakfast.push(menuItem)
                            break
                        case "Lunch":
                            allMenus.lunch.push(menuItem)
                            break
                        case "Dinner":
                            allMenus.dinner.push(menuItem)
                            break
                        default:
                            console.log("Something went wrong here...")
                            break
                    }
                })
                this.renderItems();
            })
        // call renderItems
        .catch(err => alert(err))
        
    }

    renderItems(){
        // create DOM nodes and insert data into them to render in the DOM
        
    }
}