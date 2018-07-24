const m = require("mithril");
const User = require("../models/User");

module.exports = {
    oninit  : User.loadList,

    view    : function () {
        return m(".user-list", User.list.map((user) => {
            const { firstName, lastName, id } = user;
            return m(".user-list-item", {
                href : `/edit/${id}`,
                oncreate : m.route.link
            }, `${firstName} ${lastName}`);
        }));
    }
}