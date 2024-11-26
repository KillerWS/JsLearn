class Singleton {
    constructor(name) {
      if (!Singleton.instance) {
        this.name = name;
        Singleton.instance = this;
      }
      return Singleton.instance;
    }
  
    static getInstance(name) {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton(name);
      }
      return Singleton.instance;
    }

    xx(){
        Singleton.aa = '1'
    }
  }

  console.log(Singleton.aa);
  const instance1 = Singleton.getInstance("instance1");
//   console.log(instance1.name); // 输出 "instance1"
  
//   const instance2 = Singleton.getInstance("instance2");
  console.log(instance1.name); // 输出 "instance1"，而不是 "instance2"
  console.log(Math.floor(12 / 10))
//   console.log(instance1 === instance2); // 输出 true，说明是相同的单例实例