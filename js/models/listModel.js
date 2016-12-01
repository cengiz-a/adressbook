import backbone from 'backbone';

var listModel = backbone.Model.extend({
    default: {
        itemName: "example"
    }
});

var listmodel = new listModel();

export default listmodel;