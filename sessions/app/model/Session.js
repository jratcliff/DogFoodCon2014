Ext.define('DogFood.model.Session', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'track',
            type: 'string'
        },
        {
            name: 'level',
            type: 'number'
        },
        {
            name: 'title',
            type: 'string'
        },
        {
            name: 'speaker',
            type: 'string'
        },
        {
            name: 'description',
            type: 'string'
        }
    ]

});
