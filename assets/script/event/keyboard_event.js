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
        // 1. 向引擎注册一个事件类型的回调函数
        // 2. 按键事件类型：
        //   1) cc.SystemEvent.EventType.KEY_DOWN
        //   2) cc.SystemEvent.EventType.KEY_UP
        // 3. 配置的回调函数: function(e){ }
        // 4. 每一个按键对应一个按键码(keyCode)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDwon, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this)
    },
    onKeyDwon (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.space:
                console.log('space down')
                break;
            case cc.macro.KEY.w:
                console.log('w down')
                this.node.y += 20
                break;
            case cc.macro.KEY.a:
                console.log('a down')
                this.node.x -= 20
                break;
            case cc.macro.KEY.s:
                console.log('s down')
                this.node.y -= 20
                break;
            case cc.macro.KEY.d:
                console.log('d down')
                this.node.x += 20
                break;
            default:
                break;
        }
    },
    onKeyUp (e) {
        switch (e.keyCode) {
            case cc.macro.KEY.space:
                console.log('space up')
                break;
            default:
                break;
        }
    },
    start () {

    },

    // update (dt) {},
});
