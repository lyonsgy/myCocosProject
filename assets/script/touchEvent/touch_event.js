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
    onTouchMove (t) {
        console.log('TOUCH_MOVE', t.currentTouch._point.x, t.currentTouch._point.y)
    },
    onLoad () {
        // 点击开始
        this.node.on(cc.Node.EventType.TOUCH_START, (t) => {
            console.log('TOUCH_START')
        }, this)
        // 按住移动
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // 在范围内松开
        this.node.on(cc.Node.EventType.TOUCH_END, (t) => {
            console.log('TOUCH_END')
            this.node.color = cc.color('#35ab26')
        }, this)
        // 在范围外松开
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, (t) => {
            console.log('TOUCH_CANCEL')
            this.node.color = cc.color('#ff0000')
        }, this)

        // 移除单个事件
        // this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this)
        // 移除target上所有的注册事件
        // this.node.targetOff(this)
    },

    start () {

    },

    // update (dt) {},
});
