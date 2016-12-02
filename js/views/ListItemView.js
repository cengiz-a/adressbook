import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/list.handlebars';
import ListItem from '../../templates/ListItem.handlebars';
import model from '../models/model';

var ListItemView = Marionette.View.extend({

    tagName: 'li',
    template: listViewTemplate,

    initialize () {
        this.render();
    },

    onRender() {
        this.show(model.get({name}));
    }
});

export default ListItemView;