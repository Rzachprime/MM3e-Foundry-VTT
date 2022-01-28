export default class MM3eItemSheet extends ItemSheet {
    get template() {
        const path = "systems/MM3e-Foundry-VTT/templates/sheets/";
        return `${path}/${this.item.data.type}.html`;
    };

    getData() {
        var baseData = super.getData();

        let sheetData = {
            owner: this.item.isOwnwer,
            editable: this.isEditable,
            item: baseData.item,
            data: baseData.item.data.data,
            config: CONFIG.mm3e
        };

        return sheetData;
    }
}