class App {
    // constructor() {
    //     this.items = new Items()
    // }
    start() {
        const allItems = new Items()
        allItems.adapter.getItems().then(items => {
            items.forEach(item => {
                const itemObj = new Item(item.attributes.name, item.attributes.price, item.attributes.description, item.id, item.attributes.menu.id, item.attributes.menu.name)
                console.log(itemObj.createItemCard())
            });
        })
        const menu = new Menu()
        menu.addListenerToMenu()
    }


    // getFeatureItems() {
    //     let randomItems = []
    //     for (let i = 0; i < 4; i++) {
    //         debugger
    //         // change this random algorithm to select an item for each menu, rather than across all menus
    //         randomItems.push(this.items[Math.floor(Math.random()*this.items.length)])
    //     }
    //     return randomItems
    // }

    // getItems() {
    //     // make a fetch request to /items
    //     fetch(`${this.url}/items`)
    //         .then(resp => {
    //             return resp.json()
    //         })
    //         // populate the items and menus properties with the returned data
    //         .then(items => {
    //             const allMenus = {
    //                 breakfast: [],
    //                 lunch: [],
    //                 dinner: []
    //             }
    //             items.data.forEach(item => {
    //                 const menuItem = new Item(item.attributes.name, item.attributes.price, item.attributes.description, item.attributes.image_url, item.id, item.attributes.menu.id, item.attributes.menu.name)

    //                 this.renderItems(menuItem.id, menuItem.menu_id, menuItem.image_url, menuItem.description)

    //                 switch (menuItem.menu_name) {
    //                     case "Breakfast":
    //                         allMenus.breakfast.push(menuItem)
    //                         break
    //                     case "Lunch":
    //                         allMenus.lunch.push(menuItem)
    //                         break
    //                     case "Dinner":
    //                         allMenus.dinner.push(menuItem)
    //                         break
    //                     default:
    //                         console.log("Something went wrong here...")
    //                         break
    //                 }
    //             })
    //             console.log(Object.values(allMenus))
    //             // this.renderItems();
    //         })
    //     // call renderItems
    //     .catch(err => alert(err))
        
    // }

}