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
        // 接受者
        // 事件类型是自定义的字符串
        // 回调函数 function(e) {} e-->Event.EventCustom
        this.node.on('package_event', function (e) {
            console.log(e)
        }, this)
    },

    start () {
        // 发送者（只能派发给自己）
        this.node.emit('package_event', { name: 'package_event' })

        // 发送者（不止自己）
        let e = new cc.Event.EventCustom('package_event_all', true) // true: 向上传递，false:不冒泡传递
        e.detail = { name: 'package_event_all' }
        this.node.dispatchEvent(e)
    },

    // update (dt) {},
});
