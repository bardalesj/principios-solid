import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const TarjetaProducto = ({ nombre, precio, imagen, agregarAlCarrito }) => {
  const alCarrito = () => {
    agregarAlCarrito(nombre, precio);
  };

  return (
    <View>
      <Image source={imagen} />
      <Text>{nombre}</Text>
      <Text>{precio}</Text>
      <TouchableOpacity onPress={alCarrito}>
        <Text>Agregar al Carrito</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TarjetaProducto;