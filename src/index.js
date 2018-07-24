const m = require("mithril");

const UserList = require("./views/UserList");
const UserForm = require("./views/UserForm");

m.route(document.body, "/list", {
    "/list"     : UserList,
    "/edit/:id" : UserForm,
});