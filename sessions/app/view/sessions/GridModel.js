Ext.define('DogFood.view.sessions.GridModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.sessions-grid',

    requires: [
        'DogFood.model.Session'
    ],

    data: {
        name: 'DogFood'
    },

    stores: {
        sessions: {
            model       : 'DogFood.model.Session',
            autoLoad    : true,

            proxy: {
                type    : 'rest',
                url     : 'resources/data/Sessions.json',
                reader  : {
                    type        : 'json',
                    rootProperty: 'results'
                }
            }
        }
    }

});
