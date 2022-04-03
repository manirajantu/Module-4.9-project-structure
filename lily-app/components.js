import * as React from 'react';
import { 
  BottomNavigation, 
  Card, 
  Title, 
  useTheme,
  Paragraph, 
  Text,
  TextInput,
  Button,
  Divider
} from 'react-native-paper';



const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'onboard', title: 'Onboard', icon: 'queue-onboard' },
      { key: 'create', title: 'Create', icon: 'create' },
      { key: 'login', title: 'Login', icon: 'login' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        onboard: OnboardRoute,
        create: CreateRoute,
        login: LoginRoute,
      });

      return (
    
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
    
      );
    };
    

      export default MyComponent;    