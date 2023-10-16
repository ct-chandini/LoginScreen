import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Stylesheet from './Config.js/Stylesheet';
function HomeScreen({route}) {

    return (
<View >
<Text style={Stylesheet.textStyle}>
          Login Email id: {route.params.paramKey}
        </Text>
        <Text style={Stylesheet.textStyle}> Password:{route.params.parampassword}</Text>
        

</View>    
);
}

export default HomeScreen;