import mongoose from 'mongoose';
import tree from 'mongoose-data-tree';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

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
    description: String
}, { timestamps: true });

CategorySchema.plugin(tree);
CategorySchema.plugin(uniqueValidator, { message: 'is already taken.' });

CategorySchema.methods.setSlug = function (categoryName) {
    this.slug = slug(categoryName, { lower: true });
};


mongoose.model('Category', CategorySchema);