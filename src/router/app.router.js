import { StackNavigator } from 'react-navigation';

// Views
import Home from './../views/home.view';
import Importer from './../views/importer.view'; 
import Contact from './../views/contact.view'; 

export default AppNavigator = StackNavigator({
  Home: {screen: Home},
  Importer: {screen: Importer},
  Contact: {screen: Contact}
});
