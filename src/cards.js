class Card {
    static all = []
    constructor(id, theme, faces){
        this.id = id;
        this.theme = theme;
        this.faces = faces;
    }


    static addCardDropDown() {
        const newOption = document.createElement("option");
        newOption.id = `${this.id}`;
        newOption.text = `${this.theme}`
    }

}
  