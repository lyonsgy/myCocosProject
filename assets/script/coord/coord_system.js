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
        /*
        let w_position = new cc.Vec2(100, 100)
        console.log(w_position)

        w_position = cc.v2(200, 200)
        console.log(w_position)

        // 向量
        let p1 = cc.v2(0, 0)
        let p2 = cc.v2(100, 100)
        // 向量 dir
        let dir = p1.sub(p2)
        // 向量长度
        let len = dir.mag()
        console.log(len)

        // size（大小）对象
        let size = new cc.Size(200, 200)
        console.log(size)
        size = cc.size(300, 300)
        console.log(size)

        // 矩形对象
        let rect = new cc.Rect(0, 0, 100, 100)
        console.log(rect)
        rect = cc.rect(0, 0, 200, 200)
        console.log(rect)

        // 点是否包含在 rect 矩形中
        let ret = rect.contains(cc.v2(100, 100))
        console.log(ret)
        ret = rect.contains(cc.v2(300, 300))
        console.log(ret)

        // 两个矩形是否相交
        let rect2 = cc.rect(400, 400, 100, 100)
        ret = rect.intersects(rect2)
        console.log(ret)
        */

        // 相对坐标
        // 节点坐标转世界坐标 cc.v2(0, 0)
        let w_position2 = this.node.convertToWorldSpace(cc.v2(0, 0))  // 左下角为原点  cc.v2(430, 270)
        console.log(w_position2)
        w_position2 = this.node.convertToWorldSpaceAR(cc.v2(0, 0))  // 锚点为原点  cc.v2(480, 320)
        console.log(w_position2)

        // 世界坐标转节点坐标
        let w_position3 = cc.v2(480, 320)
        let node_position = this.node.convertToNodeSpace(w_position3)
        console.log(node_position)   // cc.v2(50, 50)
        node_position = this.node.convertToNodeSpaceAR(w_position3)
        console.log(node_position)   // cc.v2(0, 0)
    },

    start () {

    },

    // update (dt) {},
});
