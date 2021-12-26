import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  StatusBar,
  ImageStore,
  ScrollView
} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 

const DATA = [
  {
    id: "1",
    image: require("./assets/anh1.jpg"),
    title: "Đây là dự báo thời tiết sắp tới trên thành phố Đà Nẵng",
    detail:
      "Trung tâm Dự báo khí tượng thuỷ văn quốc gia (Trung tâm DB KTTV QG - National Centre for Hydrometeorological Forecasting - NCHMF)",
    time:" 8:00am, 21 May 2020",
  },
  {
    id: "2",
    image: require("./assets/anh2.png"),
    title: "Đây là dự báo thời tiết sắp tới trên thành phố Hà Nội",
    detail:
      "Trung tâm Dự báo khí tượng thuỷ văn quốc gia (Trung tâm DB KTTV QG - National Centre for Hydrometeorological Forecasting - NCHMF)",
      time:" 8:00am, 21 May 2020",
  },
  {
    id: "3",
    image: require("./assets/anh1.jpg"),
    title: "Đây là dự báo thời tiết sắp tới trên thành phố Hồ Chí Minh",
    detail:
      "Trung tâm Dự báo khí tượng thuỷ văn quốc gia (Trung tâm DB KTTV QG - National Centre for Hydrometeorological Forecasting - NCHMF)",
      time:" 8:00am, 21 May 2020",
  },
];

const Title = ({ title }) => (
  <View>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Images = ({ image }) => {
  return (
    <View>
      <Image style={styles.image} source={image} />
    </View>
  );
};

const Detail = ({ detail }) => {
  return (
    <View >
      <Text style={styles.detail}>{detail}</Text>
    </View>
  );
};

const Time=({ time })=>{
  return(
    <View style={styles.viewTime}>
      <AntDesign name="clockcircleo" size={15} color="black" />
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.timeCode}>SPA-01</Text>
    </View>
  )
}




const App = () => {
  const renderItem = ({ item }) => (
    <View>
      <Images image={item.image} />
      <Title title={item.title} />
      <Detail detail={item.detail}></Detail>
      <Time time={item.time}></Time>

    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.fastlist}>FlatList</Text>
      </View>
      <View>
        <Text style={styles.mypost}>My post</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginLeft: "5%",
    marginRight: "5%",
  },
  fastlist:{
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
    marginBottom:'10%'
  },
  mypost:{
    color: "#696976",
    fontSize:20,
    fontWeight:'bold',
    marginBottom:'5%'
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom:'3%'
  },
  detail: {
    fontSize: 13,
    color: "#696976",
    marginBottom:'3%'
  },
  image: {
    width: "100%",
    borderRadius: 7,
    marginBottom:'3%'
  },
  viewTime:{
    flexDirection: 'row',
    // alignSelf: 'flex-end',
  },
  timeCode:{
    color:'red',
    fontWeight:'bold',
    marginLeft:'40%'
 
  }
  
});

export default App;
