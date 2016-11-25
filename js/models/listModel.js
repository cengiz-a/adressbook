import backbone from 'backbone';

var listModel = backbone.Model.extend({
    default: {
        itemName: "example"
    }
});

export default listModel;