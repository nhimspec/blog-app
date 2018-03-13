import mongoose from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';
import config from '../config/';

const PostSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name can't be blank"],
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    image: String,
    content: String,
    categories: [{ type: mongoose.Schema.ObjectId, ref: 'Categories' }]
}, { timestamps: true });

PostSchema.plugin(uniqueValidator, { message: 'is already taken.' });

PostSchema.methods.setSlug = function (postName) {
    this.slug = slug(postName, { lower: true });
};


PostSchema.methods.setImage = function (imageFile) {
    this.image = config.store.image.blog + imageFile;
};

mongoose.model('Post', PostSchema);