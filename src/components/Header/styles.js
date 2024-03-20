import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  containerCenter: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  containerRight: {
    width: 50,
    alignItems: 'flex-end',
  },
  containerLeft: {
    width: 50,
    alignItems: 'flex-start',
  },
  icon: {
    width: 25,
    height: 25,
  }
});