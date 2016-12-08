import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import list from '../collections/collection';
import collectionView from './listview';



var  addNewView = Marionette.View.extend({


    template: AddingTemplate,


    events: {
        'input #name': 'changeName',
        'input #firstName': 'changeFirstName',
        'input #email': 'changeEmail',
        'input #job': 'changeJob',
        'click #add': 'add'
    },

    modelEvents: {
        'change:name': 'actOnChange',
        'change:firstName': 'actOnChange',
        'change:email': 'actOnChange',
        'change:job': 'actOnChange'
    },


    add: function () {
        console.log("Running!");
        collectionView.collection.add({name: 'Cengiz'});
    },

    actOnChange: function () {
        this.render();
    },

    initialize() {
        this.render();
        collectionView.collection.add({name: 'Cengiz'});
    },

    changeName: function (e) {

    },

    changeFirstName: function (e) {

    },

    changeEmail: function (e) {

    },

    changeJob: function (e) {

    },



});





export default addNewView;

