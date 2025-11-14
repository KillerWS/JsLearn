

var compareVersion = function(version1, version2) {
    let ans = 0;
    
    let v1= version1.split('.');
    let v2 = version2.split('.');
    
    //let l1 = 0, l2=0;
    let idx = 0;

    if(v1.length < v2.length){
        while(v1.length !== v2.length){
            v1.push('0');
        }
    }else if(v1.length > v2.length){
        while(v1.length !== v2.length){
            v2.push('0');
        }
    }

    while(idx < v1.length){
        if(Number(v1[idx]) < Number(v2[idx])){
            return -1;
        }else if(Number(v1[idx]) > Number(v2[idx])){
            return 1;
        }
        idx++;
    }

    console.log(v1, v2)

    return ans;
};

