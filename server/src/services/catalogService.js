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
      description:
        "Os maiores heróis da Marvel se unem pela primeira vez quando Loki ameaça dominar a Terra, forçando heróis com personalidades opostas a aprenderem a trabalhar em equipe para salvar a humanidade.",
      year: 2012,
      genre: [ "Ação", "Aventura" ],
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
      description:
        "Arthur Fleck é um comediante fracassado que, ao ser constantemente rejeitado pela sociedade, mergulha em uma espiral de violência que dá origem a um dos vilões mais icônicos da cultura pop.",
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
      description:
        "Po, um panda desajeitado e apaixonado por kung fu, é escolhido inesperadamente para se tornar o lendário Dragão Guerreiro, precisando provar que até os mais improváveis podem ser heróis.",
      year: 2008,
      genre: [ "Animação", "Comédia", "Aventura" ],
      rating: 7.6,
      imagesUrl: [
        "https://assets-prd.ignimgs.com/2023/06/02/panda-1685743792136.jpg"
      ],
      iframe: iframe("https://www.youtube.com/embed/40IBUnOZoC4?si=0MDOuwhcCTR4ET04"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie" ],
      id: 4,
      title: "Interestelar",
      description:
        "Em um futuro onde a Terra está à beira do colapso, um grupo de astronautas atravessa um buraco de minhoca em busca de um novo lar para a humanidade, desafiando as leis do tempo e do espaço.",
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
      description:
        "Um bancário tímido encontra uma máscara mística que libera sua personalidade mais caótica, transformando-o em uma figura irreverente com habilidades sobrenaturais.",
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
      description:
        "Shrek, um ogro solitário, tem sua tranquilidade interrompida e acaba embarcando em uma jornada inesperada para resgatar uma princesa, descobrindo amizade, amor e aceitação.",
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
      description:
        "Animais mimados de um zoológico de Nova York acabam na natureza selvagem de Madagascar, onde precisam aprender a sobreviver longe do conforto humano.",
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
      description:
        "Uma releitura moderna das histórias de Sherlock Holmes, ambientada na Londres contemporânea, onde genialidade e arrogância caminham lado a lado.",
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
      description:
        "Uma adolescente enfrenta os desafios da escola, da família e dos relacionamentos enquanto tenta lidar com o luto e descobrir sua própria identidade.",
      year: 2020,
      genre: [ "Comédia", "Drama" ],
      rating: 7.8,
      imagesUrl: [
        "https://i0.wp.com/chronicallystreaming.com/wp-content/uploads/2022/08/screen-shot-2022-08-22-at-11.32.19-am.png"
      ],
      iframe: iframe("https://www.youtube.com/embed/3APbcPU_F4M?si=Y4TLTArSDCWcotZZ"),
      seasons: 4,
      episodes: 40
    },

    {
      type: [ "serie" ],
      id: 10,
      title: "Peaky Blinders",
      description:
        "Após a Primeira Guerra Mundial, a família Shelby constrói um império criminoso em Birmingham, guiada pela ambição e pela mente estratégica de Thomas Shelby.",
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
      description:
        "Inspirada na infância de Chris Rock, a série retrata de forma cômica e crítica a vida de um adolescente negro em uma família humilde.",
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
      description:
        "Pessoas endividadas participam de jogos infantis mortais em troca da chance de ganhar um prêmio milionário, revelando o lado mais cruel da natureza humana.",
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
      description:
        "Um pai irreverente tenta manter sua família sob controle, lidando com os desafios da paternidade de forma cômica e nada convencional.",
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
      description:
        "Um garoto encontra um relógio alienígena que lhe concede o poder de se transformar em diversos heróis extraterrestres.",
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
      description:
        "Uma sátira animada que acompanha o cotidiano caótico e irreverente da família Simpson na cidade de Springfield.",
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
      title: "Pica-Pau",
      description:
        "As travessuras caóticas e bem-humoradas de um pássaro irreverente que sempre encontra uma forma criativa de causar confusão.",
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
      description:
        "Batman enfrenta o Coringa, um criminoso imprevisível que transforma Gotham em um campo de batalha psicológico e moral.",
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
      description:
        "Um professor de química diagnosticado com câncer entra para o mundo do tráfico de drogas, transformando-se lentamente em um dos maiores criminosos da televisão.",
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
      description:
        "Miles Morales descobre que não é o único Homem-Aranha e precisa unir forças com versões alternativas do herói para salvar o multiverso.",
      year: 2018,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 8.4,
      imagesUrl: [
        "https://m.media-amazon.com/images/S/pv-target-images/843838036cc65da9220af3d522161e34cc233f00bd20c1331b03153f35a196f7.jpg",
        "https://m.media-amazon.com/images/M/MV5BYWI1OTM1MGQtOTI5NC00OTdhLTg3YzgtZWRhYWY3ODg5NzI0XkEyXkFqcGc@._V1_.jpg"

      ],
      iframe: iframe("https://www.youtube.com/embed/SS6ABPkfmBE?si=4l9h6HamL83zxljL"),
      studio: "Sony Pictures Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 20,
      title: "Shrek 2",
      description:
        "Recém-casados, Shrek e Fiona visitam os pais dela no Reino Tão Tão Distante, enfrentando novos desafios, vilões carismáticos e decisões que podem mudar suas vidas.",
      year: 2004,
      genre: [ "Animação", "Comédia", "Fantasia" ],
      rating: 7.4,
      imagesUrl: [ "https://images.justwatch.com/poster/65682147/s718/shrek-2.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/oW-vf54cUes?si=BtDavlwtQhPCw8Z-"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 21,
      title: "Shrek Terceiro",
      description:
        "Sem querer ser rei, Shrek parte em busca de um herdeiro para o trono enquanto lida com as responsabilidades da paternidade e antigos inimigos.",
      year: 2007,
      genre: [ "Animação", "Comédia", "Fantasia" ],
      rating: 6.1,
      imagesUrl: [ "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt10cb868fe0ed3e48/691c877da8d021337a6fcb5e/ShrekTheThird_Poster_2000x3000_uaa.jpg?width=2560" ],
      iframe: iframe("https://www.youtube.com/embed/_MoIr7811Bs?si=IQSRKXR_UkihjkYU"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 22,
      title: "Shrek Para Sempre",
      description:
        "Cansado da rotina, Shrek faz um acordo perigoso que o leva a uma realidade alternativa onde nunca existiu, precisando lutar para recuperar sua verdadeira vida.",
      year: 2010,
      genre: [ "Animação", "Comédia", "Fantasia" ],
      rating: 6.3,
      imagesUrl: [ "https://images.contentstack.io/v3/assets/blt13adb7e2033fcee5/blt5b394e078158f08f/691c877ab80cd0eef37c83ea/ShrekForeverAfter_Poster_2000x3000_uaa.jpg?width=2560" ],
      iframe: iframe("https://www.youtube.com/embed/Ma9oseKpj9g?si=dXIFJblLUgNjvsh9"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 23,
      title: "Madagascar 2",
      description:
        "Os animais tentam voltar para Nova York, mas acabam na África, onde descobrem suas origens e enfrentam desafios completamente novos.",
      year: 2008,
      genre: [ "Animação", "Comédia", "Aventura" ],
      rating: 6.6,
      imagesUrl: [ "https://images.justwatch.com/poster/240593489/s718/madagascar-2-a-grande-escapada.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/MUAbupPbGbQ?si=kxFZRYfrWQZ1tRiW"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 24,
      title: "Madagascar 3: Os Procurados",
      description:
        "Perseguidos pela polícia, os animais se unem a um circo itinerante europeu em uma aventura cheia de humor, cores e ação.",
      year: 2012,
      genre: [ "Animação", "Comédia", "Aventura" ],
      rating: 6.8,
      imagesUrl: [ "https://images.justwatch.com/poster/240598478/s718/madagascar-3-os-procurados.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/laNiRXqh82Q?si=rYErn-OOBP5zt5e_"),
      studio: "DreamWorks Animation"
    },

    {
      type: [ "movie", "animation" ],
      id: 25,
      title: "Homem Aranha: Através do Aranhaverso",
      description:
        "Miles Morales retorna para uma nova jornada pelo multiverso, enfrentando escolhas difíceis que colocam à prova o verdadeiro significado de ser um herói.",
      year: 2023,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 8.6,
      imagesUrl: [ "https://cdnb.artstation.com/p/assets/images/images/048/509/001/large/hazza-jarrar-mm.jpg?1650236822" ],
      iframe: iframe("https://www.youtube.com/embed/_4is7I_ZxTg?si=3thCtDDfc5i3V94U"),
      studio: "Sony Pictures Animation"
    },

    {
      type: [ "movie" ],
      id: 26,
      title: "Batman Begins",
      description:
        "Bruce Wayne inicia sua jornada como Batman, enfrentando o medo e a corrupção de Gotham ao se tornar o vigilante que a cidade precisa.",
      year: 2005,
      genre: [ "Ação", "Crime", "Drama" ],
      rating: 8.2,
      imagesUrl: [ "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p35903_p_v8_ay.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/neY2xVmOfUM?si=FQrcl5O9AEYy9w7t")
    },

    {
      type: [ "movie" ],
      id: 27,
      title: "Batman: O Cavaleiro das Trevas Ressurge",
      description:
        "Anos após desaparecer, Batman retorna para enfrentar Bane, um inimigo que ameaça destruir Gotham e testar seus limites físicos e morais.",
      year: 2012,
      genre: [ "Ação", "Crime", "Drama" ],
      rating: 8.4,
      imagesUrl: [ "https://alchemistnany.wordpress.com/wp-content/uploads/2012/07/the-dark-knight-rises-batman-poster.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/q8ncjHylG6c?si=03335iglHM-8kGAl")
    },

    {
      type: [ "animation", "serie" ],
      id: 28,
      title: "Ben 10: Força Alienígena",
      description:
        "Agora adolescente, Ben retorna como herói, enfrentando ameaças ainda maiores com alienígenas mais poderosos.",
      year: 2008,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 7.4,
      imagesUrl: [ "https://m.media-amazon.com/images/M/MV5BOGQ5YWFjYjItODE5OC00ZDQxLTk5ZmYtNzY0YzM4NjIyMWFlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/kdBp2Sh--vw?si=f3CjAqeV9c6ytBWX"),
      studio: "Cartoon Network Studios",
      seasons: 3,
      episodes: 46
    },

    {
      type: [ "animation", "serie" ],
      id: 29,
      title: "Ben 10: Supremacia Alienígena",
      description:
        "Ben precisa lidar com as consequências de revelar sua identidade ao mundo enquanto enfrenta novos vilões intergalácticos.",
      year: 2010,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 7.5,
      imagesUrl: [ "https://mediaproxy.tvtropes.org/width/1200/https://static.tvtropes.org/pmwiki/pub/images/ben_10_ultimate_alien.png" ],
      iframe: iframe("https://www.youtube.com/embed/NDNyZ4dIP54?si=5fB2yZMJ_fKQhnT8"),
      studio: "Cartoon Network Studios",
      seasons: 3,
      episodes: 52
    },
    {
      type: [ "animation", "serie" ],
      id: 30,
      title: "Ben 10: Omniverse",
      description:
        "As contínuas aventuras de Ben Tennyson e seu novo sócio encanador, Rook Blonko.",
      year: 2010,
      genre: [ "Animação", "Ação", "Aventura" ],
      rating: 6.6,
      imagesUrl: [ "https://m.media-amazon.com/images/M/MV5BYjE1N2EzYzQtMWExOC00N2FjLWEwYjMtNjdlNWUwYzQwMzEyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/jKSi87myWds?si=JQqIjrhRtTVav9E5"),
      studio: "Cartoon Network Studios",
      seasons: 8,
      episodes: 80
    },
    {
      type: [ "movie" ],
      id: 31,
      title: "O Exorcista",
      description:
        "Quando uma jovem começa a apresentar comportamentos perturbadores, dois padres enfrentam uma poderosa entidade demoníaca em uma batalha entre fé e o mal absoluto.",
      year: 1973,
      genre: [ "Terror" ],
      rating: 8.1,
      imagesUrl: [ "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p6107_p_v10_az.jpg " ],
      iframe: iframe("https://www.youtube.com/embed/4x6a6igB1AQ?si=AGDjjy5xcA53V2o8")
    },

    {
      type: [ "movie" ],
      id: 32,
      title: "Hereditário",
      description:
        "Após a morte da avó, uma família começa a descobrir segredos perturbadores que desencadeiam eventos sobrenaturais e um terror psicológico devastador.",
      year: 2018,
      genre: [ "Terror", "Suspense" ],
      rating: 7.3,
      imagesUrl: [ "https://m.media-amazon.com/images/S/pv-target-images/2be98bed028f1d53e01a860b6bb91c362dc32611c45effbcf2aa2645d590b22a.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/Ui13PlmyZhQ?si=vo1ibiWQ8a-JevL5")
    },

    {
      type: [ "movie" ],
      id: 33,
      title: "Invocação do Mal",
      description:
        "Baseado em fatos reais, o filme acompanha investigadores paranormais que tentam ajudar uma família aterrorizada por uma presença demoníaca em sua nova casa.",
      year: 2013,
      genre: [ "Terror", "Suspense" ],
      rating: 7.5,
      imagesUrl: [ "https://m.media-amazon.com/images/I/81yAfVk+7UL._AC_UF894,1000_QL80_.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/GQrrXceHn2E?si=p1aKLPXkkTb02Kcu")
    },

    {
      type: [ "movie" ],
      id: 34,
      title: "O Iluminado",
      description:
        "Isolado em um hotel durante o inverno, um escritor começa a perder a sanidade enquanto forças sobrenaturais despertam seu lado mais sombrio.",
      year: 1980,
      genre: [ "Terror", "Suspense" ],
      rating: 8.4,
      imagesUrl: [ "https://assets-prd.ignimgs.com/2023/10/07/shining-ver2-xlg-button-1696713779756.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/dSQ3yN5yJ0g?si=tW2IM-9jBRq6XCUA")
    },

    {
      type: [ "movie" ],
      id: 35,
      title: "Corra!",
      description:
        "Ao visitar a família da namorada, um jovem percebe que há algo profundamente errado por trás da hospitalidade aparentemente perfeita.",
      year: 2017,
      genre: [ "Terror", "Suspense" ],
      rating: 7.8,
      imagesUrl: [ "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/189/2024/09/24164547/tFXcEccSQMf3lfhfXKSU9iRBpa3-scaled.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/mDGV5UucTu8?si=jSJjuQQd_LbPKYh3")
    },

    {
      type: [ "movie" ],
      id: 36,
      title: "Blade Runner",
      description:
        "Em um futuro distópico, um caçador de androides é encarregado de eliminar replicantes fugitivos enquanto questiona o que realmente significa ser humano.",
      year: 1982,
      genre: [ "Ficção Científica", "Drama" ],
      rating: 8.1,
      imagesUrl: [ "http://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/gCcx85zbxz4?si=jd_ct2UGA1WQdGxn")
    },

    {
      type: [ "movie" ],
      id: 37,
      title: "Matrix",
      description:
        "Um programador descobre que a realidade como conhece é uma simulação controlada por máquinas, levando-o a uma revolução que pode libertar a humanidade.",
      year: 1999,
      genre: [ "Ficção Científica", "Ação" ],
      rating: 8.7,
      imagesUrl: [ "https://storage.googleapis.com/pod_public/1300/106922.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/vKQi3bBA1y8?si=JOZcbTdU12D60X3H")
    },

    {
      type: [ "movie" ],
      id: 38,
      title: "A Origem",
      description:
        "Um especialista em invadir sonhos recebe a missão de implantar uma ideia na mente de alguém, desafiando os limites entre realidade e subconsciente.",
      year: 2010,
      genre: [ "Ficção Científica", "Ação", "Suspense" ],
      rating: 8.8,
      imagesUrl: [ "https://m.media-amazon.com/images/S/pv-target-images/cc72ff2193c0f7a85322aee988d6fe1ae2cd9f8800b6ff6e8462790fe2aacaf3.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/R_VX0e0PX90?si=AMT0Hjv7SQJnuoNz")
    },

    {
      type: [ "movie" ],
      id: 39,
      title: "Ex Machina",
      description:
        "Um jovem programador participa de um experimento envolvendo inteligência artificial, onde consciência, ética e manipulação se misturam perigosamente.",
      year: 2014,
      genre: [ "Ficção Científica", "Drama" ],
      rating: 7.7,
      imagesUrl: [ "https://s3.amazonaws.com/nightjarprod/content/uploads/sites/189/2024/11/18154142/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/EoQuVnKhxaM?si=3_Duxf3jftTmxnie")
    },

    {
      type: [ "movie" ],
      id: 40,
      title: "Distrito 9",
      description:
        "Alienígenas refugiados vivem segregados na África do Sul, enquanto um agente do governo se envolve em uma conspiração que muda sua própria natureza.",
      year: 2009,
      genre: [ "Ficção Científica", "Ação" ],
      rating: 7.9,
      imagesUrl: [ "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p177953_p_v8_ae.jpg" ],
      iframe: iframe("https://www.youtube.com/embed/DyLUwOcR5pk?si=8GZE4VSNQp0xtEjX")
    }


  ]

};


const catalog = {
  All: AllContent,

  MostWatched: {
    sectionTitle: "Mais Assistidos",
    items: AllContent.items.filter((item) => item.rating >= 7.8 && item.year >= 2008)

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
