import React, {useState} from 'react';
import {View, FlatList,Text, Modal,StyleSheet,Button,Image} from 'react-native';

import BookItem from './book_item'

export default function BOOK(){
    
    const filebook={
        info:[
            {
                thumbnail:'https://salt.tikicdn.com/cache/550x550/media/catalog/product/n/h/nha%20nang%20canh%20nha%20toi.u335.d20160817.t141143.289643.jpg',
                namebook:'Nhà nàng ở cạnh nhà tôi',
                category:'Truyện ngắn',
                total_chapters: 1,
                is_full:true
            },
            {
                thumbnail:'https://salt.tikicdn.com/cache/550x550/ts/product/d5/da/d5/14ccdc6275de25812335da73cb49ab2c.jpg',
                namebook:'Mắt biếc',
                category:'Truyện ngắn',
                total_chapters:'1',
                is_full:true
            },
            {
                thumbnail:'https://gacsach.com/sites/gacsach.com/files/styles/book310/public/harry-potter.jpg?itok=JYl6Oovc',
                namebook:'Harry Poster',
                category:'Tiểu thuyết',
                total_chapters:'5',
                is_full:false
            },
            {
                thumbnail:'https://gacsach.com/sites/gacsach.com/files/styles/book310/public/harry-potter.jpg?itok=JYl6Oovc',
                namebook:'Harry',
                category:'Tiểu thuyết',
                total_chapters:'5',
                is_full:false
            }
        ]
    };
    const[book,setbook]=useState(filebook);
    
    // const [showDetail,setShowDetail]=useState(false);
    // const [detail,setDetail]=useState(filebook[0]);
    // const handleDetailss=(detail,setdetail)=>{
    //     setShowDetail(setdetail);
    //     setDetail(detail);
    // }

    const DeleteBook=(namebook)=>{
        let newBooklist=book.info;
        newBooklist=newBooklist.filter((infos)=>infos.namebook!=namebook);
        filebook.info=newBooklist;
        setbook(filebook);
    }
    return(
        <View>
       <View>
            <FlatList   data={book.info}
                        renderItem={({item})=><BookItem item={item} 
                        handledelete={DeleteBook} /> }
                        keyExtractor={(item, index) => index}
                        />
       </View>
       </View>
    );
}
const styles=StyleSheet.create({
    img:{
        width:150,
        height:150,
    }
})
