class Menu {
    constructor(name){
        this.name = name
    }

    addListenerToMenu() {
        const menuNames = document.querySelectorAll(".menu-name")
        menuNames.forEach(menu => {
            menu.addEventListener("click", () => {
                const container = document.querySelector(".container")
                container.style.display = "flex"
                switch(menu.textContent) {
                    case "Breakfast":
                        this.clearItemCards()
                        this.renderBreakfastItems()
                        break
                    case "Lunch":
                        this.clearItemCards()
                        this.renderLunchItems()
                        break
                    case "Dinner":
                        this.clearItemCards()
                        this.renderDinnerItems()
                        break
                    default:
                        this.clearItemCards()
                        this.renderAllItems()
                }
            })
        })
    }

    clearItemCards() {
        const clearItems = document.querySelectorAll(".item-card")
        Array.from(clearItems).forEach(item => {
            item.remove()
        })
    }
    
    renderBreakfastItems() {
        const breakfast = new Menus()
        breakfast.adapter.getMenus().then(menus => {
            menus[0].attributes.items.forEach(item => {
                const breakfastItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                breakfastItem.createItemCard()
            })
        })
    }

    renderLunchItems() {
        const lunch = new Menus()
        lunch.adapter.getMenus().then(menus => {
            menus[1].attributes.items.forEach(item => {
                const lunchItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                lunchItem.createItemCard()
            })
        })
    }

    renderDinnerItems() {
        const dinner = new Menus()
        dinner.adapter.getMenus().then(menus => {
            menus[2].attributes.items.forEach(item => {
                const dinnerItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                dinnerItem.createItemCard()
            })
        })
    }

    renderAllItems() {
        const allItems = new Items()
        allItems.adapter.getItems().then(items => {
            items.forEach(item => {
                const itemObj = new Item(item.attributes.name, item.attributes.price, item.attributes.description, item.attributes.image_url, item.id, item.attributes.menu.id, item.attributes.menu.name)
                console.log(itemObj.createItemCard())
            });
        })
    }
}