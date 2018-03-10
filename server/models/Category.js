import mongoose from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "can't be blank"]
    },
    slug: String,
    description: String
}, { timestamps: true });

CategorySchema.plugin(uniqueValidator, { message: 'is already taken.' });

CategorySchema.methods.setSlug = function (categoryName) {
    return this.slug === slug(categoryName);
};


var parentCategory = new mongoose.Schema({
    children: [CategorySchema],
    name: {
        type: String,
        unique: true,
        required: [true, "can't be blank"]
    },
});


mongoose.model('Category', parentCategory);