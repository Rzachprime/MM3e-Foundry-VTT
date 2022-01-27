export default class MM3eItemSheet extends ItemSheet {
    get template() {
        const path = "systems/MM3e-Foundry-VTT/templates/sheets/";
        return `${path}/${this.item.data.type}-sheet.html`;
    }
}