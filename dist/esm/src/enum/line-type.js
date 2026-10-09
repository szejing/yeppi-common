/** What a cart, order, or sale line is. */
export var LineType;
(function (LineType) {
    LineType["PRODUCT"] = "product";
    LineType["SERVICE"] = "service";
    LineType["COMBO_HEADER"] = "combo_header";
    LineType["COMBO_ITEM"] = "combo_item";
})(LineType || (LineType = {}));
