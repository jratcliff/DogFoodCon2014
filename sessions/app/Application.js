/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('DogFood.Application', {
    extend: 'Ext.app.Application',
    
    name: 'DogFood',

    requires: [
        'Ext.azure.Azure'
    ],

    stores: [
        'SessionsByTrack'
    ],
    
    
    config: {
        azure: {
            appKey: 'myazureservice-access-key',
            appUrl: 'myazure-service.azure-mobile.net'
        }
    },

    launch: function() {

        // Call Azure initialization
        Ext.Azure.init(this.config.azure);

    }
});
