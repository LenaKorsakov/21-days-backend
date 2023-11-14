const { Schema, model } = require('mongoose');

const completedHabitSchema = new Schema(
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

const CompletedHabit = model('CompletedHabit', completedHabitSchema);

module.exports = CompletedHabit;
