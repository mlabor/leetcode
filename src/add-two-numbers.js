/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(1),
        cur = res,
        carry = 0
    while (l1 !== null || l2 !== null) {
        let num1 = l1 == null ? 0 : l1.val
        let num2 = l2 == null ? 0 : l2.val
        let sum = num1 + num2 + carry
        carry = sum >= 10 ? 1 : 0
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        l1 = l1 ? l1.next : l1
        l2 = l2 ? l2.next : l2
    }
    if (carry === 1) {
        cur.next = new ListNode(1)
    }
    return res.next
}


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = (l1, l2) => {
    var l3 = new ListNode()
    var m
    var int_num = 0
    var p, q
    while (l1 || l2) {
        p = l1 && l1.val ? l1.val : 0
        q = l2 && l2.val ? l2.val : 0
        if (!m) {
            m = l3
        } else {
            m.next = new ListNode()
            m = m.next
        }
        m.val = (p + q + int_num) % 10
        int_num = Math.floor((p + q + int_num) / 10)

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        if (int_num) {
            m.next = new ListNode(int_num)
        }
    }
    return l3
}