import Marionette from 'backbone.marionette';
import AddNewView from './addNewView.js';
import DetailView from './detailView.js';
import ListView from './listview.js';
import rootViewTemplate from '../../templates/rootViewTemplate.handlebars';

var List = new ListView();
var Details = new DetailView();
var AddNew = new AddNewView();

var RootView = Marionette.View.extend({

    template: rootViewTemplate,

    regions: {
        list: '#list',
        details: '#details',
        addNew: '#addNew'
    },



    onRender: function() {
        this.show('list', List);
        this.show('details', Details);
        this.show('addNew', AddNew);
    }
});

export default RootView;