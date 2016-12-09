import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import CollectionView from './listview';
import Model from '../models/model';
import $ from 'jquery';


var List = new CollectionView();
var ListModel = new Model();

var  addNewView = Marionette.View.extend({

    template: AddingTemplate,


    events: {
        'input #name': 'changeName',
        'input #firstName': 'changeFirstName',
        'input #email': 'changeEmail',
        'input #job': 'changeJob',
        'click #add': 'add'
    },
/*
    modelEvents: {
        'change:name': 'actOnChange',
        'change:firstName': 'actOnChange',
        'change:email': 'actOnChange',
        'change:job': 'actOnChange'
    },*/


    add: function (e) {
        e.preventDefault();
        List.collection.add(ListModel);
        console.log(e.target.form);

        ListModel.set({firstName: $('#firstName')});
        ListModel.set({name: e.target.value});
        ListModel.set({email: e.target.value});
        ListModel.set({job: e.target.value});

    },


    /*actOnChange: function () {
        this.render();
    },*/


    initialize() {
        this.render();
    },
    /*
   changeName: function (e) {

    },

    changeFirstName: function (e) {
        listModel.set({firstName: e.target.value})
    },

    changeEmail: function (e) {
        listModel.set({email: e.target.value})
    },

    changeJob: function (e) {
        listModel.set({job: e.target.value})
    },
*/


});





export default addNewView;

