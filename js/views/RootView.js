import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';
import rootViewTemplate from '../../templates/rootViewTemplate.handlebars';







var RootView = Marionette.View.extend({

    template: rootViewTemplate,

    regions: {
        list: '#list > .listing',
        details: '#details',
        addNew: '#addNew'
    },

    initialize: function () {
        this.render();
    },

    onRender: function() {

        this.showChildView('list', new ListView());
        this.showChildView('details', new DetailView());
        this.showChildView('addNew', new AddNewView());

    }
});



export default RootView;