import { useState } from 'react'
import Header from './components/header'
import Section from './components/section'
import List from './components/list'
import './style.css'


  const Listadejogos = [
    {
      url:'https://www.twitch.tv/directory/game/League%20of%20Legends', image:'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg', alt:'Imagem do jogo League of Legends'
    },
    {
      url:"https://www.twitch.tv/directory/game/VALORANT", image:"https://static-cdn.jtvnw.net/ttv-boxart/516575-188x250.jpg", alt:"Imagem do jogo Valorant"
    },
    {
     url:"https://www.twitch.tv/directory/game/Minecraft", image:"https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg", alt:"Imagem do jogo Minecraft"
    },
    {
      url:"https://www.twitch.tv/directory/game/Teamfight%20Tactics", image:"https://static-cdn.jtvnw.net/ttv-boxart/513143-188x250.jpg", alt:"Imagem do jogo TFT"
    }
  ]

  const ListaCanais = [
    {
      url:'https://www.twitch.tv/maykbrito', image:'https://static-cdn.jtvnw.net/jtv_user_pictures/9ce11a2b-ec84-44b1-9c76-b8d29df5fef0-profile_image-150x150.png', alt:'Imagem de Mayk Brito'
    },
    {
      url:"https://www.twitch.tv/alanzoka", image:"../../public/gaules.jpg", alt:"Imagem do Gaules", 
    },
    {
     url:"https://www.twitch.tv/cellbit", image:"./../public/alanzoka.png", alt:"Imagem do Alanzoka"
    }
  ]
  const listaRedes = [
    {
      url:'#', image:'../../public/instagram.svg', alt:'Instagram'
    },
    {
      url:"#", image:"../../public/youtube.svg", alt:"Youtube", 
    }
   
  ]

function App() {

  return (
    <div className="App">
         <Header />
     
     <main>
        <div className="jogos">
           <Section title='Meus jogos' subtitle='Lista de canais e transmissões que não perco!' className='games-list'>
            {
              Listadejogos.map(function(item){
                return(
                 < List
                    url = {item.url}
                    image = {item.image}
                    alt = {item.alt}
                    />
                )
              })
              }
              
            </Section>
        </div>


        <div className="stremear">
          <Section title='Canais e streamers' subtitle='Transmissão gratuita do Youtube sobre programação, design e outras coisas'  className='channel-list'>
          {
              ListaCanais.map(function(item){
                return(
                 < List
                    url = {item.url}
                    image = {item.image}
                    alt = {item.alt}
                    />
                )
              })
              }
          </Section>
        </div>
        <div className="redes">
          <Section title='Minhas redes' subtitle='Se conecte comigo agora mesmo!' className='redes-list'>
          {
              listaRedes.map(function(item){
                return(
                 < List
                    url = {item.url}
                    image = {item.image}
                    alt = {item.alt}
                    />
                )
              })
              }

          </Section>
        </div>
     </main>
     </div>
  )
}

export default App
