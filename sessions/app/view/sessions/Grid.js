
Ext.define("DogFood.view.sessions.Grid",{
    extend: "Ext.grid.Panel",
    xtype : 'sessions-grid',

    controller: "sessions-grid",
    viewModel: {
        type: "sessions-grid"
    },

    columns: [
        {
            header      : 'Track',
            flex        : 1
        },
        {
            header      : 'Level',
            width       : 100
        },
        {
            header      : 'Title',
            flex        : 1
        },
        {
            header      : 'Speaker',
            flex        : 1
        },
        {
            header      : 'Description',
            flex        : 2
        }
    ]
});
