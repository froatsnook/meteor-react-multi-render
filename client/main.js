Template.main.events({
    "click #toggle-test1": function() {
        Session.set("test1", !Session.get("test1"));
    },

    "click #toggle-test2": function() {
        Session.set("test2", !Session.get("test2"));
    },
});

Template.main.helpers({
    test1: function() {
        return Session.get("test1") || false;
    },

    test2: function() {
        return Session.get("test2") || false;
    },
});

