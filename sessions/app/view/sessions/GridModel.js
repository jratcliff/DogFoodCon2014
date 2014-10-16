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

            // azure proxy that pulls from the Azure Mobile Service's data Session table
            // proxy: {
            //     type                : 'azure',
            //     tableName           : 'Sessions',
            //     enablePagingParams  : false
            // },

            // normal rest proxy for the test data
            proxy: {
                type    : 'rest',
                url     : 'resources/data/Sessions.json',
                reader  : {
                    type        : 'json',
                    rootProperty: 'results'
                }
            },

            listeners   : {
                update       : 'onSessionsStoreChange',
                datachanged  : 'onSessionsStoreChange'
            }
        }
    }

});
