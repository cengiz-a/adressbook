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

    onAttach: function () {
        this.showChildView('list', new ListView());
        this.showChildView('addNew', new AddNewView());
        this.showChildView('details', new DetailView());
    },

});

export default RootView;