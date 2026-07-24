export var InputType;
(function (InputType) {
    InputType[InputType["TEXT"] = 0] = "TEXT";
    InputType[InputType["NUMBER"] = 1] = "NUMBER";
    InputType[InputType["BOOLEAN"] = 2] = "BOOLEAN";
    InputType[InputType["TEXTAREA"] = 3] = "TEXTAREA";
    InputType[InputType["MASKEDTEXTBOX"] = 4] = "MASKEDTEXTBOX";
    InputType[InputType["GETFILENAME"] = 5] = "GETFILENAME";
    InputType[InputType["SELECT"] = 6] = "SELECT";
    InputType[InputType["SELECT_MULTI"] = 7] = "SELECT_MULTI";
})(InputType || (InputType = {}));
