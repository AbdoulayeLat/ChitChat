import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Badge, Surface, Text, Title} from 'react-native-paper';

const AppHeader = ({
  style,
  title,
  headerBg = 'white',
  iconColor = 'black',
  titleAlight,
}) => {
  const TitleView = () => (
    <View style={styles.titleView}>
      <Title style={{color: iconColor, textAlign: titleAlight}}>{title}</Title>
    </View>
  );
  return (
    <Surface
      style={[styles.header, style, {backgroundColor: headerBg}]}></Surface>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  titleView: {
    flex: 1,
  },
});
