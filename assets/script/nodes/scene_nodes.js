// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        let item1 = this.node.getChildByName('item1') // 局部查找
        let item2 = cc.find('Canvas/item2') // 全局查找
        console.log(item1.name, item2.name)
        let position = item1.getPosition()
        position = cc.v2(item2.position.x, item2.position.y)
        item1.setPosition(position)
        item1.scale = 1.5  // 放大比例
        setTimeout(() => {
            item1.active = false  // 隐藏
        }, 1500)
    },

    start () {

    },

    // update (dt) {},
});
