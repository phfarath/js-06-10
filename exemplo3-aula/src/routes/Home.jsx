import {useState, useEffect} from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from '../routes/estilos.module.css'


function Home (){

  /*Hook- useState */
  const [slidePreview, setSlidePreview]= useState(1);

  /*criando o objeto de imagens*/
const imagens = [
  {id:'1', image:'./src/assets/iStock-536613027.webp'},
  {id:'2', image:'./src/assets/iStock-536613027.webp'},
  {id:'3', image:'./src/assets/iStock-536613027.webp'}
];

/*criando o efeito colateral*/

useEffect(()=>{
//criando a função que vai mudar o slideShow 
  function handleResize(){
    if(window.innerWidth <720){
      setSlidePreview(1);
    }else{
      setSlidePreview(2);
    }
  }
  //chamando a função
  handleResize();

  // evento que vai modificar toda vez que diminuir a tela
  window.addEventListener('resize',handleResize);

  /*como estamos usando useEffect é bom sair do evento e desmontar para 
  não perder a performace*/
  return ()=>{
    window.removeEventListener('resize',handleResize);
  }
// retorna um array vazio
}, [])

  return(
    <section>
    <Swiper
        slidePreview={slidePreview}
        pagination={{clickable:true}}
        navigation
      >
        {imagens.map((item) =>(       
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="slide" className={styles.slideItem}/>          
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
export default Home