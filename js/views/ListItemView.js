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
        myChannel.trigger('show', this.model);
    }

});

export default ListItemView;

