import * as React from 'react';
import {useState, useEffect} from 'react';
import { StyleSheet, Text,View,Modal,TouchableOpacity,SafeAreaView,TextInput,Alert,ScrollView, Image, Pressable, Details, RefreshControl} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import logo from '../../assets/logo.png';
import bap from'../../assets/Livros/Batalha_Apoc.jpg';
import pilares from '../../assets/Livros/Pilares.jpg';
import BatalhaApocalipse from '../BatalhaApocalipse';
import user from '../User/index'
import tesla from '../../assets/User/tesla.jpg'
import Carousel from 'react-native-snap-carousel';
const items = [
  {
    image: require('../../assets/Livros/Eu_meu_coração.jpg'),
  },
  {
    image: require('../../assets/Livros/mindset.jpg')
  },
  {
    image: require('../../assets/Livros/neuromancer.jpg')
  }
];

function MyCarousel() {

  function renderItem({item}) {
    return (
      <View >
        <Image style={{height:300, width:200, alignSelf:'center'}} source={item.image}/>
      </View>
    );
  }

  return (
    <Carousel
    layout={'tinder'} 
    layoutCardOffset={90}
      data={items}
      renderItem={renderItem}
      sliderWidth={400}
      itemWidth={400}
      margin={15}
      loop={true}
      loopClonesPerSide={2}
      />
  );
}




