import React from 'react';
import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
   // backgroundColor:'red',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    alignItems:'center',
    textAlign:'center',
    color:'black'
  },
  sectionStyle: {
    width : "75%",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'lightgray',
     height: 50,
     marginTop:15,
     margin:15,
     top: 50,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8, 
    color:'black',
   borderRadiu:'50' ,
 },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 5,
    textDecorationLine: 'underline',
  },
  Button:{
    borderRadius:50
  },
   logoimageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  
});