class Menu {
    constructor(name){
        this.name = name
        this.menusAdapter = new MenusAdapter()
        this.itemsAdapter = new ItemsAdapter()
        this.form = document.querySelector("#create-menu-item-form")
        this.populateMenuNameToForm()
    }

    addListenerToMenu() {
        const menuNames = document.querySelectorAll(".menu-name")
        menuNames.forEach(menu => {
            menu.addEventListener("click", () => {
                const container = document.querySelector(".container")
                container.style.display = "flex"
                switch(menu.textContent) {
                    case "Breakfast":
                        this.clearPage()
                        this.renderBreakfastItems()
                        break
                    case "Lunch":
                        this.clearPage()
                        this.renderLunchItems()
                        break
                    case "Dinner":
                        this.clearPage()
                        this.renderDinnerItems()
                        break
                    case "Add New Items":
                        this.clearPage()
                        this.renderAddMenuItemForm()
                        break
                    default:
                        this.clearPage()
                        this.renderAllItems()
                }
            })
        })
    }

    clearPage() {
        const clearItems = document.querySelectorAll(".item-card")
        Array.from(clearItems).forEach(item => {
            item.remove()
        })
        this.form.style.display = "none"
    }
    
    renderBreakfastItems() {
        this.menusAdapter.getMenus().then(menus => {
            menus[0].attributes.items.forEach(item => {
                const breakfastItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                breakfastItem.createItemCard()
            })
        })
    }

    renderLunchItems() {
        this.menusAdapter.getMenus().then(menus => {
            menus[1].attributes.items.forEach(item => {
                const lunchItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                lunchItem.createItemCard()
            })
        })
    }

    renderDinnerItems() {
        this.menusAdapter.getMenus().then(menus => {
            menus[2].attributes.items.forEach(item => {
                const dinnerItem = new Item(item.name, item.price, item.description, item.image_url, item.id, item.menu_id)
                dinnerItem.createItemCard()
            })
        })
    }

    renderAllItems() {
        this.itemsAdapter.getItems().then(items => {
            items.forEach(item => {
                const itemObj = new Item(item.attributes.name, item.attributes.price, item.attributes.description, item.attributes.image_url, item.id, item.attributes.menu.id, item.attributes.menu.name)
                itemObj.createItemCard()
            });
        })
    }

    renderAddMenuItemForm(){
        this.form.style.display = "block"
        this.form.style.margin = "0 auto"
        this.form.addEventListener("submit", (e) => this.addNewMenuItem(e)) 
    }

    populateMenuNameToForm() {
        this.menusAdapter.getMenus().then(menus => {
            menus.forEach(menu => {
                // console.log(menu.id)
                const selectBox = document.querySelector("#menu-select")
                const option = document.createElement("option")
                option.textContent = menu.attributes.name
                option.value = menu.id
                selectBox.append(option)
            })
        })
    }

    addNewMenuItem(e) {
        e.preventDefault()
        const menuNameSelect = document.querySelector("#menu-select").value
        const itemName = document.querySelector("#item-name").value
        const itemPrice = document.querySelector("#price").value
        const itemImage = document.querySelector("#image-url").value
        const itemDescription = document.querySelector("#description").value
        const data = {
            name: itemName,
            price: itemPrice,
            image_url: itemImage,
            description: itemDescription,
            menu_id: menuNameSelect
        }
        this.itemsAdapter.postItems(data).then(data => {
            alert("Item created!")
            this.form.reset()
            this.clearPage()
            this.renderAllItems()
        })
    }


}