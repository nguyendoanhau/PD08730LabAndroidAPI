import React from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

const Header = ({ title, iconLeft, iconLeftColor, onPressLeft, leftIconSize, centerComponent, rightComponent, iconRight, onPressRight, rightIconSize }) => {

  const renderLeft = () => {
    return (
      <View style={styles.containerLeft}>
        {iconLeft ? (
          <Pressable hitSlop={15} onPress={onPressLeft || Navigator.goback}>
            <Image source={iconLeft} tintColor={iconLeftColor} />
          </Pressable>
        ) : (
          <View style={{ width: leftIconSize, height: leftIconSize }} />
        )}
      </View>
    );
  };

  const renderCenter = () => {
    return (
      <View style={styles.containerCenter}>
        {centerComponent ? (
          centerComponent
        ) : (
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        )}
      </View>
    );
  };

  const renderRight = () => {
    return (
      <View style={styles.containerRight}>
        {rightComponent ? (
          rightComponent
        ) : (
          <Pressable hitSlop={15} onPress={onPressRight}>
            {iconRight ? (
              <Image source={iconRight} style={styles.rightIcon} />
            ) : (
              <View style={{ width: rightIconSize, height: rightIconSize }} />
            )}
          </Pressable>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    padding: 16,
  },
  containerLeft: {
    marginRight: 10,
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  containerRight: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  rightIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Header;