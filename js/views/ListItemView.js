import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/ListItem.handlebars';

import Radio from 'backbone.radio';

var myChannel = Radio.channel('Detail');

var ListItemView = Marionette.View.extend({

    tagName: 'li',
    template: listViewTemplate,

    events: {
        'click .item': 'selectItem'
    },

    selectItem() {
        myChannel.on('show', function () {
           return this.model;
        });
        console.log(this.listenTo(myChannel.trigger('show')));
    }

});

export default ListItemView;

