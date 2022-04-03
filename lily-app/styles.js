import * as React from 'react';
import { DefaultTheme, StyleSheet, Provider as PaperProvider } from 'react-native-paper';


const theme = {
    ...DefaultTheme,

        justifyContent: "center",
        alignItems: "center",

    colors: {
      ...DefaultTheme.colors,
      primary: 'red',
      accent: 'green',
      text: 'brown',
      background: 'blue',
      surface: 'yellow',
      disabled: 'grey',
 
    },

    textbox: {
      width: 300,
      height: 40,
      backgroundColor: '#A9A9A9',
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderColor: '#ccc',
      borderWidth: 2,
      borderRadius: 30, 
      fontSize: 16,
  },

  button: {
    width: 180,
    height: 40,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 25, 
    fontSize: 16,
},

title: {
  alignItems: "center",
  fontSize: 16,
},

content: {
  alignItems: "center",

},

}
    export default theme;