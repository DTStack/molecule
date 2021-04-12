"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchById = void 0;
function searchById(id) {
    return function (item) { return item.id === id; };
}
exports.searchById = searchById;
//# sourceMappingURL=helper.js.map