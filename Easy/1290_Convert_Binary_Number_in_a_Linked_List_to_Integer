/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let node = head;
    let sum = '' + head.val;

    while(node && node.next) {
        node = node.next;
        sum += node.val;
    }

    return parseInt(sum, 2)
};