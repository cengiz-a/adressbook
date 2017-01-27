import Marionette from 'backbone.marionette';
import AddingTemplate from '../../templates/addNew.handlebars';
import $ from 'jquery';
import Model from '../models/model';
import List from './CollectionView';

var  addNewView = Marionette.View.extend({

    template: AddingTemplate,

    ui: {
      add: '#add',
      deleteContact: '#deleteContact'
    },

    events: {
        'click @ui.add': 'add',
        'click @ui.deleteContact': 'deleteContact'
    },



    add (e, model) {

        e.preventDefault();

        model = new Model();

        var input = document.getElementById('form');
        var id =        $('input#id').val();
        var name =      $('input#name').val();
        var firstName = $('input#firstName').val();
        var tel =       $('input#tel').val();
        var email =     $('input#email').val();

        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

       if(name && firstName && tel && re.test(email)===true ) {// || List.collection.model.ranking === ranking) {
            model.set({id: id});
            model.set({firstName: firstName});
            model.set({name: name});
            model.set({tel: tel});
            model.set({email: email});

            List.collection.add(model);

            input.reset();
        }else {
           alert("Pflichtfelder ausfüllen und Email richtig eingeben!");
        }
    },

    deleteContact (e) {
        e.preventDefault();
        // hier fehlt noch einiges!
         for(var i=0; i<=List.collection.length; i++) {
         var containsEmail = List.collection.where({email: List.collection.get(1)});
             var containsName = List.collection.where({name: List.collection.model[i]});
             var containFirstName = List.collection.where({firstName: List.collection.model[i]});
             var containsTel = List.collection.where({tel: List.collection.model[i]});

            if( containsEmail>2 || containsName>2 || containFirstName>2 || containsTel>2 ) {
                console.log("nicht ok");
                console.log(containsEmail.length);

            }else{
                console.log("ok");
            }
        }




    },

    initialize() {
        this.render();

    },



});

export default addNewView;
