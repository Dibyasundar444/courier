import React from 'react';
import {View,Text,TextInput,TouchableOpacity,Pressable,ImageBackground,Image,StyleSheet} from 'react-native';
const Emails =({navigation})=> {
    return(
        <View style={styles.screen}>
            <ImageBackground 
           style={{flex:1}}
            source={require('./image/Bg.png')} >
            <View style={styles.head}>
            <Image style={styles.logoimg} source={require('./image/logo.png')}/>
            <Text style={styles.headtext}>What's your email?</Text>
            <Text style={styles.headbody}>Don't lose access to your account,
            {"\n"}
            Verified you email
            </Text>
            </View>
            <View style={styles.loginemail}>
                <TextInput
                style={styles.emailtext}
                placeholder="Enter Email"
                placeholderTextColor="#828282"/>
            </View>
       <TouchableOpacity
        style={styles.contain}
        onPress={()=>navigation.navigate('FirstName')}>
        <Text style = {styles.textbutton}>CONTINUE</Text>
       </TouchableOpacity>
        <Text style={styles.text}>OR</Text>
           <View style={styles.loginemail}>
               <Pressable
                style={styles.google}
               onPress={()=>this.props.navigation.navigate('url')}>
               <Image style={styles.imgg} source={require('./image/Google.png')}/>
               <Text style={styles.loginEmailText}> Login with Google</Text>
               </Pressable>
            </View>
              <Text style={styles.lasttext}>Verify instantly by connecting your
               {"\n"}
               Google account
               </Text>
               </ImageBackground>
        </View>
    );
};
export default Emails;
const styles = StyleSheet.create({
    screen:{
      width:"100%",
      height:"100%",
    },
    head:{
   width:"100%",
   alignItems:'center',
   },
   logoimg:{
     marginTop:15,
   width:180,
   height:160,
   alignItems:'center',
   },
    headtext:{
       color:'#fff',
     fontSize:32,
     fontWeight:'500',
     marginTop:25,
     marginLeft:20,
     textAlign:'center',
    },
    headbody:{
     color:'#fff',
     marginTop:15,
     textAlign:'center',
     justifyContent:'center',
     fontSize:16,
     marginLeft:23,
    },
    loginemail:{
     backgroundColor:"#fff",
     borderRadius:8,
     justifyContent:'center',
     shadowColor: 'black',
    shadowOpacity: 0.36,
    shadowRadius: 8.22,
    shadowOffset:{
    width:1,
    height:7,
    },
    elevation:8,
     marginTop:20,
     width:"85%",
     height:45,
     marginLeft:25,
    },
    imgg:{
      width:15,
      height:15,
    },
    emailtext:{
    fontSize:15,
    fontWeight:'500',
    marginLeft:15,
    },
    contain: {
     backgroundColor:'#bf0000',
     width:170,
     height:46,
     borderRadius:9,
     alignSelf:'center',
     justifyContent:'center',
     shadowColor: '#001818',
     shadowOpacity: 0.36,
     shadowRadius: 8.22,
     shadowOffset:{
     width:1,
     height:7,
     },
     elevation:5,
     marginTop:25,
    },
   textbutton:{
    color:'#fff',
    fontSize:20,
    textAlign:'center',
   
    },
    
   google:{
     flexDirection:'row',
     alignItems:'center',
    justifyContent:'center',
   },
   loginEmailText:{
     color:'#5d6475',
   fontSize:15,
   fontWeight:'700',
   marginLeft:8,
   },
   text:{
     color:'#fff',
     marginTop:20,
     textAlign:'center',
     fontWeight:'500',
   },
   lasttext:{
     color:'#fff',
     marginTop:20,
     textAlign:'center',
     marginLeft:20,
     fontSize:16,
     }
   });