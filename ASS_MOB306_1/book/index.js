import React,{useState} from 'react';
import {View, StyleSheet,Button,Modal,Text, TextInput} from 'react-native';
import LoadBook from './filebook';

export default function Login(){
const [name,setname]=useState('');
const [age,setAge]  =useState('');
const [showModal,setShowModal]=useState(true);
var enablebutton=true;
const checkLogin=()=>{
    if (!name.trim() == '' && age>=18) {
        enablebutton = false;
    }
    else {
        enablebutton = true;
    }
}
    return(
        <View>
            <Modal visible={showModal}>
            <View>
                <Text style={styles.logins}>LOGIN BOOK</Text>
                <Text style={styles.text}>Họ tên:</Text>
                <TextInput style={styles.textinput} onChangeText={(value)=>{setname(value)}} onSubmitEditing={checkLogin()}/>
                <Text style={styles.text}>Tuổi:</Text>
                <TextInput style={styles.textinput} 
                           keyboardType='numeric'
                           maxLength={2}
                           onChangeText={(value)=>{setAge(value)}}/>
            </View>
            <View>
                <Button color='#36f614' title="Login" disabled={enablebutton} onPress={()=>{setShowModal(false)}}/>
            </View>
            </Modal>
            <View >
                <View style={styles.btn}>
                    <Button title='Log out' onPress={()=>{setShowModal(true)}}/>
                </View>
                <Text style={styles.txtname}>Tên người dùng: {name}</Text>
                <LoadBook/>
            </View>
       </View>
    );
}
const styles=StyleSheet.create({
    logins:{
        marginTop: 100,
        fontSize: 30,
        marginBottom: 20,
        marginLeft: 99,
    },
    text:{
        marginLeft: 25,
        marginBottom: 10,
        fontSize: 25,
    },
    textinput:{
        marginLeft: 25,
        marginRight:25,
        paddingLeft: 10,
        marginBottom: 10,
        borderRadius: 10,
        borderColor: '#000',
        borderWidth: 1,
        lineHeight: 12,
    },
    txtname:{
        fontSize: 22,
        marginTop: 10,
        marginBottom: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    btn:{
        marginTop: 70
    }
});