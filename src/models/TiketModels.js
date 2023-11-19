const mongoose = require('mongoose');

const TiketSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        noWa: {
            type: String,
            required: true,
        },
        tanggalLahir: {
            type: String,
            required: true
        },
        kdTempat: {
            type: [String],
            required: true
        },
        sesiBooking: {
            type: String,
            required: true
        },
        tanggalBooking: {
            type: String,
            required: true
        },
        waktuPesan: {
            type: String,
            default: ""
        },
        isVerified: {
            type: Boolean,
            default: false
        }
    },
    {
        collection: "tiket"
    }
);
const Tiket = mongoose.model("tiket",TiketSchema);
module.exports = Tiket;