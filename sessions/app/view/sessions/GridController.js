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
    },

    onSessionsStoreChange: function (store) {
        var me          = this,
            data        = [],
            chartStore  = Ext.getStore('SessionsByTrack'),
            groups      = store.getGroups(),
            groupLen    = groups.length,
            group,
            i;

        for (i = 0; i < groupLen; i++) {
            group = groups.getAt(i);

            if (group.getGroupKey() !== '') {
                data.push({
                    name  : group.getGroupKey(),
                    count : group.length
                });
            }
        }

        chartStore.loadRawData(data);
    }

});
