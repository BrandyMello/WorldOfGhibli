const images = {
  film0: ["Castle in the Sky", "https://fesapusewebsite.blob.core.windows.net/fathom/castleinthesky-1000x1480-r3-f6aba65dfc41c4fc47fc9289c1674057.jpg", "https://i0.wp.com/sojapan.jp/wp-content/uploads/2016/10/castle-in-the-sky.jpg?fit=1024%2C576&ssl=1", "https://i.ytimg.com/vi/nrTu7BAjjCA/maxresdefault.jpg", "https://media1.tenor.com/images/2f465ae20a9872cefec8e954f53e8e45/tenor.gif?itemid=5203634"
  ],
  film1: ["Grave of the Fireflies", "http://barkerhost.com/wp-content/uploads/sites/4/2015/04/bwVhmPpydv8P7mWfrmL3XVw0MV5-0.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXnSWauVetB7jF08HYjKicPTZXLyVImj8m5eOSZcV2o8l64-dc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64IfLv6kfr-5zKEHM7i7oLGJfp8bKkqUElUg_rdIDgIR4q5bk", "https://thumbs.gfycat.com/WateryAlarmingHylaeosaurus-small.gif"
  ],
  film2: ["My Neighbor Totoro", "https://fesapusewebsite.blob.core.windows.net/fathom/totoro3-9b8a40ca66146ccbae1519b9b88670f4.jpg", "https://cdn-static.denofgeek.com/sites/denofgeek/files/styles/main_wide/public/totoro_0.jpg?itok=D4Td2RPp", "https://i.pinimg.com/originals/c6/1b/26/c61b26c49fb70703be724a916607eabd.png", "https://media2.giphy.com/media/4Si4livC3yrqE/source.gif"
  ],
  film3: ["Kiki\'s Delivery Service", "https://fesapusewebsite.blob.core.windows.net/fathom/kikidoyouloveme-c537c2fbe895a651b76179c8b7a4f23b.jpg", "http://moviemezzanine.com/wp-content/uploads/kiki-5-1024x547.png", "https://media0dk-a.akamaihd.net/55/30/b7578b44ecfbc3d9de60b3a6814dbe6c.jpeg", "http://www.thefleamarcat.com/wp-content/uploads/2017/05/2-1.gif", "http://25.media.tumblr.com/d06ebde7c7df7dcda97f1ee666d9ed69/tumblr_mfg71mdlHS1rr56cmo1_500.gif"
  ],
  film4: ["Only Yesterday", "http://images4.fanpop.com/image/photos/22900000/Only-Yesterday-studio-ghibli-22935467-565-808.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZQ1W3r4Kxla4MCfUMoqaHqGL7MAUGlpksZ60UZFuDME6DpBu", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRjgCnfDW2NLVjOjB65Q6CfiExwYQTvkUzuYzR_12dzY0qmzgnQ", "https://66.media.tumblr.com/e2639dec09d4ca7e44e96bb94da1f387/tumblr_oquecnpjHO1upe1ufo1_400.gif"
  ],
  film5: ["Porco Rosso", "https://uvmbored.com/wp-content/uploads/2018/05/porcorosso-1000x1480-r2-4f67caff60f8deda5ff0bf39bc430f67.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNZ6F-dAglLf9wOEFcQj43bgAWKstvFuWKcJKsaNVnxwgiUEk", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgo3K7uo62NqmNHIsggUybtyfk3nW9IFh9OyKO-M3liIi8l7FN", "https://media.giphy.com/media/QnzhWVrigKj4I/giphy.gif"
  ],
  film6: ["Pom Poko", "https://i.pinimg.com/originals/23/ab/35/23ab35adada0eeaa826828eedaf2a22d.jpg", "https://s.hdnux.com/photos/71/15/40/14997560/3/gallery_medium.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z5pF-o0J2zJTow7FoRnsfnJ5ceDbdKrfsTTEMNnhOUG5sS1_5w", "https://media2.giphy.com/media/XcQDNSMAR2Ab6/giphy.gif"
  ],
  film7: ["Whisper of the Heart", "http://www.reelviews.net/resources/img/posters/thumbs/whisper_poster.jpg", "https://nefariousreviews.files.wordpress.com/2017/05/whisper-of-the-heart-featured.jpg?w=672&h=372&crop=1", "https://www.dvdtalk.com/reviews/images/reviews/76/full/1514314448_1.jpg", "https://66.media.tumblr.com/816a7831129dd838eabba968a900c577/tumblr_p113r1Moz51wl4gfoo2_500.gif"
  ],
  film8: ["Princess Mononoke", "https://fesapusewebsite.blob.core.windows.net/fathom/pm3-ebcc7fc25746777807a80210e22d95c8.jpg", "http://images6.fanpop.com/image/photos/39000000/Princess-Mononoke-studio-ghibli-39020466-502-650.png", "https://wallup.net/wp-content/uploads/2016/03/12/285162-fantasy_art-anime-forest-Princess_Mononoke-Studio_Ghibli-748x362.jpg", "https://media3.giphy.com/media/M1X6eZE5d2cOk/giphy.gif"
  ],
  film9: ["My Neighbors the Yamadas", "https://vignette.wikia.nocookie.net/dubbing9585/images/f/fa/My-neighbors-the-yamadas-poster.jpg/revision/latest?cb=20171223052252", "http://moviemezzanine.com/wp-content/uploads/yamadas-1.jpg", "https://jaysenheadleywrites.files.wordpress.com/2016/11/screenshot-568.png?w=1495", "http://33.media.tumblr.com/tumblr_mah7prdAWc1qc8e6lo1_500.gif"
  ],
  film10: ["Spirited Away", "http://www.spoon-tamago.com/wp-content/uploads/2019/06/spirited-away-china-poster-2.jpg", "https://entropymag.org/wp-content/uploads/2015/03/nofacesen-spiritedaway1.jpg", "https://media.comicbook.com/2019/06/spirited-away-1175996-1280x0.jpeg", "https://media.giphy.com/media/4PaUjez8XwOIw/giphy.gif"
  ],
  film11: ["The Cat Returns", "https://i1.sndcdn.com/artworks-000347936760-iugbwg-t500x500.jpg", "http://images.amcnetworks.com/ifccenter.com/wp-content/uploads/2011/12/CAT_07s16c52_t2.0246.jpg", "http://moviemezzanine.com/wp-content/uploads/cat-1-1140x641.jpg", "https://media3.giphy.com/media/xC5XJaVrtux32/giphy.gif"
  ],
  film12: ["Howl's Moving Castle", "https://fesapusewebsite.blob.core.windows.net/fathom/howls3-49077fb5f658a5c95332976cfc61ee48.jpg", "https://static.mfah.com/app/images/cc4af119-d9d6-4f57-bb51-38cad96918d3.jpg?maxWidth=1600&maxHeight=1600&format=jpg&quality=90", "https://cdn.vox-cdn.com/thumbor/1VqEhXkeLwiCs-1j-mXWGox--Zw=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/61841457/0_DdSAPpcavttB1zkN.0.jpg", "https://media.giphy.com/media/12d2oPX6M94Nby/giphy.gif", "https://i.pinimg.com/originals/49/1d/bb/491dbbab7d8f4e8d76d2a47dfba6845f.gif"
  ],
  film13: ["Tales from Earthsea", "https://images-na.ssl-images-amazon.com/images/I/91Epn8c%2Bt7L._SY679_.jpg", "http://moviemezzanine.com/wp-content/uploads/earthsea-12-1140x616.png", "https://gkids.com/wp-content/uploads/2018/06/earthsea_header_opt.jpg", "http://33.media.tumblr.com/eb834a349be7e26cb46f237cb9e9b092/tumblr_n69ap4aWRn1shdhdjo2_500.gif"
  ],
  film14: ["Ponyo", "https://fesapusewebsite.blob.core.windows.net/fathom/ponyo-1000x1480-r2-3c7dd4adc4c5119cdacef777caf4657a.jpg", "http://www.roguesportal.com/wp-content/uploads/2017/10/ponyo-header.jpg", "http://omohide.com/wp-content/uploads/2010/01/snapshot20100104002646.jpg", "https://data.whicdn.com/images/59639898/original.gif"
  ],
  film15: ["Arrietty", "https://fesapusewebsite.blob.core.windows.net/fathom/arr3-3aec6b72aadf45906c7dc5edac89eb54.jpg", "https://static01.nyt.com/images/2012/02/17/arts/17SECRET2/SECRET2-jumbo.jpg", "http://images6.fanpop.com/image/photos/38500000/The-Secret-World-of-Arrietty-Scenery-studio-ghibli-38596621-1185-688.png", "https://66.media.tumblr.com/9942e86782ef7e31e1d93624d74eb95e/tumblr_inline_p4flcmT6F71v62v9p_540.gif"
  ],
  film16: ["From Up on Poppy Hill", "https://images-na.ssl-images-amazon.com/images/I/5166Ss1chWL.jpg", "https://i.imgur.com/ECc7haY.png", "https://viewerscommentary.files.wordpress.com/2013/11/from-up-on-poppy-hill-quartier-latin.jpg", "https://data.whicdn.com/images/210081322/original.gif"
  ],
  film17: ["The Wind Rises", "https://m.media-amazon.com/images/M/MV5BMTU4NDg0MzkzNV5BMl5BanBnXkFtZTgwODA3Mzc1MDE@._V1_.jpg", "https://www.redwallpapers.com/public/redwallpapers-large-thumb/ghibli-hayao-miyazaki-the-wind-rises-naoko-satomi-free-stock-photos-images-hd-wallpaper.jpg", "http://cdn.collider.com/wp-content/uploads/wind-rises-slice.jpg", "https://media1.tenor.com/images/732ad76c03c3f225ce2706bd38db80ee/tenor.gif?itemid=3521224"
  ],
  film18: ["The Tale of the Princess Kaguya", "https://resizing.flixster.com/6Xf8YY-QLSea_EZKj1rn4G9FqsQ=/206x305/v1.bTsxMTE4MDcxNjtqOzE4MjY0OzEyMDA7MjAzMzsyOTcw", "https://www.gannett-cdn.com/-mm-/f86ad8f01ed578fe31b530ae4f72339420c082f1/c=55-14-1990-1107/local/-/media/DetroitNews/2015/01/15/B99233212Z.1_20150115163004_000_GOME1164.1-0.jpg?width=3200&height=1680&fit=crop", "https://qph.fs.quoracdn.net/main-qimg-23a349e7ca98ea4a3aa871d41fb441ba.webp", "https://i.pinimg.com/originals/86/c4/75/86c475b2fed4c15d4746ab987de59315.gif"
  ],
  film19: ["When Marnie Was There", "https://images-na.ssl-images-amazon.com/images/I/91Sruo1eOpL._SY445_.jpg", "https://1.bp.blogspot.com/-f5g-7PiLY9M/Vjvs3p0YGUI/AAAAAAAAGr4/MKVotLXGe2o/s1600/marnie-8.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9g2Fy_CrvcJtaL8hqcScbOtxgzW2vJyUwkWQdkmCimc-btl7i0A", "https://media0.giphy.com/media/owZt0aSnHVoNW/giphy.gif", "https://images.gr-assets.com/hostedimages/1430085058ra/14679273.gif"
  ]
}

export default images;