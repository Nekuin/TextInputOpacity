/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {View} from 'react-native';

import {TextInput} from 'react-native-paper';

function App(): JSX.Element {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        mode="outlined"
        value={text}
        onChangeText={txt => setText(txt)}
        label="Something"
      />
      <TextInput
        mode="flat"
        value={text}
        onChangeText={txt => setText(txt)}
        label="Something"
      />
    </View>
  );
}

export default App;
