import backbone from 'backbone';
import model from '../models/model.js';

var list = backbone.Collection.extend ({

    model: model

});

export default list;