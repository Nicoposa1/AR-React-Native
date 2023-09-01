import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroImage,
  ViroButton,
  ViroBox,
} from '@viro-community/react-viro';

const HelloWorldSceneAR = () => {
  const [secondText, setSecondText] = useState(1);
  const [text, setText] = useState(`${secondText}`);
  const [textPrueba, setTextPrueba] = useState('Me alegra mucho verte');
  console.log(
    '🚀 ~ file: App.js:16 ~ HelloWorldSceneAR ~ secondText:',
    secondText,
  );

  return (
    <ViroARScene>
      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
      <ViroText
        text={textPrueba}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0.2, -1]}
        style={[styles.helloWorldTextStyle, {marginTop: 20}]}
      />
        <ViroText
        text={"Por favor registra tu asistencia"}
        scale={[0.5, 0.5, 0.5]}
        position={[0, -0.1, -1]}
        style={[styles.helloWorldTextStyle, {marginTop: 20}]}
      />

      {/* <ViroText
        text={text}
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, -1]}
        style={styles.helloWorldTextStyle}
      /> */}
      <ViroImage
        height={0.1}
        width={0.1}
        position={[1, 0, -5]}
        style={{
          width: 1.6,
          height: 0.6,
        }}
        placeholderSource={require('./src/assets/prueba.png')}
        source={{uri: 'https://my_s3_image.jpg'}}
      />
      <ViroButton
        source={require('./src/assets/krud-svg.png')}
        gazeSource={require('./src/assets/krud-svg.png')}
        tapSource={require('./src/assets/krud-svg.png')}
        position={[1, -1.7, -5]}
        height={2}
        width={3}
        onClick={() => {
          setSecondText(secondText + 1);
          setText(`Hola ${secondText}`);
        }}
      />
    </ViroARScene>
  );
};

export default () => {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={styles.f1}
    />
  );
};

var styles = StyleSheet.create({
  f1: {flex: 1},
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#000',
    textAlignVertical: 'center',
    textAlign: 'left', // 'left' | 'right' | 'center
    backgroundColor: '#00000000',
    padding: 10,
  },
});
