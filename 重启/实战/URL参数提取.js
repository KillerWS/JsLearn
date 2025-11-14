

function parseURL(url){
    const res = {};

    // 先查询query 的部分
    const qIndex = url.indexOf('?')
     = url.split('')
}





const u1 = 'https://a.com/p?x=1&y=2';
const u2 = 'https://a.com/p?flag&name=Chris+Wei&tags=a&tags=b#top';
const u3 = 'https://a.com/p?arr[]=1&arr[]=2&user[name]=chris&user[id]=7#/page?from=hash';

console.log(parseURL(u1)); 
// { x: '1', y: '2' }

console.log(parseURL(u2)); 
// { flag: true, name: 'Chris Wei', tags: ['a','b'] }

console.log(parseURL(u3)); 
// { arr: ['1','2'], user: { name: 'chris', id: '7' } }

console.log(parseURL(u3)); 
// { arr[]: ['1','2'], 'user[name]': 'chris', 'user[id]': '7', from: 'hash' }（或结合 bracket 版后更优雅）
