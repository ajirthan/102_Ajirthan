"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode = /** @class */ (function () {
    function AVLNode(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.marks = 1;
    }
    return AVLNode;
}());
exports.default = AVLNode;
