const champions = [
    {
        id: 1,
        name: "Wilhelm Steinitz",
        birth: "14 mai 1836",
        death: "12 août 1900",
        worldChampion: "1886-1894",
        highestRating: "2826 (1876)",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/37/Wilhelm_Steinitz.jpg",
        created: new Date()
    },
    {
        id: 2,
        name: "Emanuel Lasker",
        birth: "24 décembre 1868",
        death: "11 janvier 1941",
        worldChampion: "1894-1921",
        highestRating: "2878 (1894)",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Bundesarchiv_Bild_102-00457%2C_Emanuel_Lasker.jpg",
        created: new Date()
    },
    {
        id: 3,
        name: "José Raúl Capablanca",
        birth: "19 novembre 1888",
        death: "8 mai 1942",
        worldChampion: "1921-1927",
        highestRating: "2877 (1921)",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/24/Jos%C3%A9_Ra%C3%BAl_Capablanca_1931.jpg",
        created: new Date()
    },
    {
        id: 4,
        name: "Alexandre Aleksandrovitch Alekhine",
        birth: "31 octobre 1892",
        death: "24 mars 1946",
        worldChampion: "1927-1935 1937-1946",
        highestRating: "2860 (1931)",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Alexandre_Alekhine_Color.jpg",
        created: new Date()
    },
    {
        id: 5,
        name: "Max Euwe",
        birth: "20 mai 1901",
        death: "26 novembre 1981",
        worldChampion: "1935-1937",
        highestRating: "2769 (1936)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Max_Euwe_1963.jpg",
        created: new Date()
    },
    {
        id: 6,
        name: "Mikhaïl Moïsseïevitch Botvinnik",
        birth: "17 août 1911",
        death: "5 mai 1995",
        worldChampion: "1948-1957 1958-1960 1961-1963",
        highestRating: "2885 (1945)",
        image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Botvinnik_1936.jpg",
        created: new Date()
    },
    {
        id: 7,
        name: "Vassily Vassilievitch Smyslov",
        birth: "24 mars 1921",
        death: "27 mars 2010",
        worldChampion: "1957-1958",
        highestRating: "2800 (1956)",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Interpolisschaaktoernooi_Tilburg_1819_Smyslov_aan_zet%2C_Bestanddeelnr_929-3630.jpg",
        created: new Date()
    },
    {
        id: 8,
        name: "Mikhaïl Nekhemievitch Tal",
        birth: "9 novembre 1936",
        death: "28 juin 1992",
        worldChampion: "1960-1961",
        highestRating: "2705 (1980)",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Mikhail_Tal_1982.jpg",
        created: new Date()
    },
    {
        id: 9,
        name: "Tigran Vartani Petrossian",
        birth: "17 juin 1929",
        death: "13 août 1984",
        worldChampion: "1963-1969",
        highestRating: "2660 (1967)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Tigran_Petrosian_1962.jpg",
        created: new Date()
    },
    {
        id: 10,
        name: "Boris Vassilievitch Spassky",
        birth: "30 janvier 1937",
        death: "",
        worldChampion: "1969-1972",
        highestRating: "2773 (1969)",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Interpolis_schaaktoernooi_in_Tilburg%2C_B_Spassky%2C_Bestanddeelnr_931-0359.jpg",
        created: new Date()
    },
    {
        id: 11,
        name: "Robert James Fischer",
        birth: "9 mars 1943",
        death: "17 janvier 2008",
        worldChampion: "1972-1975",
        highestRating: "2785 (1972)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Bobby_Fischer_1960_in_Leipzig_in_color.jpg",
        created: new Date()
    },
    {
        id: 12,
        name: "Anatoli Ievguenievitch Karpov",
        birth: "23 mai 1951",
        death: "",
        worldChampion: "1975-1985",
        highestRating: "2780 (1994)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/91/Anatoly_Karpov_2018.jpg",
        created: new Date()
    },
    {
        id: 13,
        name: "Garry Kimovitch Kasparov",
        birth: "13 avril 1963",
        death: "",
        worldChampion: "1985-2000",
        highestRating: "2851 (1999)",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/40/London_Chess_Classic_2010_Kasparov_03.jpg",
        created: new Date()
    },
    {
        id: 14,
        name: "Vladimir Borissovitch Kramnik",
        birth: "25 juin 1975",
        death: "",
        worldChampion: "2000-2007",
        highestRating: "2817 (2016)",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Kramnik_Vladimir_in_Blue_suit_%2830069008104%29.jpg",
        created: new Date()
    },
    {
        id: 15,
        name: "Viswanathan Anand",
        birth: "11 décembre 1969",
        death: "",
        worldChampion: "2007-2012",
        highestRating: "2817 (2011)",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/98/Vishi_Anand-29-4-17.jpg",
        created: new Date()
    },
    {
        id: 16,
        name: "Magnus Carlsen",
        birth: "30 novembre 1990",
        death: "",
        worldChampion: "Depuis 2013",
        highestRating: "2882 (2014)",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Carlsen_Magnus_%2830238051906%29.jpg",
        created: new Date()
    }
]

module.exports = champions;