"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AVLNode_1 = require("./AVLNode");
var AVLTree = /** @class */ (function () {
    function AVLTree() {
        this.root = null;
    }
    AVLTree.prototype.getHeight = function (node) {
        return node ? node.marks : 0;
    };
    AVLTree.prototype.updateHeight = function (node) {
        node.marks =
            1 + Math.max(this.getHeight(node.left), this.getHeight(node.left));
    };
    AVLTree.prototype.getBalanceFactor = function (node) {
        return this.getHeight(node.left) - this.getHeight(node.right);
    };
    AVLTree.prototype.insert = function (key) {
        this.root = this.insertData(this.root, key);
    };
    AVLTree.prototype.delete = function (key) {
        this.root = this.deleteData(this.root, key);
    };
    AVLTree.prototype.search = function (node) {
        if (!this.root)
            return false;
        if (this.root === node)
            return true;
        else
            return false;
    };
    AVLTree.prototype.insertData = function (node, key) {
        if (!node) {
            return new AVLNode_1.default(key);
        }
        else if (key < node.key) {
            node.left = this.insertData(node.left, key);
            node;
        }
        else if (key > node.key) {
            node.right = this.insertData(node.right, key);
            node;
        }
        else {
            return node;
        }
        this.updateHeight(node);
        var balance = this.getBalanceFactor(node);
        if (balance > 1) {
            var select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            var select = node.left;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    AVLTree.prototype.deleteData = function (node, key) {
        if (!node) {
            return new AVLNode_1.default(key);
        }
        else if (key < node.key) {
            node.left = this.deleteData(node.left, key);
            node;
        }
        else if (key > node.key) {
            node.right = this.deleteData(node.right, key);
            node;
        }
        else {
            return node;
        }
        this.updateHeight(node);
        var balance = this.getBalanceFactor(node);
        if (balance > 1) {
            var select = node.left;
            if (key < select.key) {
                return this.rightRotate(node);
            }
            else {
                node.left = this.leftRotate(node.left);
                return this.rightRotate(node);
            }
        }
        else if (balance < -1) {
            var select = node.left;
            if (key > select.key) {
                return this.leftRotate(node);
            }
            else {
                node.right = this.rightRotate(node.left);
                return this.leftRotate(node);
            }
        }
        return node;
    };
    AVLTree.prototype.rightRotate = function (node) {
        var x = node.left;
        var T2 = x.right;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.leftRotate = function (node) {
        var x = node.right;
        var T2 = x.left;
        x.right = node;
        node.left = T2;
        this.updateHeight(node);
        this.updateHeight(x);
        return x;
    };
    AVLTree.prototype.inOrderTraversal = function (node) {
        if (node) {
            this.inOrderTraversal(node.left);
            console.log(node.key);
            this.inOrderTraversal(node.right);
        }
    };
    return AVLTree;
}());
exports.default = AVLTree;
