const m = require("mithril");

const User = {
    list     : [],
    loadList : () => {
        return m.request({
            method          : "GET",
            url             : "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials : true,
        })
        .then((result) => {
            User.list = result.data
        })
        .catch((err) => console.log("uh oh"));
    },
}

module.exports = User;