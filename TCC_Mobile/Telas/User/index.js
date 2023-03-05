
import { StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView,TextInput,Alert,ScrollView, Image, Pressable, Details} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

import logo from '../../assets/logo.png';
import tesla from '../../assets/User/tesla.jpg';
import neuro from '../../assets/Livros/neuromancer.jpg';
import mindest from '../../assets/Livros/mindset.jpg';
import ruina from '../../assets/Livros/Ruína_ascensão.jpg';
import coracao from '../../assets/Livros/Eu_meu_coração.jpg';
import starWars from '../../assets/Livros/Star_Wars.png';
import bap from '../../assets/Livros/Batalha_Apoc.jpg';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import croacia from '../../assets/User/croacia.jpg'
import BatalhaApocalipse from '../BatalhaApocalipse';
import editPerf from '../Opçoes/Editar Perfil';
import Home from '../Inicio/index';


export default function User({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
          <Image source={logo} style={styles.logo}/>
          </TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
        </View>
      </SafeAreaView>
      
      <ScrollView>     
        <View style={styles.ContainerBody}>
          <View style={styles.Perfil}>
            <Image source={tesla} style={styles.imgPerfil}/>
            <Text style={styles.namePerfil}>Nikola Tesla</Text>
            <TouchableOpacity onPress={()=> navigation.navigate(editPerf)}>
              <Ionicons name='pencil' size={18.5} style={{left:75, top:8, color:'#000',}}/>
            </TouchableOpacity>
            <Text style={{top:45, right:125, fontWeight:'100',fontSize:14.5 ,color:'#000', }}>Inventor{'\n'}10/07/1856 <MaterialCommunityIcons name="zodiac-cancer" size={15} color='#3C8EE5'/>{'\n'}Croácia</Text><Image source={croacia} style={{width:19, height:15, top:82, right:173,color:'#FFF', }}></Image>
          </View>
        </View>
        <View style={styles.ContainerFav}>
          <Text style={styles.titulo}>Livros Favoritos</Text>
          <View style={styles.Containerlivros}>
            <Image style={styles.livros} source={neuro}></Image>
            <Image style={styles.livros} source={mindest}></Image>
            <Image style={styles.livros} source={coracao}></Image>
          </View>
            <View style={styles.Containerlivros}>
            <Image style={styles.livros} source={ruina}></Image>
            <Image style={styles.livros} source={starWars}></Image>
            <TouchableOpacity onPress={()=>navigation.navigate(BatalhaApocalipse)}>
            <Image style={styles.livros} source={bap}></Image>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#FFF',
    alignItems: 'center',
    width:'100%',
    justifyContent: 'space-around',
    bottom:1,
    
  },
  containerSearch:{
    flexDirection:'row',
    width:'100%',
    backgroundColor: '#E0E0E0',
    alignItems:'center',
    justifyContent:'space-evenly'
  }, 
  titulo:{
    alignItems:'center',
    fontSize:27,
    color:'#000',
    borderBottomColor:'#CCC',
    borderBottomWidth:3
  },
  ContainerBody:{
    backgroundColor:'#fff',
    flexDirection:'row',
    justifyContent:'space-around',
    width:'100%'
  },
  footer:{
    fontSize:18.5,
    flexDirection:'column'
  },
  logo:{
    width:45, 
    height:38,
    margin:5,
  },
  textlogo:{
    color:'#783560', 
    fontSize:15,
    margin:5
  },
  ContainerFav:{
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
    right:105,
    backgroundColor:'#e6e6e6'
  },
  livros:{
    width:120,
    height:150,
    margin:5,
    resizeMode: "contain",
    

  },
  Containerlivros:{
    flex:1,
    flexDirection:'row',
    margin:6,
    justifyContent:'space-around',
    backgroundColor:'#404040'

  },
  Perfil:{
    flex:1,
    flexDirection:'row',
    
  },
  imgPerfil:{
    height:100,
    width:100,
    borderRadius:50,
    justifyContent:'flex-start',
    
  },
  namePerfil:{
    fontSize:22,
    fontStyle:'italic',
    fontWeight:'200',
    top:2,
    left:65,
    color:'#000',
  }
}
);
