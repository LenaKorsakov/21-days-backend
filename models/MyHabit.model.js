const { Schema, model } = require('mongoose');

const myHabitSchema = new Schema(
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
        'other',
      ],
      defailt: 'lifestyle',
    },
    type: {
      type: String,
      enum: ['build', 'quit'],
    },
    description: String,
    emoji: String,
    start_day: String,
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const MyHabit = model('MyHabit', myHabitSchema);

module.exports = MyHabit;
