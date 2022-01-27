export default class MM3eItemSheet extends ItemSheet {
    get template() {
        return `systems/MM3e-Foundry-VTT/templates/sheets/${this.item.data.type}-sheet.html`;
    }
}