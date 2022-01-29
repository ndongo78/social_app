import React,{useState,useEffect} from 'react'
import { View, Text, SafeAreaView,StyleSheet, Image,TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import  Icon from 'react-native-vector-icons/AntDesign'
import LoginInput from '../components/LoginInput'
import { windowWidth } from '../components/Dimensions'
import Buttons from '../components/Button'
import { login } from '../api'
import { useSelector,useDispatch } from 'react-redux'
import { loginUser } from '../redux/actions/userActions'


const LoginScreen = ({navigation}) => {
  const {user,isLoggedIn} = useSelector(state => state.user)
  const dispatch = useDispatch()


   const validationSchema = Yup.object().shape({
      email: Yup
          .string()
          .required('Email is required')
          .email('Invalid email'),
      password: Yup
          .string()
          .required('Password is required')
          .min(8, 'Password must be at least 8 characters')
  })



    return (
        <SafeAreaView style={styles.container}>
        <View>
        <Icon name="wechat" size={200} style={styles.logo}  />
        <Text style={styles.text}>Welcome to Chat App</Text>
        </View>
        <Formik
        initialValues={{ email:'',password:''}}
        onSubmit={values => {
          dispatch(loginUser({email:values.email,password:values.password}))
        }}
        validationSchema={validationSchema}
    >
     {({ handleChange, handleBlur, handleSubmit, values,errors,touched }) => (
       <>
         <View style={styles.inputContainer}>
         <Text style={styles.textLabel}>Email</Text>
         <LoginInput
          name='email'
          labelValue='Email'
          onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email}
          iconType='mail'
          placeholderText='email@lami.com'
          keyboardType='email-address'
          />
          {
             touched.email && errors.email &&
           <Text style={{ fontSize: 16, color: 'red',textAlign:'right'}}>{errors.email}</Text>
           }
         </View>
         <View style={styles.inputContainer}>
         <Text style={styles.textLabel}>Mot de pass</Text>
         <LoginInput
          name='password'
          labelValue='Password'
          onChangeText={handleChange('password')}
          onBlur={handleBlur('password')}
          value={values.password}
          iconType='lock'
          placeholderText='********'
          secureTextEntry={true}
          />
          {
             touched.password && errors.password &&
           <Text style={{ fontSize: 16, color: 'red',textAlign:'right'}}>{errors.password}</Text>
           }
       </View>
       <View style={styles.inputContainer}>
        <Buttons
         buttonTitle='Se connecter'
        onPress={handleSubmit}
        />
       </View>
       </>
     )}
   </Formik>
   <View style={styles.linkLog}>
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Mot de pass oublié?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('register')}>
        <Text style={styles.navButtonText}> Je créer mon compte</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.divider}/>
      <Text style={{fontSize: 15,fontWeight:'600',}}>ou</Text>
      {/* <View style={styles.buttonSocial}>
          <SocialButton
            buttonTitle="Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={()=>dispatch(googleLog)}
          />

          <SocialButton
            buttonTitle="Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={()=>dispatch(facebookLog)}
          />
        </View> */}
   </SafeAreaView>
    )
}

export default LoginScreen


export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    marginTop: 50,
    color: '#00DFB3',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    color: '#F2059F',
    fontStyle:'italic',
    fontWeight: '700',
  },
  inputContainer:{
     width:windowWidth/1.1,
  },
  navButton: {
    fontWeight:'600',
   textDecorationStyle:'dashed',
    fontSize: 18
  },
  forgotButton: {
    margin:15
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2e64e5',
  },
  buttonSocial:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:10
  },
  linkLog:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignContent:'flex-end',
    marginVertical:15
    
  },
  textLabel:{
      paddingTop:10,
      fontSize: 16,
      fontWeight: '500',
  },
  divider:{
      borderWidth: 0.8,
      borderColor:'#000',
      margin:2,
      width:'90%',
    },
    containerFooter:{
        flexDirection:'row',
        alignItems:'flex-end',
    },
    linkFooter:{
        fontSize: 16,
        color: '#004AEB'
    },
    error:{
      color: 'red',
      marginTop: 10,
      fontStyle:'italic',
      fontSize:20
    }
});



