
Ext.define("DogFood.view.sessions.Grid",{
    extend: "Ext.grid.Panel",
    xtype : 'sessions-grid',

    requires: [
        'DogFood.view.sessions.GridModel',
        'DogFood.view.sessions.GridController'
    ],

    controller: "sessions-grid",
    viewModel: {
        type: "sessions-grid"
    },

    columns: [
        {
            header      : 'Track',
            dataIndex   : 'track',
            flex        : 1
        },
        {
            header      : 'Level',
            dataIndex   : 'level',
            width       : 100
        },
        {
            header      : 'Title',
            dataIndex   : 'title',
            flex        : 1
        },
        {
            header      : 'Speaker',
            dataIndex   : 'speaker',
            flex        : 1
        },
        {
            header      : 'Description',
            dataIndex   : 'description',
            flex        : 2
        }
    ]
});
