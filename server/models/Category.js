import mongoose from 'mongoose';
import slug from 'slug';
import uniqueValidator from 'mongoose-unique-validator';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, "Name can't be blank"]
    },
    slug: {
        type: String
    },
    description: String
}, { timestamps: true });



CategorySchema.methods.setSlug = function (categoryName) {
    this.slug = slug(categoryName, { lower: true });
};

CategorySchema.pre('save', function (next) {
    if (this.isNew && 0 === this.foos.length) {
        this.foos = undefined;
    }
    next();
})


var parentCategory = new mongoose.Schema({
    children: [CategorySchema],
    name: {
        type: String,
        unique: true,
        required: [true, "Name can't be blank"]
    },
    slug: {
        type: String,
        unique: true,
        required: [true, "Slug can't be blank"]
    },
    slug: String,
    description: String
});

parentCategory.methods.setSlug = function (categoryName) {
    this.slug = slug(categoryName, { lower: true });
};

parentCategory.plugin(uniqueValidator, { message: 'is already taken.' });

mongoose.model('Category', parentCategory);