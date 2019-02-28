
/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var test = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }
    if(preorder.length === 1){
        return new TreeNode(preorder[0])
    }
    let root = new TreeNode(preorder[0])
    let rootIndex= inorder.indexOf(preorder[0])
    root.right = test(preorder.slice(rootIndex+1), inorder.slice(rootIndex+1))
    root.left = test(preorder.slice(1,rootIndex+1), inorder.slice(0, rootIndex))
    return root
};

let testData = [
    [[3,9,20,15,7], [9,3,15,20,7]]
]

testData.forEach(data => {
    let rst = test(data[0], data[1])
    console.log(rst)
})