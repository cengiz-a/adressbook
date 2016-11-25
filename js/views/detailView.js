import Marionette from 'backbone.marionette';
import  DetailViewTemplate from '../../templates/detail-list.handlebars';

var detailView = Marionette.View.extend({

    template: DetailViewTemplate

});

export default detailView;