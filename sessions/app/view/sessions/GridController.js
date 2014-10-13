Ext.define('DogFood.view.sessions.GridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sessions-grid',

    requires: [
        'DogFood.model.Session'
    ],

    onAddButtonClick: function (btn) {
        var grid            = btn.up('grid'),
            store           = grid.getStore(),
            editingPlugin   = grid.findPlugin('rowediting'),
            session;

        session = Ext.create('DogFood.model.Session', {});

        store.insert(0, session);
        editingPlugin.startEdit(0, 0);
    },

    onDeleteButtonClick: function (btn) {
        var grid      = btn.up('grid'),
            store     = grid.getStore(),
            selection = grid.getView().getSelectionModel().getSelection()[0];

        if (selection) {
            store.remove(selection);
        }
    }

});
