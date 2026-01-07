const iframe = (src) => (
  `<iframe width="560" height="315" src="${src}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`

)

const AllContent = {
  sectionTitle: "Todos",
  items: [
    {
      type: [ "movie" ],
      id: 1,
      title: "Os Vingadores",
      description: "Heróis da Marvel se unem para impedir Loki de dominar a Terra.",
      year: 2012,
      genre: [ "Ação", "Aventura", "Ficção Científica" ],
      rating: 8.0,
      imagesUrl: [
        "https://www.dvdplanetstore.pk/wp-content/uploads/2017/12/cezWGskPY5x7GaglTTRN4Fugfb8.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/KeNEGtsCWEk?si=A537wOEMs-3k6zLj")

    },
    {
      type: [ "movie" ],
      id: 2,
      title: "Coringa",
      description: "A origem sombria de Arthur Fleck, um homem marginalizado pela sociedade.",
      year: 2019,
      genre: [ "Drama", "Crime", "Suspense" ],
      rating: 8.3,
      imagesUrl: [
        "https://m.media-amazon.com/images/I/71KcAg70yNL.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/621pfj0EfIc?si=Mw-Vf6Wg8rzM65l-")

    },
    {
      type: [ "movie", "animation" ],
      id: 3,
      title: "Kung Fu Panda",
      description: "Um panda improvável se torna o Dragão Guerreiro.",
      year: 2008,
      genre: [ "Animação", "Comédia", "Aventura" ],
      rating: 7.6,
      imagesUrl: [
        "https://assets-prd.ignimgs.com/2023/06/02/panda-1685743792136.jpg?crop=1:1,smart&format=jpg&auto=webp&quality=80"
      ],
      iframe: iframe("https://www.youtube.com/embed/40IBUnOZoC4?si=0MDOuwhcCTR4ET04"),
      studio: "DreamWorks Animation"

    },
    {
      type: [ "movie" ],
      id: 4,
      title: "Interestelar",
      description: "Exploradores viajam pelo espaço em busca da sobrevivência da humanidade.",
      year: 2014,
      genre: [ "Ficção Científica", "Drama", "Aventura" ],
      rating: 8.7,
      imagesUrl: [
        "https://i.pinimg.com/736x/0b/b9/72/0bb9725b6764aeb79e1121af37b16333.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/i6avfCqKcQo?si=HlosV7LR0Cng-TYE")

    },
    {
      type: [ "movie" ],
      id: 5,
      title: "O Máskara",
      description: "Um homem comum encontra uma máscara com poderes extraordinários.",
      year: 1994,
      genre: [ "Comédia", "Fantasia" ],
      rating: 7.0,
      imagesUrl: [
        "https://flinflononline.com/assets/images/2025/themask.webp"
      ],
      iframe: iframe("https://www.youtube.com/embed/FAtTJ62Vz1U?si=eRpwBUv__E1wWnzF")

    },
    {
      type: [ "movie", "animation" ],
      id: 6,
      title: "Shrek",
      description: "Um ogro rabugento vive uma aventura inesperada.",
      year: 2001,
      genre: [ "Animação", "Comédia", "Fantasia" ],
      rating: 7.9,
      imagesUrl: [
        "https://digicartaz.com/uploads/posts/2023-01/shrek.webp"
      ],
      iframe: iframe("https://www.youtube.com/embed/EM3ec1Uc4lw?si=wk8q63RKTnxjIV9V"),
      studio: "DreamWorks Animation"

    },
    {
      type: [ "movie", "animation" ],
      id: 7,
      title: "Madagascar",
      description: "Animais de zoológico enfrentam a vida selvagem.",
      year: 2005,
      genre: [ "Animação", "Comédia", "Aventura" ],
      rating: 6.9,
      imagesUrl: [
        "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/330/2024/06/05000823/zMpJY5CJKUufG9OTw0In4eAFqPX.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/kqGSRLN2XsM?si=ndHZFYabRe6O_TP3"),
      studio: "DreamWorks Animation"

    },
    {
      type: [ "serie" ],
      id: 8,
      title: "Sherlock",
      description: "Uma releitura moderna das histórias de Sherlock Holmes, ambientada na Londres contemporânea.",
      year: 2010,
      genre: [ "Investigação", "Drama", "Crime", "Mistério" ],
      rating: 9.0,
      imagesUrl: [
        "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_.jpg",
        "https://images5.alphacoders.com/853/853867.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/Eq3pF5OhlJk?si=lNXEB7rlwlW_bciy"),
      seasons: 4,
      episodes: 13

    },

    {
      type: [ "serie" ],
      id: 9,
      title: "Eu Nunca",
      description: "Uma adolescente tenta equilibrar escola, família e relacionamentos.",
      year: 2020,
      genre: [ "Comédia", "Drama" ],
      rating: 7.8,
      imagesUrl: [
        "https://i0.wp.com/chronicallystreaming.com/wp-content/uploads/2022/08/screen-shot-2022-08-22-at-11.32.19-am.png?fit=940,1296&ssl=1"
      ],
      iframe: iframe("https://www.youtube.com/embed/3APbcPU_F4M?si=Y4TLTArSDCWcotZZ"),
      seasons: 4,
      episodes: 40

    },
    {
      type: [ "serie" ],
      id: 10,
      title: "Peaky Blinders",
      description: "Uma família criminosa cresce no submundo da Inglaterra.",
      year: 2013,
      genre: [ "Drama", "Crime" ],
      rating: 8.7,
      imagesUrl: [
        "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/K-RoN7MA5V8?si=gfqsVDrhmT7YIBSd"),
      seasons: 6,
      episodes: 36

    },
    {
      type: [ "serie" ],
      id: 11,
      title: "Todo Mundo Odeia o Chris",
      description: "A juventude de Chris Rock em uma família excêntrica.",
      year: 2005,
      genre: [ "Comédia" ],
      rating: 7.6,
      imagesUrl: [
        "https://m.media-amazon.com/images/M/MV5BM2U1M2QxZDYtMzgyYS00OWQ5LWIyNGUtMmQ1MGQ2NTU2NzNhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/mdLZCbixmJ8?si=S2YB7g8hARspr5zm"),
      seasons: 4,
      episodes: 88

    },
    {
      type: [ "serie" ],
      id: 12,
      title: "Round 6",
      description: "Jogos mortais por um prêmio milionário.",
      year: 2021,
      genre: [ "Drama", "Suspense" ],
      rating: 8.0,
      imagesUrl: [
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20492218_b_v8_ae.jpg",
        "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSlCq3x0mzdgFd1PeYqPTxTE1awDh5jYeAayIIjvZjLBHy971DLaTHBAzWwuYygqn_xscoiBxMtf1LncymZJzkqhYw3M-GBNupEZ.jpg?r=90b"
      ],
      iframe: iframe("https://www.youtube.com/embed/7bOphbY6MI4?si=AHS2ywUkVZtVH6MX"),
      seasons: 2,
      episodes: 16

    },
    {
      type: [ "serie" ],
      id: 13,
      title: "Eu, a Patroa e as Crianças",
      description: "Uma família divertida enfrenta situações do cotidiano.",
      year: 2000,
      genre: [ "Comédia" ],
      rating: 7.0,
      imagesUrl: [
        "https://m.media-amazon.com/images/M/MV5BM2I3ZTMyMDktNWFiZi00MDZiLTk4ZDUtMDBjNjUxZDJlN2EyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/PZceSFWgF0o?si=BmNR5ZgVbHB1K6qw"),
      seasons: 5,
      episodes: 123

    },
    {
      type: [ "animation", "serie" ],
      id: 14,
      title: "Ben 10",
      description: "Um garoto encontra um relógio alienígena com superpoderes.",
      year: 2005,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 7.6,
      imagesUrl: [
        "https://pbs.twimg.com/media/F8AzwPGXsAA7fMX.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/z0yzRwCFblA?si=yERVZkiOW8hqLgFJ"),
      seasons: 4,
      episodes: 52,
      studio: "Cartoon Network Studios"

    },
    {
      type: [ "animation", "serie" ],
      id: 15,
      title: "Os Simpsons",
      description: "Uma sátira animada sobre uma família americana.",
      year: 1989,
      genre: [ "Animação", "Comédia" ],
      rating: 8.6,
      imagesUrl: [
        "https://i.pinimg.com/1200x/40/2e/ee/402eee131f61c675f8cb9590936c35ac.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/3R1ebDCv7vM?si=ta6Yop_3cJx8PG7u"),
      seasons: 35,
      episodes: 760,
      studio: "20th Television Animation"

    },
    {
      type: [ "animation", "serie" ],
      id: 16,
      title: "Pica Pau",
      description: "As travessuras de um pássaro irreverente.",
      year: 1999,
      genre: [ "Animação", "Comédia" ],
      rating: 6.6,
      imagesUrl: [
        "https://m.media-amazon.com/images/M/MV5BMmRjYmJmN2QtMTNiMS00MGRkLTg0NWItMGMyNGE5ODE4ZjkyXkEyXkFqcGc@._V1_.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/KSWjIsxDUBc?si=vl7xbcdoh8oTNxHc"),
      seasons: 37,
      episodes: 195,
      studio: "Universal Animation Studios"

    },
    {
      type: [ "movie" ],
      id: 17,
      title: "Batman: O Cavaleiro das Trevas",
      description: "Batman enfrenta o Coringa em Gotham.",
      year: 2008,
      genre: [ "Ação", "Crime", "Drama" ],
      rating: 9.0,
      imagesUrl: [
        "https://images.moviesanywhere.com/bd47f9b7d090170d79b3085804075d41/c6140695-a35f-46e2-adb7-45ed829fc0c0.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/8sB1HTghkg4?si=8jdn5ssWsigo9nWc")

    },
    {
      type: [ "serie" ],
      id: 18,
      title: "Breaking Bad",
      description: "Um professor de química entra no mundo do crime.",
      year: 2008,
      genre: [ "Drama", "Crime" ],
      rating: 9.5,
      imagesUrl: [
        "https://es.web.img3.acsta.net/pictures/18/04/04/22/52/3191575.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/_-Nv0JOcGxg?si=Khn4hf8XKuDPUJcy"),
      seasons: 5,
      episodes: 62

    },
    {
      type: [ "animation", "movie" ],
      id: 19,
      title: "Homem Aranha no Aranhaverso",
      description: "Diversas versões do Homem Aranha se unem.",
      year: 2018,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 8.4,
      imagesUrl: [
        "https://m.media-amazon.com/images/S/pv-target-images/843838036cc65da9220af3d522161e34cc233f00bd20c1331b03153f35a196f7.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWI1OTM1MGQtOTI5NC00OTdhLTg3YzgtZWRhYWY3ODg5NzI0XkEyXkFqcGc@._V1_.jpg"

      ],
      iframe: iframe("https://www.youtube.com/embed/SS6ABPkfmBE?si=4l9h6HamL83zxljL"),
      studio: "Sony Pictures Animation"

    }

  ]

}

const catalog = {
  All: AllContent,

  MainContent: {
    sectionTitle: "Conteúdo Principal",
    items: AllContent.items.filter((item) => item.title === "Sherlock")

  },

  MostWatched: {
    sectionTitle: "Mais Assistidos",
    items: AllContent.items.filter((item) => item.rating >= 7.8)

  },

  Releases: {
    sectionTitle: "Lançamentos",
    items: AllContent.items.filter((item) => item.year >= 2015)

    },

  Movies: {
    sectionTitle: "Filmes",
    items: AllContent.items.filter((item) => item.type.includes("movie"))

  },

  Series: {
    sectionTitle: "Séries",
    items: AllContent.items.filter((item) => item.type.includes("serie"))

  },

  Animations: {
    sectionTitle: "Animações",
    items: AllContent.items.filter((item) => item.type.includes("animation"))

  }

};

export default catalog
