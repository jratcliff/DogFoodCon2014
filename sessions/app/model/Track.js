Ext.define('DogFood.model.Track', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'name',
            type: 'string'
        },
        {
            name: 'count',
            type: 'number'
        }
    ]

});
