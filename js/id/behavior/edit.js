iD.behavior.Edit = function(context) {
    function edit() {
        context.map()
            .minzoom(14);
    }

    edit.off = function() {
        context.map()
            .minzoom(0);
    };

    return edit;
};
