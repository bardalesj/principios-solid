import React from 'react';
import TarjetaProducto from './TarjetaProducto';

import { Text, TouchableOpacity } from 'react-native';

const TarjetaProductoFavorito = ({ nombre, precio, imagen, agregarAlCarrito, agregarAFavoritos }) => {
  const aFavoritos = () => {
    agregarAFavoritos(nombre);
  };

  return (
    <TarjetaProducto nombre={nombre} precio={precio} imagen={imagen} agregarAlCarrito={agregarAlCarrito}>
      <TouchableOpacity onPress={aFavoritos}>
        <Text>Agregar a Favoritos</Text>
      </TouchableOpacity>
    </TarjetaProducto>
  );
};

export default TarjetaProductoFavorito;