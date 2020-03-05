import React from 'react';
import {View,Alert, Button,StyleSheet,Image,Text} from 'react-native';

export default function bookitem({item,handledelete}){

const alertDele=(namebook)=>{
    Alert.alert(
        'Xoá Truyện',
        `Bạn có muốn xoá cuốn ${namebook} không?`,
        [
            {text: 'Có',onPress:()=>{handledelete(namebook)}},
            {text:'Không',onPress:()=>{}}
        ],{cancelable:true}
    )
}
// const Detail = (item, handleDetail) => {
//     var setDetail = true; var indexItem = item;
//          handleDetail(indexItem, setDetail); };
    return(
        <View style={styles.bor}>
            <View>
                <Image style={styles.img} source={{uri:item.thumbnail}}/>
                <View>
                    <Text>{`Tên truyện: ${item.namebook}`}</Text>
                    <Text>{`Thể loại: ${item.category}`}</Text>
                    <Text>{`Chương: ${item.total_chapters}`}</Text>
                    <Text>{`Tình trạng: ${item.is_full ? 'Full':'Chưa full'}`}</Text>
                </View>
            </View>
            <View>
                <Button color='#00fcc4' title="Detail" onPress={()=>{}}/>
                <Button color='#fc0009' title="Delete" onPress={()=>{alertDele(item.namebook,handledelete)}}/>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    bor:{
        width:200,
        marginTop:20,
        marginLeft:20,
        fontSize: 16,
        marginBottom:10
    },
    img:{
        width: 150,
        height: 150,
        borderRadius: 150
    }
});