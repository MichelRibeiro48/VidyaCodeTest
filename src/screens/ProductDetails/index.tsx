import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

export default function ProductDetails() {
  const response = useSelector(rootReducer => rootReducer.product);
  console.log(response.productDetail);
  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
