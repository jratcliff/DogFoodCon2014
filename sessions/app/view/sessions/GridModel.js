Ext.define('DogFood.view.sessions.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sessions-grid',

    requires: [
        'DogFood.model.Session',
        'Ext.azure.Proxy'
    ],

    data: {
        name: 'DogFood'
    },

    stores: {
        sessions: {
            model       : 'DogFood.model.Session',
            autoLoad    : true,
            groupField  : 'track',

            proxy: {
                type                : 'azure',
                tableName           : 'Sessions',
                enablePagingParams  : false
            },

            listeners   : {
                update       : 'onSessionsStoreChange',
                datachanged  : 'onSessionsStoreChange'
            }
        }
    }

});
