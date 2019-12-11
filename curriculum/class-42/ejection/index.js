import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('class_41_demo', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('class_41_demo', { rootTag });
}
