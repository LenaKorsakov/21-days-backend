const { Schema, model } = require('mongoose');

const checkinSchema = new Schema(
  {
    date: { type: String, required: [true, 'Date is required.'] },
    habit: {
      type: Schema.Types.ObjectId,
      ref: 'MyHabit',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Checkin = model('Checkin', checkinSchema);

module.exports = Checkin;
