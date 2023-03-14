import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import image1 from '../image/2.png';
import {positions} from '@mui/system';
const Detail = () => {
  const styles = {
    img: {
      width: responsiveWidth(100),
      height: responsiveHeight(50),
      objectFit: 'contain',
    },
    backcol: {
      position: 'absolute',
      left: 0,
      top: 0,
      zIndex: -1,
      flexDirection: 'column',
    },
    circle: {
      marginLeft: responsiveWidth(3),
      width: responsiveWidth(6),
      height: responsiveHeight(3),
      borderRadius: responsiveWidth(5),
      backgroundColor: '#EB4D4B',
      marginTop: responsiveHeight(1),
    },
    circle1: {
      marginLeft: responsiveWidth(3),

      width: responsiveWidth(6),
      height: responsiveHeight(3),
      borderRadius: responsiveWidth(5),
      backgroundColor: 'green',
      marginTop: responsiveHeight(1),
    },
    circle2: {
      marginLeft: responsiveWidth(3),
      width: responsiveWidth(6),
      height: responsiveHeight(3),
      borderRadius: responsiveWidth(5),
      backgroundColor: '#383CC1',
      marginTop: responsiveHeight(1),
    },
    btn: {
      fontFamily: 'Lora-Bold',
      width: responsiveWidth(40),
      color: 'white',
      textAlign: 'center',
      marginTop: responsiveHeight(5),
      backgroundColor: '#D82E2F',
      padding: responsiveWidth(3),
      borderRadius: responsiveWidth(10),
      fontSize: responsiveFontSize(2),
    },
  };
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: responsiveWidth(100),
          marginTop: responsiveHeight(1),
        }}>
        <TouchableOpacity style={{marginLeft: responsiveWidth(3)}}>
          <Ionicons name="arrow-back" color="white" size={30} />
        </TouchableOpacity>
        <TouchableOpacity style={{marginRight: responsiveWidth(3)}}>
          <Ionicons name="cart" color="white" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../image/2.png')} style={styles.img} />
        <View
          style={{
            width: responsiveWidth(90),
            height: responsiveHeight(38),
            backgroundColor: 'white',
            borderRadius: responsiveWidth(10),
          }}>
          <View style={styles.backcol}>
            <Text
              style={{
                fontSize: responsiveFontSize(4),
                marginLeft: responsiveWidth(5),
                fontFamily: 'Lora-SemiBold',
                color: 'black',
              }}>
              Max Scooter
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontFamily: 'Lora-SemiBoldItalic',
                marginLeft: responsiveWidth(5),
              }}>
              Model S1
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={{
                  fontSize: responsiveFontSize(3),
                  marginLeft: responsiveWidth(5),
                  fontFamily: 'Lora-SemiBold',
                  color: 'black',
                  marginRight: responsiveWidth(3),
                }}>
                Colors
              </Text>
              <View
                style={{flexDirection: 'row', marginLeft: responsiveWidth(25)}}>
                <View style={styles.circle}></View>
                <View style={styles.circle1}></View>
                <View style={styles.circle2}></View>
              </View>
            </View>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                textAlign: 'center',
                marginTop: responsiveHeight(2),
                fontFamily: 'Lora-SemiBoldItalic',
                marginLeft: responsiveWidth(5),
              }}>
              {' '}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit,
              magni voluptatibus suscipit temporibus repellendus voluptas culpa
              quos nemo corrupti! Quibusdam!{' '}
            </Text>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={{marginLeft: responsiveWidth(4),marginTop:responsiveHeight(6)}}>
                <AntDesign name="hearto" color="black" size={25} />
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.btn}>Next</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Detail;
