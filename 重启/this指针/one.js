var a = 'G';

const obj = {
  a: 'O',
  regular() { console.log('1:', this.a); },
  arrow: () => console.log('2:', this.a),
  nested() {
    return {
      a: 'N',
      regular: function () { console.log('3:', this.a); },
      arrow: () => console.log('4:', this.a),
    };
  },
  delayed() {
    setTimeout(function () { console.log('5:', this.a); }, 0);
    setTimeout(() => { console.log('6:', this.a); }, 0);
  }
};

const extracted = obj.regular;
const bound = obj.regular.bind({ a: 'B' });

const proto = {
  a: 'P',
  regular() { console.log('9:', this.a); }
};
const child = Object.create(proto);
child.a = 'C';

class C {
  constructor() { this.a = 'Class'; }
  m() { console.log('10:', this.a); }
  static m() { console.log('11:', this.a); }
}

// —— 执行序列 ——
obj.regular();            // 1: ?
obj.arrow();              // 2: ?
obj.nested().regular();   // 3: ?
obj.nested().arrow();     // 4: ?
obj.delayed();            // 5: ?, 6: ?（注意异步）
extracted();              // 7: ?
bound();                  // 8: ?
proto.regular.call(child);// 9: ?
new C().m();              // 10: ?
C.m();                    // 11: ?
