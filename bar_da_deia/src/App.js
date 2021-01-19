import './App.css';

function App() {
  const playVideos = () => {
    const audio = document.querySelector('audio');
    audio.volume = 0.4;
    const videos = document.querySelectorAll('video');

    console.log(audio.paused);
    console.log(audio.currentTime);
    if (audio.paused && audio.currentTime === 0) {
      audio.play();

      for (let i = 0; i < videos.length; i++) {
        const currentVideo = videos[i];
        currentVideo.play();
      }
      setTimeout(() => {
        changeVideo('0');
      }, 5000);
    } else if (!audio.paused) {
      audio.pause();

      for (let i = 0; i < videos.length; i++) {
        const currentVideo = videos[i];
        currentVideo.pause();
      }
    } else {
      audio.play();

      for (let i = 0; i < videos.length; i++) {
        const currentVideo = videos[i];
        currentVideo.play();
      }
    }
  };

  const unchangeVideo = (e) => {
    const video = e.target;
    const nextId = Number(e.target.id) + 1;
    video.src = `/videos/${e.target.className}_0.mp4`;
    video.loop = true;
    video.muted = true;
    video.play();
    if (nextId === 11) {
      changeVideo('0');
    } else {
      changeVideo(nextId.toString());
    }
  };

  const changeVideo = (id) => {
    const video1 = document.getElementById(`${id}`);
    video1.src = `/videos/${video1.className}_1.mp4`;
    video1.loop = false;
    video1.muted = false;
    video1.play();
    video1.addEventListener('ended', unchangeVideo, false);
  };
  return (
    <main className="background">
      <audio src="/static_resources/burburinho.m4a" loop />
      <img
        src="/static_resources/folhas_1.png"
        alt="folhas"
        type="image/png"
        className="folhas1"
      />
      <img
        src="/static_resources/flowers_frame.png"
        alt="frame"
        type="image/png"
        className="frame"
      />
      <img
        src="/static_resources/flowers_frame_v.png"
        alt="frame"
        type="image/png"
        className="frameV"
      />
      <img
        src="/static_resources/sol.png"
        alt="sol"
        type="image/png"
        className="sol"
      />
      <img
        src="/static_resources/summer.png"
        alt="faixa_summer"
        type="image/png"
        className="faixaSummer"
      />
      <button onClick={playVideos}>CLIQUE AQUI</button>
      <img
        src="/static_resources/folhas_2.png"
        alt="folhas"
        type="image/png"
        className="folhas2"
      />
      <section className="friends">
        <div className="videoWrapper">
          <video
            id="3"
            className="bianca"
            src="/videos/bianca_0.mp4"
            muted
            loop
          >
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="4" className="quel" src="/videos/quel_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="5" className="taina" src="/videos/taina_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="8" className="maira" src="/videos/maira_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="6" className="carol" src="/videos/carol_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="7" className="thay" src="/videos/thay_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="2" className="brau" src="/videos/brau_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="0" className="ana" src="/videos/ana_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="10" className="pri" src="/videos/pri_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video
            id="9"
            className="marina"
            src="/videos/marina_0.mp4"
            muted
            loop
          >
            Vídeo não suportado.
          </video>
        </div>
        <div className="videoWrapper">
          <video id="1" className="alice" src="/videos/alice_0.mp4" muted loop>
            Vídeo não suportado.
          </video>
        </div>
      </section>
      <img
        src="/static_resources/breja.png"
        alt="cerveja"
        className="cerveja"
      />
      <img
        src="/static_resources/breja2.png"
        alt="cerveja"
        className="cerveja2"
      />
      <img
        src="/static_resources/mesa.png"
        alt="mesa_de_bar"
        className="mesa"
      />
      <img
        src="/static_resources/open_bar.png"
        alt="plaquinha"
        className="openBar"
      />
      <img
        src="/static_resources/cadeira.png"
        alt="cadeira_de_praia"
        className="cadeira"
      />
    </main>
  );
}

export default App;
