class Item {
    constructor(name, price, description, image_url, id, menu_id, menu_name){
        this.name = name
        this.price = price
        this.description = description
        this.image_url = image_url
        this.id = id
        this.menu_id = menu_id
        this.menu_name = menu_name
        this.itemsAdapter = new ItemsAdapter()
    }

    createItemCard() {
        const container = document.querySelector(".container")
        const itemCard = document.createElement("div")
        itemCard.className = "item-card"
        itemCard.setAttribute("data-id", `${this.id}`)
        itemCard.setAttribute("data-menu-id", `${this.menu_id}`)
        const itemImage = document.createElement("div")
        itemImage.className = "item-image"
        itemImage.style.backgroundImage = `url("${this.image_url}")`
        itemImage.style.backgroundRepeat = "no-repeat"
        itemImage.style.backgroundSize = "cover"
        itemImage.style.backgroundPosition = "center"
        itemImage.style.height = "300px"
        itemImage.style.borderRadius = "10px"
        // const imgTag = document.createElement("img")
        // imgTag.src = this.image_url
        const itemNamePrice = document.createElement("div")
        itemNamePrice.className = "name-and-price"
        const itemName = document.createElement("div")
        itemName.className = "item-name"
        itemName.textContent = this.name
        const itemPrice = document.createElement("div")
        itemPrice.className = "item-price"
        itemPrice.textContent = `\$${this.price}`
        const itemDesc = document.createElement("div")
        itemDesc.className = "item-description"
        itemDesc.textContent = this.description
        // const deleteBtn = document.createElement("button")
        // deleteBtn.className = "delete-item"
        // deleteBtn.textContent = "Delete Item"
        // deleteBtn.addEventListener("click", (e) => this.deleteItem(e))
        //appending to parent
        // itemImage.appendChild(imgTag)
        itemNamePrice.append(itemName, itemPrice)
        itemCard.append(itemImage, itemNamePrice, itemDesc)
        container.append(itemCard)
    }

    // deleteItem(e) {
    //     const id = e.target.parentElement.dataset.id
    //     this.itemsAdapter.deleteItems(id).then(() => e.target.parentElement.remove() )
    // }
}

