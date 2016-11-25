import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';

var RootView = Marionette.View.extend({

    regions: {
        list: '#list',
        details: '#details',
        addNew: '#addNew'
    },



    onRender: function() {
        this.show('list', new ListView());
        this.show('details', new DetailView());
        this.show('addNew', new AddNewView());
    }
});

export default RootView;