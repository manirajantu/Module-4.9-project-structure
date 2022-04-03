# Lesson 4.9: Project Structure

## Brief 

In this lesson, we will learn about how to structure a React Native project. There is no one fixed way to do this. Every developers have different approach to it. For this lesson, we will adopt a minimalistic approach, excerpt from this [SO entry](https://stackoverflow.com/questions/60647270/best-practice-to-make-project-structure-react-native). 

```
src
  app
    assets
    components
    containers
    navigation
    styles
```

> Note: We will omit api, redux, and utilities folder.

We will be implementing the onboarding screens of [Lily Figma](https://www.figma.com/file/kB0D7zOztGnLYOOjEWn54r/Lily-Capstone-Project---Nparks)

<img src="./assets/onboarding.png" />

> The next few parts of the lesson will get your kickstarted with creating a project structure. You will continue to implement the actual code thereafter.

### Part 1 - Create a React Native Project 

Step 1: Go ahead to run `expo init lily-app` on the terminal to generate a new RN project with Expo.

Step 2: Remember to remove the `.git` folder at `lily-app/.git`. 

Step 3: As a good coding practice, let's perform an `initial commit` at this stage to your lesson repository.

### Part 2 - Create Project Structure 

We shall create a series of folders following the project structure shown in the (brief) section. 

### Part 3 - Import Assets

You should have exported all the images in the previous assignment. Let's copy those files to the folder `assets`.

### Part 4 - Create Stack Navigation and Screens

In this lesson, you will only utilize one `<Stack.Navigator>` and multiple `<Stack.Screen>`. 

> Instructors may share with learners the factors to decide on how many `<Stack.Navigator>` to use (based on the app lifecycle).

Your code should look like this:

```js
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./containers/WelcomeScreen";
// import all screens from containers folder

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WelcomeScreen} />
            // And all the number of screens in onboarding process
        </Stack.Navigator>        
    )
}
```
### Part 5 - Continue...

Learners will continue to implement the rest in a facilitated session. All styles can be implemented in the `styles` folder for reusability purpose.

Helpful Links:
- [React Navigation](https://reactnavigation.org/docs/hello-react-navigation)
- [Moving between screens](https://reactnavigation.org/docs/navigating)
- [Unidirectional Dataflow](https://flaviocopes.com/react-unidirectional-data-flow/)

Although there is no API calls included in this, it is good to bear in mind to separate containers (screens) and components.


End



Steps 

expo init lily-app
sudo rm -rf ./.git

Create 
src
  app
    assets
    components
    containers
    navigation
    styles

    npm install react-native-paper

    expo install react-native-screens react-native-safe-area-context

    npm install @react-navigation/native-stack
    expo install react-native-gesture-handler
    expo install @react-native-masked-view/masked-view
    npm install -g expo-cli