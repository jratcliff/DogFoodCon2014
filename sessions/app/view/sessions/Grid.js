
Ext.define("DogFood.view.sessions.Grid",{
    extend: "Ext.grid.Panel",
    xtype : 'sessions-grid',

    requires: [
        'DogFood.view.sessions.GridModel',
        'DogFood.view.sessions.GridController',
        'Ext.grid.plugin.RowEditing'
    ],

    controller: "sessions-grid",
    viewModel: {
        type: "sessions-grid"
    },

    plugins: [{
        ptype: 'rowediting'
    }],

    tbar: [
        {
            text    : 'Add',
            scale   : 'medium',
            glyph   : 'xf067@FontAwesome',
            handler : 'onAddButtonClick'
        },
        {
            text    : 'Delete',
            scale   : 'medium',
            glyph   : 'xf00d@FontAwesome',
            handler : 'onDeleteButtonClick'
        },
        {
            text    : 'Save',
            scale   : 'medium',
            glyph   : 'xf0c7@FontAwesome',
            handler : 'onSaveButtonClick'
        },
        {
            text    : 'Refresh',
            scale   : 'medium',
            glyph   : 'xf021@FontAwesome',
            handler : 'onRefreshButtonClick'
        }
    ],

    columns: [
        {
            header      : 'Track',
            dataIndex   : 'track',
            flex        : 1,
            editor      : {
                xtype: 'textfield'
            }
        },
        {
            header      : 'Level',
            dataIndex   : 'level',
            width       : 100,
            editor      : {
                xtype: 'textfield'
            }
        },
        {
            header      : 'Title',
            dataIndex   : 'title',
            flex        : 1,
            editor      : {
                xtype: 'textfield'
            }
        },
        {
            header      : 'Speaker',
            dataIndex   : 'speaker',
            flex        : 1,
            editor      : {
                xtype: 'textfield'
            }
        },
        {
            header      : 'Description',
            dataIndex   : 'description',
            flex        : 2,
            editor      : {
                xtype: 'textfield'
            }
        }
    ]
});
