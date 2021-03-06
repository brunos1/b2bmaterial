import * as mongoose from "mongoose";

export const MaterialSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

export const ProfileSchema = new mongoose.Schema({
    name: { type: String, required: true },
    uf: String,
    cnpj: String,
    estado: String,
    cidade: String,
    pais: String,
    email: String,
    materials: [MaterialSchema],
    isProducer: Boolean,
    isProvider: Boolean,
    phone: String,
});
