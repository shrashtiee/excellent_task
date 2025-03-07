import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import Colors from '../utility/colorConstant';
import { VectorIcon } from './index';
import fonts from '../utility/fonts';
const deviceWidth = Dimensions.get('window').width;

const ScreenHeader = ( props ) => {
  const {headerTitle, handleCartButton} = props;
  return (
    <View style={Styles.headerViewStyle}>
      <Text style = {Styles.headerText}>{headerTitle}</Text>   
      <TouchableOpacity
       onPress={handleCartButton}
       >
      <VectorIcon
              iconName={'shopping-cart'}
              color={Colors.BLACK_COLOR}
              iconSize={30}
            />
            </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  headerViewStyle: {
    backgroundColor: Colors.WHITE_COLOR,
    elevation: 3,
    height: 50,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  headerText:{
    textAlign:'center',
    fontSize:18,
    fontFamily: fonts.MEDIUM,
    color: Colors.BLACK_COLOR,
    width: deviceWidth * 0.8,
  }
});

const mapStateToProps = state => ({
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenHeader);

