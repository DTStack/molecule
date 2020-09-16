export abstract class MoleculeComponent {
    private _id: string | undefined = undefined;
    constructor(id: string) {
        this._id = id;
    }

    getId() {
        return this._id;
    }
}
