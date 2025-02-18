/* eslint-disable react/prop-types */
import './TituloComponente.css';

export default function TituloComponente({ texto }) {
  return (
    <h1 className="miTitulo">{texto}</h1>
  );
}