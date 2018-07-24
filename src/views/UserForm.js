const m = require("mithril");

const User = require("../models/User");

module.exports = {
    oninit : function(vnode) {
        User.load(vnode.attrs.id) 
    },
    
    view : function () {
        return m("form", [
            m("label.label", "First name"),
            m("input.input[type=text][placeholder=First name]"),
            m("label.label", "Last name"),
            m("input.input[placeholder=Last name]"),
            m("button.button[type=button]", "Save"),
        ]);
    }
}