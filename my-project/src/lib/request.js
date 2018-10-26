const Plugin1 = {
    //调用Vue.use(Plugin1)之后,他会自动回调这个install函数,并且传递Vue对象过来
    install(Vue, b, c) {

        //js构造函数
        Vue.run = function () {
            console.log("run........")
        }
        //原型上定义方法
        Vue.prototype.eat = function () {
            console.log("eat.......")
        }
    },
};
export { Plugin1 };