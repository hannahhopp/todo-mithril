const m = require("mithril");
const User = require("../models/User");

module.exports = {
    oninit  : User.loadList, 
    /* 
    Not invoked because that would invoke it immediately. Written this way, it only invokes once the page has rendered, like the ComponentDidMount lifecycle hook in React.
    */ 

    view    : function () {
        return m(".user-list", User.list.map((user) => {
            const { firstName, lastName, id } = user;
            return m("a.user-list-item", {
                href : `/edit/${id}`,
                oncreate : m.route.link
            }, `${firstName} ${lastName}`);
        }));
    }
}