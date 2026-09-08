import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  SectionList,
  Pressable,
  StyleSheet
} from 'react-native';


const courses = [
  {
    id: '1',
    name: 'Lập trình React Native',
    image: 'https://picsum.photos/200'
  },
  {
    id: '2',
    name: 'Học JavaScript',
    image: 'https://picsum.photos/201'
  },
  {
    id: '3',
    name: 'Thiết kế UI',
    image: 'https://picsum.photos/202'
  }
];


const news = [
  {
    title: 'Bài học mới',
    data: [
      {id:'1', name:'Cách tạo giao diện Mobile', time:'Hôm nay'},
      {id:'2', name:'Làm việc với FlatList', time:'Hôm qua'}
    ]
  },
  {
    title:'Khóa học nổi bật',
    data:[
      {id:'3', name:'React Native cơ bản', time:'2 ngày trước'},
      {id:'4', name:'Flexbox trong React Native', time:'3 ngày trước'}
    ]
  }
];


export default function HomeScreen(){

  return(

    <ScrollView style={styles.container}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>
          Smart Study
        </Text>

        <Pressable>
          <Text style={styles.login}>
            Đăng nhập
          </Text>
        </Pressable>
      </View>



      {/* Hình ảnh */}
      <Image
        source={{
          uri:'https://picsum.photos/800/300'
        }}
        style={styles.banner}
      />



      {/* Nội dung chính */}
      <View style={styles.box}>

        <Text style={styles.title}>
          Xin chào 👋
        </Text>

        <Text>
          Học tập mọi lúc mọi nơi với Smart Study
        </Text>


        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Bắt đầu học
          </Text>
        </Pressable>

      </View>



      {/* Danh sách khóa học */}

      <Text style={styles.heading}>
        Khóa học
      </Text>


      <FlatList

        data={courses}

        horizontal

        showsHorizontalScrollIndicator={false}

        keyExtractor={(item)=>item.id}

        renderItem={({item})=>(

          <View style={styles.course}>

            <Image
              source={{uri:item.image}}
              style={styles.image}
            />


            <Text>
              {item.name}
            </Text>


          </View>

        )}

      />




      {/* Tin tức */}

      <Text style={styles.heading}>
        Bài viết
      </Text>


      <SectionList

        sections={news}

        scrollEnabled={false}

        keyExtractor={(item)=>item.id}


        renderSectionHeader={({section})=>(

          <Text style={styles.section}>
            {section.title}
          </Text>

        )}


        renderItem={({item})=>(

          <View style={styles.item}>

            <Text>
              {item.name}
            </Text>

            <Text style={styles.time}>
              {item.time}
            </Text>

          </View>

        )}

      />


    </ScrollView>

  );
}



const styles = StyleSheet.create({

container:{
  flex:1,
  backgroundColor:'#f5f5f5'
},


header:{
  height:60,
  backgroundColor:'white',
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  padding:15
},


logo:{
  fontSize:20,
  fontWeight:'bold'
},


login:{
  color:'blue'
},


banner:{
  width:'100%',
  height:180
},


box:{
  backgroundColor:'white',
  margin:15,
  padding:15,
  borderRadius:10
},


title:{
  fontSize:18,
  fontWeight:'bold',
  marginBottom:8
},


button:{
  backgroundColor:'#2196F3',
  padding:10,
  marginTop:15,
  borderRadius:5,
  alignItems:'center'
},


buttonText:{
  color:'white'
},


heading:{
  fontSize:18,
  fontWeight:'bold',
  margin:15
},


course:{
  backgroundColor:'white',
  width:150,
  marginLeft:15,
  padding:10,
  borderRadius:8
},


image:{
  width:'100%',
  height:90,
  borderRadius:5,
  marginBottom:8
},


section:{
  backgroundColor:'#ddd',
  padding:10,
  fontWeight:'bold'
},


item:{
  backgroundColor:'white',
  padding:15,
  borderBottomWidth:1,
  borderColor:'#eee'
},


time:{
  color:'gray',
  fontSize:12,
  marginTop:5
}


});