const m = require("mithril");
const User = require("../models/User");

module.exports = {
    view : function () {
        return m(".user-list", User.list.map((user) => {
            const { firstName, lastName } = user;
            return m(".user-list-item", `${firstName} ${lastName}`);
        }));
    }
}