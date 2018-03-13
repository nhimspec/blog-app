import mongoose from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';
import config from '../config/';

const CategorySchema = new mongoose.Schema({
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
    description: String,
    posts: [{ type:  mongoose.Schema.Types.ObjectId, ref: 'Post' }]
}, { timestamps: true });

CategorySchema.plugin(uniqueValidator, { message: 'is already taken.' });

CategorySchema.methods.setSlug = function (categoryName) {
    this.slug = slug(categoryName, { lower: true });
};


CategorySchema.methods.setImage = function (imageFile) {
    this.image = config.store.image.blog + imageFile;
};

mongoose.model('Category', CategorySchema);