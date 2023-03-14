import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import img from '../image/1.png'
const Home = () => {
  const styles = {
    img: {
      width: responsiveWidth(100),
      height: responsiveHeight(40),
    },
    title: {
      color: 'white',

      fontSize: responsiveFontSize(5),
      letterSpacing: 3,
      marginVertical: responsiveHeight(5),
      fontFamily: 'Lora-SemiBoldItalic',
    },
    descri: {
      color: 'white',
      textAlign: 'center',
      fontSize: responsiveFontSize(2),
      paddingLeft: responsiveWidth(5),
      paddingRight: responsiveWidth(5),
      fontFamily: 'Lora-Italic',
    },
    btn: {
      fontFamily: 'Lora-Bold',
      width: responsiveWidth(80),
      color: 'white',
      textAlign: 'center',
      marginTop: responsiveHeight(5),
      backgroundColor:'#D82E2F',
      padding:responsiveWidth(3),
      borderRadius:responsiveWidth(10),
      fontSize:responsiveFontSize(2)
    },
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0D0D0D',
      }}>
      <Image source={require('../image/1.png')} style={styles.img} />
      <Text style={styles.title}>Max Scooter</Text>
      <Text style={styles.descri}>
        With an Updated motor and integrated anti-theift tech the motor the Max
        Scooter are Coustom-tuned for the ultimate riding exprience.
      </Text>
      {/* < AntDesign name="arrowleft" size={30} color="white" /> */}
      <TouchableOpacity>
        <Text style={styles.btn}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
