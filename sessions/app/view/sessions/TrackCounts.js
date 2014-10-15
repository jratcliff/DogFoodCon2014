Ext.define('DogFood.view.sessions.TrackCounts', {
    extend: 'Ext.chart.PolarChart',
    xtype: 'sessions-trackcounts',

    requires: [
        'Ext.draw.Color',
        'Ext.chart.interactions.Rotate',
        'Ext.chart.series.Pie',
        'Ext.chart.interactions.ItemHighlight'
    ],

    insetPadding: 20,
    innerPadding: 20,

    interactions: [
        'rotate',
        'itemhighlight'
    ],

    series: [{
        type        : 'pie',
        xField      : 'count',
        highlight   : true,

        label: {
            field   : 'name',
            display : 'rotate'
        },

        tooltip: {
            trackMouse: true,
            renderer: function(record) {
                var d = record.data;
                this.setHtml('There ' + ((d.count === 1) ? 'is ' : 'are ') + Ext.util.Format.plural(d.count, 'session', 'sessions') + ' for the ' + d.name + ' track.');
            }
        }
    }]

});