const { Schema, model } = require('mongoose');

const favouriteHabitSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Habit title is required.'],
    },
    category: {
      type: String,
      enum: [
        'self realization',
        'emotional state',
        'lifestyle',
        'beauty',
        'career and finance',
        'relationships',
        'education',
        'hobbies',
        'health',
      ],
    },
    type: {
      type: String,
      enum: ['build', 'quit'],
    },
    description: String,
    emoji: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const FavouriteHabit = model('FavouriteHabit', favouriteHabitSchema);

module.exports = FavouriteHabit;
