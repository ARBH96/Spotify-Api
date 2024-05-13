import React, { useState } from 'react';
import './App.css';
import { SongCards } from './Components/SongCards';

function App() {
  const [search, setSearch] = useState('');
  const [exist, setExist] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  async function handleSearch(e) {
    e.preventDefault();
    if (!search.trim()) {
      alert('Por favor, escribe el nombre de la canción o artista.');
      return;
    }

    try {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'ddd26289e6msh61a5945d17a912ep1e94fcjsnf010c48fe12f',
          'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
      };

      const url = `https://spotify23.p.rapidapi.com/search/?q=${encodeURIComponent(search)}&type=multi&offset=0&limit=20&numberOfTopResults=5`;

      const res = await fetch(url, options);
      const data = await res.json();

      if (data && data.tracks && data.tracks.items && data.tracks.items.length > 0) {
        setExist(true);
        setSearchResults(data.tracks.items);
      } else {
        setExist(false);
        setSearchResults([]);
        alert('No se encontraron resultados.');
      }
    } catch (error) {
      console.error('Error al buscar:', error);
      alert('Ocurrió un error al buscar. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  return (
    <div className="App">
      <h1>Busca a tus artistas en Spotify API</h1>
      <h2>Nueva Música</h2>
      
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Escribe el nombre de la canción o artista"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Tarjetas de datos curiosos */}
      <div className='datos-curiosos-container'>
        <h2>🎶😎Datos Curiosos 🎶🤔</h2>
        <h2>En este apartado encontrarás algunos datos curiosos de artistas del momento</h2>
        <div className='datos-curiosos'>
        <div className="card-grid">
              <div className="card">
              <div className="card-inner">
              <div className="card-front">
              <img src="https://media.vogue.mx/photos/64e15be96e16315ea8208e2c/1:1/w_1995,h_1995,c_limit/taylor-swift-cantante.jpg" alt="Taylor Swift"></img>
              </div>
              <div className="card-back">
              <h2>Taylor Swift</h2>
              <p>Ha sido la única intérprete solista que ha ganado el premio Grammy al Álbum del año tres veces por sus grabaciones en solitario. En sus principios Taylor comenzó como poeta, pues con tan solo 10 años escribió el poema “Monster in my closet”, escrito con el que ganó un concurso nacional de poesía.</p>
              </div>
              </div>
              </div>
              
              <div className="card">
              <div className="card-inner">
              <div className="card-front">
              <img src="https://images.ecestaticos.com/zTjSdAYEOvzkzE04mgekSsq3miw=/0x0:1024x683/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fdc3%2F373%2F8a0%2Fdc33738a09212627f6f6ee1a2a5afdf4.jpg"></img>
              </div>
              <div className="card-back">
              <h2>Shakira</h2>
              <p>Shakira ha participado en tres mundiales de fútbol como cantante de diversos temas del espectáculo deportivo más masivo a nivel mundial. La cantante participó en la película Zootopia, donde le dio voz a Gazelle, una estrella pop en la película animada de Disney. En este largometraje, además, interpretó la canción Try Everything.</p>
              </div>
              </div>
              </div>
              
              <div className="card">
              <div className="card-inner">
              <div className="card-front">
              <img src="https://www.dondeir.com/wp-content/uploads/2022/04/daddy-yankee-en-el-foro-sol-cdmx-fechas-y-precios.jpg" alt="Daddy Yankee"></img>
              </div>
              <div className="card-back">
              <h2>Daddy Yankee</h2>
             <p>Su primer disco fue lanzado en 1995 bajo el nombre de No mercy. Este proyecto musical fue producido por Dj playero.</p>
             </div>
             </div>
             </div>
            
             <div className="card">
              <div className="card-inner">
            <div className="card-front">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Don_Omar_-_The_Kingdom_%28Official_Q_%26_A%29.png/230px-Don_Omar_-_The_Kingdom_%28Official_Q_%26_A%29.png" alt="Don Omar"></img>
            </div>
           <div className="card-back">
            <h2>Don Omar</h2>
             <p>A la fecha, Danza Kuduro es su canción con mayor número de reproducciones en YouTube. Con más de 10 años desde su publicación (fue lanzada en 2010) tiene más de mil millones de reproducciones.</p>
             </div>
             </div>
             </div>
           
             <div className="card">
             <div className="card-inner">
             <div className="card-front">
            <img src="https://imagenes.auditorio.com.mx/cartelera/2023/Camila/CAMILA-1510-MOBILE.jpg" alt="Camila"></img>
            </div>
            <div className="card-back">
            <h2>Camila</h2>
             <p>Camila es uno de los grupos más exitosos del pop en México y Latinoamérica de la actualidad, uno que con su romanticismo en música y letra ha conquistado al público.</p>
             </div>
             </div>
             </div>
           

            <div className="card">
            <div className="card-inner">
             <div className="card-front">
            <img src="https://www.debate.com.mx/__export/1596930267701/sites/debate/img/2020/08/08/reik_crop1596929796817.jpg_423682103.jpg" alt="Reik"></img>
            </div>
            <div className="card-back">
            <h2>Reik</h2>
             <p>Inolvidable” canción que debido al éxito, deben tocar en cada una de sus presentaciones.</p>
             </div>
             </div>
             </div>
          
           <div className="card">
           <div className="card-inner">
             <div className="card-front">
            <img src="https://media.vogue.mx/photos/65f5f856d565e7e156066cb0/2:3/w_2560%2Cc_limit/belinda-vogue-mexico.jpg" alt="Belinda"></img>
            </div>
            <div className="card-back">
            <h2>Belinda</h2>
             <p>Su primera novela fue en “Amigos por siempre” y de allí en adelante los éxitos no se detuvieron para ella en otras producciones como “Cómplices al rescate”. A lo largo de su carrera se han conocido varios romances donde Belinda ha estado involucrada con personalidades.</p>
             </div>
             </div>
             </div>
        
             <div className="card">
             <div className="card-inner">
             <div className="card-front">
            <img src="https://www.billboard.com/wp-content/uploads/2023/07/Peso-Pluma-latin-ama-2023-billboard-espanol-1548.jpg?w=942&h=623&crop=1" alt="Peso Pluma"></img>
            </div>
            <div className="card-back">
            <h2>Peso Pluma</h2>
             <p>Con tan solo 23 años, Peso Pluma ha logrado hitos significativos, como superar los 40 millones de oyentes en Spotify. Su carrera despegó en 2020 con la publicación de su primer álbum en vivo, seguido por varios proyectos que lo posicionaron en la escena musical.</p>
             </div>
             </div>
             </div>
            
           <div className="card">
           <div className="card-inner">
             <div className="card-front">
            <img src="https://media.vogue.mx/photos/5e256a50867e820009c44ae1/2:3/w_2560%2Cc_limit/lady-gaga-glam-squad-para-premios.jpg" alt="Lady Gaga"></img>
            </div>
            <div className="card-back">
            <h2>Lady Gaga</h2>
             <p>Escribió canciones para New Kids On The Block, Pussycat Dolls, Fergie y Jennifer López. Escribió “Just Dance” en 10 minutos después de una noche de fiesta. Tiene múltiples apodos, entre ellos: Mother Monster, Gagaloo, Loopy, Rabbit Teeth y Little Mermaid.</p>
             </div>
             </div>
             </div>
          
             <div className="card">
             <div className="card-inner">
             <div className="card-front">
            <img src="https://cadenaser.com/resizer/PwxnkCvlQZoDW-8XIpTVdaKfm5g=/736x552/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/prisaradio/3GIJROGWAJDMLKH3HFHFT2U2GE.JPG" alt="Beyonce"></img>
            </div>
            <div className="card-back">
            <h2>Beyonce</h2>
           <p>Fue la primera mujer no modelo ni deportista que apareció en la portada de Sports Illustrated. El mayor éxito de su vida fue el primer sencillo de toda ella, Crazy in Love, de 2003.</p>
          </div>
          </div>
             </div>
             
             <div className="card">
             <div className="card-inner">
             <div className="card-front">
            <img src="https://www.hola.com/imagenes/biografias/michael-jackson/79629-jackson10.jpg" alt="Michael Jackson"></img>
            </div>
            <div className="card-back">
            <h2>Michael Jackson</h2>
             <p>Los sonidos que se escuchan al principio de la grabación de «Smooth Criminal» son los latidos del corazón de Michael Jackson. La canción es perteneciente al disco «Bad», el segundo más vendido en la historia del músico, después de «Thriller».</p>
             </div>
             </div>
             </div>
            
            <div className="card">
            <div className="card-inner">
             <div className="card-front">
             <img src="https://media.glamour.mx/photos/635bda0eaac1b04410bd0524/1:1/w_3000,h_3000,c_limit/rihanna-new-song-2022-plack-panther-lift-me-up-wakanda-forever-gettyimages-1436969477.jpg" alt="Rihanna"></img>
             </div>
             <div className="card-back">
             <h2>Rihanna</h2>
             <p>Cuando era menor, ella venía ropa con su padre Ronald Fenty en un puesto callejero. En 2004, Rihanna participó en un concurso de belleza en su escuela secundaria, el cual ganó al ser reconocida como la más fotogénica y mejor vestida del certamen.</p>
             </div>
             </div>
             </div>   
    </div>
          </div>
            <hr />
    </div>
      
      {/* Tarjetas de resultados de búsqueda */}
      {exist && (
        <SongCards
          searchResults={searchResults}
        />
      )}
    </div>
  );
}

export default App;
