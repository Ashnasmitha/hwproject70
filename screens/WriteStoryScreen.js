import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements';


export default class WriteStoryScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Header
                    backgroundColor={'pink'}
                    centerComponent={{
                        text: 'STORY HUB',
                        style:{fontWeight:'bold',color:'black',fontSize:30}
                    }}
                />

                <TextInput style={styles.inputBox}
                placeholder='Story Title'/>
                <TextInput style={styles.inputBox2}
                placeholder='Author'/>
                <TextInput style={styles.inputBox3}
                placeholder='Write Your Story'
                multiline={true}
                />

                <TouchableOpacity styles={style.button}>
                    <Text styles={style.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    button:{
        backgroundColor:'pink',
        width:100,
        alignSelf:'center',
        marginTop:30
    },
    inputBox: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    inputBox2: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    inputBox3: {
        marginTop: 50,
        width: '80%',
        alignSelf: 'center',
        height: 150,
        textAlign: 'center',
        borderWidth: 3,
        outline: 'none',
    },
    text:{
        fontSize:18,
        textAlign:'center',
        marginTop:10,
        color:'black',
    }
})