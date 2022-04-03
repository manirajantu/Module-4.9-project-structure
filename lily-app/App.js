import * as React from 'react';
import { 
  BottomNavigation, 
  Card, 
  Title, 
  useTheme,
  Paragraph, 
  Text,
  List,
  TextInput,
  Button,
  Divider
} from 'react-native-paper';
import Onboard1 from './assets/onboard1.png'
import Create2 from './assets/create2.png'
import Login3 from './assets/login3.png'
import theme from './styles';
import textbox from './styles';

import { ScrollView } from 'react-native';

const OnboardRoute  = () => (
  <Card style={theme.DefaultTheme}>

    <Card.Cover  source={Onboard1} style={{ width: '100%', height: 390 }}/>

    <Card.Content>
      <Title style={{ justifyContent: 'center', alignItems: 'center' }}>Learn About</Title>
      <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
    </Card.Content>
  </Card>
);

const CreateRoute = () => (
  <ScrollView>
  <Card style={theme.DefaultTheme}>

    <Card.Cover  source={Create2} style={{ width: '100%', height: 250 }}/>
    
    <Card.Content style={theme.title}>
      <Title>Create Account</Title>
    </Card.Content>

    <Card.Content style={theme.content}>

      <TextInput style={theme.textbox}
        placeholder="Your User name"
      />
    <br></br>

    <TextInput style={theme.textbox}
        placeholder="Your E-mail"
      />

    <br></br>

      <TextInput style={theme.textbox}
        placeholder="Your mobile"
      />

    <br></br>
    
    <TextInput style={theme.textbox}
        placeholder="Enter password"
      />

    <br></br>

    <TextInput style={theme.textbox}
        placeholder="confirm password"
      />
    <br></br>

    <Button  style={theme.button} mode="contained" onPress={() => console.log('Pressed')}>
    Create
    </Button>
    
    <br></br>
</Card.Content>
  </Card>

</ScrollView>


);


const LoginRoute = () =>  (
  <ScrollView>
  <Card style={theme.DefaultTheme}>

    <Card.Cover  source={Login3} style={{ width: '100%', height: 390 }}/>
    
    <Card.Content style={theme.title}>
      <Title>Login</Title>
    </Card.Content>

    <Card.Content style={theme.content}>

      <TextInput style={theme.textbox}
        label="Your e-mail"
      />
    <br></br>

    <TextInput style={theme.textbox} secureTextEntry
        label="password"
      />

    <br></br>
    
    <Button style={theme.button} mode="contained" onPress={() => console.log('Pressed')}>
    Face ID
    </Button>
    <br></br>

    <Button style={theme.button} mode="contained" onPress={() => console.log('Pressed')}>
    Login
    </Button>
    <br></br>


  <Divider />
  </Card.Content>
  </Card>
</ScrollView>
);



const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'onboard', title: 'Onboard', icon: 'folder' },
    { key: 'create', title: 'Create Account', icon: 'create' },
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