import Marionette from 'backbone.marionette';
import  listViewTemplate from '../../templates/list.handlebars';

var ListItemView = Marionette.View.extend({
    tagName: 'li',
    region: listViewTemplate,


})

export default ListItemView;