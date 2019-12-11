class Table {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
} 

class Character {
    constructor(color){
        this.color = color
    }
}
  
window.addEventListener("load", () => {
    
    //setTimeout( () => location.reload(), 60000)

    // Criação da table do jogo
    let table = new Table();
    table.width = prompt("Insira Largura da Table")
    table.height = prompt("Insira Altura da Table")
    table.color = prompt("Insira Cor da Table (Inglês ou Hexadecimal)")

    table.width == "" ? table.width = 500 : 0
    table.height == "" ? table.height = 500 : 0 
    table.color == "" ? table.color = '#CCC' : 0

    console.log(table)
 
    // Criação da table do jogo na página
    let elementTable = document.createElement('DIV')
    document.body.appendChild(elementTable)
    let attTable = document.createAttribute('style')
    attTable.value = "width:"+table.width+"px;height:"+table.height+"px;display:flex;justify-content:center;align-items:center;border:5px solid "+table.color+";background-color:transparent;"
    elementTable.setAttributeNode(attTable)
    let attTableId = document.createAttribute('id')
    attTableId.value = "table"
    elementTable.setAttributeNode(attTableId)

    // Criação do personagem
    let character = new Character();
    character.color = prompt("Insira Cor do Personagem (Inglês ou Hexadecimal)")

    character.color == "" ? character.color = '#777' : 0

    console.log(character)

    // Criação do personagem na página
    let elementCharacter = document.createElement('DIV')
    document.getElementById("table").appendChild(elementCharacter)
    let attCharacter = document.createAttribute('style')
    attCharacter.value = "width:20px;height:20px;background-color:"+character.color+";"
    elementCharacter.setAttributeNode(attCharacter)
    let attCharacterId = document.createAttribute('id')
    attCharacterId.value = "character"
    elementCharacter.setAttributeNode(attCharacterId)

})