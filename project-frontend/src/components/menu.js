class Menu {
    constructor(name){
        this.name = name
        this.adapter = new MenusAdapter()
    }

    addListenerToMenu() {
        const menuNames = document.querySelectorAll(".menu-name")
        menuNames.forEach(menu => {
            menu.addEventListener("click", () => {
                const container = document.querySelector(".container")
                container.style.display = "flex"
                
            })
        })
    }
    
    

}