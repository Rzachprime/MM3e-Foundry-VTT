export default class MM3eCharacterSheet extends ItemSheet{
    get template() {
        return 'systems/MM3E-FOUNDRY-VTT/templates/sheets/${this.item.data.type}-sheet.html';
    }
}