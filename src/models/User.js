const m = require("mithril");

const User = {
    list : [],

    loadList : () => {
        return m.request({
            method : "GET",
            url : "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials : true,
        })
        .then((result) => {
            User.list = result.data
        })
        .catch((err) => console.log("uh oh"));
    },

    current : {},

    load : (id) => {
        return m.request({
            method : "GET",
            url : `https://rem-rest-api.herokuapp.com/api/users/${id}`,
            withCredentials : true,
        })
        .then((result) => {
            User.current = result;
        })
        .catch((err) => console.log("uh oh"));
    }, 

    save : () => {
        const { id } = User.current;
        return m.request({
            method : "PUT",
            url : `https://rem-rest-api.herokuapp.com/api/users/${id}`,
            data : User.current,
            withCredentials : true,
        });
    }
}

module.exports = User;