export default function Home({navigation}){
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const [iconText, setIcon]= useState('add-circle-outline')
  const [iconText2, setIcon2]= useState('add-circle-outline')
  const [line, setLine]=useState(3)
  const [line2, setLine2]=useState(3)
  const [modalVisible, setModalVisible] = useState(false);
  const [favoritar, setFavoritar] =useState('#CCC');
  const [favoritar2, setFavoritar2] =useState('#CCC');
  const [dispo, setDispo] =useState('Disponivel');
  const [devo, setDevo] =useState('Emprestar');
  const [dispo2, setDispo2] =useState('Disponivel');
  const [devo2, setDevo2] =useState('Emprestar');
  const [modal, setModal] =useState('Livro Agendado Para Retirada!');
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.containerSearch}>
        <TouchableOpacity onPress={()=>navigation.navigate(Home)}>
          <Image source={logo} style={styles.logo}/>
          </TouchableOpacity>
          <Text style={styles.textlogo}>Bibiotec{'\n'}   BIT</Text>
          <TouchableOpacity onPress={()=>navigation.navigate(user)}>
          <Image source={tesla} style={styles.imgPerfil}/>
          </TouchableOpacity>
        </View>
      </SafeAreaView >
      <ScrollView refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>   

    <View style={styles.Carousel}>
      <Text style={{color:'#000', fontSize:22}}>Melhores Avaliados</Text>
      <MyCarousel />
    </View>
        <View style={styles.ContainerBody}>
          <Text style={styles.titulo}>A Batalha do Apocalipse - Eduardo Spohr  <Ionicons name='heart' 
            style={{color:favoritar}} 
            onPress={()=> {if(setFavoritar){
              if(favoritar=="red"){
                setFavoritar('#ccc')
                }
                else{
                  setFavoritar('red')
                }
              }}}size={25}></Ionicons>
          </Text>
          <TouchableOpacity onPress={()=>navigation.navigate(BatalhaApocalipse)}><Image source={bap} style={styles.livro}></Image></TouchableOpacity>
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
          <Text numberOfLines={line} onPress={()=>{if(setLine){
            if(line==3){
              setLine(null)
            }
            else{
              setLine(3)
            }
          }}}style={styles.Sinopse}  ellipsizeMode='tail'>Tudo começou há muitos e muitos anos,  há tantos anos quanto o número de estrelas no céu, o Paraíso Celeste foi palco de um terrível levante. Um grupo de anjos guerreiros, amantes da justiça e da liberdade, desafiou a tirania dos poderosos arcanjos, levantando armas contra seus opressores. Expulsos, os renegados foram forçados ao exílio, e condenados a vagar pelo mundo dos homens até o dia do Juízo Final.
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

          <Text> </Text>
        
          <Text style={styles.titulo}>Os Pilares da Terra: Volume único - Ken Follett  <Ionicons name='heart' 
            style={{color:favoritar2}} 
            onPress={()=>{if(setFavoritar2){
              if(favoritar2=="red"){
                setFavoritar2('#CCC')
                }
                else{
                  setFavoritar2('red')
                  }
            }}}size={25}></Ionicons>
          </Text>
          <Image source={pilares} style={styles.livro}></Image>
          <View style={styles.placeholderView}>
            <Text style={styles.situacao}>{dispo2}</Text>
          </View>
          <View style={styles.stars}>
            <Ionicons  name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star' color={'#E6DE00'} size={25}/>
            <Ionicons name='star-half-sharp' color={'#E6DE00'} size={25}/>
          </View>
          <Text numberOfLines={line2} onPress={()=>{if(setLine2){
            if(line2==3){
              setLine2(null)
            }
            else{
              setLine2(3)
            }
          }}}style={styles.Sinopse}  ellipsizeMode='tail'>Neste livro, o autor procura traçar o painel de um tempo varrido por conspirações, jogos intrincados de poder, violência e surgimento  de uma nova ordem social e cultural, buscando captar simultaneamente o que acontece nos castelos, feiras, florestas e igrejas. Philip, prior de Kingsbridge, luta contra tudo e todos para construir um templo grandioso a Deus. A galeria de personagens gravitando em torno da catedral inclui Aliena, a bela herdeira banida de suas terras, Jack, seu amante, Tom, o construtor, William o cavaleiro boçal, e Waleran, o bispo capaz de tudo para pavimentar seu caminho até o lugar do Papa, em Roma. Como painel de fundo, uma Inglaterra sacudida por lutas entre os sucessores prováveis ao trono que Henrique I deixou sem descendentes.
          </Text>
        
          <TouchableOpacity style={styles.botao}onPress={()=>{if(setDispo){
            if(dispo2=='Disponivel'){
              setDispo2('Emprestado')
              setDevo2('Devolver')
              setModalVisible(true)
              setModal('Livro Agendado Para Retirada!')
              setIcon2('return-down-forward')
            }
            else{
              setDispo2('Disponivel')
              setDevo2('Emprestar')
              setModalVisible(true)
              setModal('Digite o Codigo seguinte na Tela: 1001001')
              setIcon2('add-circle-outline')
            }
          }}}>
            <Text style={{color:'#FFF', fontSize:18, margin:0}}>{devo2}{' '}
              <Ionicons name={iconText2} color={'#FFF'} size={18}></Ionicons>
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text>{'\n'}</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    
  },
  containerSearch:{
    width:'100%',
    flexDirection:'row',
    backgroundColor: '#e0e0e0',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  livro:{
    alignItems:'center',
    width:275,
    height:375,
  }, 
  titulo:{
    alignItems:'center',
    fontSize:27,
    color:'#000',
  },
  ContainerBody:{
    backgroundColor:'#fff',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-around',
    width:'100%'
    

  },
  Sinopse:{
    fontSize:18.5,
    color: '#000',
    textAlign:'justify',
    margin:8,
    backgroundColor:'#e6e6e6'
  },
  footer:{
    backgroundColor:'#fff',
    fontSize:15,

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
    borderRadius:14

  },
  logo:{
    width:45, 
    height:38,
    margin:3
  },
  textlogo:{
    color:'#783560', 
    fontSize:15,
    margin:3,
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
  imgPerfil:{
    height:32,
    width:32,
    borderRadius:50,
    justifyContent:'flex-start',
  },
  stars:{
    justifyContent:'flex-start',
    flexDirection:'row',
    right:77.5
  },
  Carousel:{
    flex:1,
    alignItems:'center',
    backgroundColor:'#e0e0e0',
    justifyContent:'space-around',
    width:'100%'
  },
}
);
