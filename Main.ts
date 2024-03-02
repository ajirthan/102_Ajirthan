import AVLTree from "./AVLTree";
let avlObj = new AVLTree();
avlObj.insert(42);
avlObj.insert(35);
avlObj.insert(100);
avlObj.insert(10);
avlObj.insert(65);
avlObj.insert(0);
avlObj.delete(42);
avlObj.search(avlObj.root!);
avlObj.getHeight(avlObj.root)

console.log("Printing The Tree Using Inorder Traversal");
avlObj.inOrderTraversal(avlObj.root);

console.log("Height", avlObj.getHeight(avlObj.root));
console.log("Root", avlObj.root);
