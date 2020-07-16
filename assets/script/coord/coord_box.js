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

    },

    start () {
        // 获取相对父节点坐标系的包围盒
        let box = this.node.getBoundingBox()
        console.log(box)

        // 世界坐标系中的包围盒
        let w_box = this.node.getBoundingBoxToWorld()
        console.log(w_box)

        this.node.on(cc.Node.EventType.TOUCH_START, function (t) {
            let w_pos = t.getLocation()
            let pos = this.node.convertToNodeSpaceAR(w_pos)
            console.log(pos)
            pos = this.node.convertTouchToNodeSpaceAR(t)
            console.log('++++', pos)
        }, this)

        // 把这个子节点（sub）移动到世界坐标（900，900）
        // 把世界坐标转到相对于它父节点的坐标
        let node_pos = this.node.parent.convertToNodeSpaceAR(cc.v2(900, 600))
        this.node.setPosition(node_pos)  // 相对于父节点为参照物，AR为原点的坐标系

        // 获取当前节点的世界坐标
        this.node.convertToWorldSpaceAR(cc.v2(0, 0))
    },

    // update (dt) {},
});
