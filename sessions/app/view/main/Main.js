/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('DogFood.view.main.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'DogFood.view.main.MainController',
        'DogFood.view.main.MainModel',
        'DogFood.view.sessions.Grid',
        'DogFood.view.sessions.TrackCounts',
        'Ext.plugin.Responsive'
    ],

    xtype: 'app-main',
    
    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
        type: 'border'
    },

    items: [{
        title       : 'Track Counts',
        xtype       : 'sessions-trackcounts',
        region      : 'west',
        flex        : 1,
        collapsible : true,
        split       : true,
        bind        : {
            store: 'SessionsByTrack'
        },

        // adding responsive functionality
        plugins         : ['responsive'],
        responsiveConfig: {
            
            // when app is 'wider' than it is tall, show chart in west region
            wide: {
                region  : 'west'
            },
            
            // when app is 'taller' than it is wide, show chart in south region
            tall: {
                region  : 'south'
            }
        }
    },{
        region: 'center',
        xtype: 'tabpanel',
        flex: 2,
        items:[{
            title: 'Sessions',
            xtype: 'sessions-grid',
            bind: {
                store: '{sessions}'
            }
        }]
    }]
});
