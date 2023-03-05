
import React, {useState,useEffect} from 'react';
import { StyleSheet,Text,View,Modal,TouchableOpacity,SafeAreaView,TextInput,Alert,ScrollView, Image, Pressable, Details} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Fontisto } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import logo from '../../assets/logo.png';
import bap from'../../assets/Livros/Batalha_Apoc.jpg';
import user from '../User';
import tesla from '../../assets/User/tesla.jpg';
import Home from '../Inicio/index';

export default function BatalhaApocalipse({navigation}) {
  const [iconText, setIcon]= useState('add-circle-outline')
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritar, setFavoritar]=useState('#CCC');
  const [dispo, setDispo] =useState('Disponivel');
  const [devo, setDevo] =useState('Emprestar');
  const [modal, setModal] =useState('Livro Agendado Para Retirada!');
  const [line, setLine]=useState(1)
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
          <Image source={logo} style={styles.logo}/>
          </TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}    BIT</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(user)}>
          <Image source={tesla} style={styles.imgPerfil}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      
      <ScrollView>     
        <View style={styles.ContainerBody}>
          <Text style={styles.titulo}>A Batalha do Apocalipse - Eduardo Spohr  <Ionicons name='heart' 
            style={{color:favoritar}} 
            onPress={()=> {if(setFavoritar){
              if(favoritar=="red"){
                setFavoritar('#CCC')
                }
                else{
                  setFavoritar('red')
                }
              }}}size={25}></Ionicons>
          </Text>
          <Image source={bap} style={styles.livro}></Image>
          <View style={styles.placeholderView}>
              <Text style={styles.situacao}>{dispo}</Text>
          </View>
          <View style={styles.stars}>
            <Ionicons  name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star-half-sharp' color={'#E6DE00'} size={25}/>
          </View>
          <View style={styles.viewinfo}>
            <Text style={styles.info}>
              Número de páginas{'\n'}<MaterialCommunityIcons name="book-open-page-variant-outline" size={18} color="#FFF" />
              {'\n'}588 páginas
            </Text>
            <Text style={styles.info}>
              Idioma{'\n'}
              <Fontisto name="world-o" size={18} color="#FFF" />
              {'\n'}Português
            </Text>
            <Text style={styles.info}>
              Editora{'\n'}
              <MaterialCommunityIcons name="factory" size={18} color="#FFF" />
              {'\n'}Verus
            </Text>
            <Text style={styles.info}>
              Data da publicação{'\n'}
              <AntDesign name="calendar" size={18} color="#FFF" />
              {'\n'}28 junho 2010
            </Text>
            <Text style={styles.info}>
              Dimensões{'\n'}
              <MaterialCommunityIcons name="move-resize" size={18} color="#FFF" />
              {'\n'}23 x 15.4 x 3.8 cm
            </Text>
            <Text style={styles.info}>  
              ISBN-10{'\n'}
              <AntDesign name="barcode" size={18} color="#FFF" />
              {'\n'}9788576860761
            </Text>
          </View>
          <View style={styles.containerAutor}>
            <Text style={styles.Autor}>
            Eduardo Spohr
            </Text>
            <Text style={styles.sobreAutor} numberOfLines={line} onPress={()=>{if(setLine){
            if(line==1){
              setLine(null)
            }
            else{
              setLine(1)
            }
          }}}>
            Eduardo Spohr nasceu em 1976, no Rio de Janeiro. Filho de um piloto de aviões e uma comissária de bordo, teve a oportunidade de viajar pelo mundo, conhecendo culturas e povos diferentes. A paixão pela literatura e o fascínio pelo estudo da história o levaram a cursar comunicação social. Começou a trabalhar em agências de publicidade, mas acabou, gradualmente, migrando para o jornalismo. Formou-se pela PUC-Rio em 2001 e se especializou em mídias digitais. Trabalhou como repórter no Cadê Notícias, StarMedia e iG, como analista de conteúdo do iBest e depois como editor do portal Click 21. Participante regular do NerdCast, o podcast do site Jovem Nerd, é consultor de roteiro e ministra o curso “Estrutura literária: a jornada do herói no cinema e na literatura”, nas Faculdade Hélio Alonso (Facha), do Rio de Janeiro.
            </Text>
          </View>
          <Text style={styles.Sinopse}>Tudo começou há muitos e muitos anos,  há tantos anos quanto o número de estrelas no céu, o Paraíso Celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio, e condenados a vagar pelo mundo dos homens até o dia do Juízo Final.
          {'\n'}
          Mas eis que chega o momento do Apocalipse, o tempo do ajuste de contas, o dia do despertar do Altíssimo. Único sobrevivente do expurgo, o líder dos renegados é convidado por Lúcifer, o Arcanjo Negro, a se juntar às suas legiões na batalha do Armagedon, o embate final entre o Céu e o Inferno, a guerra que decidirá não só o destino do mundo, mas o futuro do universo.
          {'\n'}
          Das ruínas da Babilônia ao esplendor do Império Romano; das vastas planícies da China aos gelados castelos da Inglaterra medieval. A Batalha do Apocalipse não é apenas uma viagem pela história humana, mas é também uma jornada de conhecimento, um épico empolgante, cheio de lutas heroicas, magia, romance e suspense.
          {'\n'}
          A batalha do apocalipse colocará o estreante Eduardo Spohr ao lado dos mais criativos ficcionistas da nossa literatura.
          </Text>
          
          <Modal animationType='slide' transparent={true} visible={modalVisible} onRequestClose={()=>{Alert.alert('Modal has been closed'); setModalVisible(!modalVisible);}}>
            <View style={styles.modalView}>
              <Text style={{color:'#FFF', fontSize:15, }}>{modal}{'\n'}</Text>
              <Pressable style={styles.botao} onPress={() => setModalVisible(!modalVisible)}>
                <Text style={{color:'#FFF', size:25, fontSize:15, margin:2}}>Fechar</Text>
              </Pressable>
            </View>
          </Modal>
          <TouchableOpacity style={styles.botao} onPress={()=>{if(setDispo){
            if(dispo=='Disponivel'){
              setDispo('Emprestado')
              setDevo('Devolver')
              setModalVisible(true)
              setModal('Livro Agendado Para Retirada!')
              setIcon('return-down-forward')
            }
            else{
              setDispo('Disponivel')
              setDevo('Emprestar')
              setModalVisible(true)
              setModal('Digite o Codigo seguinte na Tela: 1001001')
              setIcon('add-circle-outline')
            }
          }}}>
            <Text style={{color:'#FFF', fontSize:18, margin:2}}>{devo}
              <Ionicons name={iconText} color={'#FFF'} size={17}></Ionicons>
            </Text>
          </TouchableOpacity>
          <Text></Text>
        </View>
        <Text style={styles.comentariostilte}>Comentarios:{'\n'}</Text>
        
        <View style={styles.viewComentarios}>
          <Image source={tesla} style={styles.imgPerfil}/>
          <TouchableOpacity onPress={()=>navigation.navigate(user)}>
            <Text style={{left:38,bottom:32, color:'#000', fontSize:22}}>Nikola Tesla</Text>
          </TouchableOpacity>
          <Ionicons name='star' size={18} color='#E6DE00' style={{bottom:30, left:38}}>
          <Ionicons name='star' size={18} color='#E6DE00'>
          <Ionicons name='star' size={18} color='#E6DE00'>
          <Ionicons name='star' size={18} color='#E6DE00'>
          <Ionicons name='star' size={18} color='#E6DE00'>
          </Ionicons>
          </Ionicons>
          </Ionicons>
          </Ionicons>
          </Ionicons>
          <Text style={{fontSize:15, bottom:50, left:130 ,color:'#000'}}> Recomendo</Text>
          <Text style={styles.comentarios}>
          Um dos melhores livros de ficção que já li, quem curte esse gênero vai gostar muito.
          Também recomendo a trilogia Filhos do Éden, do mesmo autor, a estória se passa no mesmo universo do livro A batalha do Apocalipse.
          </Text>
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
  livro:{
    alignItems: 'center',
    width:275,
    height:375,
  }, 
  titulo:{
    alignItems:'center',
    fontSize:27,
    color:'#000',
  },
  ContainerBody:{
    top:8,
    bottom:25,
    backgroundColor:'#FFF',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%',
  },
  Sinopse:{
    backgroundColor:'#e8e8e8',
    fontSize:18.5,
    color: '#303030',
    textAlign:'justify',
    margin:20,
  },
  footer:{
    fontSize:12,
    flexDirection:'column'

  },
  modalView: {
    marginTop: 300,
    margin: 55,
    backgroundColor: "#18191a",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    modalView: {
      margin: 20,
      backgroundColor: "#18191a",
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
    backgroundColor: '#783560',
    borderRadius:14,

    },
  logo:{
    width:45, 
    height:38,
    margin:2
  },
  textlogo:{
    color:'#783560', 
    fontSize:15,
    margin:2
  },
  placeholderView:{
    flexDirection:'row',
    backgroundColor:'#404040',
    bottom:21.5,
    justifyContent:'space-around',
    width:275,
  },
  situacao:{
    color:'#FFF',
    fontSize:16,
  },
  viewinfo:{
    flex:1,
    flexDirection:'row',
    position:'relative',
    margin:5,
    flexWrap:'wrap',
    justifyContent:'space-around',
    backgroundColor:'#404040'

  },
  info:{
    color:'#FFF',
    fontSize:15.4,
    fontStyle:'normal',
    margin:3,
    position:'relative',
    alignItems:'center',
    alignContent:'center',
    alignContent:'center',
    justifyContent:'center',
    textAlign:'center',

  },
  comentarios:{
    color:'#000',
    fontSize:18,
    fontStyle:'normal',
    margin:5,
    position:'relative',
    textAlign:'justify',
    bottom:40,
    padding:5
  },
  viewComentarios:{
    backgroundColor:'#E0E0E0',
    borderWidth:2,
    borderColor:'#CCC',
    borderRadius:20,
    marginLeft:15,
    marginRight:15,
    padding:0,
    bottom:20
  },
  Autor:{
    color:'#000',
    top:20,
    fontSize:23.5,
    fontWeight:'bold',
    position:'relative',
    textAlign:'center',

  },
  sobreAutor:{
    color:'#000',
    fontSize:16.5,
    fontStyle:'normal',
    margin:25,
    textAlign:'justify',
    borderBottomWidth:3.5,
    borderBottomColor:'#ccc'

  },
  comentariostilte:{ 
    justifyContent:'center',
    textAlign:'center',
    fontSize:22, 
    fontWeight:'bold',
    padding:0,
    color:'#000' 
  },
  stars:{
    justifyContent:'flex-start',
    flexDirection:'row',
    right:77.5
  },
  imgPerfil:{
    height:32,
    width:32,
    borderRadius:50,
    justifyContent:'flex-start',
  },
  containerAutor:{
    backgroundColor:'#E0E0E0',
    justifyContent:'space-around',
  }
}
);
