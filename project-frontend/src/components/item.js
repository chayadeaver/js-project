class Item {
    constructor(name, price, description, image_url, id, menu_id, menu_name){
        this.name = name
        this.price = price
        this.description = description
        this.image_url = image_url
        this.id = id
        this.menu_id = menu_id
        this.menu_name = menu_name

    }

    createItemCard() {
        const container = document.querySelector(".container")
        const itemCard = document.createElement("div")
        itemCard.className = "item-card"
        itemCard.setAttribute("data-id", `${this.id}`)
        itemCard.setAttribute("data-id", `${this.menu_id}`)
        const itemImage = document.createElement("div")
        itemImage.className = "item-image"
        const imgTag = document.createElement("img")
        imgTag.src = "https://cafe-menu-api.s3.us-east-1.amazonaws.com/hot-coffee.jpg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLWVhc3QtMiJHMEUCIGzL56yn9A%2BBowng4fottYtywnlrm1kXnGK4bIfw%2BiaPAiEArDW2BPkoyu2rxfxc38vIXRHkiZIFaJMJSjO0yc3aopcq5gEIZhAAGgwyMzk0ODQ5NDAyMTEiDLu3yWXa0klxf%2BlnoCrDAUAoxAc9nc8cQq4RJtl%2F6%2FP1VtH4685uAl8jYauIjFSzHSLim2H4iUDbiynLzOuI9De3tliFTUnibp11TgR3n95sbnd8Sj2RnX0jOWzmnhcPLXLKZuXbOxn%2Fogf9ZY37iMY%2BK7AhuBbRomQ2nWa2VW4t%2F7RnkfASEx7hmtKh7%2ByYJFObV%2ByeGDRmHZZJiNFEUG%2F5WFPFJ1HnU13V2rTTVjEVGq8ng67boEjB5y1cyX5DL%2BffavNCAnBzwnMmK4iGTmxcbzDY1bz1BTrwAjUreiBLcoDbSxPDcdZgYUU6BgmFcoXyVCPbQDf5bI8Fa1XLu3vcZ9RTGIcgXjojb5TRPlTCoH0RmhDBHZh%2F6yuVU4bSB%2Bo20LG6b0tr8SVMqaTmYJmIdSeOtsRR8az0IOGOVzXCMMh7qIiT%2B84X2a5BG6uDiK4BpHKQNzqjcB9U4TbeQ0fWIQoz9sgOGfoYTdmrkIWXkgHJGjmE2PvFFtrWn8Bvn%2FTgOYlzrnsh%2FIKdy7cevVmpMJuhjYHGho14%2FMbsGQuFxZu0MwT%2FF7OM9E10M0DF62pCIFCNS4vBBbxJrhQpUec5dKRJt%2Bf84ic9LAy8gK4Q6xedU0rPD%2FXBmA4aWIGPkMSQ%2B3yLXcUll3vDOv4e4%2Ba7pfswat%2Fcl4uNIWsnxUW6QsrEjNRsYED9Ue65IaIOhl6ejLN4A477JMAW4%2FFeeNbfRQ7k0K67grOy5H0Zdd4DRuZWLIdY5Dd5629uZpX0A0CdDZUG63xQNsIS&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200503T204349Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATPQTKF6ZYUQXB5UR%2F20200503%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e036b34d3267d14b157c90559a6f7c81b07d9894a1202c43c3b71c197021165"
        const itemNamePrice = document.createElement("div")
        itemNamePrice.className = "name-and-price"
        const itemName = document.createElement("div")
        itemName.className = "item-name"
        itemName.textContent = this.name
        const itemPrice = document.createElement("div")
        itemPrice.className = "item-price"
        itemPrice.textContent = this.price
        const itemDesc = document.createElement("div")
        itemDesc.className = "item-description"
        itemDesc.textContent = this.description

        //appending to parent
        itemImage.appendChild(imgTag)
        itemNamePrice.append(itemName, itemPrice)
        itemCard.append(itemImage, itemNamePrice, itemDesc)
        container.append(itemCard)
    }
}