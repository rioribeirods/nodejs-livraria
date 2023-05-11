import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
  id: { type: String },
  titulo: { type: String, required: true },
  autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
  ano_publicacao: { type: Number, required: true }
});

const livros = mongoose.model("troca-livros", livroSchema);

export default livros;
