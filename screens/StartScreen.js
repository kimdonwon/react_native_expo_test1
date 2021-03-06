import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from '../components/CustomButton';

type Props = {};
export default class StartScreen extends Component<Props> {

  static navigationOptions = { header: null };

  render() {
    const {navigation}=this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header} />
        <View style={styles.title}>
          <Text style={{fontSize:35,color:'white'}}>새로운 일상의 시작{'\n'}지금 카카오미니를{'\n'}연결해보세요.</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={{height:'100%',width:'100%',resizeMode:'contain'}}
            source={require('../img.png')}/>
        </View>
        <View style={styles.footer}>
          <CustomButton
            buttonColor={'#444'}
            title={'회원가입'}
            onPress={() => alert('회원가입 버튼')}/>
          <CustomButton
          buttonColor={'#023e73'}
          title={'로그인'}
          onPress={() => {navigation.navigate("Login",{"test":"hihi"})}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'black',
  },
  header: {
    width:'100%',
    height:'5%',
    backgroundColor: 'black',
  },
  title: {
    width:'100%',
    height:'18%',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom:30,
    backgroundColor: '#d6ca1a',
  },
  footer: {
    width:'100%',
    height:'20%',
    //backgroundColor: '#1ad657',
  },
});
