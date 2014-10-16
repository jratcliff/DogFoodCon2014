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

    onSaveButtonClick: function (btn) {
        var me    = this,
            grid  = btn.up('grid'),
            store = grid.getStore(),
            proxy = store.getProxy(),
            url   = proxy.getUrl();

        if (url.indexOf('.json') > 0) {
            Ext.Msg.alert('Error', 'You are still configured to use the test proxy that loads the Session.json file.  You cannot save changes this way.  Change to the azure proxy in the GridModel.');
            return;
        }

        if (!me.syncMask) {
            me.syncMask = Ext.create('Ext.LoadMask', {
                msg     : 'Syncing local data with remote....',
                target  : grid
            });
        }

        if (store.getModifiedRecords().length > 0 || store.getRemovedRecords().length > 0) {
            me.syncMask.show();

            store.sync({
                success: function () {
                    me.syncMask.hide();
                },
                failure: function () {
                    me.syncMask.hide();
                    Ext.Msg.alert('Error', 'There was an error saving the data.  Check the network tab to see what errors were return from the Azure Mobile Service.');
                }
            });
        } else {
            Ext.Msg.alert('No Changes', 'You must first make a change (add/delete/update) before you can do a save.');
        }
    },

    onRefreshButtonClick: function (btn) {
        var grid  = btn.up('grid'),
            store = grid.getStore();

        store.reload();
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
