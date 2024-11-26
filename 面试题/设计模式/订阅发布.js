class Singletion{
    constructor(name){
        if(!Singletion.instance){
            this.name = name;
            console.log(typeof this)
            console.log(Object.prototype.toString.call(this))
            Singletion.instance = this;
            console.log(Singletion.instance)
            console.log("---->>")
        }
    }
    static getInstance(param) {
        if(!Singletion.instance){
            Singletion.instance = new Singletion(param);
        }
        return Singletion.instance;
    }

}


const instance1 = Singletion.getInstance("instance1");
console.log(instance1);

const instance2 = Singletion.getInstance("instance2");
console.log(instance2);