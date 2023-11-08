const { Schema, model } = require('mongoose');

const globalHabitSchema = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const GlobalHabit = model('GlobalHabit', globalHabitSchema);

module.exports = GlobalHabit;
