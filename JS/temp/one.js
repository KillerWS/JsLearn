class LinkedNode {
    constructor(value, next){
        this.value = value; // int;
        this.next = next; // LinkedNode
    }
}


function a(nums){
    if(nums.length === 0) return new TypeError('数组为空');
    
    let root = new LinkedNode();
    let cur = root;
    for(let i =0;i<nums.length;i++){
        cur.next = new LinkedNode(nums[i], null);
        cur = cur.next;
    }
    return root;
}

function b(head){
    
    var p = head.next;
    let ans = '';
    while(p !== null){
        ans +=p.value + ',';
        p = p.next;
    }
    return ans.slice(0, ans.length-1);
}

let r1 = a([-1,0,4,5])
let r2 = a([-2,0,3,6])


function c(head1, head2){
    let one = head1.next, two = head2.next;
    let dummy  = new LinkedNode();
    let p = dummy;
    while(one !== null && two !== null){
        if(one.value < two.value){
            console.log(one.value, two.value);
            p.next = new LinkedNode(one.value, null);
            p = p.next;
            one = one.next;
        }else{
            p.next = new LinkedNode(two.value, null);
            p = p.next;
            two = two.next;
        }
    }
    
    p = one !== null ? one:two;
    
    return dummy;
}

console.log(b(c(r1, r2)))