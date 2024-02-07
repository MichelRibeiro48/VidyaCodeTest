import React from 'react';

import {FlatList, Text, View} from 'react-native';
import {SearchListT} from '../../types/SearchListT';

export default function SearchList({data, input}: SearchListT) {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item}) =>
        item.name.toLowerCase().includes(input.toLowerCase()) && (
          <View style={{width: 200, height: 80}}>
            <Text>{item.name}</Text>
          </View>
        )
      }
    />
  );
}
