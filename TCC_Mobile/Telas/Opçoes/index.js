import { StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView,TextInput,Alert,ScrollView, Image, Pressable, Details} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useNavigation } from  '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import EditPerfil from '../Opçoes/Editar Perfil';
import Home from '../Inicio/index';

export default function User({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
          <Image source={logo} style={styles.logo}/>
          </TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>
          <TextInput style={styles.pesquisa}placeholder='Pesquisa'></TextInput>
          <TouchableOpacity>
            <Ionicons name='search-circle-outline'size={30} color="#6cc1fa"  style={{margin:5}}></Ionicons>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={styles.ContainerBody}>
        <TouchableOpacity onPress={()=>navigation.navigate(EditPerfil)}>
          <Text style={styles.config}>Editar Perfil</Text>
        </TouchableOpacity>
        <Text style={styles.config}>Conta</Text>
        <Text style={styles.config}>Historico</Text>
        <Text style={styles.config}>Idioma</Text>
        <Text style={styles.config}>Armazenamento e Dados</Text>
        <Text style={styles.config}>Notificações</Text>
        <Text style={styles.config}>Privacidade</Text>
        <Text style={styles.config}>Sair</Text>
        <Text style={styles.config}>Ajuda</Text>
        
        <Text style={{fontSize:12, alignItems:'center', textAlign:'center',justifyContent:'center',left:150, marginTop:50, color:'#FFF'}}><FontAwesome name="registered" size={10} color="#FFF" /> Bibiotec{'\n'}From{'\n'} POWEHARD</Text>
        </View>
        <View style={styles.footer}>
          <Text> </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    top:22.5,
    flex:1,
    flexDirection:'column',
    backgroundColor: '#292929',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom:1
    
  },
  containerSearch:{
    width:'100%',
    justifyContent:'space-around',
    flexDirection:'row',
    backgroundColor: '#2F3133',
  },
  livro:{
    alignItems: 'center',
    width:275,
    height:375,
  }, 
  titulo:{
    alignItems:'center',
    fontSize:27,
    color:'#FFF',
  },
  ContainerBody:{
    flex:1,
    margin:5,
    top:8,
    bottom:25,
    backgroundColor:'',
    flexDirection:'column',
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:400


  },
  Sinopse:{
    fontSize:15,
    color: '#FFF',
    textAlign:'justify',
    margin:20,
  },
  NavMenu:{
    
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    bottom:25,
    backgroundColor: '#2F3133',
    width:400

  },
  footer:{
    fontSize:25,
    flexDirection:'column'

  },
  modalView: {
    marginTop: 300,
    margin: 55,
    backgroundColor: "#2F3133",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    modalView: {
      margin: 20,
      backgroundColor: "#2F3133",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
  },
  botao:{
    backgroundColor: '#66bd6d',
    borderRadius:25,
    fontSize:18,
    color:'#FFF'
  },
  logo:{
    width:45, 
    height:38,
    margin:5
  },
  textlogo:{
    color:'#783560', 
    fontSize:15,
    margin:2
  },
  pesquisa:{
    height:32, 
    width:225,
    padding: 7, 
    margin:2, 
    backgroundColor:'#FFF',
    top:6, 
    borderRadius:13
  },
  placeholderView:{
    flexDirection:'row',
    backgroundColor:'#F0F0F0',
    bottom:25,
    justifyContent:'space-around',
    width:275,
  },
  situacao:{
    color:'black',
    fontSize:16,
  },
  config:{
    backgroundColor:'#18191a',
    borderWidth:2,
    borderColor:'#2F3133',
    justifyContent:'flex-start',
    textAlign:'left',
    fontSize:22, 
    fontWeight:'bold',
    padding:5,
    color:'#FFF',
    margin:5 }
}
);
