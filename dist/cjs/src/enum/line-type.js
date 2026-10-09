"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineType = void 0;
/** What a cart, order, or sale line is. */
var LineType;
(function (LineType) {
    LineType["PRODUCT"] = "product";
    LineType["SERVICE"] = "service";
    LineType["COMBO_HEADER"] = "combo_header";
    LineType["COMBO_ITEM"] = "combo_item";
})(LineType || (exports.LineType = LineType = {}));
