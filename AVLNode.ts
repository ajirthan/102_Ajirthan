class AVLNode {
  key: number;
  left: AVLNode | null;
  right: AVLNode | null;
  marks: number;
  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.marks = 1;
  }
}
export default AVLNode;
