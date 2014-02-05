iD.data = {
    "deprecated": [
        {
            "old": {
                "barrier": "wire_fence"
            },
            "replace": {
                "barrier": "fence",
                "fence_type": "chain"
            }
        },
        {
            "old": {
                "barrier": "wood_fence"
            },
            "replace": {
                "barrier": "fence",
                "fence_type": "wood"
            }
        },
        {
            "old": {
                "highway": "ford"
            },
            "replace": {
                "ford": "yes"
            }
        },
        {
            "old": {
                "highway": "stile"
            },
            "replace": {
                "barrier": "stile"
            }
        },
        {
            "old": {
                "highway": "incline"
            },
            "replace": {
                "highway": "road",
                "incline": "up"
            }
        },
        {
            "old": {
                "highway": "incline_steep"
            },
            "replace": {
                "highway": "road",
                "incline": "up"
            }
        },
        {
            "old": {
                "highway": "unsurfaced"
            },
            "replace": {
                "highway": "road",
                "incline": "unpaved"
            }
        },
        {
            "old": {
                "landuse": "wood"
            },
            "replace": {
                "landuse": "forest",
                "natural": "wood"
            }
        },
        {
            "old": {
                "natural": "marsh"
            },
            "replace": {
                "natural": "wetland",
                "wetland": "marsh"
            }
        },
        {
            "old": {
                "shop": "organic"
            },
            "replace": {
                "shop": "supermarket",
                "organic": "only"
            }
        },
        {
            "old": {
                "power_source": "*"
            },
            "replace": {
                "generator:source": "$1"
            }
        },
        {
            "old": {
                "power_rating": "*"
            },
            "replace": {
                "generator:output": "$1"
            }
        }
    ],
    "discarded": [
        "created_by",
        "odbl",
        "odbl:note",
        "tiger:upload_uuid",
        "tiger:tlid",
        "tiger:source",
        "tiger:separated",
        "geobase:datasetName",
        "geobase:uuid",
        "sub_sea:type",
        "KSJ2:ADS",
        "KSJ2:ARE",
        "KSJ2:AdminArea",
        "KSJ2:COP_label",
        "KSJ2:DFD",
        "KSJ2:INT",
        "KSJ2:INT_label",
        "KSJ2:LOC",
        "KSJ2:LPN",
        "KSJ2:OPC",
        "KSJ2:PubFacAdmin",
        "KSJ2:RAC",
        "KSJ2:RAC_label",
        "KSJ2:RIC",
        "KSJ2:RIN",
        "KSJ2:WSC",
        "KSJ2:coordinate",
        "KSJ2:curve_id",
        "KSJ2:curve_type",
        "KSJ2:filename",
        "KSJ2:lake_id",
        "KSJ2:lat",
        "KSJ2:long",
        "KSJ2:river_id",
        "yh:LINE_NAME",
        "yh:LINE_NUM",
        "yh:STRUCTURE",
        "yh:TOTYUMONO",
        "yh:TYPE",
        "yh:WIDTH_RANK",
        "SK53_bulk:load"
    ],
    "imagery": [
        {
            "name": "Bing aerial imagery",
            "type": "bing",
            "description": "Satellite and aerial imagery.",
            "template": "http://www.bing.com/maps/",
            "scaleExtent": [
                0,
                22
            ],
            "id": "Bing",
            "default": false
        },
        {
            "name": "Wapichana Background",
            "type": "tms",
            "description": "Wapichana Bush Islands and Hillshade",
            "template": "http://localhost:20008/tile/wapichana_background/{z}/{x}/{y}.png",
            "scaleExtent": [
                0,
                22
            ],
            "id": "wapichana-bush",
            "default": true
        }
    ],
    "wikipedia": [
        [
            "English",
            "English",
            "en"
        ],
        [
            "Wapichana",
            "Wapichana",
            "wap"
        ],
        [
            "Makushi",
            "Makushi",
            "mak"
        ],
        [
            "German",
            "Deutsch",
            "de"
        ],
        [
            "Dutch",
            "Nederlands",
            "nl"
        ],
        [
            "French",
            "Français",
            "fr"
        ],
        [
            "Italian",
            "Italiano",
            "it"
        ],
        [
            "Russian",
            "Русский",
            "ru"
        ],
        [
            "Spanish",
            "Español",
            "es"
        ],
        [
            "Polish",
            "Polski",
            "pl"
        ],
        [
            "Swedish",
            "Svenska",
            "sv"
        ],
        [
            "Japanese",
            "日本語",
            "ja"
        ],
        [
            "Portuguese",
            "Português",
            "pt"
        ],
        [
            "Chinese",
            "中文",
            "zh"
        ],
        [
            "Vietnamese",
            "Tiếng Việt",
            "vi"
        ],
        [
            "Ukrainian",
            "Українська",
            "uk"
        ],
        [
            "Catalan",
            "Català",
            "ca"
        ],
        [
            "Norwegian (Bokmål)",
            "Norsk (Bokmål)",
            "no"
        ],
        [
            "Waray-Waray",
            "Winaray",
            "war"
        ],
        [
            "Cebuano",
            "Sinugboanong Binisaya",
            "ceb"
        ],
        [
            "Finnish",
            "Suomi",
            "fi"
        ],
        [
            "Persian",
            "فارسی",
            "fa"
        ],
        [
            "Czech",
            "Čeština",
            "cs"
        ],
        [
            "Hungarian",
            "Magyar",
            "hu"
        ],
        [
            "Korean",
            "한국어",
            "ko"
        ],
        [
            "Romanian",
            "Română",
            "ro"
        ],
        [
            "Arabic",
            "العربية",
            "ar"
        ],
        [
            "Turkish",
            "Türkçe",
            "tr"
        ],
        [
            "Indonesian",
            "Bahasa Indonesia",
            "id"
        ],
        [
            "Kazakh",
            "Қазақша",
            "kk"
        ],
        [
            "Malay",
            "Bahasa Melayu",
            "ms"
        ],
        [
            "Serbian",
            "Српски / Srpski",
            "sr"
        ],
        [
            "Slovak",
            "Slovenčina",
            "sk"
        ],
        [
            "Esperanto",
            "Esperanto",
            "eo"
        ],
        [
            "Danish",
            "Dansk",
            "da"
        ],
        [
            "Lithuanian",
            "Lietuvių",
            "lt"
        ],
        [
            "Basque",
            "Euskara",
            "eu"
        ],
        [
            "Bulgarian",
            "Български",
            "bg"
        ],
        [
            "Hebrew",
            "עברית",
            "he"
        ],
        [
            "Slovenian",
            "Slovenščina",
            "sl"
        ],
        [
            "Croatian",
            "Hrvatski",
            "hr"
        ],
        [
            "Volapük",
            "Volapük",
            "vo"
        ],
        [
            "Estonian",
            "Eesti",
            "et"
        ],
        [
            "Hindi",
            "हिन्दी",
            "hi"
        ],
        [
            "Uzbek",
            "O‘zbek",
            "uz"
        ],
        [
            "Galician",
            "Galego",
            "gl"
        ],
        [
            "Norwegian (Nynorsk)",
            "Nynorsk",
            "nn"
        ],
        [
            "Simple English",
            "Simple English",
            "simple"
        ],
        [
            "Azerbaijani",
            "Azərbaycanca",
            "az"
        ],
        [
            "Latin",
            "Latina",
            "la"
        ],
        [
            "Greek",
            "Ελληνικά",
            "el"
        ],
        [
            "Thai",
            "ไทย",
            "th"
        ],
        [
            "Serbo-Croatian",
            "Srpskohrvatski / Српскохрватски",
            "sh"
        ],
        [
            "Georgian",
            "ქართული",
            "ka"
        ],
        [
            "Occitan",
            "Occitan",
            "oc"
        ],
        [
            "Macedonian",
            "Македонски",
            "mk"
        ],
        [
            "Newar / Nepal Bhasa",
            "नेपाल भाषा",
            "new"
        ],
        [
            "Tagalog",
            "Tagalog",
            "tl"
        ],
        [
            "Piedmontese",
            "Piemontèis",
            "pms"
        ],
        [
            "Belarusian",
            "Беларуская",
            "be"
        ],
        [
            "Haitian",
            "Krèyol ayisyen",
            "ht"
        ],
        [
            "Tamil",
            "தமிழ்",
            "ta"
        ],
        [
            "Telugu",
            "తెలుగు",
            "te"
        ],
        [
            "Belarusian (Taraškievica)",
            "Беларуская (тарашкевіца)",
            "be-x-old"
        ],
        [
            "Latvian",
            "Latviešu",
            "lv"
        ],
        [
            "Breton",
            "Brezhoneg",
            "br"
        ],
        [
            "Malagasy",
            "Malagasy",
            "mg"
        ],
        [
            "Albanian",
            "Shqip",
            "sq"
        ],
        [
            "Armenian",
            "Հայերեն",
            "hy"
        ],
        [
            "Tatar",
            "Tatarça / Татарча",
            "tt"
        ],
        [
            "Javanese",
            "Basa Jawa",
            "jv"
        ],
        [
            "Welsh",
            "Cymraeg",
            "cy"
        ],
        [
            "Marathi",
            "मराठी",
            "mr"
        ],
        [
            "Luxembourgish",
            "Lëtzebuergesch",
            "lb"
        ],
        [
            "Icelandic",
            "Íslenska",
            "is"
        ],
        [
            "Bosnian",
            "Bosanski",
            "bs"
        ],
        [
            "Burmese",
            "မြန်မာဘာသာ",
            "my"
        ],
        [
            "Yoruba",
            "Yorùbá",
            "yo"
        ],
        [
            "Bashkir",
            "Башҡорт",
            "ba"
        ],
        [
            "Malayalam",
            "മലയാളം",
            "ml"
        ],
        [
            "Aragonese",
            "Aragonés",
            "an"
        ],
        [
            "Lombard",
            "Lumbaart",
            "lmo"
        ],
        [
            "Afrikaans",
            "Afrikaans",
            "af"
        ],
        [
            "West Frisian",
            "Frysk",
            "fy"
        ],
        [
            "Western Panjabi",
            "شاہ مکھی پنجابی (Shāhmukhī Pañjābī)",
            "pnb"
        ],
        [
            "Bengali",
            "বাংলা",
            "bn"
        ],
        [
            "Swahili",
            "Kiswahili",
            "sw"
        ],
        [
            "Bishnupriya Manipuri",
            "ইমার ঠার/বিষ্ণুপ্রিয়া মণিপুরী",
            "bpy"
        ],
        [
            "Ido",
            "Ido",
            "io"
        ],
        [
            "Kirghiz",
            "Кыргызча",
            "ky"
        ],
        [
            "Urdu",
            "اردو",
            "ur"
        ],
        [
            "Nepali",
            "नेपाली",
            "ne"
        ],
        [
            "Sicilian",
            "Sicilianu",
            "scn"
        ],
        [
            "Gujarati",
            "ગુજરાતી",
            "gu"
        ],
        [
            "Cantonese",
            "粵語",
            "zh-yue"
        ],
        [
            "Low Saxon",
            "Plattdüütsch",
            "nds"
        ],
        [
            "Kurdish",
            "Kurdî / كوردی",
            "ku"
        ],
        [
            "Irish",
            "Gaeilge",
            "ga"
        ],
        [
            "Asturian",
            "Asturianu",
            "ast"
        ],
        [
            "Quechua",
            "Runa Simi",
            "qu"
        ],
        [
            "Sundanese",
            "Basa Sunda",
            "su"
        ],
        [
            "Chuvash",
            "Чăваш",
            "cv"
        ],
        [
            "Scots",
            "Scots",
            "sco"
        ],
        [
            "Interlingua",
            "Interlingua",
            "ia"
        ],
        [
            "Alemannic",
            "Alemannisch",
            "als"
        ],
        [
            "Buginese",
            "Basa Ugi",
            "bug"
        ],
        [
            "Neapolitan",
            "Nnapulitano",
            "nap"
        ],
        [
            "Samogitian",
            "Žemaitėška",
            "bat-smg"
        ],
        [
            "Kannada",
            "ಕನ್ನಡ",
            "kn"
        ],
        [
            "Banyumasan",
            "Basa Banyumasan",
            "map-bms"
        ],
        [
            "Walloon",
            "Walon",
            "wa"
        ],
        [
            "Amharic",
            "አማርኛ",
            "am"
        ],
        [
            "Sorani",
            "Soranî / کوردی",
            "ckb"
        ],
        [
            "Scottish Gaelic",
            "Gàidhlig",
            "gd"
        ],
        [
            "Fiji Hindi",
            "Fiji Hindi",
            "hif"
        ],
        [
            "Min Nan",
            "Bân-lâm-gú",
            "zh-min-nan"
        ],
        [
            "Tajik",
            "Тоҷикӣ",
            "tg"
        ],
        [
            "Mazandarani",
            "مَزِروني",
            "mzn"
        ],
        [
            "Egyptian Arabic",
            "مصرى (Maṣrī)",
            "arz"
        ],
        [
            "Yiddish",
            "ייִדיש",
            "yi"
        ],
        [
            "Venetian",
            "Vèneto",
            "vec"
        ],
        [
            "Mongolian",
            "Монгол",
            "mn"
        ],
        [
            "Tarantino",
            "Tarandíne",
            "roa-tara"
        ],
        [
            "Sanskrit",
            "संस्कृतम्",
            "sa"
        ],
        [
            "Nahuatl",
            "Nāhuatl",
            "nah"
        ],
        [
            "Ossetian",
            "Иронау",
            "os"
        ],
        [
            "Sakha",
            "Саха тыла (Saxa Tyla)",
            "sah"
        ],
        [
            "Kapampangan",
            "Kapampangan",
            "pam"
        ],
        [
            "Upper Sorbian",
            "Hornjoserbsce",
            "hsb"
        ],
        [
            "Sinhalese",
            "සිංහල",
            "si"
        ],
        [
            "Northern Sami",
            "Sámegiella",
            "se"
        ],
        [
            "Limburgish",
            "Limburgs",
            "li"
        ],
        [
            "Maori",
            "Māori",
            "mi"
        ],
        [
            "Bavarian",
            "Boarisch",
            "bar"
        ],
        [
            "Corsican",
            "Corsu",
            "co"
        ],
        [
            "Ilokano",
            "Ilokano",
            "ilo"
        ],
        [
            "Gan",
            "贛語",
            "gan"
        ],
        [
            "Tibetan",
            "བོད་སྐད",
            "bo"
        ],
        [
            "Gilaki",
            "گیلکی",
            "glk"
        ],
        [
            "Faroese",
            "Føroyskt",
            "fo"
        ],
        [
            "Rusyn",
            "русиньскый язык",
            "rue"
        ],
        [
            "Punjabi",
            "ਪੰਜਾਬੀ",
            "pa"
        ],
        [
            "Central_Bicolano",
            "Bikol",
            "bcl"
        ],
        [
            "Hill Mari",
            "Кырык Мары (Kyryk Mary) ",
            "mrj"
        ],
        [
            "Võro",
            "Võro",
            "fiu-vro"
        ],
        [
            "Dutch Low Saxon",
            "Nedersaksisch",
            "nds-nl"
        ],
        [
            "Turkmen",
            "تركمن / Туркмен",
            "tk"
        ],
        [
            "Pashto",
            "پښتو",
            "ps"
        ],
        [
            "West Flemish",
            "West-Vlams",
            "vls"
        ],
        [
            "Mingrelian",
            "მარგალური (Margaluri)",
            "xmf"
        ],
        [
            "Manx",
            "Gaelg",
            "gv"
        ],
        [
            "Zazaki",
            "Zazaki",
            "diq"
        ],
        [
            "Pangasinan",
            "Pangasinan",
            "pag"
        ],
        [
            "Komi",
            "Коми",
            "kv"
        ],
        [
            "Zeelandic",
            "Zeêuws",
            "zea"
        ],
        [
            "Divehi",
            "ދިވެހިބަސް",
            "dv"
        ],
        [
            "Oriya",
            "ଓଡ଼ିଆ",
            "or"
        ],
        [
            "Khmer",
            "ភាសាខ្មែរ",
            "km"
        ],
        [
            "Norman",
            "Nouormand/Normaund",
            "nrm"
        ],
        [
            "Romansh",
            "Rumantsch",
            "rm"
        ],
        [
            "Komi-Permyak",
            "Перем Коми (Perem Komi)",
            "koi"
        ],
        [
            "Udmurt",
            "Удмурт кыл",
            "udm"
        ],
        [
            "Meadow Mari",
            "Олык Марий (Olyk Marij)",
            "mhr"
        ],
        [
            "Ladino",
            "Dzhudezmo",
            "lad"
        ],
        [
            "North Frisian",
            "Nordfriisk",
            "frr"
        ],
        [
            "Kashubian",
            "Kaszëbsczi",
            "csb"
        ],
        [
            "Ligurian",
            "Líguru",
            "lij"
        ],
        [
            "Wu",
            "吴语",
            "wuu"
        ],
        [
            "Friulian",
            "Furlan",
            "fur"
        ],
        [
            "Vepsian",
            "Vepsän",
            "vep"
        ],
        [
            "Classical Chinese",
            "古文 / 文言文",
            "zh-classical"
        ],
        [
            "Uyghur",
            "ئۇيغۇر تىلى",
            "ug"
        ],
        [
            "Saterland Frisian",
            "Seeltersk",
            "stq"
        ],
        [
            "Sardinian",
            "Sardu",
            "sc"
        ],
        [
            "Aromanian",
            "Armãneashce",
            "roa-rup"
        ],
        [
            "Pali",
            "पाऴि",
            "pi"
        ],
        [
            "Somali",
            "Soomaaliga",
            "so"
        ],
        [
            "Bihari",
            "भोजपुरी",
            "bh"
        ],
        [
            "Maltese",
            "Malti",
            "mt"
        ],
        [
            "Aymara",
            "Aymar",
            "ay"
        ],
        [
            "Ripuarian",
            "Ripoarisch",
            "ksh"
        ],
        [
            "Novial",
            "Novial",
            "nov"
        ],
        [
            "Anglo-Saxon",
            "Englisc",
            "ang"
        ],
        [
            "Cornish",
            "Kernewek/Karnuack",
            "kw"
        ],
        [
            "Navajo",
            "Diné bizaad",
            "nv"
        ],
        [
            "Picard",
            "Picard",
            "pcd"
        ],
        [
            "Hakka",
            "Hak-kâ-fa / 客家話",
            "hak"
        ],
        [
            "Guarani",
            "Avañe'ẽ",
            "gn"
        ],
        [
            "Extremaduran",
            "Estremeñu",
            "ext"
        ],
        [
            "Franco-Provençal/Arpitan",
            "Arpitan",
            "frp"
        ],
        [
            "Assamese",
            "অসমীয়া",
            "as"
        ],
        [
            "Silesian",
            "Ślůnski",
            "szl"
        ],
        [
            "Gagauz",
            "Gagauz",
            "gag"
        ],
        [
            "Interlingue",
            "Interlingue",
            "ie"
        ],
        [
            "Lingala",
            "Lingala",
            "ln"
        ],
        [
            "Emilian-Romagnol",
            "Emiliàn e rumagnòl",
            "eml"
        ],
        [
            "Chechen",
            "Нохчийн",
            "ce"
        ],
        [
            "Kalmyk",
            "Хальмг",
            "xal"
        ],
        [
            "Palatinate German",
            "Pfälzisch",
            "pfl"
        ],
        [
            "Hawaiian",
            "Hawai`i",
            "haw"
        ],
        [
            "Karachay-Balkar",
            "Къарачай-Малкъар (Qarachay-Malqar)",
            "krc"
        ],
        [
            "Pennsylvania German",
            "Deitsch",
            "pdc"
        ],
        [
            "Kinyarwanda",
            "Ikinyarwanda",
            "rw"
        ],
        [
            "Crimean Tatar",
            "Qırımtatarca",
            "crh"
        ],
        [
            "Acehnese",
            "Bahsa Acèh",
            "ace"
        ],
        [
            "Tongan",
            "faka Tonga",
            "to"
        ],
        [
            "Greenlandic",
            "Kalaallisut",
            "kl"
        ],
        [
            "Lower Sorbian",
            "Dolnoserbski",
            "dsb"
        ],
        [
            "Aramaic",
            "ܐܪܡܝܐ",
            "arc"
        ],
        [
            "Erzya",
            "Эрзянь (Erzjanj Kelj)",
            "myv"
        ],
        [
            "Lezgian",
            "Лезги чІал (Lezgi č’al)",
            "lez"
        ],
        [
            "Banjar",
            "Bahasa Banjar",
            "bjn"
        ],
        [
            "Shona",
            "chiShona",
            "sn"
        ],
        [
            "Papiamentu",
            "Papiamentu",
            "pap"
        ],
        [
            "Kabyle",
            "Taqbaylit",
            "kab"
        ],
        [
            "Tok Pisin",
            "Tok Pisin",
            "tpi"
        ],
        [
            "Lak",
            "Лакку",
            "lbe"
        ],
        [
            "Buryat (Russia)",
            "Буряад",
            "bxr"
        ],
        [
            "Lojban",
            "Lojban",
            "jbo"
        ],
        [
            "Wolof",
            "Wolof",
            "wo"
        ],
        [
            "Moksha",
            "Мокшень (Mokshanj Kälj)",
            "mdf"
        ],
        [
            "Zamboanga Chavacano",
            "Chavacano de Zamboanga",
            "cbk-zam"
        ],
        [
            "Avar",
            "Авар",
            "av"
        ],
        [
            "Sranan",
            "Sranantongo",
            "srn"
        ],
        [
            "Mirandese",
            "Mirandés",
            "mwl"
        ],
        [
            "Kabardian Circassian",
            "Адыгэбзэ (Adighabze)",
            "kbd"
        ],
        [
            "Tahitian",
            "Reo Mā`ohi",
            "ty"
        ],
        [
            "Lao",
            "ລາວ",
            "lo"
        ],
        [
            "Abkhazian",
            "Аҧсуа",
            "ab"
        ],
        [
            "Tetum",
            "Tetun",
            "tet"
        ],
        [
            "Latgalian",
            "Latgaļu",
            "ltg"
        ],
        [
            "Nauruan",
            "dorerin Naoero",
            "na"
        ],
        [
            "Kongo",
            "KiKongo",
            "kg"
        ],
        [
            "Igbo",
            "Igbo",
            "ig"
        ],
        [
            "Northern Sotho",
            "Sesotho sa Leboa",
            "nso"
        ],
        [
            "Zhuang",
            "Cuengh",
            "za"
        ],
        [
            "Karakalpak",
            "Qaraqalpaqsha",
            "kaa"
        ],
        [
            "Zulu",
            "isiZulu",
            "zu"
        ],
        [
            "Cheyenne",
            "Tsetsêhestâhese",
            "chy"
        ],
        [
            "Romani",
            "romani - रोमानी",
            "rmy"
        ],
        [
            "Old Church Slavonic",
            "Словѣньскъ",
            "cu"
        ],
        [
            "Tswana",
            "Setswana",
            "tn"
        ],
        [
            "Cherokee",
            "ᏣᎳᎩ",
            "chr"
        ],
        [
            "Bislama",
            "Bislama",
            "bi"
        ],
        [
            "Min Dong",
            "Mìng-dĕ̤ng-ngṳ̄",
            "cdo"
        ],
        [
            "Gothic",
            "𐌲𐌿𐍄𐌹𐍃𐌺",
            "got"
        ],
        [
            "Samoan",
            "Gagana Samoa",
            "sm"
        ],
        [
            "Moldovan",
            "Молдовеняскэ",
            "mo"
        ],
        [
            "Bambara",
            "Bamanankan",
            "bm"
        ],
        [
            "Inuktitut",
            "ᐃᓄᒃᑎᑐᑦ",
            "iu"
        ],
        [
            "Norfolk",
            "Norfuk",
            "pih"
        ],
        [
            "Pontic",
            "Ποντιακά",
            "pnt"
        ],
        [
            "Sindhi",
            "سنڌي، سندھی ، सिन्ध",
            "sd"
        ],
        [
            "Swati",
            "SiSwati",
            "ss"
        ],
        [
            "Kikuyu",
            "Gĩkũyũ",
            "ki"
        ],
        [
            "Ewe",
            "Eʋegbe",
            "ee"
        ],
        [
            "Hausa",
            "هَوُسَ",
            "ha"
        ],
        [
            "Oromo",
            "Oromoo",
            "om"
        ],
        [
            "Fijian",
            "Na Vosa Vakaviti",
            "fj"
        ],
        [
            "Tigrinya",
            "ትግርኛ",
            "ti"
        ],
        [
            "Tsonga",
            "Xitsonga",
            "ts"
        ],
        [
            "Kashmiri",
            "कश्मीरी / كشميري",
            "ks"
        ],
        [
            "Venda",
            "Tshivenda",
            "ve"
        ],
        [
            "Sango",
            "Sängö",
            "sg"
        ],
        [
            "Kirundi",
            "Kirundi",
            "rn"
        ],
        [
            "Sesotho",
            "Sesotho",
            "st"
        ],
        [
            "Dzongkha",
            "ཇོང་ཁ",
            "dz"
        ],
        [
            "Cree",
            "Nehiyaw",
            "cr"
        ],
        [
            "Akan",
            "Akana",
            "ak"
        ],
        [
            "Tumbuka",
            "chiTumbuka",
            "tum"
        ],
        [
            "Luganda",
            "Luganda",
            "lg"
        ],
        [
            "Chichewa",
            "Chi-Chewa",
            "ny"
        ],
        [
            "Fula",
            "Fulfulde",
            "ff"
        ],
        [
            "Inupiak",
            "Iñupiak",
            "ik"
        ],
        [
            "Chamorro",
            "Chamoru",
            "ch"
        ],
        [
            "Twi",
            "Twi",
            "tw"
        ],
        [
            "Xhosa",
            "isiXhosa",
            "xh"
        ],
        [
            "Ndonga",
            "Oshiwambo",
            "ng"
        ],
        [
            "Sichuan Yi",
            "ꆇꉙ",
            "ii"
        ],
        [
            "Choctaw",
            "Choctaw",
            "cho"
        ],
        [
            "Marshallese",
            "Ebon",
            "mh"
        ],
        [
            "Afar",
            "Afar",
            "aa"
        ],
        [
            "Kuanyama",
            "Kuanyama",
            "kj"
        ],
        [
            "Hiri Motu",
            "Hiri Motu",
            "ho"
        ],
        [
            "Muscogee",
            "Muskogee",
            "mus"
        ],
        [
            "Kanuri",
            "Kanuri",
            "kr"
        ],
        [
            "Herero",
            "Otsiherero",
            "hz"
        ]
    ],
    "presets": {
        "presets": {
            "amenity": {
                "fields": [
                    "amenity"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "amenity": "*"
                },
                "name": "Amenity"
            },
            "amenity/church": {
                "icon": "church",
                "fields": [
                    "religion",
                    "denomination"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "terms": [
                    "abbey",
                    "basilica",
                    "bethel",
                    "cathedral",
                    "chancel",
                    "chantry",
                    "chapel",
                    "church",
                    "fold",
                    "house of God",
                    "house of prayer",
                    "house of worship",
                    "minster",
                    "mission",
                    "mosque",
                    "oratory",
                    "parish",
                    "sacellum",
                    "sanctuary",
                    "shrine",
                    "synagogue",
                    "tabernacle",
                    "temple"
                ],
                "tags": {
                    "amenity": "church",
                    "religion": "christian"
                },
                "name": "Church"
            },
            "amenity/health_hut": {
                "icon": "health_hut",
                "fields": [],
                "geometry": [
                    "point",
                    "area"
                ],
                "terms": [
                    "clinic",
                    "emergency room",
                    "health service",
                    "hospice",
                    "infirmary",
                    "institution",
                    "nursing home",
                    "rest home",
                    "sanatorium",
                    "sanitarium",
                    "sick bay",
                    "surgery",
                    "ward",
                    "hospital"
                ],
                "tags": {
                    "amenity": "health_hut"
                },
                "name": "Health Hut"
            },
            "amenity/school": {
                "icon": "school",
                "fields": [
                    "school_type"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "terms": [
                    "academy",
                    "alma mater",
                    "blackboard",
                    "college",
                    "department",
                    "discipline",
                    "establishment",
                    "faculty",
                    "hall",
                    "halls of ivy",
                    "institute",
                    "institution",
                    "jail*",
                    "schoolhouse",
                    "seminary",
                    "university"
                ],
                "tags": {
                    "amenity": "school"
                },
                "name": "School"
            },
            "area": {
                "name": "Area",
                "tags": {
                    "area": "yes"
                },
                "geometry": [
                    "area"
                ]
            },
            "community": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "*"
                },
                "name": "Community"
            },
            "community/burial_grounds": {
                "icon": "burial_grounds",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "burial_grounds"
                },
                "name": "Burial Grounds"
            },
            "community/farm": {
                "icon": "farm",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "farm"
                },
                "name": "Farm"
            },
            "community/homestead": {
                "icon": "homestead",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "homestead"
                },
                "name": "Homestead"
            },
            "community/hunting_camp": {
                "icon": "hunting_camp",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "hunting_camp"
                },
                "name": "Hunting Camp"
            },
            "community/landing": {
                "icon": "landing",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "landing"
                },
                "name": "Landing"
            },
            "community/old_farm": {
                "icon": "old_farm",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "farm",
                    "status": "old"
                },
                "name": "Old Farm"
            },
            "community/old_homestead": {
                "icon": "old_homestead",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "homestead",
                    "status": "old"
                },
                "name": "Old Homestead"
            },
            "community/old_hunting_camp": {
                "icon": "old_hunting_camp",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "hunting_camp",
                    "status": "old"
                },
                "name": "Old Hunting Camp"
            },
            "community/old_village": {
                "icon": "old_village",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "village",
                    "status": "old"
                },
                "name": "Farm"
            },
            "community/ranch": {
                "icon": "ranch",
                "fields": [
                    "owner"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "community": "ranch"
                },
                "name": "Ranch"
            },
            "community/satellite_village": {
                "icon": "satellite_village",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "village",
                    "type": "satellite"
                },
                "name": "Satellite Village"
            },
            "community/village": {
                "icon": "village",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "community": "village"
                },
                "name": "Village"
            },
            "fauna": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "fauna": "*"
                },
                "name": "Fauna"
            },
            "fauna/egg_gathering": {
                "icon": "egg_gathering",
                "fields": [
                    "access"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "fauna": "egg_gathering"
                },
                "name": "Egg Gathering"
            },
            "fauna/rare_bird": {
                "icon": "rare_bird",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "fauna": "rare_bird"
                },
                "name": "Rare Bird"
            },
            "fauna/trapping": {
                "icon": "trapping",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "fauna": "trapping"
                },
                "name": "Trapping"
            },
            "fauna/turtle": {
                "icon": "turtle",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "fauna": "turtle"
                },
                "name": "Turtle"
            },
            "flora": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "flora": "*"
                },
                "name": "Flora"
            },
            "flora/balata": {
                "icon": "balata",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "balata"
                },
                "name": "Balata"
            },
            "flora/bamboo": {
                "icon": "bamboo",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "bamboo"
                },
                "name": "Bamboo"
            },
            "flora/building_material": {
                "icon": "building_material",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "building_material"
                },
                "name": "Building Material"
            },
            "flora/craft_material": {
                "icon": "craft_material",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "flora": "craft_material"
                },
                "name": "Craft Material"
            },
            "flora/eta": {
                "icon": "eta",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "eta"
                },
                "name": "Eta Palm"
            },
            "flora/firewood": {
                "icon": "firewood",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "firewood"
                },
                "name": "Firewood Gathering Area"
            },
            "flora/forest_fruits": {
                "icon": "forest_fruits",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "forest_fruits"
                },
                "name": "Forest Fruits"
            },
            "flora/medicinal_plants": {
                "icon": "medicinal_plants",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "flora": "medicinal_plants"
                },
                "name": "Medicinal Plants"
            },
            "flora/old_timber": {
                "icon": "old_timber",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "timber",
                    "status": "old"
                },
                "name": "Old timber area"
            },
            "flora/palms": {
                "icon": "palms",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "palms"
                },
                "name": "Palms"
            },
            "flora/poison": {
                "icon": "poison",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "poison"
                },
                "name": "Poison collecting area"
            },
            "flora/resin": {
                "icon": "resin",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "resin"
                },
                "name": "Resin"
            },
            "flora/timber": {
                "icon": "timber",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "flora": "timber"
                },
                "name": "Timber Area"
            },
            "heritage": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "heritage": "*"
                },
                "name": "Heritage"
            },
            "heritage/historical_site": {
                "icon": "historical_site",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "heritage": "historical_site"
                },
                "name": "Historical Site"
            },
            "heritage/rock_carvings": {
                "icon": "rock_carvings",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "heritage": "rock_carvings"
                },
                "name": "Rock Carvings"
            },
            "infrastructure": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "infrastructure": "*"
                },
                "name": "Infrastructure"
            },
            "infrastructure/airstrip": {
                "icon": "airstrip",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "infrastructure": "airstrip"
                },
                "name": "Historical Site"
            },
            "infrastructure/bridge": {
                "icon": "bridge",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "infrastructure": "bridge"
                },
                "name": "Bridge"
            },
            "infrastructure/coral": {
                "icon": "coral",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "infrastructure": "coral"
                },
                "name": "Coral"
            },
            "landrights/extension": {
                "icon": "territory-boundary",
                "fields": [
                    "village",
                    "status"
                ],
                "geometry": [
                    "point",
                    "line",
                    "area",
                    "vertex"
                ],
                "tags": {
                    "landrights": "extension"
                },
                "name": "Land Title Extension"
            },
            "landrights/landclaim": {
                "icon": "territory-boundary",
                "geometry": [
                    "point",
                    "line",
                    "area",
                    "vertex"
                ],
                "tags": {
                    "landrights": "landclaim"
                },
                "name": "Land Claim Boundary"
            },
            "landrights/title": {
                "icon": "territory-boundary",
                "fields": [
                    "village",
                    "status"
                ],
                "geometry": [
                    "point",
                    "line",
                    "area",
                    "vertex"
                ],
                "tags": {
                    "landrights": "title"
                },
                "name": "Land Title"
            },
            "landscape/bush": {
                "icon": "bush",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landscape": "bush"
                },
                "name": "Bush"
            },
            "landscape/bush_island": {
                "icon": "bush_island",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landscape": "bush_island"
                },
                "name": "Bush Island"
            },
            "landscape/savannah": {
                "icon": "savannah",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landscape": "savannah"
                },
                "name": "Savannah"
            },
            "landscape/savannah_island": {
                "icon": "savannah_island",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landscape": "savannah_island"
                },
                "name": "Savannah Island"
            },
            "landscape/swamp": {
                "icon": "swamp",
                "fields": [
                    "name"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landscape": "swamp"
                },
                "name": "Swamp"
            },
            "landuse/conservation": {
                "icon": "conservation",
                "fields": [
                    "village"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landuse": "conservation"
                },
                "name": "Conservation Area"
            },
            "landuse/fishing": {
                "icon": "fishing",
                "fields": [
                    "village"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landuse": "fishing"
                },
                "name": "Fishing Area"
            },
            "landuse/hunting": {
                "icon": "hunting",
                "fields": [
                    "village"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "landuse": "hunting"
                },
                "name": "Hunting Area"
            },
            "line": {
                "name": "Line",
                "tags": {},
                "geometry": [
                    "line"
                ]
            },
            "mineral": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point"
                ],
                "tags": {
                    "mineral": "*"
                },
                "name": "Mineral"
            },
            "mineral/clay": {
                "icon": "clay",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "mineral": "clay"
                },
                "name": "Clay"
            },
            "mineral/precious_stones": {
                "icon": "precious_stones",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "mineral": "precious_stones",
                    "display": "private"
                },
                "name": "Precious Stones"
            },
            "point": {
                "name": "Point",
                "icon": "marker-stroked",
                "tags": {},
                "geometry": [
                    "point"
                ]
            },
            "relation": {
                "name": "Relation",
                "icon": "relation",
                "tags": {},
                "geometry": [
                    "relation"
                ],
                "fields": [
                    "relation"
                ]
            },
            "spiritual/no_go_zone": {
                "icon": "no_go_zone",
                "fields": [
                    "note"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "spiritual": "no_go_zone"
                },
                "name": "No Go Zone"
            },
            "spiritual/sacred_site": {
                "icon": "sacred_site",
                "fields": [
                    "note"
                ],
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "spiritual": "sacred_site"
                },
                "name": "Sacred Site"
            },
            "territory": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "vertex",
                    "line",
                    "area"
                ],
                "tags": {
                    "territory": "*"
                },
                "name": "Territory"
            },
            "vertex": {
                "name": "Other",
                "tags": {},
                "geometry": [
                    "vertex"
                ]
            },
            "water": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "vertex",
                    "line",
                    "area"
                ],
                "tags": {
                    "water": "*"
                },
                "name": "Water"
            },
            "water/crossing": {
                "icon": "crossing",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "crossing"
                },
                "name": "River/Creek Crossing"
            },
            "water/island": {
                "icon": "island",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "island"
                },
                "name": "Island"
            },
            "water/lake": {
                "icon": "lake",
                "geometry": [
                    "point",
                    "area"
                ],
                "tags": {
                    "water": "lake"
                },
                "name": "Lake"
            },
            "water/pond": {
                "icon": "pond",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "pond"
                },
                "name": "Pond"
            },
            "water/pools": {
                "icon": "pools",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "pools"
                },
                "name": "Deep Pools"
            },
            "water/rapids": {
                "icon": "rapids",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "rapids"
                },
                "name": "Rapids"
            },
            "water/river": {
                "icon": "river",
                "geometry": [
                    "point",
                    "line",
                    "vertex",
                    "area"
                ],
                "terms": [
                    "beck",
                    "branch",
                    "brook",
                    "course",
                    "creek",
                    "estuary",
                    "rill",
                    "rivulet",
                    "run",
                    "runnel",
                    "stream",
                    "tributary",
                    "watercourse"
                ],
                "tags": {
                    "water": "river"
                },
                "name": "River"
            },
            "water/waterfall": {
                "icon": "waterfall",
                "geometry": [
                    "point"
                ],
                "tags": {
                    "water": "waterfall"
                },
                "name": "Waterfall"
            },
            "way": {
                "fields": [
                    "leisure"
                ],
                "geometry": [
                    "point",
                    "vertex",
                    "line"
                ],
                "tags": {
                    "way": "*"
                },
                "name": "Way"
            },
            "way/line": {
                "icon": "line",
                "geometry": [
                    "point",
                    "line"
                ],
                "tags": {
                    "way": "line"
                },
                "name": "Hunting Line"
            },
            "way/track": {
                "icon": "track",
                "geometry": [
                    "point",
                    "line"
                ],
                "tags": {
                    "way": "track"
                },
                "name": "Track"
            }
        },
        "defaults": {
            "area": [
                "category-landcover",
                "category-landrights",
                "landuse/hunting",
                "landuse/fishing",
                "landuse/conservation",
                "spiritual/no_go_zone",
                "spiritual/sacred_site"
            ],
            "line": [
                "way/line",
                "way/track",
                "water/river"
            ],
            "point": [
                "category-amenity",
                "category-community",
                "category-fauna",
                "category-flora",
                "category-infrastructure",
                "category-water",
                "category-other",
                "point"
            ],
            "vertex": [],
            "relation": []
        },
        "categories": {
            "category-amenity": {
                "geometry": "point",
                "name": "Amenity",
                "icon": "marker-stroked",
                "members": [
                    "amenity/church",
                    "amenity/health_hut",
                    "amenity/school"
                ]
            },
            "category-community": {
                "geometry": "point",
                "name": "Community",
                "icon": "marker-stroked",
                "members": [
                    "community/burial_grounds",
                    "community/farm",
                    "community/homestead",
                    "community/hunting_camp",
                    "community/landing",
                    "community/old_farm",
                    "community/old_homestead",
                    "community/old_hunting_camp",
                    "community/old_village",
                    "community/ranch",
                    "community/satellite_village",
                    "community/village"
                ]
            },
            "category-fauna": {
                "geometry": "point",
                "name": "Fauna",
                "icon": "marker-stroked",
                "members": [
                    "fauna/egg_gathering",
                    "fauna/rare_bird",
                    "fauna/trapping",
                    "fauna/turtle"
                ]
            },
            "category-flora": {
                "geometry": "point",
                "name": "Flora",
                "icon": "marker-stroked",
                "members": [
                    "flora/balata",
                    "flora/bamboo",
                    "flora/building_material",
                    "flora/craft_material",
                    "flora/eta",
                    "flora/firewood",
                    "flora/forest_fruits",
                    "flora/medicinal_plants",
                    "flora/palms",
                    "flora/poison",
                    "flora/resin",
                    "flora/old_timber",
                    "flora/timber"
                ]
            },
            "category-infrastructure": {
                "geometry": "point",
                "name": "Infrastructure",
                "icon": "marker-stroked",
                "members": [
                    "infrastructure/airstrip",
                    "infrastructure/bridge",
                    "infrastructure/coral"
                ]
            },
            "category-landcover": {
                "geometry": "area",
                "name": "Landcover",
                "icon": "marker-stroked",
                "members": [
                    "landscape/bush",
                    "landscape/savannah",
                    "landscape/bush_island",
                    "landscape/savannah_island",
                    "landscape/swamp"
                ]
            },
            "category-landrights": {
                "geometry": "area",
                "name": "Land Rights",
                "icon": "marker-stroked",
                "members": [
                    "landrights/landclaim",
                    "landrights/title",
                    "landrights/extension"
                ]
            },
            "category-other": {
                "geometry": "point",
                "name": "Other",
                "icon": "marker-stroked",
                "members": [
                    "spiritual/sacred_site",
                    "heritage/historical_site",
                    "heritage/rock_carvings",
                    "mineral/clay",
                    "mineral/precious_stones"
                ]
            },
            "category-water": {
                "geometry": "point",
                "name": "Water",
                "icon": "marker-stroked",
                "members": [
                    "water/lake",
                    "water/pools",
                    "water/rapids",
                    "water/island",
                    "water/waterfall",
                    "water/crossing"
                ]
            }
        },
        "fields": {
            "access": {
                "keys": [
                    "access",
                    "foot",
                    "motor_vehicle",
                    "bicycle",
                    "horse"
                ],
                "type": "access",
                "label": "Access",
                "placeholder": "Unknown",
                "strings": {
                    "types": {
                        "access": "General",
                        "foot": "Foot",
                        "motor_vehicle": "Motor Vehicles",
                        "bicycle": "Bicycles",
                        "horse": "Horses"
                    },
                    "options": {
                        "yes": {
                            "title": "Allowed",
                            "description": "Access permitted by law; a right of way"
                        },
                        "no": {
                            "title": "Prohibited",
                            "description": "Access not permitted to the general public"
                        },
                        "permissive": {
                            "title": "Permissive",
                            "description": "Access permitted until such time as the owner revokes the permission"
                        },
                        "private": {
                            "title": "Private",
                            "description": "Access permitted only with permission of the owner on an individual basis"
                        },
                        "designated": {
                            "title": "Designated",
                            "description": "Access permitted according to signs or specific local laws"
                        },
                        "destination": {
                            "title": "Destination",
                            "description": "Access permitted only to reach a destination"
                        }
                    }
                }
            },
            "access_toilets": {
                "key": "access",
                "type": "combo",
                "label": "Access",
                "options": [
                    "public",
                    "permissive",
                    "private",
                    "customers"
                ]
            },
            "address": {
                "type": "address",
                "keys": [
                    "addr:housename",
                    "addr:housenumber",
                    "addr:street",
                    "addr:city",
                    "addr:postcode"
                ],
                "icon": "address",
                "universal": false,
                "label": "Address",
                "strings": {
                    "placeholders": {
                        "housename": "Housename",
                        "number": "123",
                        "street": "Street",
                        "city": "City",
                        "postcode": "Postal code"
                    }
                }
            },
            "admin_level": {
                "key": "admin_level",
                "type": "number",
                "label": "Admin Level"
            },
            "aeroway": {
                "key": "aeroway",
                "type": "combo",
                "label": "Type"
            },
            "amenity": {
                "key": "amenity",
                "type": "combo",
                "label": "Type"
            },
            "artist": {
                "key": "artist_name",
                "type": "text",
                "label": "Artist"
            },
            "artwork_type": {
                "key": "artwork_type",
                "type": "combo",
                "label": "Type"
            },
            "atm": {
                "key": "atm",
                "type": "check",
                "label": "ATM"
            },
            "backrest": {
                "key": "backrest",
                "type": "check",
                "label": "Backrest"
            },
            "barrier": {
                "key": "barrier",
                "type": "combo",
                "label": "Type"
            },
            "bicycle_parking": {
                "key": "bicycle_parking",
                "type": "combo",
                "label": "Type"
            },
            "boundary": {
                "key": "boundary",
                "type": "combo",
                "label": "Type"
            },
            "building": {
                "key": "building",
                "type": "combo",
                "label": "Building"
            },
            "building_area": {
                "key": "building",
                "type": "check",
                "default": "yes",
                "geometry": "area",
                "label": "Building"
            },
            "building_yes": {
                "key": "building",
                "type": "combo",
                "default": "yes",
                "label": "Building"
            },
            "capacity": {
                "key": "capacity",
                "type": "number",
                "label": "Capacity",
                "placeholder": "50, 100, 200..."
            },
            "cardinal_direction": {
                "key": "direction",
                "type": "combo",
                "options": [
                    "N",
                    "E",
                    "S",
                    "W",
                    "NE",
                    "SE",
                    "SW",
                    "NNE",
                    "ENE",
                    "ESE",
                    "SSE",
                    "SSW",
                    "WSW",
                    "WNW",
                    "NNW"
                ],
                "label": "Direction"
            },
            "clock_direction": {
                "key": "direction",
                "type": "combo",
                "options": [
                    "clockwise",
                    "anticlockwise"
                ],
                "label": "Direction",
                "strings": {
                    "options": {
                        "clockwise": "Clockwise",
                        "anticlockwise": "Counterclockwise"
                    }
                }
            },
            "collection_times": {
                "key": "collection_times",
                "type": "text",
                "label": "Collection Times"
            },
            "construction": {
                "key": "construction",
                "type": "combo",
                "label": "Type"
            },
            "country": {
                "key": "country",
                "type": "combo",
                "label": "Country"
            },
            "crossing": {
                "key": "crossing",
                "type": "combo",
                "label": "Type"
            },
            "cuisine": {
                "key": "cuisine",
                "type": "combo",
                "indexed": true,
                "label": "Cuisine"
            },
            "denomination": {
                "key": "denomination",
                "type": "combo",
                "label": "Denomination"
            },
            "denotation": {
                "key": "denotation",
                "type": "combo",
                "label": "Denotation"
            },
            "description": {
                "key": "description",
                "type": "textarea",
                "label": "Description"
            },
            "elevation": {
                "key": "ele",
                "type": "number",
                "icon": "elevation",
                "universal": true,
                "label": "Elevation"
            },
            "emergency": {
                "key": "emergency",
                "type": "check",
                "label": "Emergency"
            },
            "entrance": {
                "key": "entrance",
                "type": "combo",
                "label": "Type"
            },
            "fax": {
                "key": "fax",
                "type": "tel",
                "label": "Fax",
                "placeholder": "+31 42 123 4567"
            },
            "fee": {
                "key": "fee",
                "type": "check",
                "label": "Fee"
            },
            "fire_hydrant/type": {
                "key": "fire_hydrant:type",
                "type": "combo",
                "options": [
                    "pillar",
                    "pond",
                    "underground",
                    "wall"
                ],
                "label": "Type"
            },
            "fixme": {
                "key": "fixme",
                "type": "textarea",
                "label": "Fix Me"
            },
            "generator/method": {
                "key": "generator:method",
                "type": "combo",
                "label": "Method"
            },
            "generator/source": {
                "key": "generator:source",
                "type": "combo",
                "label": "Source"
            },
            "generator/type": {
                "key": "generator:type",
                "type": "combo",
                "label": "Type"
            },
            "highway": {
                "key": "highway",
                "type": "combo",
                "label": "Type"
            },
            "historic": {
                "key": "historic",
                "type": "combo",
                "label": "Type"
            },
            "iata": {
                "key": "iata",
                "type": "text",
                "label": "IATA"
            },
            "icao": {
                "key": "icao",
                "type": "text",
                "label": "ICAO"
            },
            "incline": {
                "key": "incline",
                "type": "combo",
                "label": "Incline"
            },
            "internet_access": {
                "key": "internet_access",
                "type": "combo",
                "options": [
                    "yes",
                    "no",
                    "wlan",
                    "wired",
                    "terminal"
                ],
                "label": "Internet Access",
                "strings": {
                    "options": {
                        "yes": "Yes",
                        "no": "No",
                        "wlan": "Wifi",
                        "wired": "Wired",
                        "terminal": "Terminal"
                    }
                }
            },
            "landuse": {
                "key": "landuse",
                "type": "combo",
                "label": "Type"
            },
            "lanes": {
                "key": "lanes",
                "type": "number",
                "label": "Lanes",
                "placeholder": "1, 2, 3..."
            },
            "layer": {
                "key": "layer",
                "type": "combo",
                "label": "Layer"
            },
            "leisure": {
                "key": "leisure",
                "type": "combo",
                "label": "Type"
            },
            "levels": {
                "key": "building:levels",
                "type": "number",
                "label": "Levels",
                "placeholder": "2, 4, 6..."
            },
            "lit": {
                "key": "lit",
                "type": "check",
                "label": "Lit"
            },
            "location": {
                "key": "location",
                "type": "combo",
                "label": "Location"
            },
            "man_made": {
                "key": "man_made",
                "type": "combo",
                "label": "Type"
            },
            "maxspeed": {
                "key": "maxspeed",
                "type": "maxspeed",
                "label": "Speed Limit",
                "placeholder": "40, 50, 60..."
            },
            "name": {
                "key": "name",
                "type": "localized",
                "label": "Name",
                "placeholder": "Common name (if any)"
            },
            "natural": {
                "key": "natural",
                "type": "combo",
                "label": "Natural"
            },
            "network": {
                "key": "network",
                "type": "text",
                "label": "Network"
            },
            "note": {
                "key": "note",
                "type": "textarea",
                "universal": true,
                "show": true,
                "icon": "note",
                "label": "Note",
                "placeholder": "Any story or description of this place"
            },
            "office": {
                "key": "office",
                "type": "combo",
                "label": "Type"
            },
            "oneway": {
                "key": "oneway",
                "type": "check",
                "label": "One Way"
            },
            "oneway_yes": {
                "key": "oneway",
                "type": "check",
                "default": "yes",
                "label": "One Way"
            },
            "opening_hours": {
                "key": "opening_hours",
                "type": "text",
                "label": "Hours"
            },
            "operator": {
                "key": "operator",
                "type": "text",
                "label": "Operator"
            },
            "owner": {
                "key": "name",
                "type": "text",
                "label": "Owner",
                "placeholder": "Owner (if any)"
            },
            "park_ride": {
                "key": "park_ride",
                "type": "check",
                "label": "Park and Ride"
            },
            "parking": {
                "key": "parking",
                "type": "combo",
                "options": [
                    "surface",
                    "multi-storey",
                    "underground",
                    "sheds",
                    "carports",
                    "garage_boxes",
                    "lane"
                ],
                "label": "Type"
            },
            "phone": {
                "key": "phone",
                "type": "tel",
                "icon": "telephone",
                "universal": false,
                "label": "Phone",
                "placeholder": "+31 42 123 4567"
            },
            "place": {
                "key": "place",
                "type": "combo",
                "label": "Type"
            },
            "power": {
                "key": "power",
                "type": "combo",
                "label": "Type"
            },
            "railway": {
                "key": "railway",
                "type": "combo",
                "label": "Type"
            },
            "ref": {
                "key": "ref",
                "type": "text",
                "label": "Reference"
            },
            "relation": {
                "key": "type",
                "type": "combo",
                "label": "Type"
            },
            "religion": {
                "key": "religion",
                "type": "combo",
                "options": [
                    "christian",
                    "muslim",
                    "buddhist",
                    "jewish",
                    "hindu",
                    "shinto",
                    "taoist"
                ],
                "label": "Religion",
                "strings": {
                    "options": {
                        "christian": "Christian",
                        "muslim": "Muslim",
                        "buddhist": "Buddhist",
                        "jewish": "Jewish",
                        "hindu": "Hindu",
                        "shinto": "Shinto",
                        "taoist": "Taoist"
                    }
                }
            },
            "restriction": {
                "key": "restriction",
                "type": "combo",
                "label": "Type"
            },
            "route": {
                "key": "route",
                "type": "combo",
                "label": "Type"
            },
            "route_master": {
                "key": "route_master",
                "type": "combo",
                "label": "Type"
            },
            "sac_scale": {
                "key": "sac_scale",
                "type": "combo",
                "label": "Path Difficulty"
            },
            "school_type": {
                "key": "school_type",
                "type": "combo",
                "options": [
                    "primary",
                    "secondary"
                ],
                "label": "School Age Group",
                "strings": {
                    "options": {
                        "primary": "Primary",
                        "secondary": "Secondary"
                    }
                }
            },
            "service": {
                "key": "service",
                "type": "combo",
                "options": [
                    "parking_aisle",
                    "driveway",
                    "alley",
                    "drive-through",
                    "emergency_access"
                ],
                "label": "Type"
            },
            "shelter": {
                "key": "shelter",
                "type": "check",
                "label": "Shelter"
            },
            "shop": {
                "key": "shop",
                "type": "combo",
                "label": "Type"
            },
            "source": {
                "key": "source",
                "type": "text",
                "icon": "source",
                "universal": true,
                "label": "Source"
            },
            "sport": {
                "key": "sport",
                "type": "combo",
                "label": "Sport"
            },
            "status": {
                "key": "status",
                "type": "radio",
                "options": [
                    "proposed",
                    "submitted",
                    "granted"
                ],
                "label": "Status",
                "strings": {
                    "options": {
                        "proposed": "Proposed",
                        "submitted": "Submitted to government",
                        "granted": "Granted by government"
                    }
                }
            },
            "structure": {
                "type": "radio",
                "keys": [
                    "bridge",
                    "tunnel",
                    "embankment",
                    "cutting"
                ],
                "label": "Structure",
                "placeholder": "Unknown",
                "strings": {
                    "options": {
                        "bridge": "Bridge",
                        "tunnel": "Tunnel",
                        "embankment": "Embankment",
                        "cutting": "Cutting"
                    }
                }
            },
            "supervised": {
                "key": "supervised",
                "type": "check",
                "label": "Supervised"
            },
            "surface": {
                "key": "surface",
                "type": "combo",
                "label": "Surface"
            },
            "toilets/disposal": {
                "key": "toilets:disposal",
                "type": "combo",
                "label": "Disposal"
            },
            "tourism": {
                "key": "tourism",
                "type": "combo",
                "label": "Type"
            },
            "towertype": {
                "key": "tower:type",
                "type": "combo",
                "label": "Tower type"
            },
            "tracktype": {
                "key": "tracktype",
                "type": "combo",
                "label": "Type"
            },
            "trail_visibility": {
                "key": "trail_visibility",
                "type": "combo",
                "label": "Trail Visibility"
            },
            "vending": {
                "key": "vending",
                "type": "combo",
                "label": "Type of Goods"
            },
            "village": {
                "key": "village",
                "type": "combo",
                "options": [
                    "Shorinab",
                    "Sawarwao"
                ],
                "label": "Village",
                "placeholder": "Village Name (if this belongs to a particular village)"
            },
            "water": {
                "key": "water",
                "type": "combo",
                "label": "Type"
            },
            "waterway": {
                "key": "waterway",
                "type": "combo",
                "label": "Type"
            },
            "website": {
                "key": "website",
                "type": "url",
                "icon": "website",
                "placeholder": "http://example.com/",
                "universal": false,
                "label": "Website"
            },
            "wetland": {
                "key": "wetland",
                "type": "combo",
                "label": "Type"
            },
            "wheelchair": {
                "key": "wheelchair",
                "type": "radio",
                "options": [
                    "yes",
                    "limited",
                    "no"
                ],
                "icon": "wheelchair",
                "universal": false,
                "label": "Wheelchair Access"
            },
            "wikipedia": {
                "key": "wikipedia",
                "type": "wikipedia",
                "icon": "wikipedia",
                "universal": false,
                "label": "Wikipedia"
            },
            "wood": {
                "key": "wood",
                "type": "combo",
                "label": "Type"
            }
        }
    },
    "imperial": {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {
                    "id": 0
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -1.426496,
                                    50.639342
                                ],
                                [
                                    -1.445953,
                                    50.648139
                                ],
                                [
                                    -1.452789,
                                    50.654283
                                ],
                                [
                                    -1.485951,
                                    50.669338
                                ],
                                [
                                    -1.497426,
                                    50.672309
                                ],
                                [
                                    -1.535146,
                                    50.669379
                                ],
                                [
                                    -1.551503,
                                    50.665107
                                ],
                                [
                                    -1.569488,
                                    50.658026
                                ],
                                [
                                    -1.545318,
                                    50.686103
                                ],
                                [
                                    -1.50593,
                                    50.707709
                                ],
                                [
                                    -1.418691,
                                    50.733791
                                ],
                                [
                                    -1.420888,
                                    50.730455
                                ],
                                [
                                    -1.423451,
                                    50.7237
                                ],
                                [
                                    -1.425364,
                                    50.72012
                                ],
                                [
                                    -1.400868,
                                    50.721991
                                ],
                                [
                                    -1.377553,
                                    50.734198
                                ],
                                [
                                    -1.343495,
                                    50.761054
                                ],
                                [
                                    -1.318512,
                                    50.772162
                                ],
                                [
                                    -1.295766,
                                    50.773179
                                ],
                                [
                                    -1.144276,
                                    50.733791
                                ],
                                [
                                    -1.119537,
                                    50.734198
                                ],
                                [
                                    -1.10912,
                                    50.732856
                                ],
                                [
                                    -1.097035,
                                    50.726955
                                ],
                                [
                                    -1.096425,
                                    50.724433
                                ],
                                [
                                    -1.097646,
                                    50.71601
                                ],
                                [
                                    -1.097035,
                                    50.713324
                                ],
                                [
                                    -1.094228,
                                    50.712633
                                ],
                                [
                                    -1.085561,
                                    50.714016
                                ],
                                [
                                    -1.082753,
                                    50.713324
                                ],
                                [
                                    -1.062327,
                                    50.692816
                                ],
                                [
                                    -1.062327,
                                    50.685289
                                ],
                                [
                                    -1.066965,
                                    50.685248
                                ],
                                [
                                    -1.069651,
                                    50.683498
                                ],
                                [
                                    -1.071889,
                                    50.680976
                                ],
                                [
                                    -1.075307,
                                    50.678534
                                ],
                                [
                                    -1.112701,
                                    50.671454
                                ],
                                [
                                    -1.128651,
                                    50.666449
                                ],
                                [
                                    -1.156361,
                                    50.650784
                                ],
                                [
                                    -1.162221,
                                    50.645982
                                ],
                                [
                                    -1.164703,
                                    50.640937
                                ],
                                [
                                    -1.164666,
                                    50.639543
                                ],
                                [
                                    -1.426496,
                                    50.639342
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -7.240314,
                                    55.050389
                                ],
                                [
                                    -7.013736,
                                    55.1615
                                ],
                                [
                                    -6.958913,
                                    55.20349
                                ],
                                [
                                    -6.571562,
                                    55.268366
                                ],
                                [
                                    -6.509633,
                                    55.31398
                                ],
                                [
                                    -6.226158,
                                    55.344406
                                ],
                                [
                                    -6.07105,
                                    55.25001
                                ],
                                [
                                    -5.712696,
                                    55.017635
                                ],
                                [
                                    -5.242021,
                                    54.415204
                                ],
                                [
                                    -5.695554,
                                    54.14284
                                ],
                                [
                                    -5.72473,
                                    54.07455
                                ],
                                [
                                    -6.041633,
                                    54.006238
                                ],
                                [
                                    -6.153953,
                                    54.054931
                                ],
                                [
                                    -6.220539,
                                    54.098803
                                ],
                                [
                                    -6.242502,
                                    54.099758
                                ],
                                [
                                    -6.263661,
                                    54.104682
                                ],
                                [
                                    -6.269887,
                                    54.097927
                                ],
                                [
                                    -6.28465,
                                    54.105226
                                ],
                                [
                                    -6.299585,
                                    54.104037
                                ],
                                [
                                    -6.313796,
                                    54.099696
                                ],
                                [
                                    -6.327128,
                                    54.097888
                                ],
                                [
                                    -6.338962,
                                    54.102952
                                ],
                                [
                                    -6.346662,
                                    54.109877
                                ],
                                [
                                    -6.354827,
                                    54.110652
                                ],
                                [
                                    -6.368108,
                                    54.097319
                                ],
                                [
                                    -6.369348,
                                    54.091118
                                ],
                                [
                                    -6.367643,
                                    54.083418
                                ],
                                [
                                    -6.366919,
                                    54.075098
                                ],
                                [
                                    -6.371157,
                                    54.066778
                                ],
                                [
                                    -6.377513,
                                    54.063264
                                ],
                                [
                                    -6.401026,
                                    54.060887
                                ],
                                [
                                    -6.426761,
                                    54.05541
                                ],
                                [
                                    -6.433892,
                                    54.055306
                                ],
                                [
                                    -6.4403,
                                    54.057993
                                ],
                                [
                                    -6.446243,
                                    54.062438
                                ],
                                [
                                    -6.450222,
                                    54.066675
                                ],
                                [
                                    -6.450894,
                                    54.068432
                                ],
                                [
                                    -6.47854,
                                    54.067709
                                ],
                                [
                                    -6.564013,
                                    54.04895
                                ],
                                [
                                    -6.571868,
                                    54.049519
                                ],
                                [
                                    -6.587164,
                                    54.053343
                                ],
                                [
                                    -6.595071,
                                    54.052412
                                ],
                                [
                                    -6.60029,
                                    54.04895
                                ],
                                [
                                    -6.605217,
                                    54.044475
                                ],
                                [
                                    -6.610987,
                                    54.039235
                                ],
                                [
                                    -6.616465,
                                    54.037271
                                ],
                                [
                                    -6.630624,
                                    54.041819
                                ],
                                [
                                    -6.657289,
                                    54.061146
                                ],
                                [
                                    -6.672534,
                                    54.068432
                                ],
                                [
                                    -6.657082,
                                    54.091945
                                ],
                                [
                                    -6.655791,
                                    54.103314
                                ],
                                [
                                    -6.666436,
                                    54.114786
                                ],
                                [
                                    -6.643957,
                                    54.131839
                                ],
                                [
                                    -6.634552,
                                    54.150133
                                ],
                                [
                                    -6.640339,
                                    54.168013
                                ],
                                [
                                    -6.648448,
                                    54.173665
                                ],
                                [
                                    -6.663025,
                                    54.183826
                                ],
                                [
                                    -6.683954,
                                    54.194368
                                ],
                                [
                                    -6.694651,
                                    54.197985
                                ],
                                [
                                    -6.706537,
                                    54.198915
                                ],
                                [
                                    -6.717234,
                                    54.195143
                                ],
                                [
                                    -6.724779,
                                    54.188631
                                ],
                                [
                                    -6.73284,
                                    54.183567
                                ],
                                [
                                    -6.744777,
                                    54.184187
                                ],
                                [
                                    -6.766481,
                                    54.192352
                                ],
                                [
                                    -6.787824,
                                    54.202998
                                ],
                                [
                                    -6.807358,
                                    54.21633
                                ],
                                [
                                    -6.823946,
                                    54.23235
                                ],
                                [
                                    -6.829733,
                                    54.242375
                                ],
                                [
                                    -6.833196,
                                    54.25209
                                ],
                                [
                                    -6.837743,
                                    54.260513
                                ],
                                [
                                    -6.846683,
                                    54.266456
                                ],
                                [
                                    -6.882185,
                                    54.277257
                                ],
                                [
                                    -6.864667,
                                    54.282734
                                ],
                                [
                                    -6.856657,
                                    54.292811
                                ],
                                [
                                    -6.858414,
                                    54.307332
                                ],
                                [
                                    -6.870015,
                                    54.326001
                                ],
                                [
                                    -6.879705,
                                    54.341594
                                ],
                                [
                                    -6.885957,
                                    54.345624
                                ],
                                [
                                    -6.897895,
                                    54.346193
                                ],
                                [
                                    -6.905956,
                                    54.349035
                                ],
                                [
                                    -6.915051,
                                    54.365933
                                ],
                                [
                                    -6.922028,
                                    54.372703
                                ],
                                [
                                    -6.984091,
                                    54.403089
                                ],
                                [
                                    -7.017836,
                                    54.413166
                                ],
                                [
                                    -7.049255,
                                    54.411512
                                ],
                                [
                                    -7.078504,
                                    54.394717
                                ],
                                [
                                    -7.127028,
                                    54.349759
                                ],
                                [
                                    -7.159894,
                                    54.335186
                                ],
                                [
                                    -7.168059,
                                    54.335031
                                ],
                                [
                                    -7.185629,
                                    54.336943
                                ],
                                [
                                    -7.18947,
                                    54.335692
                                ],
                                [
                                    -7.19245,
                                    54.334721
                                ],
                                [
                                    -7.193949,
                                    54.329967
                                ],
                                [
                                    -7.191468,
                                    54.323869
                                ],
                                [
                                    -7.187644,
                                    54.318804
                                ],
                                [
                                    -7.185009,
                                    54.317254
                                ],
                                [
                                    -7.184647,
                                    54.316634
                                ],
                                [
                                    -7.192399,
                                    54.307384
                                ],
                                [
                                    -7.193691,
                                    54.307539
                                ],
                                [
                                    -7.199168,
                                    54.303457
                                ],
                                [
                                    -7.206661,
                                    54.304903
                                ],
                                [
                                    -7.211467,
                                    54.30418
                                ],
                                [
                                    -7.209038,
                                    54.293431
                                ],
                                [
                                    -7.1755,
                                    54.283664
                                ],
                                [
                                    -7.181495,
                                    54.269763
                                ],
                                [
                                    -7.14589,
                                    54.25209
                                ],
                                [
                                    -7.159739,
                                    54.24067
                                ],
                                [
                                    -7.153331,
                                    54.224237
                                ],
                                [
                                    -7.174725,
                                    54.216072
                                ],
                                [
                                    -7.229502,
                                    54.207545
                                ],
                                [
                                    -7.240871,
                                    54.202326
                                ],
                                [
                                    -7.249088,
                                    54.197416
                                ],
                                [
                                    -7.255496,
                                    54.190854
                                ],
                                [
                                    -7.261128,
                                    54.18088
                                ],
                                [
                                    -7.256322,
                                    54.176901
                                ],
                                [
                                    -7.247021,
                                    54.17225
                                ],
                                [
                                    -7.24578,
                                    54.166979
                                ],
                                [
                                    -7.265366,
                                    54.16114
                                ],
                                [
                                    -7.26087,
                                    54.151166
                                ],
                                [
                                    -7.263505,
                                    54.140986
                                ],
                                [
                                    -7.27074,
                                    54.132253
                                ],
                                [
                                    -7.280042,
                                    54.126155
                                ],
                                [
                                    -7.293788,
                                    54.122021
                                ],
                                [
                                    -7.297353,
                                    54.125896
                                ],
                                [
                                    -7.29632,
                                    54.134991
                                ],
                                [
                                    -7.296423,
                                    54.146515
                                ],
                                [
                                    -7.295028,
                                    54.155404
                                ],
                                [
                                    -7.292134,
                                    54.162638
                                ],
                                [
                                    -7.295545,
                                    54.165119
                                ],
                                [
                                    -7.325982,
                                    54.154577
                                ],
                                [
                                    -7.333165,
                                    54.149409
                                ],
                                [
                                    -7.333165,
                                    54.142743
                                ],
                                [
                                    -7.310324,
                                    54.114683
                                ],
                                [
                                    -7.316489,
                                    54.11428
                                ],
                                [
                                    -7.326964,
                                    54.113597
                                ],
                                [
                                    -7.375488,
                                    54.123312
                                ],
                                [
                                    -7.390216,
                                    54.121194
                                ],
                                [
                                    -7.39466,
                                    54.121917
                                ],
                                [
                                    -7.396624,
                                    54.126258
                                ],
                                [
                                    -7.403962,
                                    54.135043
                                ],
                                [
                                    -7.41223,
                                    54.136438
                                ],
                                [
                                    -7.422255,
                                    54.135456
                                ],
                                [
                                    -7.425769,
                                    54.136955
                                ],
                                [
                                    -7.414659,
                                    54.145688
                                ],
                                [
                                    -7.439619,
                                    54.146929
                                ],
                                [
                                    -7.480753,
                                    54.127653
                                ],
                                [
                                    -7.502302,
                                    54.125121
                                ],
                                [
                                    -7.609014,
                                    54.139901
                                ],
                                [
                                    -7.620796,
                                    54.144965
                                ],
                                [
                                    -7.624052,
                                    54.153336
                                ],
                                [
                                    -7.625706,
                                    54.162173
                                ],
                                [
                                    -7.632682,
                                    54.168529
                                ],
                                [
                                    -7.70477,
                                    54.200362
                                ],
                                [
                                    -7.722599,
                                    54.202326
                                ],
                                [
                                    -7.782078,
                                    54.2
                                ],
                                [
                                    -7.836959,
                                    54.204341
                                ],
                                [
                                    -7.856441,
                                    54.211421
                                ],
                                [
                                    -7.86967,
                                    54.226872
                                ],
                                [
                                    -7.873649,
                                    54.271055
                                ],
                                [
                                    -7.880264,
                                    54.287023
                                ],
                                [
                                    -7.894966,
                                    54.293586
                                ],
                                [
                                    -7.93411,
                                    54.297049
                                ],
                                [
                                    -7.942075,
                                    54.298873
                                ],
                                [
                                    -7.950802,
                                    54.300873
                                ],
                                [
                                    -7.96801,
                                    54.31219
                                ],
                                [
                                    -7.981033,
                                    54.326556
                                ],
                                [
                                    -8.002194,
                                    54.357923
                                ],
                                [
                                    -8.03134,
                                    54.358027
                                ],
                                [
                                    -8.05648,
                                    54.365882
                                ],
                                [
                                    -8.079941,
                                    54.380196
                                ],
                                [
                                    -8.122419,
                                    54.415233
                                ],
                                [
                                    -8.146346,
                                    54.430736
                                ],
                                [
                                    -8.156035,
                                    54.439055
                                ],
                                [
                                    -8.158128,
                                    54.447117
                                ],
                                [
                                    -8.161177,
                                    54.454817
                                ],
                                [
                                    -8.173837,
                                    54.461741
                                ],
                                [
                                    -8.168467,
                                    54.463477
                                ],
                                [
                                    -8.15017,
                                    54.46939
                                ],
                                [
                                    -8.097046,
                                    54.478588
                                ],
                                [
                                    -8.072448,
                                    54.487063
                                ],
                                [
                                    -8.060976,
                                    54.493316
                                ],
                                [
                                    -8.05586,
                                    54.497553
                                ],
                                [
                                    -8.043561,
                                    54.512229
                                ],
                                [
                                    -8.023278,
                                    54.529696
                                ],
                                [
                                    -8.002194,
                                    54.543442
                                ],
                                [
                                    -7.926411,
                                    54.533055
                                ],
                                [
                                    -7.887137,
                                    54.532125
                                ],
                                [
                                    -7.848844,
                                    54.54091
                                ],
                                [
                                    -7.749264,
                                    54.596152
                                ],
                                [
                                    -7.707871,
                                    54.604162
                                ],
                                [
                                    -7.707944,
                                    54.604708
                                ],
                                [
                                    -7.707951,
                                    54.604763
                                ],
                                [
                                    -7.710558,
                                    54.624264
                                ],
                                [
                                    -7.721204,
                                    54.625866
                                ],
                                [
                                    -7.736758,
                                    54.619251
                                ],
                                [
                                    -7.753553,
                                    54.614497
                                ],
                                [
                                    -7.769159,
                                    54.618011
                                ],
                                [
                                    -7.801199,
                                    54.634806
                                ],
                                [
                                    -7.814996,
                                    54.639457
                                ],
                                [
                                    -7.822541,
                                    54.638113
                                ],
                                [
                                    -7.838044,
                                    54.63124
                                ],
                                [
                                    -7.846416,
                                    54.631447
                                ],
                                [
                                    -7.85427,
                                    54.636408
                                ],
                                [
                                    -7.864347,
                                    54.649069
                                ],
                                [
                                    -7.872771,
                                    54.652221
                                ],
                                [
                                    -7.890082,
                                    54.655063
                                ],
                                [
                                    -7.906619,
                                    54.661316
                                ],
                                [
                                    -7.914835,
                                    54.671651
                                ],
                                [
                                    -7.907135,
                                    54.686689
                                ],
                                [
                                    -7.913233,
                                    54.688653
                                ],
                                [
                                    -7.929666,
                                    54.696714
                                ],
                                [
                                    -7.880109,
                                    54.711029
                                ],
                                [
                                    -7.845899,
                                    54.731027
                                ],
                                [
                                    -7.832153,
                                    54.730614
                                ],
                                [
                                    -7.803576,
                                    54.716145
                                ],
                                [
                                    -7.770503,
                                    54.706016
                                ],
                                [
                                    -7.736603,
                                    54.707463
                                ],
                                [
                                    -7.70229,
                                    54.718883
                                ],
                                [
                                    -7.667512,
                                    54.738779
                                ],
                                [
                                    -7.649683,
                                    54.744877
                                ],
                                [
                                    -7.61537,
                                    54.739347
                                ],
                                [
                                    -7.585398,
                                    54.744722
                                ],
                                [
                                    -7.566639,
                                    54.738675
                                ],
                                [
                                    -7.556149,
                                    54.738365
                                ],
                                [
                                    -7.543075,
                                    54.741673
                                ],
                                [
                                    -7.543023,
                                    54.743791
                                ],
                                [
                                    -7.548398,
                                    54.747202
                                ],
                                [
                                    -7.551705,
                                    54.754695
                                ],
                                [
                                    -7.549741,
                                    54.779603
                                ],
                                [
                                    -7.543385,
                                    54.793091
                                ],
                                [
                                    -7.470831,
                                    54.845284
                                ],
                                [
                                    -7.45507,
                                    54.863009
                                ],
                                [
                                    -7.444735,
                                    54.884455
                                ],
                                [
                                    -7.444735,
                                    54.894893
                                ],
                                [
                                    -7.448972,
                                    54.920318
                                ],
                                [
                                    -7.445251,
                                    54.932152
                                ],
                                [
                                    -7.436983,
                                    54.938301
                                ],
                                [
                                    -7.417139,
                                    54.943056
                                ],
                                [
                                    -7.415755,
                                    54.944372
                                ],
                                [
                                    -7.408665,
                                    54.951117
                                ],
                                [
                                    -7.407424,
                                    54.959437
                                ],
                                [
                                    -7.413109,
                                    54.984965
                                ],
                                [
                                    -7.409078,
                                    54.992045
                                ],
                                [
                                    -7.403755,
                                    54.99313
                                ],
                                [
                                    -7.40112,
                                    54.994836
                                ],
                                [
                                    -7.405254,
                                    55.003569
                                ],
                                [
                                    -7.376987,
                                    55.02889
                                ],
                                [
                                    -7.366962,
                                    55.035557
                                ],
                                [
                                    -7.355024,
                                    55.040931
                                ],
                                [
                                    -7.291152,
                                    55.046615
                                ],
                                [
                                    -7.282987,
                                    55.051835
                                ],
                                [
                                    -7.275288,
                                    55.058863
                                ],
                                [
                                    -7.266503,
                                    55.065167
                                ],
                                [
                                    -7.247097,
                                    55.069328
                                ],
                                [
                                    -7.2471,
                                    55.069322
                                ],
                                [
                                    -7.256744,
                                    55.050686
                                ],
                                [
                                    -7.240956,
                                    55.050279
                                ],
                                [
                                    -7.240314,
                                    55.050389
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -13.688588,
                                    57.596259
                                ],
                                [
                                    -13.690419,
                                    57.596259
                                ],
                                [
                                    -13.691314,
                                    57.596503
                                ],
                                [
                                    -13.691314,
                                    57.597154
                                ],
                                [
                                    -13.690419,
                                    57.597805
                                ],
                                [
                                    -13.688588,
                                    57.597805
                                ],
                                [
                                    -13.687652,
                                    57.597154
                                ],
                                [
                                    -13.687652,
                                    57.596869
                                ],
                                [
                                    -13.688588,
                                    57.596259
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -4.839121,
                                    54.469789
                                ],
                                [
                                    -4.979941,
                                    54.457977
                                ],
                                [
                                    -5.343644,
                                    54.878637
                                ],
                                [
                                    -5.308469,
                                    55.176452
                                ],
                                [
                                    -6.272566,
                                    55.418443
                                ],
                                [
                                    -8.690528,
                                    57.833706
                                ],
                                [
                                    -6.344705,
                                    59.061083
                                ],
                                [
                                    -4.204785,
                                    58.63305
                                ],
                                [
                                    -2.31566,
                                    60.699068
                                ],
                                [
                                    -1.695335,
                                    60.76432
                                ],
                                [
                                    -1.58092,
                                    60.866001
                                ],
                                [
                                    -0.17022,
                                    60.897204
                                ],
                                [
                                    -0.800508,
                                    59.770037
                                ],
                                [
                                    -1.292368,
                                    57.732574
                                ],
                                [
                                    -1.850077,
                                    55.766368
                                ],
                                [
                                    -1.73054,
                                    55.782219
                                ],
                                [
                                    1.892395,
                                    52.815229
                                ],
                                [
                                    1.742775,
                                    51.364209
                                ],
                                [
                                    1.080173,
                                    50.847526
                                ],
                                [
                                    0.000774,
                                    50.664982
                                ],
                                [
                                    -0.162997,
                                    50.752401
                                ],
                                [
                                    -0.725152,
                                    50.731879
                                ],
                                [
                                    -0.768853,
                                    50.741516
                                ],
                                [
                                    -0.770985,
                                    50.736884
                                ],
                                [
                                    -0.789947,
                                    50.730048
                                ],
                                [
                                    -0.812815,
                                    50.734768
                                ],
                                [
                                    -0.877742,
                                    50.761156
                                ],
                                [
                                    -0.942879,
                                    50.758338
                                ],
                                [
                                    -0.992581,
                                    50.737379
                                ],
                                [
                                    -1.18513,
                                    50.766989
                                ],
                                [
                                    -1.282741,
                                    50.792353
                                ],
                                [
                                    -1.375004,
                                    50.772063
                                ],
                                [
                                    -1.523427,
                                    50.719605
                                ],
                                [
                                    -1.630649,
                                    50.695128
                                ],
                                [
                                    -1.663617,
                                    50.670508
                                ],
                                [
                                    -1.498021,
                                    50.40831
                                ],
                                [
                                    -4.097427,
                                    49.735486
                                ],
                                [
                                    -6.825199,
                                    49.700905
                                ],
                                [
                                    -5.541541,
                                    51.446591
                                ],
                                [
                                    -6.03361,
                                    51.732369
                                ],
                                [
                                    -4.791746,
                                    52.635365
                                ],
                                [
                                    -4.969244,
                                    52.637413
                                ],
                                [
                                    -5.049473,
                                    53.131209
                                ],
                                [
                                    -4.787393,
                                    53.409491
                                ],
                                [
                                    -4.734148,
                                    53.424866
                                ],
                                [
                                    -4.917096,
                                    53.508212
                                ],
                                [
                                    -4.839121,
                                    54.469789
                                ]
                            ]
                        ]
                    ]
                }
            },
            {
                "type": "Feature",
                "properties": {
                    "id": 0
                },
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -157.018938,
                                    19.300864
                                ],
                                [
                                    -179.437336,
                                    27.295312
                                ],
                                [
                                    -179.480084,
                                    28.991459
                                ],
                                [
                                    -168.707465,
                                    26.30325
                                ],
                                [
                                    -163.107414,
                                    24.60499
                                ],
                                [
                                    -153.841679,
                                    20.079306
                                ],
                                [
                                    -154.233846,
                                    19.433391
                                ],
                                [
                                    -153.61725,
                                    18.900587
                                ],
                                [
                                    -154.429471,
                                    18.171036
                                ],
                                [
                                    -156.780638,
                                    18.718492
                                ],
                                [
                                    -157.018938,
                                    19.300864
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -78.91269,
                                    43.037032
                                ],
                                [
                                    -78.964351,
                                    42.976393
                                ],
                                [
                                    -78.981718,
                                    42.979043
                                ],
                                [
                                    -78.998055,
                                    42.991111
                                ],
                                [
                                    -79.01189,
                                    43.004358
                                ],
                                [
                                    -79.022046,
                                    43.010539
                                ],
                                [
                                    -79.023076,
                                    43.017015
                                ],
                                [
                                    -79.00983,
                                    43.050867
                                ],
                                [
                                    -79.011449,
                                    43.065291
                                ],
                                [
                                    -78.993051,
                                    43.066174
                                ],
                                [
                                    -78.975536,
                                    43.069707
                                ],
                                [
                                    -78.958905,
                                    43.070884
                                ],
                                [
                                    -78.943304,
                                    43.065291
                                ],
                                [
                                    -78.917399,
                                    43.058521
                                ],
                                [
                                    -78.908569,
                                    43.049396
                                ],
                                [
                                    -78.91269,
                                    43.037032
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -123.03529,
                                    48.992515
                                ],
                                [
                                    -123.035308,
                                    48.992499
                                ],
                                [
                                    -123.045277,
                                    48.984361
                                ],
                                [
                                    -123.08849,
                                    48.972235
                                ],
                                [
                                    -123.089345,
                                    48.987982
                                ],
                                [
                                    -123.090484,
                                    48.992499
                                ],
                                [
                                    -123.090488,
                                    48.992515
                                ],
                                [
                                    -123.035306,
                                    48.992515
                                ],
                                [
                                    -123.03529,
                                    48.992515
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -103.837038,
                                    29.279906
                                ],
                                [
                                    -103.864121,
                                    29.281366
                                ],
                                [
                                    -103.928122,
                                    29.293019
                                ],
                                [
                                    -104.01915,
                                    29.32033
                                ],
                                [
                                    -104.057313,
                                    29.339037
                                ],
                                [
                                    -104.105424,
                                    29.385675
                                ],
                                [
                                    -104.139789,
                                    29.400584
                                ],
                                [
                                    -104.161648,
                                    29.416759
                                ],
                                [
                                    -104.194514,
                                    29.448927
                                ],
                                [
                                    -104.212291,
                                    29.484661
                                ],
                                [
                                    -104.218698,
                                    29.489829
                                ],
                                [
                                    -104.227148,
                                    29.493033
                                ],
                                [
                                    -104.251022,
                                    29.508588
                                ],
                                [
                                    -104.267171,
                                    29.526571
                                ],
                                [
                                    -104.292751,
                                    29.532824
                                ],
                                [
                                    -104.320604,
                                    29.532255
                                ],
                                [
                                    -104.338484,
                                    29.524013
                                ],
                                [
                                    -104.349026,
                                    29.537578
                                ],
                                [
                                    -104.430443,
                                    29.582795
                                ],
                                [
                                    -104.437832,
                                    29.58543
                                ],
                                [
                                    -104.444008,
                                    29.589203
                                ],
                                [
                                    -104.448555,
                                    29.597678
                                ],
                                [
                                    -104.452069,
                                    29.607109
                                ],
                                [
                                    -104.455222,
                                    29.613387
                                ],
                                [
                                    -104.469381,
                                    29.625402
                                ],
                                [
                                    -104.516639,
                                    29.654315
                                ],
                                [
                                    -104.530824,
                                    29.667906
                                ],
                                [
                                    -104.535036,
                                    29.677802
                                ],
                                [
                                    -104.535191,
                                    29.687853
                                ],
                                [
                                    -104.537103,
                                    29.702116
                                ],
                                [
                                    -104.543666,
                                    29.71643
                                ],
                                [
                                    -104.561391,
                                    29.745421
                                ],
                                [
                                    -104.570279,
                                    29.787511
                                ],
                                [
                                    -104.583586,
                                    29.802575
                                ],
                                [
                                    -104.601207,
                                    29.81477
                                ],
                                [
                                    -104.619682,
                                    29.833064
                                ],
                                [
                                    -104.623764,
                                    29.841487
                                ],
                                [
                                    -104.637588,
                                    29.887996
                                ],
                                [
                                    -104.656346,
                                    29.908201
                                ],
                                [
                                    -104.660635,
                                    29.918433
                                ],
                                [
                                    -104.663478,
                                    29.923084
                                ],
                                [
                                    -104.676526,
                                    29.93683
                                ],
                                [
                                    -104.680479,
                                    29.942308
                                ],
                                [
                                    -104.682469,
                                    29.952126
                                ],
                                [
                                    -104.680117,
                                    29.967784
                                ],
                                [
                                    -104.680479,
                                    29.976466
                                ],
                                [
                                    -104.699108,
                                    30.03145
                                ],
                                [
                                    -104.701589,
                                    30.055324
                                ],
                                [
                                    -104.698592,
                                    30.075271
                                ],
                                [
                                    -104.684639,
                                    30.111135
                                ],
                                [
                                    -104.680479,
                                    30.134131
                                ],
                                [
                                    -104.67867,
                                    30.170356
                                ],
                                [
                                    -104.681564,
                                    30.192939
                                ],
                                [
                                    -104.695853,
                                    30.208441
                                ],
                                [
                                    -104.715231,
                                    30.243995
                                ],
                                [
                                    -104.724585,
                                    30.252211
                                ],
                                [
                                    -104.742155,
                                    30.25986
                                ],
                                [
                                    -104.74939,
                                    30.264459
                                ],
                                [
                                    -104.761689,
                                    30.284199
                                ],
                                [
                                    -104.774143,
                                    30.311588
                                ],
                                [
                                    -104.788767,
                                    30.335927
                                ],
                                [
                                    -104.807732,
                                    30.346418
                                ],
                                [
                                    -104.8129,
                                    30.350707
                                ],
                                [
                                    -104.814967,
                                    30.360577
                                ],
                                [
                                    -104.816001,
                                    30.371997
                                ],
                                [
                                    -104.818274,
                                    30.380524
                                ],
                                [
                                    -104.824269,
                                    30.38719
                                ],
                                [
                                    -104.83755,
                                    30.394063
                                ],
                                [
                                    -104.844939,
                                    30.40104
                                ],
                                [
                                    -104.853259,
                                    30.41215
                                ],
                                [
                                    -104.855016,
                                    30.417473
                                ],
                                [
                                    -104.853621,
                                    30.423984
                                ],
                                [
                                    -104.852432,
                                    30.438867
                                ],
                                [
                                    -104.854655,
                                    30.448737
                                ],
                                [
                                    -104.864473,
                                    30.462018
                                ],
                                [
                                    -104.866695,
                                    30.473025
                                ],
                                [
                                    -104.865248,
                                    30.479898
                                ],
                                [
                                    -104.859615,
                                    30.491112
                                ],
                                [
                                    -104.859254,
                                    30.497261
                                ],
                                [
                                    -104.863026,
                                    30.502377
                                ],
                                [
                                    -104.879718,
                                    30.510852
                                ],
                                [
                                    -104.882146,
                                    30.520929
                                ],
                                [
                                    -104.884007,
                                    30.541858
                                ],
                                [
                                    -104.886591,
                                    30.551883
                                ],
                                [
                                    -104.898166,
                                    30.569401
                                ],
                                [
                                    -104.928242,
                                    30.599529
                                ],
                                [
                                    -104.93434,
                                    30.610536
                                ],
                                [
                                    -104.941057,
                                    30.61405
                                ],
                                [
                                    -104.972735,
                                    30.618029
                                ],
                                [
                                    -104.98276,
                                    30.620716
                                ],
                                [
                                    -104.989117,
                                    30.629553
                                ],
                                [
                                    -104.991649,
                                    30.640301
                                ],
                                [
                                    -104.992941,
                                    30.651464
                                ],
                                [
                                    -104.995783,
                                    30.661747
                                ],
                                [
                                    -105.008495,
                                    30.676992
                                ],
                                [
                                    -105.027977,
                                    30.690117
                                ],
                                [
                                    -105.049475,
                                    30.699264
                                ],
                                [
                                    -105.06813,
                                    30.702675
                                ],
                                [
                                    -105.087043,
                                    30.709806
                                ],
                                [
                                    -105.133604,
                                    30.757917
                                ],
                                [
                                    -105.140425,
                                    30.750476
                                ],
                                [
                                    -105.153241,
                                    30.763188
                                ],
                                [
                                    -105.157788,
                                    30.76572
                                ],
                                [
                                    -105.160889,
                                    30.764118
                                ],
                                [
                                    -105.162698,
                                    30.774919
                                ],
                                [
                                    -105.167297,
                                    30.781171
                                ],
                                [
                                    -105.17479,
                                    30.783962
                                ],
                                [
                                    -105.185125,
                                    30.784634
                                ],
                                [
                                    -105.195306,
                                    30.787941
                                ],
                                [
                                    -105.204917,
                                    30.80241
                                ],
                                [
                                    -105.2121,
                                    30.805718
                                ],
                                [
                                    -105.21825,
                                    30.806803
                                ],
                                [
                                    -105.229257,
                                    30.810214
                                ],
                                [
                                    -105.232874,
                                    30.809128
                                ],
                                [
                                    -105.239851,
                                    30.801532
                                ],
                                [
                                    -105.243985,
                                    30.799103
                                ],
                                [
                                    -105.249049,
                                    30.798845
                                ],
                                [
                                    -105.259488,
                                    30.802979
                                ],
                                [
                                    -105.265844,
                                    30.808405
                                ],
                                [
                                    -105.270753,
                                    30.814348
                                ],
                                [
                                    -105.277006,
                                    30.819412
                                ],
                                [
                                    -105.334315,
                                    30.843803
                                ],
                                [
                                    -105.363771,
                                    30.850366
                                ],
                                [
                                    -105.376173,
                                    30.859565
                                ],
                                [
                                    -105.41555,
                                    30.902456
                                ],
                                [
                                    -105.496682,
                                    30.95651
                                ],
                                [
                                    -105.530789,
                                    30.991701
                                ],
                                [
                                    -105.555955,
                                    31.002605
                                ],
                                [
                                    -105.565722,
                                    31.016661
                                ],
                                [
                                    -105.578641,
                                    31.052163
                                ],
                                [
                                    -105.59094,
                                    31.071438
                                ],
                                [
                                    -105.605875,
                                    31.081928
                                ],
                                [
                                    -105.623496,
                                    31.090351
                                ],
                                [
                                    -105.643805,
                                    31.103684
                                ],
                                [
                                    -105.668042,
                                    31.127869
                                ],
                                [
                                    -105.675225,
                                    31.131951
                                ],
                                [
                                    -105.692278,
                                    31.137635
                                ],
                                [
                                    -105.76819,
                                    31.18001
                                ],
                                [
                                    -105.777854,
                                    31.192722
                                ],
                                [
                                    -105.78483,
                                    31.211016
                                ],
                                [
                                    -105.861983,
                                    31.288376
                                ],
                                [
                                    -105.880147,
                                    31.300881
                                ],
                                [
                                    -105.896994,
                                    31.305997
                                ],
                                [
                                    -105.897149,
                                    31.309511
                                ],
                                [
                                    -105.908802,
                                    31.317004
                                ],
                                [
                                    -105.928052,
                                    31.326461
                                ],
                                [
                                    -105.934563,
                                    31.335504
                                ],
                                [
                                    -105.941772,
                                    31.352351
                                ],
                                [
                                    -105.948515,
                                    31.361239
                                ],
                                [
                                    -105.961202,
                                    31.371006
                                ],
                                [
                                    -106.004739,
                                    31.396948
                                ],
                                [
                                    -106.021147,
                                    31.402167
                                ],
                                [
                                    -106.046261,
                                    31.404648
                                ],
                                [
                                    -106.065304,
                                    31.410952
                                ],
                                [
                                    -106.099385,
                                    31.428884
                                ],
                                [
                                    -106.141113,
                                    31.439167
                                ],
                                [
                                    -106.164316,
                                    31.447797
                                ],
                                [
                                    -106.174471,
                                    31.460251
                                ],
                                [
                                    -106.209249,
                                    31.477305
                                ],
                                [
                                    -106.215424,
                                    31.483919
                                ],
                                [
                                    -106.21744,
                                    31.488725
                                ],
                                [
                                    -106.218731,
                                    31.494616
                                ],
                                [
                                    -106.222891,
                                    31.50459
                                ],
                                [
                                    -106.232658,
                                    31.519938
                                ],
                                [
                                    -106.274749,
                                    31.562622
                                ],
                                [
                                    -106.286298,
                                    31.580141
                                ],
                                [
                                    -106.312292,
                                    31.648612
                                ],
                                [
                                    -106.331309,
                                    31.68215
                                ],
                                [
                                    -106.35849,
                                    31.717548
                                ],
                                [
                                    -106.39177,
                                    31.745919
                                ],
                                [
                                    -106.428951,
                                    31.758476
                                ],
                                [
                                    -106.473135,
                                    31.755065
                                ],
                                [
                                    -106.492797,
                                    31.759044
                                ],
                                [
                                    -106.501425,
                                    31.766344
                                ],
                                [
                                    -106.506052,
                                    31.770258
                                ],
                                [
                                    -106.517189,
                                    31.773824
                                ],
                                [
                                    -106.558969,
                                    31.773876
                                ],
                                [
                                    -106.584859,
                                    31.773927
                                ],
                                [
                                    -106.610697,
                                    31.773979
                                ],
                                [
                                    -106.636587,
                                    31.774082
                                ],
                                [
                                    -106.662477,
                                    31.774134
                                ],
                                [
                                    -106.688315,
                                    31.774237
                                ],
                                [
                                    -106.714205,
                                    31.774237
                                ],
                                [
                                    -106.740095,
                                    31.774289
                                ],
                                [
                                    -106.765933,
                                    31.774392
                                ],
                                [
                                    -106.791823,
                                    31.774444
                                ],
                                [
                                    -106.817713,
                                    31.774496
                                ],
                                [
                                    -106.843603,
                                    31.774547
                                ],
                                [
                                    -106.869441,
                                    31.774599
                                ],
                                [
                                    -106.895331,
                                    31.774702
                                ],
                                [
                                    -106.921221,
                                    31.774702
                                ],
                                [
                                    -106.947111,
                                    31.774754
                                ],
                                [
                                    -106.973001,
                                    31.774857
                                ],
                                [
                                    -106.998891,
                                    31.774909
                                ],
                                [
                                    -107.02478,
                                    31.774961
                                ],
                                [
                                    -107.05067,
                                    31.775013
                                ],
                                [
                                    -107.076509,
                                    31.775064
                                ],
                                [
                                    -107.102398,
                                    31.775168
                                ],
                                [
                                    -107.128288,
                                    31.775168
                                ],
                                [
                                    -107.154127,
                                    31.775219
                                ],
                                [
                                    -107.180016,
                                    31.775374
                                ],
                                [
                                    -107.205906,
                                    31.775374
                                ],
                                [
                                    -107.231796,
                                    31.775426
                                ],
                                [
                                    -107.257634,
                                    31.775478
                                ],
                                [
                                    -107.283524,
                                    31.775529
                                ],
                                [
                                    -107.309414,
                                    31.775633
                                ],
                                [
                                    -107.335252,
                                    31.775684
                                ],
                                [
                                    -107.361142,
                                    31.775788
                                ],
                                [
                                    -107.387032,
                                    31.775788
                                ],
                                [
                                    -107.412896,
                                    31.775839
                                ],
                                [
                                    -107.438786,
                                    31.775943
                                ],
                                [
                                    -107.464676,
                                    31.775994
                                ],
                                [
                                    -107.490566,
                                    31.776098
                                ],
                                [
                                    -107.516404,
                                    31.776149
                                ],
                                [
                                    -107.542294,
                                    31.776201
                                ],
                                [
                                    -107.568184,
                                    31.776253
                                ],
                                [
                                    -107.594074,
                                    31.776304
                                ],
                                [
                                    -107.619964,
                                    31.776408
                                ],
                                [
                                    -107.645854,
                                    31.776459
                                ],
                                [
                                    -107.671744,
                                    31.776459
                                ],
                                [
                                    -107.697633,
                                    31.776563
                                ],
                                [
                                    -107.723472,
                                    31.776614
                                ],
                                [
                                    -107.749362,
                                    31.776666
                                ],
                                [
                                    -107.775251,
                                    31.776718
                                ],
                                [
                                    -107.801141,
                                    31.77677
                                ],
                                [
                                    -107.82698,
                                    31.776873
                                ],
                                [
                                    -107.852869,
                                    31.776925
                                ],
                                [
                                    -107.878759,
                                    31.776925
                                ],
                                [
                                    -107.904598,
                                    31.777028
                                ],
                                [
                                    -107.930487,
                                    31.77708
                                ],
                                [
                                    -107.956377,
                                    31.777131
                                ],
                                [
                                    -107.982216,
                                    31.777183
                                ],
                                [
                                    -108.008105,
                                    31.777235
                                ],
                                [
                                    -108.033995,
                                    31.777338
                                ],
                                [
                                    -108.059885,
                                    31.77739
                                ],
                                [
                                    -108.085723,
                                    31.77739
                                ],
                                [
                                    -108.111613,
                                    31.777545
                                ],
                                [
                                    -108.137503,
                                    31.777545
                                ],
                                [
                                    -108.163341,
                                    31.777648
                                ],
                                [
                                    -108.189283,
                                    31.7777
                                ],
                                [
                                    -108.215121,
                                    31.777751
                                ],
                                [
                                    -108.215121,
                                    31.770723
                                ],
                                [
                                    -108.215121,
                                    31.763695
                                ],
                                [
                                    -108.215121,
                                    31.756667
                                ],
                                [
                                    -108.215121,
                                    31.749639
                                ],
                                [
                                    -108.215121,
                                    31.74256
                                ],
                                [
                                    -108.215121,
                                    31.735583
                                ],
                                [
                                    -108.215121,
                                    31.728555
                                ],
                                [
                                    -108.215121,
                                    31.721476
                                ],
                                [
                                    -108.215121,
                                    31.714396
                                ],
                                [
                                    -108.215121,
                                    31.70742
                                ],
                                [
                                    -108.215121,
                                    31.700392
                                ],
                                [
                                    -108.215121,
                                    31.693312
                                ],
                                [
                                    -108.215121,
                                    31.686284
                                ],
                                [
                                    -108.215121,
                                    31.679256
                                ],
                                [
                                    -108.215121,
                                    31.672176
                                ],
                                [
                                    -108.21507,
                                    31.665148
                                ],
                                [
                                    -108.215018,
                                    31.658172
                                ],
                                [
                                    -108.215018,
                                    31.651092
                                ],
                                [
                                    -108.215018,
                                    31.644064
                                ],
                                [
                                    -108.215018,
                                    31.637036
                                ],
                                [
                                    -108.215018,
                                    31.630008
                                ],
                                [
                                    -108.215018,
                                    31.62298
                                ],
                                [
                                    -108.215018,
                                    31.615952
                                ],
                                [
                                    -108.215018,
                                    31.608873
                                ],
                                [
                                    -108.215018,
                                    31.601845
                                ],
                                [
                                    -108.215018,
                                    31.594817
                                ],
                                [
                                    -108.215018,
                                    31.587789
                                ],
                                [
                                    -108.215018,
                                    31.580761
                                ],
                                [
                                    -108.215018,
                                    31.573733
                                ],
                                [
                                    -108.215018,
                                    31.566653
                                ],
                                [
                                    -108.215018,
                                    31.559625
                                ],
                                [
                                    -108.214966,
                                    31.552597
                                ],
                                [
                                    -108.214966,
                                    31.545569
                                ],
                                [
                                    -108.214966,
                                    31.538489
                                ],
                                [
                                    -108.214966,
                                    31.531461
                                ],
                                [
                                    -108.214966,
                                    31.524485
                                ],
                                [
                                    -108.214966,
                                    31.517405
                                ],
                                [
                                    -108.214966,
                                    31.510378
                                ],
                                [
                                    -108.214966,
                                    31.503401
                                ],
                                [
                                    -108.214966,
                                    31.496322
                                ],
                                [
                                    -108.214966,
                                    31.489242
                                ],
                                [
                                    -108.214966,
                                    31.482214
                                ],
                                [
                                    -108.214966,
                                    31.475238
                                ],
                                [
                                    -108.214966,
                                    31.468158
                                ],
                                [
                                    -108.214966,
                                    31.46113
                                ],
                                [
                                    -108.214966,
                                    31.454102
                                ],
                                [
                                    -108.214966,
                                    31.447074
                                ],
                                [
                                    -108.214915,
                                    31.440046
                                ],
                                [
                                    -108.214863,
                                    31.432966
                                ],
                                [
                                    -108.214863,
                                    31.425938
                                ],
                                [
                                    -108.214863,
                                    31.41891
                                ],
                                [
                                    -108.214863,
                                    31.411882
                                ],
                                [
                                    -108.214863,
                                    31.404803
                                ],
                                [
                                    -108.214863,
                                    31.397826
                                ],
                                [
                                    -108.214863,
                                    31.390798
                                ],
                                [
                                    -108.214863,
                                    31.383719
                                ],
                                [
                                    -108.214863,
                                    31.376639
                                ],
                                [
                                    -108.214863,
                                    31.369663
                                ],
                                [
                                    -108.214863,
                                    31.362635
                                ],
                                [
                                    -108.214863,
                                    31.355555
                                ],
                                [
                                    -108.214863,
                                    31.348527
                                ],
                                [
                                    -108.214863,
                                    31.341551
                                ],
                                [
                                    -108.214863,
                                    31.334471
                                ],
                                [
                                    -108.214811,
                                    31.327443
                                ],
                                [
                                    -108.257573,
                                    31.327391
                                ],
                                [
                                    -108.300336,
                                    31.327391
                                ],
                                [
                                    -108.34302,
                                    31.327391
                                ],
                                [
                                    -108.385731,
                                    31.327391
                                ],
                                [
                                    -108.428442,
                                    31.327391
                                ],
                                [
                                    -108.471152,
                                    31.327391
                                ],
                                [
                                    -108.513837,
                                    31.327391
                                ],
                                [
                                    -108.556547,
                                    31.327391
                                ],
                                [
                                    -108.59931,
                                    31.327391
                                ],
                                [
                                    -108.64202,
                                    31.327391
                                ],
                                [
                                    -108.684757,
                                    31.327391
                                ],
                                [
                                    -108.727467,
                                    31.327391
                                ],
                                [
                                    -108.770178,
                                    31.327391
                                ],
                                [
                                    -108.812914,
                                    31.327391
                                ],
                                [
                                    -108.855625,
                                    31.327391
                                ],
                                [
                                    -108.898335,
                                    31.327391
                                ],
                                [
                                    -108.941046,
                                    31.327391
                                ],
                                [
                                    -108.968282,
                                    31.327391
                                ],
                                [
                                    -108.983731,
                                    31.327391
                                ],
                                [
                                    -109.026493,
                                    31.327391
                                ],
                                [
                                    -109.04743,
                                    31.327391
                                ],
                                [
                                    -109.069203,
                                    31.327391
                                ],
                                [
                                    -109.111914,
                                    31.327391
                                ],
                                [
                                    -109.154599,
                                    31.327391
                                ],
                                [
                                    -109.197361,
                                    31.327391
                                ],
                                [
                                    -109.240072,
                                    31.32734
                                ],
                                [
                                    -109.282782,
                                    31.32734
                                ],
                                [
                                    -109.325519,
                                    31.32734
                                ],
                                [
                                    -109.368229,
                                    31.32734
                                ],
                                [
                                    -109.410914,
                                    31.32734
                                ],
                                [
                                    -109.45365,
                                    31.32734
                                ],
                                [
                                    -109.496387,
                                    31.32734
                                ],
                                [
                                    -109.539071,
                                    31.32734
                                ],
                                [
                                    -109.581808,
                                    31.32734
                                ],
                                [
                                    -109.624493,
                                    31.32734
                                ],
                                [
                                    -109.667177,
                                    31.32734
                                ],
                                [
                                    -109.709965,
                                    31.32734
                                ],
                                [
                                    -109.75265,
                                    31.32734
                                ],
                                [
                                    -109.795335,
                                    31.32734
                                ],
                                [
                                    -109.838123,
                                    31.32734
                                ],
                                [
                                    -109.880808,
                                    31.32734
                                ],
                                [
                                    -109.923596,
                                    31.327288
                                ],
                                [
                                    -109.96628,
                                    31.327236
                                ],
                                [
                                    -110.008965,
                                    31.327236
                                ],
                                [
                                    -110.051702,
                                    31.327236
                                ],
                                [
                                    -110.094386,
                                    31.327236
                                ],
                                [
                                    -110.137071,
                                    31.327236
                                ],
                                [
                                    -110.179807,
                                    31.327236
                                ],
                                [
                                    -110.222544,
                                    31.327236
                                ],
                                [
                                    -110.265229,
                                    31.327236
                                ],
                                [
                                    -110.308017,
                                    31.327236
                                ],
                                [
                                    -110.350753,
                                    31.327236
                                ],
                                [
                                    -110.39349,
                                    31.327236
                                ],
                                [
                                    -110.436174,
                                    31.327236
                                ],
                                [
                                    -110.478859,
                                    31.327236
                                ],
                                [
                                    -110.521595,
                                    31.327236
                                ],
                                [
                                    -110.56428,
                                    31.327236
                                ],
                                [
                                    -110.606965,
                                    31.327236
                                ],
                                [
                                    -110.649727,
                                    31.327236
                                ],
                                [
                                    -110.692438,
                                    31.327236
                                ],
                                [
                                    -110.7352,
                                    31.327236
                                ],
                                [
                                    -110.777885,
                                    31.327236
                                ],
                                [
                                    -110.820595,
                                    31.327236
                                ],
                                [
                                    -110.863358,
                                    31.327236
                                ],
                                [
                                    -110.906068,
                                    31.327236
                                ],
                                [
                                    -110.948753,
                                    31.327185
                                ],
                                [
                                    -111.006269,
                                    31.327185
                                ],
                                [
                                    -111.067118,
                                    31.333644
                                ],
                                [
                                    -111.094455,
                                    31.342532
                                ],
                                [
                                    -111.145924,
                                    31.359069
                                ],
                                [
                                    -111.197446,
                                    31.375554
                                ],
                                [
                                    -111.248864,
                                    31.392142
                                ],
                                [
                                    -111.300333,
                                    31.40873
                                ],
                                [
                                    -111.351803,
                                    31.425318
                                ],
                                [
                                    -111.403299,
                                    31.441855
                                ],
                                [
                                    -111.454768,
                                    31.458339
                                ],
                                [
                                    -111.506238,
                                    31.474979
                                ],
                                [
                                    -111.915464,
                                    31.601431
                                ],
                                [
                                    -112.324715,
                                    31.727987
                                ],
                                [
                                    -112.733967,
                                    31.854543
                                ],
                                [
                                    -113.143218,
                                    31.981046
                                ],
                                [
                                    -113.552444,
                                    32.107602
                                ],
                                [
                                    -113.961696,
                                    32.234132
                                ],
                                [
                                    -114.370921,
                                    32.360687
                                ],
                                [
                                    -114.780147,
                                    32.487243
                                ],
                                [
                                    -114.816785,
                                    32.498534
                                ],
                                [
                                    -114.819373,
                                    32.499363
                                ],
                                [
                                    -114.822108,
                                    32.50024
                                ],
                                [
                                    -114.809447,
                                    32.511324
                                ],
                                [
                                    -114.795546,
                                    32.552226
                                ],
                                [
                                    -114.794203,
                                    32.574111
                                ],
                                [
                                    -114.802678,
                                    32.594497
                                ],
                                [
                                    -114.786813,
                                    32.621033
                                ],
                                [
                                    -114.781542,
                                    32.628061
                                ],
                                [
                                    -114.758804,
                                    32.64483
                                ],
                                [
                                    -114.751156,
                                    32.65222
                                ],
                                [
                                    -114.739477,
                                    32.669066
                                ],
                                [
                                    -114.731209,
                                    32.686636
                                ],
                                [
                                    -114.723871,
                                    32.711519
                                ],
                                [
                                    -114.724284,
                                    32.712835
                                ],
                                [
                                    -114.724285,
                                    32.712836
                                ],
                                [
                                    -114.764541,
                                    32.709839
                                ],
                                [
                                    -114.838076,
                                    32.704206
                                ],
                                [
                                    -114.911612,
                                    32.698703
                                ],
                                [
                                    -114.985199,
                                    32.693122
                                ],
                                [
                                    -115.058734,
                                    32.687567
                                ],
                                [
                                    -115.13227,
                                    32.681986
                                ],
                                [
                                    -115.205806,
                                    32.676456
                                ],
                                [
                                    -115.27929,
                                    32.670823
                                ],
                                [
                                    -115.352851,
                                    32.665346
                                ],
                                [
                                    -115.426386,
                                    32.659765
                                ],
                                [
                                    -115.499922,
                                    32.654209
                                ],
                                [
                                    -115.573535,
                                    32.648654
                                ],
                                [
                                    -115.647019,
                                    32.643073
                                ],
                                [
                                    -115.720529,
                                    32.637518
                                ],
                                [
                                    -115.794064,
                                    32.631963
                                ],
                                [
                                    -115.8676,
                                    32.626408
                                ],
                                [
                                    -115.941213,
                                    32.620827
                                ],
                                [
                                    -116.014748,
                                    32.615271
                                ],
                                [
                                    -116.088232,
                                    32.609664
                                ],
                                [
                                    -116.161742,
                                    32.604161
                                ],
                                [
                                    -116.235329,
                                    32.598554
                                ],
                                [
                                    -116.308891,
                                    32.593025
                                ],
                                [
                                    -116.382426,
                                    32.587469
                                ],
                                [
                                    -116.455962,
                                    32.581888
                                ],
                                [
                                    -116.529472,
                                    32.576333
                                ],
                                [
                                    -116.603007,
                                    32.570804
                                ],
                                [
                                    -116.676543,
                                    32.565223
                                ],
                                [
                                    -116.750104,
                                    32.559667
                                ],
                                [
                                    -116.82364,
                                    32.554086
                                ],
                                [
                                    -116.897201,
                                    32.548531
                                ],
                                [
                                    -116.970737,
                                    32.542976
                                ],
                                [
                                    -117.044221,
                                    32.537421
                                ],
                                [
                                    -117.125121,
                                    32.531669
                                ],
                                [
                                    -117.125969,
                                    32.538258
                                ],
                                [
                                    -117.239623,
                                    32.531308
                                ],
                                [
                                    -120.274098,
                                    32.884264
                                ],
                                [
                                    -121.652736,
                                    34.467248
                                ],
                                [
                                    -124.367265,
                                    37.662798
                                ],
                                [
                                    -126.739806,
                                    41.37928
                                ],
                                [
                                    -126.996297,
                                    45.773888
                                ],
                                [
                                    -124.770704,
                                    48.44258
                                ],
                                [
                                    -123.734053,
                                    48.241906
                                ],
                                [
                                    -123.1663,
                                    48.27837
                                ],
                                [
                                    -123.193018,
                                    48.501035
                                ],
                                [
                                    -123.176987,
                                    48.65482
                                ],
                                [
                                    -122.912481,
                                    48.753561
                                ],
                                [
                                    -122.899122,
                                    48.897797
                                ],
                                [
                                    -122.837671,
                                    48.97502
                                ],
                                [
                                    -122.743986,
                                    48.980582
                                ],
                                [
                                    -122.753,
                                    48.992499
                                ],
                                [
                                    -122.753012,
                                    48.992515
                                ],
                                [
                                    -122.653258,
                                    48.992515
                                ],
                                [
                                    -122.433375,
                                    48.992515
                                ],
                                [
                                    -122.213517,
                                    48.992515
                                ],
                                [
                                    -121.993763,
                                    48.992515
                                ],
                                [
                                    -121.773958,
                                    48.992515
                                ],
                                [
                                    -121.554152,
                                    48.992515
                                ],
                                [
                                    -121.33432,
                                    48.992515
                                ],
                                [
                                    -121.114515,
                                    48.992515
                                ],
                                [
                                    -95.396937,
                                    48.99267
                                ],
                                [
                                    -95.177106,
                                    48.99267
                                ],
                                [
                                    -95.168527,
                                    48.995047
                                ],
                                [
                                    -95.161887,
                                    49.001145
                                ],
                                [
                                    -95.159329,
                                    49.01179
                                ],
                                [
                                    -95.159665,
                                    49.10951
                                ],
                                [
                                    -95.160027,
                                    49.223353
                                ],
                                [
                                    -95.160337,
                                    49.313012
                                ],
                                [
                                    -95.160569,
                                    49.369494
                                ],
                                [
                                    -95.102821,
                                    49.35394
                                ],
                                [
                                    -94.982518,
                                    49.356162
                                ],
                                [
                                    -94.926087,
                                    49.345568
                                ],
                                [
                                    -94.856195,
                                    49.318283
                                ],
                                [
                                    -94.839142,
                                    49.308878
                                ],
                                [
                                    -94.827256,
                                    49.292858
                                ],
                                [
                                    -94.819892,
                                    49.252034
                                ],
                                [
                                    -94.810358,
                                    49.229606
                                ],
                                [
                                    -94.806121,
                                    49.210899
                                ],
                                [
                                    -94.811185,
                                    49.166561
                                ],
                                [
                                    -94.803743,
                                    49.146407
                                ],
                                [
                                    -94.792039,
                                    49.12646
                                ],
                                [
                                    -94.753772,
                                    49.026156
                                ],
                                [
                                    -94.711217,
                                    48.914586
                                ],
                                [
                                    -94.711734,
                                    48.862755
                                ],
                                [
                                    -94.712147,
                                    48.842446
                                ],
                                [
                                    -94.713284,
                                    48.823843
                                ],
                                [
                                    -94.710907,
                                    48.807513
                                ],
                                [
                                    -94.701786,
                                    48.790098
                                ],
                                [
                                    -94.688893,
                                    48.778832
                                ],
                                [
                                    -94.592852,
                                    48.726433
                                ],
                                [
                                    -94.519161,
                                    48.70447
                                ],
                                [
                                    -94.4795,
                                    48.700698
                                ],
                                [
                                    -94.311577,
                                    48.713927
                                ],
                                [
                                    -94.292586,
                                    48.711912
                                ],
                                [
                                    -94.284034,
                                    48.709069
                                ],
                                [
                                    -94.274499,
                                    48.704108
                                ],
                                [
                                    -94.265482,
                                    48.697752
                                ],
                                [
                                    -94.258454,
                                    48.690828
                                ],
                                [
                                    -94.255767,
                                    48.683541
                                ],
                                [
                                    -94.252459,
                                    48.662405
                                ],
                                [
                                    -94.251038,
                                    48.65729
                                ],
                                [
                                    -94.23215,
                                    48.652019
                                ],
                                [
                                    -94.03485,
                                    48.643311
                                ],
                                [
                                    -93.874885,
                                    48.636206
                                ],
                                [
                                    -93.835741,
                                    48.617137
                                ],
                                [
                                    -93.809386,
                                    48.543576
                                ],
                                [
                                    -93.778664,
                                    48.519468
                                ],
                                [
                                    -93.756779,
                                    48.516549
                                ],
                                [
                                    -93.616297,
                                    48.531302
                                ],
                                [
                                    -93.599889,
                                    48.526341
                                ],
                                [
                                    -93.566584,
                                    48.538279
                                ],
                                [
                                    -93.491756,
                                    48.542309
                                ],
                                [
                                    -93.459924,
                                    48.557399
                                ],
                                [
                                    -93.45225,
                                    48.572721
                                ],
                                [
                                    -93.453774,
                                    48.586958
                                ],
                                [
                                    -93.451475,
                                    48.597422
                                ],
                                [
                                    -93.417316,
                                    48.604114
                                ],
                                [
                                    -93.385716,
                                    48.614863
                                ],
                                [
                                    -93.25774,
                                    48.630314
                                ],
                                [
                                    -93.131701,
                                    48.62463
                                ],
                                [
                                    -92.97972,
                                    48.61768
                                ],
                                [
                                    -92.955588,
                                    48.612228
                                ],
                                [
                                    -92.884197,
                                    48.579878
                                ],
                                [
                                    -92.72555,
                                    48.548692
                                ],
                                [
                                    -92.648604,
                                    48.536263
                                ],
                                [
                                    -92.630181,
                                    48.519468
                                ],
                                [
                                    -92.627468,
                                    48.502777
                                ],
                                [
                                    -92.646743,
                                    48.497428
                                ],
                                [
                                    -92.691366,
                                    48.489858
                                ],
                                [
                                    -92.710641,
                                    48.482882
                                ],
                                [
                                    -92.718909,
                                    48.459782
                                ],
                                [
                                    -92.704052,
                                    48.445158
                                ],
                                [
                                    -92.677129,
                                    48.441747
                                ],
                                [
                                    -92.657053,
                                    48.438233
                                ],
                                [
                                    -92.570521,
                                    48.446656
                                ],
                                [
                                    -92.526932,
                                    48.445623
                                ],
                                [
                                    -92.490629,
                                    48.433117
                                ],
                                [
                                    -92.474532,
                                    48.410483
                                ],
                                [
                                    -92.467581,
                                    48.394282
                                ],
                                [
                                    -92.467064,
                                    48.353225
                                ],
                                [
                                    -92.462465,
                                    48.329299
                                ],
                                [
                                    -92.451381,
                                    48.312685
                                ],
                                [
                                    -92.41823,
                                    48.282041
                                ],
                                [
                                    -92.38464,
                                    48.232406
                                ],
                                [
                                    -92.371851,
                                    48.222587
                                ],
                                [
                                    -92.353815,
                                    48.222897
                                ],
                                [
                                    -92.327874,
                                    48.229435
                                ],
                                [
                                    -92.303663,
                                    48.239279
                                ],
                                [
                                    -92.291029,
                                    48.249562
                                ],
                                [
                                    -92.292062,
                                    48.270336
                                ],
                                [
                                    -92.301416,
                                    48.290645
                                ],
                                [
                                    -92.303095,
                                    48.310928
                                ],
                                [
                                    -92.281598,
                                    48.33178
                                ],
                                [
                                    -92.259118,
                                    48.339635
                                ],
                                [
                                    -92.154732,
                                    48.350125
                                ],
                                [
                                    -92.070499,
                                    48.346714
                                ],
                                [
                                    -92.043421,
                                    48.334596
                                ],
                                [
                                    -92.030114,
                                    48.313176
                                ],
                                [
                                    -92.021355,
                                    48.287441
                                ],
                                [
                                    -92.007997,
                                    48.262482
                                ],
                                [
                                    -91.992158,
                                    48.247909
                                ],
                                [
                                    -91.975492,
                                    48.236566
                                ],
                                [
                                    -91.957302,
                                    48.228323
                                ],
                                [
                                    -91.852244,
                                    48.195974
                                ],
                                [
                                    -91.764988,
                                    48.187344
                                ],
                                [
                                    -91.744137,
                                    48.179593
                                ],
                                [
                                    -91.727575,
                                    48.168327
                                ],
                                [
                                    -91.695509,
                                    48.13758
                                ],
                                [
                                    -91.716438,
                                    48.112051
                                ],
                                [
                                    -91.692512,
                                    48.097866
                                ],
                                [
                                    -91.618615,
                                    48.089572
                                ],
                                [
                                    -91.597479,
                                    48.090399
                                ],
                                [
                                    -91.589676,
                                    48.088332
                                ],
                                [
                                    -91.581098,
                                    48.080942
                                ],
                                [
                                    -91.579806,
                                    48.070969
                                ],
                                [
                                    -91.585129,
                                    48.06084
                                ],
                                [
                                    -91.586989,
                                    48.052572
                                ],
                                [
                                    -91.574845,
                                    48.048205
                                ],
                                [
                                    -91.487098,
                                    48.053476
                                ],
                                [
                                    -91.464722,
                                    48.048955
                                ],
                                [
                                    -91.446274,
                                    48.040738
                                ],
                                [
                                    -91.427929,
                                    48.036449
                                ],
                                [
                                    -91.3654,
                                    48.057843
                                ],
                                [
                                    -91.276362,
                                    48.064768
                                ],
                                [
                                    -91.23807,
                                    48.082648
                                ],
                                [
                                    -91.203963,
                                    48.107659
                                ],
                                [
                                    -91.071103,
                                    48.170859
                                ],
                                [
                                    -91.02816,
                                    48.184838
                                ],
                                [
                                    -91.008109,
                                    48.194372
                                ],
                                [
                                    -90.923153,
                                    48.227109
                                ],
                                [
                                    -90.873802,
                                    48.234344
                                ],
                                [
                                    -90.840678,
                                    48.220107
                                ],
                                [
                                    -90.837939,
                                    48.210547
                                ],
                                [
                                    -90.848843,
                                    48.198713
                                ],
                                [
                                    -90.849721,
                                    48.189566
                                ],
                                [
                                    -90.843003,
                                    48.176983
                                ],
                                [
                                    -90.83427,
                                    48.171789
                                ],
                                [
                                    -90.823883,
                                    48.168327
                                ],
                                [
                                    -90.812307,
                                    48.160989
                                ],
                                [
                                    -90.803057,
                                    48.147166
                                ],
                                [
                                    -90.796701,
                                    48.117064
                                ],
                                [
                                    -90.786469,
                                    48.10045
                                ],
                                [
                                    -90.750347,
                                    48.083991
                                ],
                                [
                                    -90.701307,
                                    48.08456
                                ],
                                [
                                    -90.611079,
                                    48.103499
                                ],
                                [
                                    -90.586843,
                                    48.104817
                                ],
                                [
                                    -90.573872,
                                    48.097892
                                ],
                                [
                                    -90.562194,
                                    48.088849
                                ],
                                [
                                    -90.542014,
                                    48.083733
                                ],
                                [
                                    -90.531601,
                                    48.08456
                                ],
                                [
                                    -90.501887,
                                    48.094275
                                ],
                                [
                                    -90.490493,
                                    48.096239
                                ],
                                [
                                    -90.483465,
                                    48.094482
                                ],
                                [
                                    -90.477858,
                                    48.091536
                                ],
                                [
                                    -90.470623,
                                    48.089882
                                ],
                                [
                                    -90.178625,
                                    48.116444
                                ],
                                [
                                    -90.120386,
                                    48.115359
                                ],
                                [
                                    -90.073257,
                                    48.101199
                                ],
                                [
                                    -90.061036,
                                    48.091019
                                ],
                                [
                                    -90.008222,
                                    48.029731
                                ],
                                [
                                    -89.995329,
                                    48.018595
                                ],
                                [
                                    -89.980317,
                                    48.010094
                                ],
                                [
                                    -89.92045,
                                    47.98746
                                ],
                                [
                                    -89.902441,
                                    47.985909
                                ],
                                [
                                    -89.803454,
                                    48.013763
                                ],
                                [
                                    -89.780975,
                                    48.017199
                                ],
                                [
                                    -89.763302,
                                    48.017303
                                ],
                                [
                                    -89.745964,
                                    48.013763
                                ],
                                [
                                    -89.724596,
                                    48.005908
                                ],
                                [
                                    -89.712788,
                                    48.003376
                                ],
                                [
                                    -89.678656,
                                    48.008699
                                ],
                                [
                                    -89.65659,
                                    48.007975
                                ],
                                [
                                    -89.593105,
                                    47.996503
                                ],
                                [
                                    -89.581753,
                                    47.996333
                                ],
                                [
                                    -89.586724,
                                    47.992938
                                ],
                                [
                                    -89.310872,
                                    47.981097
                                ],
                                [
                                    -89.072861,
                                    48.046842
                                ],
                                [
                                    -88.49789,
                                    48.212841
                                ],
                                [
                                    -88.286621,
                                    48.156675
                                ],
                                [
                                    -85.939935,
                                    47.280501
                                ],
                                [
                                    -84.784644,
                                    46.770068
                                ],
                                [
                                    -84.516909,
                                    46.435083
                                ],
                                [
                                    -84.489712,
                                    46.446652
                                ],
                                [
                                    -84.491052,
                                    46.457658
                                ],
                                [
                                    -84.478301,
                                    46.466467
                                ],
                                [
                                    -84.465408,
                                    46.478172
                                ],
                                [
                                    -84.448096,
                                    46.489722
                                ],
                                [
                                    -84.42324,
                                    46.511581
                                ],
                                [
                                    -84.389702,
                                    46.520262
                                ],
                                [
                                    -84.352469,
                                    46.522743
                                ],
                                [
                                    -84.30534,
                                    46.501607
                                ],
                                [
                                    -84.242011,
                                    46.526464
                                ],
                                [
                                    -84.197285,
                                    46.546359
                                ],
                                [
                                    -84.147676,
                                    46.541346
                                ],
                                [
                                    -84.110443,
                                    46.526464
                                ],
                                [
                                    -84.158812,
                                    46.433343
                                ],
                                [
                                    -84.147676,
                                    46.399882
                                ],
                                [
                                    -84.129046,
                                    46.375026
                                ],
                                [
                                    -84.10543,
                                    46.347741
                                ],
                                [
                                    -84.105944,
                                    46.346374
                                ],
                                [
                                    -84.117195,
                                    46.347157
                                ],
                                [
                                    -84.117489,
                                    46.338326
                                ],
                                [
                                    -84.122361,
                                    46.331922
                                ],
                                [
                                    -84.112061,
                                    46.287102
                                ],
                                [
                                    -84.092672,
                                    46.227469
                                ],
                                [
                                    -84.111983,
                                    46.20337
                                ],
                                [
                                    -84.015118,
                                    46.149712
                                ],
                                [
                                    -83.957038,
                                    46.045736
                                ],
                                [
                                    -83.676821,
                                    46.15388
                                ],
                                [
                                    -83.429449,
                                    46.086221
                                ],
                                [
                                    -83.523049,
                                    45.892052
                                ],
                                [
                                    -83.574563,
                                    45.890259
                                ],
                                [
                                    -82.551615,
                                    44.857931
                                ],
                                [
                                    -82.655591,
                                    43.968545
                                ],
                                [
                                    -82.440632,
                                    43.096285
                                ],
                                [
                                    -82.460131,
                                    43.084392
                                ],
                                [
                                    -82.458894,
                                    43.083247
                                ],
                                [
                                    -82.431813,
                                    43.039387
                                ],
                                [
                                    -82.424748,
                                    43.02408
                                ],
                                [
                                    -82.417242,
                                    43.01731
                                ],
                                [
                                    -82.416369,
                                    43.01742
                                ],
                                [
                                    -82.416412,
                                    43.017143
                                ],
                                [
                                    -82.414603,
                                    42.983243
                                ],
                                [
                                    -82.430442,
                                    42.951307
                                ],
                                [
                                    -82.453179,
                                    42.918983
                                ],
                                [
                                    -82.464781,
                                    42.883637
                                ],
                                [
                                    -82.468036,
                                    42.863974
                                ],
                                [
                                    -82.482325,
                                    42.835113
                                ],
                                [
                                    -82.485271,
                                    42.818524
                                ],
                                [
                                    -82.473618,
                                    42.798164
                                ],
                                [
                                    -82.470982,
                                    42.790568
                                ],
                                [
                                    -82.471344,
                                    42.779845
                                ],
                                [
                                    -82.476951,
                                    42.761474
                                ],
                                [
                                    -82.48341,
                                    42.719254
                                ],
                                [
                                    -82.511264,
                                    42.646675
                                ],
                                [
                                    -82.526224,
                                    42.619906
                                ],
                                [
                                    -82.549246,
                                    42.590941
                                ],
                                [
                                    -82.575833,
                                    42.571795
                                ],
                                [
                                    -82.608467,
                                    42.561098
                                ],
                                [
                                    -82.644331,
                                    42.557817
                                ],
                                [
                                    -82.644698,
                                    42.557533
                                ],
                                [
                                    -82.644932,
                                    42.561634
                                ],
                                [
                                    -82.637132,
                                    42.568405
                                ],
                                [
                                    -82.60902,
                                    42.579296
                                ],
                                [
                                    -82.616673,
                                    42.582828
                                ],
                                [
                                    -82.636985,
                                    42.599607
                                ],
                                [
                                    -82.625357,
                                    42.616092
                                ],
                                [
                                    -82.629331,
                                    42.626394
                                ],
                                [
                                    -82.638751,
                                    42.633459
                                ],
                                [
                                    -82.644344,
                                    42.640524
                                ],
                                [
                                    -82.644166,
                                    42.641056
                                ],
                                [
                                    -82.716083,
                                    42.617461
                                ],
                                [
                                    -82.777592,
                                    42.408506
                                ],
                                [
                                    -82.888693,
                                    42.406093
                                ],
                                [
                                    -82.889991,
                                    42.403266
                                ],
                                [
                                    -82.905739,
                                    42.387665
                                ],
                                [
                                    -82.923842,
                                    42.374419
                                ],
                                [
                                    -82.937972,
                                    42.366176
                                ],
                                [
                                    -82.947686,
                                    42.363527
                                ],
                                [
                                    -82.979624,
                                    42.359406
                                ],
                                [
                                    -83.042618,
                                    42.340861
                                ],
                                [
                                    -83.061899,
                                    42.32732
                                ],
                                [
                                    -83.081622,
                                    42.30907
                                ],
                                [
                                    -83.11342,
                                    42.279619
                                ],
                                [
                                    -83.145306,
                                    42.066968
                                ],
                                [
                                    -83.177398,
                                    41.960666
                                ],
                                [
                                    -83.21512,
                                    41.794493
                                ],
                                [
                                    -82.219051,
                                    41.516445
                                ],
                                [
                                    -80.345329,
                                    42.13344
                                ],
                                [
                                    -80.316455,
                                    42.123137
                                ],
                                [
                                    -79.270266,
                                    42.591872
                                ],
                                [
                                    -79.221058,
                                    42.582892
                                ],
                                [
                                    -78.871842,
                                    42.860012
                                ],
                                [
                                    -78.875011,
                                    42.867184
                                ],
                                [
                                    -78.896205,
                                    42.897209
                                ],
                                [
                                    -78.901651,
                                    42.908101
                                ],
                                [
                                    -78.90901,
                                    42.952255
                                ],
                                [
                                    -78.913426,
                                    42.957848
                                ],
                                [
                                    -78.932118,
                                    42.9708
                                ],
                                [
                                    -78.936386,
                                    42.979631
                                ],
                                [
                                    -78.927997,
                                    43.002003
                                ],
                                [
                                    -78.893114,
                                    43.029379
                                ],
                                [
                                    -78.887963,
                                    43.051456
                                ],
                                [
                                    -78.914897,
                                    43.076477
                                ],
                                [
                                    -79.026167,
                                    43.086485
                                ],
                                [
                                    -79.065231,
                                    43.10573
                                ],
                                [
                                    -79.065273,
                                    43.105897
                                ],
                                [
                                    -79.065738,
                                    43.120237
                                ],
                                [
                                    -79.061423,
                                    43.130288
                                ],
                                [
                                    -79.055583,
                                    43.138427
                                ],
                                [
                                    -79.051604,
                                    43.146851
                                ],
                                [
                                    -79.04933,
                                    43.159847
                                ],
                                [
                                    -79.048607,
                                    43.170622
                                ],
                                [
                                    -79.053775,
                                    43.260358
                                ],
                                [
                                    -79.058425,
                                    43.277799
                                ],
                                [
                                    -79.058631,
                                    43.2782
                                ],
                                [
                                    -78.990696,
                                    43.286947
                                ],
                                [
                                    -78.862059,
                                    43.324332
                                ],
                                [
                                    -78.767813,
                                    43.336418
                                ],
                                [
                                    -78.516117,
                                    43.50645
                                ],
                                [
                                    -76.363317,
                                    43.943219
                                ],
                                [
                                    -76.396746,
                                    44.106667
                                ],
                                [
                                    -76.364697,
                                    44.111631
                                ],
                                [
                                    -76.366146,
                                    44.117349
                                ],
                                [
                                    -76.357462,
                                    44.131478
                                ],
                                [
                                    -76.183493,
                                    44.223025
                                ],
                                [
                                    -76.162644,
                                    44.229888
                                ],
                                [
                                    -76.176117,
                                    44.30795
                                ],
                                [
                                    -76.046414,
                                    44.354817
                                ],
                                [
                                    -75.928746,
                                    44.391137
                                ],
                                [
                                    -75.852508,
                                    44.381639
                                ],
                                [
                                    -75.849095,
                                    44.386103
                                ],
                                [
                                    -75.847623,
                                    44.392579
                                ],
                                [
                                    -75.84674,
                                    44.398172
                                ],
                                [
                                    -75.845415,
                                    44.40141
                                ],
                                [
                                    -75.780803,
                                    44.432318
                                ],
                                [
                                    -75.770205,
                                    44.446153
                                ],
                                [
                                    -75.772266,
                                    44.463815
                                ],
                                [
                                    -75.779184,
                                    44.48236
                                ],
                                [
                                    -75.791496,
                                    44.496513
                                ],
                                [
                                    -75.791183,
                                    44.496768
                                ],
                                [
                                    -75.754622,
                                    44.527567
                                ],
                                [
                                    -75.69969,
                                    44.581673
                                ],
                                [
                                    -75.578199,
                                    44.661513
                                ],
                                [
                                    -75.455958,
                                    44.741766
                                ],
                                [
                                    -75.341831,
                                    44.816749
                                ],
                                [
                                    -75.270233,
                                    44.863774
                                ],
                                [
                                    -75.129647,
                                    44.925166
                                ],
                                [
                                    -75.075594,
                                    44.935501
                                ],
                                [
                                    -75.058721,
                                    44.941031
                                ],
                                [
                                    -75.0149,
                                    44.96599
                                ],
                                [
                                    -74.998647,
                                    44.972398
                                ],
                                [
                                    -74.940201,
                                    44.987746
                                ],
                                [
                                    -74.903744,
                                    45.005213
                                ],
                                [
                                    -74.88651,
                                    45.009398
                                ],
                                [
                                    -74.868474,
                                    45.010122
                                ],
                                [
                                    -74.741557,
                                    44.998857
                                ],
                                [
                                    -74.712961,
                                    44.999254
                                ],
                                [
                                    -74.695875,
                                    44.99803
                                ],
                                [
                                    -74.596114,
                                    44.998495
                                ],
                                [
                                    -74.496352,
                                    44.999012
                                ],
                                [
                                    -74.197146,
                                    45.000458
                                ],
                                [
                                    -71.703551,
                                    45.012757
                                ],
                                [
                                    -71.603816,
                                    45.013274
                                ],
                                [
                                    -71.505848,
                                    45.013731
                                ],
                                [
                                    -71.50408,
                                    45.013739
                                ],
                                [
                                    -71.506613,
                                    45.037045
                                ],
                                [
                                    -71.504752,
                                    45.052962
                                ],
                                [
                                    -71.497259,
                                    45.066553
                                ],
                                [
                                    -71.45659,
                                    45.110994
                                ],
                                [
                                    -71.451215,
                                    45.121691
                                ],
                                [
                                    -71.445996,
                                    45.140295
                                ],
                                [
                                    -71.441604,
                                    45.150682
                                ],
                                [
                                    -71.413026,
                                    45.186184
                                ],
                                [
                                    -71.406567,
                                    45.204942
                                ],
                                [
                                    -71.42269,
                                    45.217189
                                ],
                                [
                                    -71.449045,
                                    45.226905
                                ],
                                [
                                    -71.438813,
                                    45.233468
                                ],
                                [
                                    -71.394888,
                                    45.241529
                                ],
                                [
                                    -71.381245,
                                    45.250779
                                ],
                                [
                                    -71.3521,
                                    45.278323
                                ],
                                [
                                    -71.334323,
                                    45.28871
                                ],
                                [
                                    -71.311534,
                                    45.294136
                                ],
                                [
                                    -71.293396,
                                    45.292327
                                ],
                                [
                                    -71.20937,
                                    45.254758
                                ],
                                [
                                    -71.185133,
                                    45.248557
                                ],
                                [
                                    -71.160329,
                                    45.245767
                                ],
                                [
                                    -71.141725,
                                    45.252329
                                ],
                                [
                                    -71.111029,
                                    45.287108
                                ],
                                [
                                    -71.095242,
                                    45.300905
                                ],
                                [
                                    -71.085553,
                                    45.304213
                                ],
                                [
                                    -71.084952,
                                    45.304293
                                ],
                                [
                                    -71.064211,
                                    45.307055
                                ],
                                [
                                    -71.054418,
                                    45.310362
                                ],
                                [
                                    -71.036667,
                                    45.323385
                                ],
                                [
                                    -71.027598,
                                    45.33465
                                ],
                                [
                                    -71.016539,
                                    45.343125
                                ],
                                [
                                    -70.993155,
                                    45.347827
                                ],
                                [
                                    -70.968118,
                                    45.34452
                                ],
                                [
                                    -70.951608,
                                    45.332014
                                ],
                                [
                                    -70.906908,
                                    45.246232
                                ],
                                [
                                    -70.892412,
                                    45.234604
                                ],
                                [
                                    -70.874351,
                                    45.245663
                                ],
                                [
                                    -70.870605,
                                    45.255275
                                ],
                                [
                                    -70.872491,
                                    45.274189
                                ],
                                [
                                    -70.870243,
                                    45.283129
                                ],
                                [
                                    -70.862621,
                                    45.290363
                                ],
                                [
                                    -70.842389,
                                    45.301215
                                ],
                                [
                                    -70.835258,
                                    45.309794
                                ],
                                [
                                    -70.83208,
                                    45.328552
                                ],
                                [
                                    -70.835465,
                                    45.373097
                                ],
                                [
                                    -70.833837,
                                    45.393096
                                ],
                                [
                                    -70.825982,
                                    45.410459
                                ],
                                [
                                    -70.812986,
                                    45.42343
                                ],
                                [
                                    -70.794873,
                                    45.430406
                                ],
                                [
                                    -70.771877,
                                    45.430045
                                ],
                                [
                                    -70.75255,
                                    45.422345
                                ],
                                [
                                    -70.718004,
                                    45.397282
                                ],
                                [
                                    -70.696739,
                                    45.388652
                                ],
                                [
                                    -70.675785,
                                    45.388704
                                ],
                                [
                                    -70.65359,
                                    45.395473
                                ],
                                [
                                    -70.641316,
                                    45.408496
                                ],
                                [
                                    -70.650257,
                                    45.427461
                                ],
                                [
                                    -70.668162,
                                    45.439036
                                ],
                                [
                                    -70.707385,
                                    45.4564
                                ],
                                [
                                    -70.722836,
                                    45.470921
                                ],
                                [
                                    -70.732009,
                                    45.491591
                                ],
                                [
                                    -70.730329,
                                    45.507973
                                ],
                                [
                                    -70.686792,
                                    45.572723
                                ],
                                [
                                    -70.589614,
                                    45.651788
                                ],
                                [
                                    -70.572406,
                                    45.662279
                                ],
                                [
                                    -70.514735,
                                    45.681709
                                ],
                                [
                                    -70.484763,
                                    45.699641
                                ],
                                [
                                    -70.4728,
                                    45.703568
                                ],
                                [
                                    -70.450424,
                                    45.703723
                                ],
                                [
                                    -70.439132,
                                    45.705893
                                ],
                                [
                                    -70.419315,
                                    45.716901
                                ],
                                [
                                    -70.407351,
                                    45.731525
                                ],
                                [
                                    -70.402442,
                                    45.749663
                                ],
                                [
                                    -70.403941,
                                    45.771161
                                ],
                                [
                                    -70.408282,
                                    45.781651
                                ],
                                [
                                    -70.413682,
                                    45.787697
                                ],
                                [
                                    -70.41717,
                                    45.793795
                                ],
                                [
                                    -70.415232,
                                    45.804389
                                ],
                                [
                                    -70.409935,
                                    45.810745
                                ],
                                [
                                    -70.389807,
                                    45.825059
                                ],
                                [
                                    -70.312654,
                                    45.867641
                                ],
                                [
                                    -70.283173,
                                    45.890482
                                ],
                                [
                                    -70.262528,
                                    45.923038
                                ],
                                [
                                    -70.255939,
                                    45.948876
                                ],
                                [
                                    -70.263148,
                                    45.956834
                                ],
                                [
                                    -70.280434,
                                    45.959315
                                ],
                                [
                                    -70.303947,
                                    45.968616
                                ],
                                [
                                    -70.316298,
                                    45.982982
                                ],
                                [
                                    -70.316892,
                                    45.999002
                                ],
                                [
                                    -70.306143,
                                    46.035331
                                ],
                                [
                                    -70.303637,
                                    46.038483
                                ],
                                [
                                    -70.294309,
                                    46.044943
                                ],
                                [
                                    -70.29201,
                                    46.048663
                                ],
                                [
                                    -70.293017,
                                    46.054038
                                ],
                                [
                                    -70.296092,
                                    46.057862
                                ],
                                [
                                    -70.300795,
                                    46.061737
                                ],
                                [
                                    -70.304774,
                                    46.065975
                                ],
                                [
                                    -70.311362,
                                    46.071866
                                ],
                                [
                                    -70.312629,
                                    46.079566
                                ],
                                [
                                    -70.30033,
                                    46.089281
                                ],
                                [
                                    -70.26444,
                                    46.106593
                                ],
                                [
                                    -70.24948,
                                    46.120597
                                ],
                                [
                                    -70.244002,
                                    46.141009
                                ],
                                [
                                    -70.249247,
                                    46.162765
                                ],
                                [
                                    -70.263329,
                                    46.183229
                                ],
                                [
                                    -70.284801,
                                    46.191859
                                ],
                                [
                                    -70.280899,
                                    46.211857
                                ],
                                [
                                    -70.253407,
                                    46.251493
                                ],
                                [
                                    -70.236173,
                                    46.288339
                                ],
                                [
                                    -70.223693,
                                    46.300793
                                ],
                                [
                                    -70.201886,
                                    46.305495
                                ],
                                [
                                    -70.199509,
                                    46.315262
                                ],
                                [
                                    -70.197028,
                                    46.336863
                                ],
                                [
                                    -70.188398,
                                    46.358412
                                ],
                                [
                                    -70.167418,
                                    46.368179
                                ],
                                [
                                    -70.153052,
                                    46.372829
                                ],
                                [
                                    -70.074323,
                                    46.419545
                                ],
                                [
                                    -70.061817,
                                    46.445409
                                ],
                                [
                                    -70.050086,
                                    46.511271
                                ],
                                [
                                    -70.032723,
                                    46.609766
                                ],
                                [
                                    -70.023628,
                                    46.661287
                                ],
                                [
                                    -70.007763,
                                    46.704075
                                ],
                                [
                                    -69.989961,
                                    46.721697
                                ],
                                [
                                    -69.899708,
                                    46.811562
                                ],
                                [
                                    -69.809403,
                                    46.901299
                                ],
                                [
                                    -69.719099,
                                    46.991086
                                ],
                                [
                                    -69.628794,
                                    47.080797
                                ],
                                [
                                    -69.538464,
                                    47.17061
                                ],
                                [
                                    -69.448159,
                                    47.260346
                                ],
                                [
                                    -69.357906,
                                    47.350134
                                ],
                                [
                                    -69.267628,
                                    47.439844
                                ],
                                [
                                    -69.25091,
                                    47.452919
                                ],
                                [
                                    -69.237268,
                                    47.45881
                                ],
                                [
                                    -69.221972,
                                    47.459688
                                ],
                                [
                                    -69.069655,
                                    47.431886
                                ],
                                [
                                    -69.054023,
                                    47.418399
                                ],
                                [
                                    -69.054333,
                                    47.389253
                                ],
                                [
                                    -69.066193,
                                    47.32967
                                ],
                                [
                                    -69.065134,
                                    47.296339
                                ],
                                [
                                    -69.06356,
                                    47.290809
                                ],
                                [
                                    -69.057486,
                                    47.269467
                                ],
                                [
                                    -69.0402,
                                    47.249055
                                ],
                                [
                                    -68.906229,
                                    47.190221
                                ],
                                [
                                    -68.889718,
                                    47.190609
                                ],
                                [
                                    -68.761819,
                                    47.23704
                                ],
                                [
                                    -68.71779,
                                    47.245231
                                ],
                                [
                                    -68.668801,
                                    47.243422
                                ],
                                [
                                    -68.644203,
                                    47.245283
                                ],
                                [
                                    -68.6256,
                                    47.255205
                                ],
                                [
                                    -68.607926,
                                    47.269829
                                ],
                                [
                                    -68.58524,
                                    47.28249
                                ],
                                [
                                    -68.539662,
                                    47.299853
                                ],
                                [
                                    -68.518009,
                                    47.304762
                                ],
                                [
                                    -68.492016,
                                    47.307553
                                ],
                                [
                                    -68.466746,
                                    47.305692
                                ],
                                [
                                    -68.435327,
                                    47.291275
                                ],
                                [
                                    -68.422563,
                                    47.293109
                                ],
                                [
                                    -68.410212,
                                    47.297424
                                ],
                                [
                                    -68.385614,
                                    47.301713
                                ],
                                [
                                    -68.383392,
                                    47.307139
                                ],
                                [
                                    -68.384839,
                                    47.315873
                                ],
                                [
                                    -68.382049,
                                    47.32781
                                ],
                                [
                                    -68.347839,
                                    47.358506
                                ],
                                [
                                    -68.299728,
                                    47.367833
                                ],
                                [
                                    -68.24645,
                                    47.360573
                                ],
                                [
                                    -68.197047,
                                    47.341401
                                ],
                                [
                                    -68.184335,
                                    47.333133
                                ],
                                [
                                    -68.156068,
                                    47.306674
                                ],
                                [
                                    -68.145061,
                                    47.301455
                                ],
                                [
                                    -68.115398,
                                    47.292282
                                ],
                                [
                                    -68.101446,
                                    47.286185
                                ],
                                [
                                    -68.039382,
                                    47.245231
                                ],
                                [
                                    -67.993184,
                                    47.223217
                                ],
                                [
                                    -67.962436,
                                    47.197689
                                ],
                                [
                                    -67.953703,
                                    47.18663
                                ],
                                [
                                    -67.949982,
                                    47.172936
                                ],
                                [
                                    -67.943419,
                                    47.164538
                                ],
                                [
                                    -67.899132,
                                    47.138778
                                ],
                                [
                                    -67.870607,
                                    47.107358
                                ],
                                [
                                    -67.854742,
                                    47.09785
                                ],
                                [
                                    -67.813556,
                                    47.081908
                                ],
                                [
                                    -67.808699,
                                    47.075138
                                ],
                                [
                                    -67.805185,
                                    47.035631
                                ],
                                [
                                    -67.802549,
                                    46.901247
                                ],
                                [
                                    -67.800017,
                                    46.766785
                                ],
                                [
                                    -67.797433,
                                    46.632297
                                ],
                                [
                                    -67.794849,
                                    46.497861
                                ],
                                [
                                    -67.792317,
                                    46.363476
                                ],
                                [
                                    -67.789733,
                                    46.229014
                                ],
                                [
                                    -67.78715,
                                    46.094552
                                ],
                                [
                                    -67.784566,
                                    45.960142
                                ],
                                [
                                    -67.782757,
                                    45.95053
                                ],
                                [
                                    -67.776556,
                                    45.942933
                                ],
                                [
                                    -67.767461,
                                    45.935957
                                ],
                                [
                                    -67.759658,
                                    45.928567
                                ],
                                [
                                    -67.757849,
                                    45.919472
                                ],
                                [
                                    -67.769425,
                                    45.903969
                                ],
                                [
                                    -67.787356,
                                    45.890017
                                ],
                                [
                                    -67.799242,
                                    45.875651
                                ],
                                [
                                    -67.792627,
                                    45.858907
                                ],
                                [
                                    -67.776091,
                                    45.840821
                                ],
                                [
                                    -67.772835,
                                    45.828057
                                ],
                                [
                                    -67.779863,
                                    45.815706
                                ],
                                [
                                    -67.794126,
                                    45.799169
                                ],
                                [
                                    -67.80627,
                                    45.781754
                                ],
                                [
                                    -67.811127,
                                    45.76651
                                ],
                                [
                                    -67.810816,
                                    45.762414
                                ],
                                [
                                    -67.817811,
                                    45.754896
                                ],
                                [
                                    -67.821785,
                                    45.740767
                                ],
                                [
                                    -67.827673,
                                    45.739001
                                ],
                                [
                                    -67.868884,
                                    45.744593
                                ],
                                [
                                    -67.856815,
                                    45.723694
                                ],
                                [
                                    -67.835768,
                                    45.703971
                                ],
                                [
                                    -67.793821,
                                    45.676301
                                ],
                                [
                                    -67.733034,
                                    45.651869
                                ],
                                [
                                    -67.723173,
                                    45.645393
                                ],
                                [
                                    -67.711546,
                                    45.642155
                                ],
                                [
                                    -67.697564,
                                    45.64922
                                ],
                                [
                                    -67.66695,
                                    45.620077
                                ],
                                [
                                    -67.649435,
                                    45.611247
                                ],
                                [
                                    -67.603073,
                                    45.605948
                                ],
                                [
                                    -67.561862,
                                    45.596234
                                ],
                                [
                                    -67.54052,
                                    45.593879
                                ],
                                [
                                    -67.442056,
                                    45.603593
                                ],
                                [
                                    -67.440939,
                                    45.604586
                                ],
                                [
                                    -67.431306,
                                    45.597941
                                ],
                                [
                                    -67.422107,
                                    45.568796
                                ],
                                [
                                    -67.42619,
                                    45.533449
                                ],
                                [
                                    -67.443036,
                                    45.522184
                                ],
                                [
                                    -67.467531,
                                    45.508283
                                ],
                                [
                                    -67.493214,
                                    45.493142
                                ],
                                [
                                    -67.48231,
                                    45.455521
                                ],
                                [
                                    -67.428825,
                                    45.38705
                                ],
                                [
                                    -67.434561,
                                    45.350308
                                ],
                                [
                                    -67.459056,
                                    45.318424
                                ],
                                [
                                    -67.468668,
                                    45.301835
                                ],
                                [
                                    -67.475024,
                                    45.282353
                                ],
                                [
                                    -67.471303,
                                    45.266282
                                ],
                                [
                                    -67.427585,
                                    45.236568
                                ],
                                [
                                    -67.390533,
                                    45.193108
                                ],
                                [
                                    -67.356272,
                                    45.165926
                                ],
                                [
                                    -67.31922,
                                    45.153886
                                ],
                                [
                                    -67.284648,
                                    45.169699
                                ],
                                [
                                    -67.279584,
                                    45.179052
                                ],
                                [
                                    -67.279222,
                                    45.187372
                                ],
                                [
                                    -67.277207,
                                    45.195072
                                ],
                                [
                                    -67.267336,
                                    45.202513
                                ],
                                [
                                    -67.254986,
                                    45.205045
                                ],
                                [
                                    -67.242428,
                                    45.202565
                                ],
                                [
                                    -67.219071,
                                    45.192126
                                ],
                                [
                                    -67.206166,
                                    45.189401
                                ],
                                [
                                    -67.176015,
                                    45.178656
                                ],
                                [
                                    -67.191274,
                                    45.180365
                                ],
                                [
                                    -67.204376,
                                    45.178209
                                ],
                                [
                                    -67.204724,
                                    45.177791
                                ],
                                [
                                    -67.152423,
                                    45.148932
                                ],
                                [
                                    -67.048033,
                                    45.043407
                                ],
                                [
                                    -66.962727,
                                    45.047088
                                ],
                                [
                                    -66.857192,
                                    44.968696
                                ],
                                [
                                    -66.897268,
                                    44.817275
                                ],
                                [
                                    -67.2159,
                                    44.593511
                                ],
                                [
                                    -67.122366,
                                    44.423624
                                ],
                                [
                                    -67.68447,
                                    44.192544
                                ],
                                [
                                    -67.459678,
                                    40.781645
                                ],
                                [
                                    -76.607854,
                                    32.495823
                                ],
                                [
                                    -76.798479,
                                    32.713735
                                ],
                                [
                                    -78.561892,
                                    29.037718
                                ],
                                [
                                    -78.892446,
                                    29.039659
                                ],
                                [
                                    -79.762295,
                                    26.719312
                                ],
                                [
                                    -80.026352,
                                    24.932961
                                ],
                                [
                                    -82.368794,
                                    23.994833
                                ],
                                [
                                    -83.806281,
                                    29.068506
                                ],
                                [
                                    -87.460772,
                                    29.089961
                                ],
                                [
                                    -87.922646,
                                    28.666131
                                ],
                                [
                                    -90.461001,
                                    28.246758
                                ],
                                [
                                    -91.787336,
                                    29.11536
                                ],
                                [
                                    -93.311871,
                                    29.12431
                                ],
                                [
                                    -96.423449,
                                    26.057857
                                ],
                                [
                                    -97.129057,
                                    25.991017
                                ],
                                [
                                    -97.129509,
                                    25.966833
                                ],
                                [
                                    -97.139358,
                                    25.965876
                                ],
                                [
                                    -97.202171,
                                    25.960893
                                ],
                                [
                                    -97.202176,
                                    25.960857
                                ],
                                [
                                    -97.204941,
                                    25.960639
                                ],
                                [
                                    -97.253051,
                                    25.963481
                                ],
                                [
                                    -97.266358,
                                    25.960639
                                ],
                                [
                                    -97.2692,
                                    25.944361
                                ],
                                [
                                    -97.287649,
                                    25.928651
                                ],
                                [
                                    -97.310981,
                                    25.922088
                                ],
                                [
                                    -97.328447,
                                    25.933302
                                ],
                                [
                                    -97.351107,
                                    25.918419
                                ],
                                [
                                    -97.355112,
                                    25.912786
                                ],
                                [
                                    -97.35227,
                                    25.894493
                                ],
                                [
                                    -97.345165,
                                    25.871704
                                ],
                                [
                                    -97.345733,
                                    25.852222
                                ],
                                [
                                    -97.36599,
                                    25.843902
                                ],
                                [
                                    -97.376015,
                                    25.846744
                                ],
                                [
                                    -97.380124,
                                    25.853203
                                ],
                                [
                                    -97.383121,
                                    25.860541
                                ],
                                [
                                    -97.389891,
                                    25.865657
                                ],
                                [
                                    -97.397823,
                                    25.865812
                                ],
                                [
                                    -97.399476,
                                    25.861162
                                ],
                                [
                                    -97.39989,
                                    25.855115
                                ],
                                [
                                    -97.404179,
                                    25.851395
                                ],
                                [
                                    -97.425418,
                                    25.854857
                                ],
                                [
                                    -97.435727,
                                    25.869275
                                ],
                                [
                                    -97.441309,
                                    25.884933
                                ],
                                [
                                    -97.448259,
                                    25.892322
                                ],
                                [
                                    -97.469421,
                                    25.892943
                                ],
                                [
                                    -97.486319,
                                    25.895733
                                ],
                                [
                                    -97.502209,
                                    25.901883
                                ],
                                [
                                    -97.52027,
                                    25.912786
                                ],
                                [
                                    -97.565177,
                                    25.954748
                                ],
                                [
                                    -97.594322,
                                    25.966375
                                ],
                                [
                                    -97.604787,
                                    25.979966
                                ],
                                [
                                    -97.613055,
                                    25.995985
                                ],
                                [
                                    -97.622641,
                                    26.00906
                                ],
                                [
                                    -97.641451,
                                    26.022495
                                ],
                                [
                                    -97.659874,
                                    26.03066
                                ],
                                [
                                    -97.679614,
                                    26.034639
                                ],
                                [
                                    -97.766948,
                                    26.039652
                                ],
                                [
                                    -97.780306,
                                    26.043218
                                ],
                                [
                                    -97.782321,
                                    26.058617
                                ],
                                [
                                    -97.80201,
                                    26.063733
                                ],
                                [
                                    -97.878181,
                                    26.063733
                                ],
                                [
                                    -97.941666,
                                    26.056809
                                ],
                                [
                                    -97.999233,
                                    26.064302
                                ],
                                [
                                    -98.013057,
                                    26.063682
                                ],
                                [
                                    -98.044166,
                                    26.048799
                                ],
                                [
                                    -98.065457,
                                    26.042184
                                ],
                                [
                                    -98.075146,
                                    26.046628
                                ],
                                [
                                    -98.083311,
                                    26.070916
                                ],
                                [
                                    -98.103103,
                                    26.074947
                                ],
                                [
                                    -98.150232,
                                    26.063682
                                ],
                                [
                                    -98.185062,
                                    26.065232
                                ],
                                [
                                    -98.222656,
                                    26.075412
                                ],
                                [
                                    -98.300429,
                                    26.111431
                                ],
                                [
                                    -98.309809,
                                    26.121094
                                ],
                                [
                                    -98.333037,
                                    26.15303
                                ],
                                [
                                    -98.339264,
                                    26.159851
                                ],
                                [
                                    -98.365774,
                                    26.160161
                                ],
                                [
                                    -98.377272,
                                    26.163572
                                ],
                                [
                                    -98.377272,
                                    26.173649
                                ],
                                [
                                    -98.36934,
                                    26.19401
                                ],
                                [
                                    -98.397193,
                                    26.201141
                                ],
                                [
                                    -98.428845,
                                    26.217729
                                ],
                                [
                                    -98.456544,
                                    26.225946
                                ],
                                [
                                    -98.472383,
                                    26.207652
                                ],
                                [
                                    -98.49295,
                                    26.230596
                                ],
                                [
                                    -98.521527,
                                    26.240932
                                ],
                                [
                                    -98.552791,
                                    26.248321
                                ],
                                [
                                    -98.581627,
                                    26.262274
                                ],
                                [
                                    -98.640564,
                                    26.24181
                                ],
                                [
                                    -98.653663,
                                    26.244291
                                ],
                                [
                                    -98.664696,
                                    26.250647
                                ],
                                [
                                    -98.685289,
                                    26.268475
                                ],
                                [
                                    -98.693325,
                                    26.270542
                                ],
                                [
                                    -98.702239,
                                    26.271628
                                ],
                                [
                                    -98.704255,
                                    26.27664
                                ],
                                [
                                    -98.691465,
                                    26.290231
                                ],
                                [
                                    -98.701413,
                                    26.299119
                                ],
                                [
                                    -98.713169,
                                    26.303357
                                ],
                                [
                                    -98.726217,
                                    26.30439
                                ],
                                [
                                    -98.739911,
                                    26.303253
                                ],
                                [
                                    -98.735932,
                                    26.320048
                                ],
                                [
                                    -98.746397,
                                    26.332141
                                ],
                                [
                                    -98.780839,
                                    26.351674
                                ],
                                [
                                    -98.795851,
                                    26.368314
                                ],
                                [
                                    -98.801329,
                                    26.372138
                                ],
                                [
                                    -98.810295,
                                    26.372448
                                ],
                                [
                                    -98.817323,
                                    26.368521
                                ],
                                [
                                    -98.825023,
                                    26.366454
                                ],
                                [
                                    -98.836081,
                                    26.372138
                                ],
                                [
                                    -98.842334,
                                    26.365834
                                ],
                                [
                                    -98.850835,
                                    26.364077
                                ],
                                [
                                    -98.860524,
                                    26.366299
                                ],
                                [
                                    -98.870214,
                                    26.372138
                                ],
                                [
                                    -98.893029,
                                    26.367849
                                ],
                                [
                                    -98.9299,
                                    26.39224
                                ],
                                [
                                    -98.945377,
                                    26.378288
                                ],
                                [
                                    -98.954136,
                                    26.393946
                                ],
                                [
                                    -98.962844,
                                    26.399527
                                ],
                                [
                                    -98.986951,
                                    26.400095
                                ],
                                [
                                    -99.004056,
                                    26.393842
                                ],
                                [
                                    -99.010515,
                                    26.392602
                                ],
                                [
                                    -99.016432,
                                    26.394462
                                ],
                                [
                                    -99.022995,
                                    26.403351
                                ],
                                [
                                    -99.027878,
                                    26.406245
                                ],
                                [
                                    -99.047645,
                                    26.406968
                                ],
                                [
                                    -99.066351,
                                    26.404746
                                ],
                                [
                                    -99.085498,
                                    26.40764
                                ],
                                [
                                    -99.106427,
                                    26.423039
                                ],
                                [
                                    -99.108907,
                                    26.434253
                                ],
                                [
                                    -99.102525,
                                    26.446966
                                ],
                                [
                                    -99.09374,
                                    26.459781
                                ],
                                [
                                    -99.089373,
                                    26.47115
                                ],
                                [
                                    -99.091492,
                                    26.484018
                                ],
                                [
                                    -99.10299,
                                    26.512078
                                ],
                                [
                                    -99.115108,
                                    26.525617
                                ],
                                [
                                    -99.140946,
                                    26.531405
                                ],
                                [
                                    -99.164873,
                                    26.540448
                                ],
                                [
                                    -99.17128,
                                    26.563961
                                ],
                                [
                                    -99.171548,
                                    26.56583
                                ],
                                [
                                    -99.213953,
                                    26.568537
                                ],
                                [
                                    -99.242801,
                                    26.579723
                                ],
                                [
                                    -99.254575,
                                    26.6018
                                ],
                                [
                                    -99.258844,
                                    26.614752
                                ],
                                [
                                    -99.277683,
                                    26.638007
                                ],
                                [
                                    -99.281951,
                                    26.649781
                                ],
                                [
                                    -99.277389,
                                    26.657729
                                ],
                                [
                                    -99.26635,
                                    26.653314
                                ],
                                [
                                    -99.252662,
                                    26.644483
                                ],
                                [
                                    -99.240299,
                                    26.639184
                                ],
                                [
                                    -99.244861,
                                    26.652431
                                ],
                                [
                                    -99.240299,
                                    26.697763
                                ],
                                [
                                    -99.242507,
                                    26.713658
                                ],
                                [
                                    -99.252368,
                                    26.743683
                                ],
                                [
                                    -99.254575,
                                    26.75899
                                ],
                                [
                                    -99.252368,
                                    26.799024
                                ],
                                [
                                    -99.254575,
                                    26.810504
                                ],
                                [
                                    -99.257666,
                                    26.813153
                                ],
                                [
                                    -99.262229,
                                    26.814036
                                ],
                                [
                                    -99.266497,
                                    26.817863
                                ],
                                [
                                    -99.268263,
                                    26.827872
                                ],
                                [
                                    -99.271649,
                                    26.832876
                                ],
                                [
                                    -99.289458,
                                    26.84465
                                ],
                                [
                                    -99.308444,
                                    26.830521
                                ],
                                [
                                    -99.316539,
                                    26.822279
                                ],
                                [
                                    -99.323457,
                                    26.810504
                                ],
                                [
                                    -99.328166,
                                    26.797258
                                ],
                                [
                                    -99.329197,
                                    26.789016
                                ],
                                [
                                    -99.331699,
                                    26.78254
                                ],
                                [
                                    -99.340383,
                                    26.77312
                                ],
                                [
                                    -99.366728,
                                    26.761345
                                ],
                                [
                                    -99.380269,
                                    26.777241
                                ],
                                [
                                    -99.391896,
                                    26.796963
                                ],
                                [
                                    -99.412207,
                                    26.796963
                                ],
                                [
                                    -99.410883,
                                    26.808149
                                ],
                                [
                                    -99.405437,
                                    26.818452
                                ],
                                [
                                    -99.396606,
                                    26.824928
                                ],
                                [
                                    -99.384979,
                                    26.824928
                                ],
                                [
                                    -99.377178,
                                    26.816686
                                ],
                                [
                                    -99.374823,
                                    26.804028
                                ],
                                [
                                    -99.374234,
                                    26.791076
                                ],
                                [
                                    -99.371291,
                                    26.783128
                                ],
                                [
                                    -99.360694,
                                    26.780479
                                ],
                                [
                                    -99.359369,
                                    26.790487
                                ],
                                [
                                    -99.36452,
                                    26.810504
                                ],
                                [
                                    -99.357897,
                                    26.822279
                                ],
                                [
                                    -99.351274,
                                    26.83111
                                ],
                                [
                                    -99.346123,
                                    26.840824
                                ],
                                [
                                    -99.344062,
                                    26.855247
                                ],
                                [
                                    -99.348772,
                                    26.899696
                                ],
                                [
                                    -99.355101,
                                    26.920302
                                ],
                                [
                                    -99.36452,
                                    26.934726
                                ],
                                [
                                    -99.403377,
                                    26.952093
                                ],
                                [
                                    -99.413974,
                                    26.964162
                                ],
                                [
                                    -99.401758,
                                    26.985651
                                ],
                                [
                                    -99.399991,
                                    26.999192
                                ],
                                [
                                    -99.418831,
                                    27.007728
                                ],
                                [
                                    -99.441938,
                                    27.013615
                                ],
                                [
                                    -99.453271,
                                    27.019797
                                ],
                                [
                                    -99.455332,
                                    27.025979
                                ],
                                [
                                    -99.464751,
                                    27.039225
                                ],
                                [
                                    -99.466959,
                                    27.047467
                                ],
                                [
                                    -99.462544,
                                    27.057181
                                ],
                                [
                                    -99.461635,
                                    27.056839
                                ],
                                [
                                    -99.461728,
                                    27.056954
                                ],
                                [
                                    -99.442039,
                                    27.089614
                                ],
                                [
                                    -99.439404,
                                    27.098347
                                ],
                                [
                                    -99.441419,
                                    27.107494
                                ],
                                [
                                    -99.445734,
                                    27.114728
                                ],
                                [
                                    -99.450178,
                                    27.120465
                                ],
                                [
                                    -99.452452,
                                    27.125012
                                ],
                                [
                                    -99.450333,
                                    27.145166
                                ],
                                [
                                    -99.435786,
                                    27.188419
                                ],
                                [
                                    -99.431988,
                                    27.207591
                                ],
                                [
                                    -99.434029,
                                    27.22697
                                ],
                                [
                                    -99.440902,
                                    27.244798
                                ],
                                [
                                    -99.451832,
                                    27.26118
                                ],
                                [
                                    -99.46612,
                                    27.276527
                                ],
                                [
                                    -99.468963,
                                    27.278233
                                ],
                                [
                                    -99.480409,
                                    27.283297
                                ],
                                [
                                    -99.482941,
                                    27.286708
                                ],
                                [
                                    -99.484879,
                                    27.294821
                                ],
                                [
                                    -99.486584,
                                    27.297611
                                ],
                                [
                                    -99.493199,
                                    27.30128
                                ],
                                [
                                    -99.521362,
                                    27.311254
                                ],
                                [
                                    -99.5148,
                                    27.321796
                                ],
                                [
                                    -99.497591,
                                    27.338798
                                ],
                                [
                                    -99.494026,
                                    27.348203
                                ],
                                [
                                    -99.492889,
                                    27.358848
                                ],
                                [
                                    -99.487721,
                                    27.37187
                                ],
                                [
                                    -99.484621,
                                    27.391766
                                ],
                                [
                                    -99.475706,
                                    27.414762
                                ],
                                [
                                    -99.472916,
                                    27.426647
                                ],
                                [
                                    -99.473639,
                                    27.463803
                                ],
                                [
                                    -99.472916,
                                    27.468299
                                ],
                                [
                                    -99.47643,
                                    27.48251
                                ],
                                [
                                    -99.480409,
                                    27.490778
                                ],
                                [
                                    -99.48829,
                                    27.494654
                                ],
                                [
                                    -99.503689,
                                    27.495584
                                ],
                                [
                                    -99.509503,
                                    27.500028
                                ],
                                [
                                    -99.510071,
                                    27.510518
                                ],
                                [
                                    -99.507074,
                                    27.533437
                                ],
                                [
                                    -99.507203,
                                    27.57377
                                ],
                                [
                                    -99.515006,
                                    27.588601
                                ],
                                [
                                    -99.535031,
                                    27.604828
                                ],
                                [
                                    -99.55503,
                                    27.613509
                                ],
                                [
                                    -99.572264,
                                    27.61847
                                ],
                                [
                                    -99.578232,
                                    27.622811
                                ],
                                [
                                    -99.590247,
                                    27.642061
                                ],
                                [
                                    -99.600169,
                                    27.646427
                                ],
                                [
                                    -99.612442,
                                    27.643637
                                ],
                                [
                                    -99.633526,
                                    27.633069
                                ],
                                [
                                    -99.644869,
                                    27.632733
                                ],
                                [
                                    -99.648642,
                                    27.636919
                                ],
                                [
                                    -99.658693,
                                    27.654024
                                ],
                                [
                                    -99.664739,
                                    27.659398
                                ],
                                [
                                    -99.70037,
                                    27.659191
                                ],
                                [
                                    -99.705692,
                                    27.66317
                                ],
                                [
                                    -99.710674,
                                    27.670116
                                ],
                                [
                                    -99.723056,
                                    27.687381
                                ],
                                [
                                    -99.730652,
                                    27.691825
                                ],
                                [
                                    -99.734037,
                                    27.702031
                                ],
                                [
                                    -99.736311,
                                    27.713607
                                ],
                                [
                                    -99.740445,
                                    27.722159
                                ],
                                [
                                    -99.747344,
                                    27.726009
                                ],
                                [
                                    -99.765198,
                                    27.731177
                                ],
                                [
                                    -99.774577,
                                    27.735828
                                ],
                                [
                                    -99.78685,
                                    27.748488
                                ],
                                [
                                    -99.795428,
                                    27.761924
                                ],
                                [
                                    -99.806963,
                                    27.771423
                                ],
                                [
                                    -99.808167,
                                    27.772414
                                ],
                                [
                                    -99.83292,
                                    27.776755
                                ],
                                [
                                    -99.832971,
                                    27.782181
                                ],
                                [
                                    -99.844779,
                                    27.793576
                                ],
                                [
                                    -99.858241,
                                    27.803524
                                ],
                                [
                                    -99.863357,
                                    27.804661
                                ],
                                [
                                    -99.864727,
                                    27.814324
                                ],
                                [
                                    -99.861858,
                                    27.83608
                                ],
                                [
                                    -99.863357,
                                    27.845666
                                ],
                                [
                                    -99.870928,
                                    27.854477
                                ],
                                [
                                    -99.880204,
                                    27.859231
                                ],
                                [
                                    -99.888007,
                                    27.864812
                                ],
                                [
                                    -99.891288,
                                    27.876026
                                ],
                                [
                                    -99.882684,
                                    27.89158
                                ],
                                [
                                    -99.878808,
                                    27.901838
                                ],
                                [
                                    -99.88134,
                                    27.906463
                                ],
                                [
                                    -99.896766,
                                    27.912923
                                ],
                                [
                                    -99.914336,
                                    27.928245
                                ],
                                [
                                    -99.929916,
                                    27.946331
                                ],
                                [
                                    -99.939683,
                                    27.961085
                                ],
                                [
                                    -99.928289,
                                    27.975761
                                ],
                                [
                                    -99.940717,
                                    27.983254
                                ],
                                [
                                    -99.961852,
                                    27.987492
                                ],
                                [
                                    -99.976606,
                                    27.992453
                                ],
                                [
                                    -99.991127,
                                    28.007801
                                ],
                                [
                                    -100.000584,
                                    28.02041
                                ],
                                [
                                    -100.007457,
                                    28.033561
                                ],
                                [
                                    -100.014123,
                                    28.050459
                                ],
                                [
                                    -100.013503,
                                    28.056971
                                ],
                                [
                                    -100.010506,
                                    28.063611
                                ],
                                [
                                    -100.010196,
                                    28.068882
                                ],
                                [
                                    -100.017585,
                                    28.070949
                                ],
                                [
                                    -100.031538,
                                    28.081801
                                ],
                                [
                                    -100.045077,
                                    28.095289
                                ],
                                [
                                    -100.048023,
                                    28.102523
                                ],
                                [
                                    -100.048901,
                                    28.115959
                                ],
                                [
                                    -100.056498,
                                    28.137922
                                ],
                                [
                                    -100.074895,
                                    28.154407
                                ],
                                [
                                    -100.172873,
                                    28.198538
                                ],
                                [
                                    -100.189203,
                                    28.201329
                                ],
                                [
                                    -100.197626,
                                    28.207168
                                ],
                                [
                                    -100.201192,
                                    28.220346
                                ],
                                [
                                    -100.202949,
                                    28.234428
                                ],
                                [
                                    -100.205946,
                                    28.242877
                                ],
                                [
                                    -100.212819,
                                    28.245073
                                ],
                                [
                                    -100.240724,
                                    28.249698
                                ],
                                [
                                    -100.257932,
                                    28.260524
                                ],
                                [
                                    -100.275089,
                                    28.277242
                                ],
                                [
                                    -100.284339,
                                    28.296517
                                ],
                                [
                                    -100.277931,
                                    28.314888
                                ],
                                [
                                    -100.278551,
                                    28.331088
                                ],
                                [
                                    -100.293899,
                                    28.353413
                                ],
                                [
                                    -100.322631,
                                    28.386899
                                ],
                                [
                                    -100.331675,
                                    28.422013
                                ],
                                [
                                    -100.336326,
                                    28.458574
                                ],
                                [
                                    -100.340201,
                                    28.464259
                                ],
                                [
                                    -100.348315,
                                    28.470253
                                ],
                                [
                                    -100.355549,
                                    28.478185
                                ],
                                [
                                    -100.35679,
                                    28.489322
                                ],
                                [
                                    -100.351622,
                                    28.496711
                                ],
                                [
                                    -100.322631,
                                    28.510406
                                ],
                                [
                                    -100.364024,
                                    28.524797
                                ],
                                [
                                    -100.38423,
                                    28.537174
                                ],
                                [
                                    -100.397769,
                                    28.557586
                                ],
                                [
                                    -100.398751,
                                    28.568645
                                ],
                                [
                                    -100.397097,
                                    28.592726
                                ],
                                [
                                    -100.401438,
                                    28.60226
                                ],
                                [
                                    -100.411463,
                                    28.609314
                                ],
                                [
                                    -100.434821,
                                    28.619133
                                ],
                                [
                                    -100.44619,
                                    28.626497
                                ],
                                [
                                    -100.444898,
                                    28.643782
                                ],
                                [
                                    -100.481381,
                                    28.686054
                                ],
                                [
                                    -100.493939,
                                    28.708378
                                ],
                                [
                                    -100.519054,
                                    28.804961
                                ],
                                [
                                    -100.524996,
                                    28.814831
                                ],
                                [
                                    -100.529285,
                                    28.819947
                                ],
                                [
                                    -100.534453,
                                    28.830231
                                ],
                                [
                                    -100.538639,
                                    28.835631
                                ],
                                [
                                    -100.54515,
                                    28.83899
                                ],
                                [
                                    -100.559671,
                                    28.839378
                                ],
                                [
                                    -100.566234,
                                    28.842504
                                ],
                                [
                                    -100.569696,
                                    28.84961
                                ],
                                [
                                    -100.56334,
                                    28.86209
                                ],
                                [
                                    -100.566234,
                                    28.869789
                                ],
                                [
                                    -100.571763,
                                    28.8732
                                ],
                                [
                                    -100.586543,
                                    28.879789
                                ],
                                [
                                    -100.58954,
                                    28.883458
                                ],
                                [
                                    -100.594966,
                                    28.899322
                                ],
                                [
                                    -100.606955,
                                    28.910123
                                ],
                                [
                                    -100.618841,
                                    28.917926
                                ],
                                [
                                    -100.624318,
                                    28.924721
                                ],
                                [
                                    -100.624783,
                                    28.93777
                                ],
                                [
                                    -100.626696,
                                    28.948338
                                ],
                                [
                                    -100.630778,
                                    28.956683
                                ],
                                [
                                    -100.637909,
                                    28.962884
                                ],
                                [
                                    -100.628918,
                                    28.98433
                                ],
                                [
                                    -100.632793,
                                    29.005156
                                ],
                                [
                                    -100.652224,
                                    29.044817
                                ],
                                [
                                    -100.660854,
                                    29.102669
                                ],
                                [
                                    -100.668967,
                                    29.116208
                                ],
                                [
                                    -100.678165,
                                    29.119412
                                ],
                                [
                                    -100.690826,
                                    29.121014
                                ],
                                [
                                    -100.70204,
                                    29.12365
                                ],
                                [
                                    -100.706846,
                                    29.130187
                                ],
                                [
                                    -100.70974,
                                    29.135561
                                ],
                                [
                                    -100.762501,
                                    29.173776
                                ],
                                [
                                    -100.770098,
                                    29.187289
                                ],
                                [
                                    -100.762088,
                                    29.208658
                                ],
                                [
                                    -100.783172,
                                    29.243074
                                ],
                                [
                                    -100.796143,
                                    29.257673
                                ],
                                [
                                    -100.81609,
                                    29.270773
                                ],
                                [
                                    -100.86389,
                                    29.290616
                                ],
                                [
                                    -100.871797,
                                    29.296456
                                ],
                                [
                                    -100.891227,
                                    29.318547
                                ],
                                [
                                    -100.91474,
                                    29.337048
                                ],
                                [
                                    -100.987397,
                                    29.366322
                                ],
                                [
                                    -100.998301,
                                    29.372472
                                ],
                                [
                                    -101.008068,
                                    29.380585
                                ],
                                [
                                    -101.016232,
                                    29.390068
                                ],
                                [
                                    -101.022175,
                                    29.40048
                                ],
                                [
                                    -101.025948,
                                    29.414356
                                ],
                                [
                                    -101.029617,
                                    29.442984
                                ],
                                [
                                    -101.037782,
                                    29.460063
                                ],
                                [
                                    -101.039026,
                                    29.460452
                                ],
                                [
                                    -101.040188,
                                    29.457132
                                ],
                                [
                                    -101.045487,
                                    29.451245
                                ],
                                [
                                    -101.060205,
                                    29.449184
                                ],
                                [
                                    -101.067711,
                                    29.45095
                                ],
                                [
                                    -101.076101,
                                    29.453894
                                ],
                                [
                                    -101.085962,
                                    29.454483
                                ],
                                [
                                    -101.098031,
                                    29.449184
                                ],
                                [
                                    -101.113043,
                                    29.466552
                                ],
                                [
                                    -101.142774,
                                    29.475383
                                ],
                                [
                                    -101.174124,
                                    29.475971
                                ],
                                [
                                    -101.193699,
                                    29.469495
                                ],
                                [
                                    -101.198703,
                                    29.473911
                                ],
                                [
                                    -101.198851,
                                    29.476854
                                ],
                                [
                                    -101.184132,
                                    29.497754
                                ],
                                [
                                    -101.184868,
                                    29.512767
                                ],
                                [
                                    -101.195171,
                                    29.521892
                                ],
                                [
                                    -101.214157,
                                    29.518065
                                ],
                                [
                                    -101.245213,
                                    29.493044
                                ],
                                [
                                    -101.265818,
                                    29.487157
                                ],
                                [
                                    -101.290545,
                                    29.49746
                                ],
                                [
                                    -101.297315,
                                    29.503936
                                ],
                                [
                                    -101.300995,
                                    29.512767
                                ],
                                [
                                    -101.294372,
                                    29.520715
                                ],
                                [
                                    -101.273177,
                                    29.524247
                                ],
                                [
                                    -101.259195,
                                    29.533372
                                ],
                                [
                                    -101.243888,
                                    29.554861
                                ],
                                [
                                    -101.231966,
                                    29.580176
                                ],
                                [
                                    -101.227845,
                                    29.599899
                                ],
                                [
                                    -101.239178,
                                    29.616677
                                ],
                                [
                                    -101.26052,
                                    29.613439
                                ],
                                [
                                    -101.281272,
                                    29.597249
                                ],
                                [
                                    -101.290545,
                                    29.575761
                                ],
                                [
                                    -101.295255,
                                    29.570168
                                ],
                                [
                                    -101.306146,
                                    29.574583
                                ],
                                [
                                    -101.317626,
                                    29.584003
                                ],
                                [
                                    -101.323955,
                                    29.592539
                                ],
                                [
                                    -101.323661,
                                    29.603137
                                ],
                                [
                                    -101.318804,
                                    29.616383
                                ],
                                [
                                    -101.311445,
                                    29.628158
                                ],
                                [
                                    -101.303497,
                                    29.634045
                                ],
                                [
                                    -101.303669,
                                    29.631411
                                ],
                                [
                                    -101.302727,
                                    29.633851
                                ],
                                [
                                    -101.301073,
                                    29.649509
                                ],
                                [
                                    -101.30978,
                                    29.654548
                                ],
                                [
                                    -101.336239,
                                    29.654315
                                ],
                                [
                                    -101.349029,
                                    29.660103
                                ],
                                [
                                    -101.357684,
                                    29.667441
                                ],
                                [
                                    -101.364351,
                                    29.676665
                                ],
                                [
                                    -101.376624,
                                    29.700643
                                ],
                                [
                                    -101.383368,
                                    29.718497
                                ],
                                [
                                    -101.39962,
                                    29.740718
                                ],
                                [
                                    -101.406545,
                                    29.752888
                                ],
                                [
                                    -101.409309,
                                    29.765781
                                ],
                                [
                                    -101.405098,
                                    29.778442
                                ],
                                [
                                    -101.414012,
                                    29.774411
                                ],
                                [
                                    -101.424218,
                                    29.771414
                                ],
                                [
                                    -101.435096,
                                    29.770122
                                ],
                                [
                                    -101.446103,
                                    29.771052
                                ],
                                [
                                    -101.455689,
                                    29.77591
                                ],
                                [
                                    -101.462433,
                                    29.788932
                                ],
                                [
                                    -101.470908,
                                    29.791516
                                ],
                                [
                                    -101.490286,
                                    29.785547
                                ],
                                [
                                    -101.505763,
                                    29.773894
                                ],
                                [
                                    -101.521809,
                                    29.765936
                                ],
                                [
                                    -101.542893,
                                    29.771052
                                ],
                                [
                                    -101.539689,
                                    29.779191
                                ],
                                [
                                    -101.530516,
                                    29.796477
                                ],
                                [
                                    -101.528604,
                                    29.801438
                                ],
                                [
                                    -101.531912,
                                    29.811101
                                ],
                                [
                                    -101.539172,
                                    29.817974
                                ],
                                [
                                    -101.546458,
                                    29.820145
                                ],
                                [
                                    -101.549766,
                                    29.815701
                                ],
                                [
                                    -101.553977,
                                    29.796684
                                ],
                                [
                                    -101.564907,
                                    29.786478
                                ],
                                [
                                    -101.580281,
                                    29.781568
                                ],
                                [
                                    -101.632216,
                                    29.775651
                                ],
                                [
                                    -101.794531,
                                    29.795857
                                ],
                                [
                                    -101.80298,
                                    29.801438
                                ],
                                [
                                    -101.805978,
                                    29.811928
                                ],
                                [
                                    -101.812695,
                                    29.812032
                                ],
                                [
                                    -101.82409,
                                    29.805184
                                ],
                                [
                                    -101.857602,
                                    29.805184
                                ],
                                [
                                    -101.877524,
                                    29.810843
                                ],
                                [
                                    -101.88742,
                                    29.81229
                                ],
                                [
                                    -101.895455,
                                    29.808621
                                ],
                                [
                                    -101.90238,
                                    29.803247
                                ],
                                [
                                    -101.910881,
                                    29.799888
                                ],
                                [
                                    -101.920157,
                                    29.798182
                                ],
                                [
                                    -101.929613,
                                    29.797717
                                ],
                                [
                                    -101.942662,
                                    29.803608
                                ],
                                [
                                    -101.957054,
                                    29.814047
                                ],
                                [
                                    -101.972246,
                                    29.818181
                                ],
                                [
                                    -101.98793,
                                    29.805184
                                ],
                                [
                                    -102.014595,
                                    29.810998
                                ],
                                [
                                    -102.109344,
                                    29.80211
                                ],
                                [
                                    -102.145647,
                                    29.815701
                                ],
                                [
                                    -102.157248,
                                    29.824537
                                ],
                                [
                                    -102.203679,
                                    29.846138
                                ],
                                [
                                    -102.239775,
                                    29.849135
                                ],
                                [
                                    -102.253444,
                                    29.855285
                                ],
                                [
                                    -102.258276,
                                    29.873475
                                ],
                                [
                                    -102.276181,
                                    29.869547
                                ],
                                [
                                    -102.289023,
                                    29.878126
                                ],
                                [
                                    -102.302175,
                                    29.889391
                                ],
                                [
                                    -102.321011,
                                    29.893939
                                ],
                                [
                                    -102.330235,
                                    29.888926
                                ],
                                [
                                    -102.339769,
                                    29.870633
                                ],
                                [
                                    -102.351061,
                                    29.866602
                                ],
                                [
                                    -102.36323,
                                    29.864276
                                ],
                                [
                                    -102.370723,
                                    29.857765
                                ],
                                [
                                    -102.374547,
                                    29.848102
                                ],
                                [
                                    -102.376589,
                                    29.821488
                                ],
                                [
                                    -102.380051,
                                    29.811386
                                ],
                                [
                                    -102.404132,
                                    29.780793
                                ],
                                [
                                    -102.406096,
                                    29.777279
                                ],
                                [
                                    -102.515288,
                                    29.784721
                                ],
                                [
                                    -102.523066,
                                    29.782318
                                ],
                                [
                                    -102.531127,
                                    29.769915
                                ],
                                [
                                    -102.54154,
                                    29.762474
                                ],
                                [
                                    -102.543349,
                                    29.760123
                                ],
                                [
                                    -102.546578,
                                    29.757875
                                ],
                                [
                                    -102.553141,
                                    29.756738
                                ],
                                [
                                    -102.558309,
                                    29.759089
                                ],
                                [
                                    -102.562882,
                                    29.769347
                                ],
                                [
                                    -102.566758,
                                    29.771052
                                ],
                                [
                                    -102.58531,
                                    29.764696
                                ],
                                [
                                    -102.621225,
                                    29.747281
                                ],
                                [
                                    -102.638743,
                                    29.743715
                                ],
                                [
                                    -102.676054,
                                    29.74449
                                ],
                                [
                                    -102.683469,
                                    29.743715
                                ],
                                [
                                    -102.69104,
                                    29.736817
                                ],
                                [
                                    -102.693624,
                                    29.729401
                                ],
                                [
                                    -102.694709,
                                    29.720616
                                ],
                                [
                                    -102.697758,
                                    29.709557
                                ],
                                [
                                    -102.726748,
                                    29.664495
                                ],
                                [
                                    -102.73127,
                                    29.650594
                                ],
                                [
                                    -102.735507,
                                    29.649509
                                ],
                                [
                                    -102.751656,
                                    29.622457
                                ],
                                [
                                    -102.75176,
                                    29.620157
                                ],
                                [
                                    -102.761346,
                                    29.603414
                                ],
                                [
                                    -102.767598,
                                    29.59729
                                ],
                                [
                                    -102.779665,
                                    29.592303
                                ],
                                [
                                    -102.774084,
                                    29.579617
                                ],
                                [
                                    -102.776461,
                                    29.575948
                                ],
                                [
                                    -102.785892,
                                    29.571814
                                ],
                                [
                                    -102.78075,
                                    29.558249
                                ],
                                [
                                    -102.786512,
                                    29.550497
                                ],
                                [
                                    -102.795478,
                                    29.54427
                                ],
                                [
                                    -102.827311,
                                    29.470502
                                ],
                                [
                                    -102.833951,
                                    29.461355
                                ],
                                [
                                    -102.839067,
                                    29.45195
                                ],
                                [
                                    -102.841134,
                                    29.438308
                                ],
                                [
                                    -102.838705,
                                    29.426939
                                ],
                                [
                                    -102.834984,
                                    29.415699
                                ],
                                [
                                    -102.835191,
                                    29.403839
                                ],
                                [
                                    -102.844545,
                                    29.390533
                                ],
                                [
                                    -102.845578,
                                    29.384719
                                ],
                                [
                                    -102.838033,
                                    29.370534
                                ],
                                [
                                    -102.837672,
                                    29.366322
                                ],
                                [
                                    -102.84656,
                                    29.361749
                                ],
                                [
                                    -102.853872,
                                    29.361
                                ],
                                [
                                    -102.859867,
                                    29.361155
                                ],
                                [
                                    -102.864957,
                                    29.359527
                                ],
                                [
                                    -102.876972,
                                    29.350871
                                ],
                                [
                                    -102.883069,
                                    29.343766
                                ],
                                [
                                    -102.885188,
                                    29.333379
                                ],
                                [
                                    -102.885498,
                                    29.314801
                                ],
                                [
                                    -102.899399,
                                    29.276095
                                ],
                                [
                                    -102.899709,
                                    29.2639
                                ],
                                [
                                    -102.892139,
                                    29.254391
                                ],
                                [
                                    -102.867954,
                                    29.240387
                                ],
                                [
                                    -102.858781,
                                    29.229147
                                ],
                                [
                                    -102.869866,
                                    29.224781
                                ],
                                [
                                    -102.896893,
                                    29.220285
                                ],
                                [
                                    -102.942265,
                                    29.190209
                                ],
                                [
                                    -102.947536,
                                    29.182018
                                ],
                                [
                                    -102.969757,
                                    29.192845
                                ],
                                [
                                    -102.988386,
                                    29.177135
                                ],
                                [
                                    -103.015826,
                                    29.126776
                                ],
                                [
                                    -103.024275,
                                    29.116157
                                ],
                                [
                                    -103.032621,
                                    29.110214
                                ],
                                [
                                    -103.072541,
                                    29.091404
                                ],
                                [
                                    -103.080758,
                                    29.085203
                                ],
                                [
                                    -103.085589,
                                    29.07572
                                ],
                                [
                                    -103.091532,
                                    29.057866
                                ],
                                [
                                    -103.095356,
                                    29.060294
                                ],
                                [
                                    -103.104684,
                                    29.057866
                                ],
                                [
                                    -103.109205,
                                    29.023372
                                ],
                                [
                                    -103.122771,
                                    28.996474
                                ],
                                [
                                    -103.147989,
                                    28.985105
                                ],
                                [
                                    -103.187108,
                                    28.990221
                                ],
                                [
                                    -103.241756,
                                    29.003502
                                ],
                                [
                                    -103.301545,
                                    29.002365
                                ],
                                [
                                    -103.316247,
                                    29.010065
                                ],
                                [
                                    -103.311514,
                                    29.026043
                                ],
                                [
                                    -103.309994,
                                    29.031175
                                ],
                                [
                                    -103.3248,
                                    29.026808
                                ],
                                [
                                    -103.330484,
                                    29.023733
                                ],
                                [
                                    -103.342602,
                                    29.041226
                                ],
                                [
                                    -103.351671,
                                    29.039417
                                ],
                                [
                                    -103.360534,
                                    29.029831
                                ],
                                [
                                    -103.372083,
                                    29.023733
                                ],
                                [
                                    -103.38663,
                                    29.028798
                                ],
                                [
                                    -103.414639,
                                    29.052414
                                ],
                                [
                                    -103.423605,
                                    29.057866
                                ],
                                [
                                    -103.435697,
                                    29.061121
                                ],
                                [
                                    -103.478537,
                                    29.08205
                                ],
                                [
                                    -103.529748,
                                    29.126776
                                ],
                                [
                                    -103.535588,
                                    29.135122
                                ],
                                [
                                    -103.538223,
                                    29.142408
                                ],
                                [
                                    -103.541711,
                                    29.148816
                                ],
                                [
                                    -103.550238,
                                    29.154656
                                ],
                                [
                                    -103.558015,
                                    29.156206
                                ],
                                [
                                    -103.58499,
                                    29.154656
                                ],
                                [
                                    -103.673125,
                                    29.173569
                                ],
                                [
                                    -103.702477,
                                    29.187858
                                ],
                                [
                                    -103.749476,
                                    29.222972
                                ],
                                [
                                    -103.759062,
                                    29.226848
                                ],
                                [
                                    -103.770767,
                                    29.229845
                                ],
                                [
                                    -103.777718,
                                    29.235297
                                ],
                                [
                                    -103.769424,
                                    29.257543
                                ],
                                [
                                    -103.774229,
                                    29.267517
                                ],
                                [
                                    -103.78366,
                                    29.274803
                                ],
                                [
                                    -103.794177,
                                    29.277594
                                ],
                                [
                                    -103.837038,
                                    29.279906
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    178.301106,
                                    52.056551
                                ],
                                [
                                    179.595462,
                                    52.142083
                                ],
                                [
                                    179.825447,
                                    51.992849
                                ],
                                [
                                    179.661729,
                                    51.485763
                                ],
                                [
                                    179.723231,
                                    51.459963
                                ],
                                [
                                    179.408066,
                                    51.209841
                                ],
                                [
                                    178.411463,
                                    51.523605
                                ],
                                [
                                    177.698335,
                                    51.877899
                                ],
                                [
                                    177.16784,
                                    51.581866
                                ],
                                [
                                    176.487008,
                                    52.175325
                                ],
                                [
                                    174.484678,
                                    52.08716
                                ],
                                [
                                    172.866263,
                                    52.207379
                                ],
                                [
                                    172.825506,
                                    52.716846
                                ],
                                [
                                    172.747012,
                                    52.654022
                                ],
                                [
                                    172.08261,
                                    52.952695
                                ],
                                [
                                    172.942925,
                                    53.183013
                                ],
                                [
                                    173.029416,
                                    52.993628
                                ],
                                [
                                    173.127208,
                                    52.99494
                                ],
                                [
                                    173.143321,
                                    52.990383
                                ],
                                [
                                    173.175059,
                                    52.971747
                                ],
                                [
                                    173.182932,
                                    52.968373
                                ],
                                [
                                    176.45233,
                                    52.628178
                                ],
                                [
                                    176.468135,
                                    52.488358
                                ],
                                [
                                    177.900385,
                                    52.488358
                                ],
                                [
                                    178.007601,
                                    52.179677
                                ],
                                [
                                    178.301106,
                                    52.056551
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -168.899607,
                                    65.747626
                                ],
                                [
                                    -168.909861,
                                    65.739569
                                ],
                                [
                                    -168.926218,
                                    65.739895
                                ],
                                [
                                    -168.942128,
                                    65.74372
                                ],
                                [
                                    -168.951731,
                                    65.75316
                                ],
                                [
                                    -168.942983,
                                    65.764716
                                ],
                                [
                                    -168.920115,
                                    65.768866
                                ],
                                [
                                    -168.907908,
                                    65.768297
                                ],
                                [
                                    -168.902781,
                                    65.761542
                                ],
                                [
                                    -168.899607,
                                    65.747626
                                ]
                            ]
                        ],
                        [
                            [
                                [
                                    -131.160718,
                                    54.787192
                                ],
                                [
                                    -132.853508,
                                    54.482536
                                ],
                                [
                                    -134.77719,
                                    54.717786
                                ],
                                [
                                    -142.6966,
                                    55.845503
                                ],
                                [
                                    -142.861997,
                                    49.948308
                                ],
                                [
                                    -155.675916,
                                    51.109976
                                ],
                                [
                                    -164.492732,
                                    50.603976
                                ],
                                [
                                    -164.691217,
                                    50.997975
                                ],
                                [
                                    -171.246993,
                                    49.948308
                                ],
                                [
                                    -171.215436,
                                    50.576636
                                ],
                                [
                                    -173.341669,
                                    50.968826
                                ],
                                [
                                    -173.362022,
                                    51.082198
                                ],
                                [
                                    -177.799603,
                                    51.272899
                                ],
                                [
                                    -179.155463,
                                    50.982285
                                ],
                                [
                                    -179.476076,
                                    52.072632
                                ],
                                [
                                    -177.11459,
                                    52.248701
                                ],
                                [
                                    -177.146284,
                                    52.789384
                                ],
                                [
                                    -174.777218,
                                    52.443779
                                ],
                                [
                                    -174.773743,
                                    52.685853
                                ],
                                [
                                    -173.653194,
                                    52.704099
                                ],
                                [
                                    -173.790528,
                                    53.469081
                                ],
                                [
                                    -171.063371,
                                    53.604473
                                ],
                                [
                                    -170.777733,
                                    59.291898
                                ],
                                [
                                    -174.324884,
                                    60.332184
                                ],
                                [
                                    -171.736408,
                                    62.68026
                                ],
                                [
                                    -172.315705,
                                    62.725352
                                ],
                                [
                                    -171.995091,
                                    63.999658
                                ],
                                [
                                    -168.501424,
                                    65.565173
                                ],
                                [
                                    -168.714145,
                                    65.546708
                                ],
                                [
                                    -168.853077,
                                    68.370871
                                ],
                                [
                                    -161.115601,
                                    72.416214
                                ],
                                [
                                    -146.132257,
                                    70.607941
                                ],
                                [
                                    -140.692512,
                                    69.955349
                                ],
                                [
                                    -141.145395,
                                    69.671641
                                ],
                                [
                                    -141.015207,
                                    69.654202
                                ],
                                [
                                    -141.006459,
                                    69.651272
                                ],
                                [
                                    -141.005564,
                                    69.650946
                                ],
                                [
                                    -141.005549,
                                    69.650941
                                ],
                                [
                                    -141.005471,
                                    69.505164
                                ],
                                [
                                    -141.001208,
                                    60.466879
                                ],
                                [
                                    -141.001156,
                                    60.321074
                                ],
                                [
                                    -140.994929,
                                    60.304382
                                ],
                                [
                                    -140.979555,
                                    60.295804
                                ],
                                [
                                    -140.909146,
                                    60.28366
                                ],
                                [
                                    -140.768457,
                                    60.259269
                                ],
                                [
                                    -140.660505,
                                    60.24051
                                ],
                                [
                                    -140.533743,
                                    60.218548
                                ],
                                [
                                    -140.518705,
                                    60.22387
                                ],
                                [
                                    -140.506664,
                                    60.236324
                                ],
                                [
                                    -140.475323,
                                    60.276477
                                ],
                                [
                                    -140.462791,
                                    60.289138
                                ],
                                [
                                    -140.447805,
                                    60.29446
                                ],
                                [
                                    -140.424111,
                                    60.293168
                                ],
                                [
                                    -140.32497,
                                    60.267537
                                ],
                                [
                                    -140.169243,
                                    60.227229
                                ],
                                [
                                    -140.01579,
                                    60.187387
                                ],
                                [
                                    -139.967757,
                                    60.188369
                                ],
                                [
                                    -139.916933,
                                    60.207851
                                ],
                                [
                                    -139.826318,
                                    60.256478
                                ],
                                [
                                    -139.728417,
                                    60.309033
                                ],
                                [
                                    -139.679816,
                                    60.32681
                                ],
                                [
                                    -139.628346,
                                    60.334096
                                ],
                                [
                                    -139.517965,
                                    60.336732
                                ],
                                [
                                    -139.413992,
                                    60.339212
                                ],
                                [
                                    -139.262193,
                                    60.342778
                                ],
                                [
                                    -139.101608,
                                    60.346602
                                ],
                                [
                                    -139.079465,
                                    60.341021
                                ],
                                [
                                    -139.06869,
                                    60.322056
                                ],
                                [
                                    -139.073186,
                                    60.299835
                                ],
                                [
                                    -139.113468,
                                    60.226816
                                ],
                                [
                                    -139.149615,
                                    60.161187
                                ],
                                [
                                    -139.183231,
                                    60.100157
                                ],
                                [
                                    -139.182146,
                                    60.073389
                                ],
                                [
                                    -139.112305,
                                    60.031376
                                ],
                                [
                                    -139.060207,
                                    60.000059
                                ],
                                [
                                    -139.051611,
                                    59.994892
                                ],
                                [
                                    -139.003759,
                                    59.977219
                                ],
                                [
                                    -138.842425,
                                    59.937686
                                ],
                                [
                                    -138.742586,
                                    59.913192
                                ],
                                [
                                    -138.704888,
                                    59.898464
                                ],
                                [
                                    -138.697188,
                                    59.89371
                                ],
                                [
                                    -138.692098,
                                    59.886888
                                ],
                                [
                                    -138.654349,
                                    59.805498
                                ],
                                [
                                    -138.63745,
                                    59.784052
                                ],
                                [
                                    -138.59921,
                                    59.753822
                                ],
                                [
                                    -138.488881,
                                    59.696357
                                ],
                                [
                                    -138.363617,
                                    59.631142
                                ],
                                [
                                    -138.219543,
                                    59.556004
                                ],
                                [
                                    -138.067614,
                                    59.476991
                                ],
                                [
                                    -137.91057,
                                    59.395187
                                ],
                                [
                                    -137.758305,
                                    59.315915
                                ],
                                [
                                    -137.611363,
                                    59.239331
                                ],
                                [
                                    -137.594181,
                                    59.225275
                                ],
                                [
                                    -137.582088,
                                    59.206568
                                ],
                                [
                                    -137.5493,
                                    59.134531
                                ],
                                [
                                    -137.521007,
                                    59.072364
                                ],
                                [
                                    -137.484394,
                                    58.991904
                                ],
                                [
                                    -137.507752,
                                    58.939969
                                ],
                                [
                                    -137.50876,
                                    58.914906
                                ],
                                [
                                    -137.486875,
                                    58.900075
                                ],
                                [
                                    -137.453466,
                                    58.899145
                                ],
                                [
                                    -137.423106,
                                    58.907723
                                ],
                                [
                                    -137.338098,
                                    58.955472
                                ],
                                [
                                    -137.2819,
                                    58.98715
                                ],
                                [
                                    -137.172346,
                                    59.027148
                                ],
                                [
                                    -137.062367,
                                    59.067572
                                ],
                                [
                                    -137.047109,
                                    59.07331
                                ],
                                [
                                    -136.942282,
                                    59.11107
                                ],
                                [
                                    -136.840816,
                                    59.148174
                                ],
                                [
                                    -136.785496,
                                    59.157217
                                ],
                                [
                                    -136.671911,
                                    59.150809
                                ],
                                [
                                    -136.613491,
                                    59.15422
                                ],
                                [
                                    -136.569489,
                                    59.172152
                                ],
                                [
                                    -136.484791,
                                    59.2538
                                ],
                                [
                                    -136.483551,
                                    59.257469
                                ],
                                [
                                    -136.466549,
                                    59.287803
                                ],
                                [
                                    -136.467092,
                                    59.38449
                                ],
                                [
                                    -136.467557,
                                    59.461643
                                ],
                                [
                                    -136.415958,
                                    59.452238
                                ],
                                [
                                    -136.36684,
                                    59.449551
                                ],
                                [
                                    -136.319995,
                                    59.459059
                                ],
                                [
                                    -136.275036,
                                    59.486448
                                ],
                                [
                                    -136.244728,
                                    59.528202
                                ],
                                [
                                    -136.258474,
                                    59.556107
                                ],
                                [
                                    -136.29935,
                                    59.575745
                                ],
                                [
                                    -136.350329,
                                    59.592384
                                ],
                                [
                                    -136.2585,
                                    59.621582
                                ],
                                [
                                    -136.145406,
                                    59.636826
                                ],
                                [
                                    -136.02686,
                                    59.652846
                                ],
                                [
                                    -135.923818,
                                    59.666747
                                ],
                                [
                                    -135.830955,
                                    59.693257
                                ],
                                [
                                    -135.641251,
                                    59.747362
                                ],
                                [
                                    -135.482759,
                                    59.792475
                                ],
                                [
                                    -135.465137,
                                    59.789685
                                ],
                                [
                                    -135.404392,
                                    59.753305
                                ],
                                [
                                    -135.345791,
                                    59.731032
                                ],
                                [
                                    -135.259879,
                                    59.698218
                                ],
                                [
                                    -135.221897,
                                    59.675273
                                ],
                                [
                                    -135.192028,
                                    59.64711
                                ],
                                [
                                    -135.157792,
                                    59.623287
                                ],
                                [
                                    -135.106684,
                                    59.613158
                                ],
                                [
                                    -135.087874,
                                    59.606544
                                ],
                                [
                                    -135.032942,
                                    59.573109
                                ],
                                [
                                    -135.018524,
                                    59.559363
                                ],
                                [
                                    -135.016198,
                                    59.543447
                                ],
                                [
                                    -135.01948,
                                    59.493166
                                ],
                                [
                                    -135.023252,
                                    59.477146
                                ],
                                [
                                    -135.037489,
                                    59.461591
                                ],
                                [
                                    -135.078598,
                                    59.438337
                                ],
                                [
                                    -135.095754,
                                    59.418855
                                ],
                                [
                                    -134.993254,
                                    59.381906
                                ],
                                [
                                    -135.00483,
                                    59.367127
                                ],
                                [
                                    -135.014441,
                                    59.35152
                                ],
                                [
                                    -135.016198,
                                    59.336173
                                ],
                                [
                                    -134.979973,
                                    59.297415
                                ],
                                [
                                    -134.95783,
                                    59.280982
                                ],
                                [
                                    -134.932431,
                                    59.270647
                                ],
                                [
                                    -134.839465,
                                    59.258141
                                ],
                                [
                                    -134.74345,
                                    59.245119
                                ],
                                [
                                    -134.70552,
                                    59.240106
                                ],
                                [
                                    -134.692084,
                                    59.235249
                                ],
                                [
                                    -134.68286,
                                    59.223001
                                ],
                                [
                                    -134.671439,
                                    59.193752
                                ],
                                [
                                    -134.66038,
                                    59.181298
                                ],
                                [
                                    -134.610771,
                                    59.144556
                                ],
                                [
                                    -134.582788,
                                    59.128847
                                ],
                                [
                                    -134.556717,
                                    59.123059
                                ],
                                [
                                    -134.509072,
                                    59.122801
                                ],
                                [
                                    -134.477575,
                                    59.114946
                                ],
                                [
                                    -134.451013,
                                    59.097893
                                ],
                                [
                                    -134.398019,
                                    59.051952
                                ],
                                [
                                    -134.387167,
                                    59.036863
                                ],
                                [
                                    -134.385591,
                                    59.018828
                                ],
                                [
                                    -134.399389,
                                    58.974954
                                ],
                                [
                                    -134.343423,
                                    58.968857
                                ],
                                [
                                    -134.329651,
                                    58.963017
                                ],
                                [
                                    -134.320039,
                                    58.952682
                                ],
                                [
                                    -134.32314,
                                    58.949168
                                ],
                                [
                                    -134.330323,
                                    58.945344
                                ],
                                [
                                    -134.333036,
                                    58.93413
                                ],
                                [
                                    -134.327403,
                                    58.916457
                                ],
                                [
                                    -134.316939,
                                    58.903796
                                ],
                                [
                                    -134.22219,
                                    58.842714
                                ],
                                [
                                    -134.108838,
                                    58.808246
                                ],
                                [
                                    -133.983109,
                                    58.769902
                                ],
                                [
                                    -133.87123,
                                    58.735899
                                ],
                                [
                                    -133.831129,
                                    58.718019
                                ],
                                [
                                    -133.796402,
                                    58.693421
                                ],
                                [
                                    -133.700077,
                                    58.59937
                                ],
                                [
                                    -133.626283,
                                    58.546402
                                ],
                                [
                                    -133.547063,
                                    58.505577
                                ],
                                [
                                    -133.463089,
                                    58.462221
                                ],
                                [
                                    -133.392241,
                                    58.403878
                                ],
                                [
                                    -133.43012,
                                    58.372097
                                ],
                                [
                                    -133.41503,
                                    58.330549
                                ],
                                [
                                    -133.374567,
                                    58.290965
                                ],
                                [
                                    -133.257262,
                                    58.210298
                                ],
                                [
                                    -133.165588,
                                    58.147305
                                ],
                                [
                                    -133.142127,
                                    58.120588
                                ],
                                [
                                    -133.094843,
                                    58.0331
                                ],
                                [
                                    -133.075154,
                                    58.007882
                                ],
                                [
                                    -132.99335,
                                    57.941917
                                ],
                                [
                                    -132.917153,
                                    57.880499
                                ],
                                [
                                    -132.83212,
                                    57.791564
                                ],
                                [
                                    -132.70944,
                                    57.663303
                                ],
                                [
                                    -132.629057,
                                    57.579277
                                ],
                                [
                                    -132.552447,
                                    57.499075
                                ],
                                [
                                    -132.455735,
                                    57.420992
                                ],
                                [
                                    -132.362304,
                                    57.3457
                                ],
                                [
                                    -132.304684,
                                    57.280355
                                ],
                                [
                                    -132.230994,
                                    57.19682
                                ],
                                [
                                    -132.276366,
                                    57.14889
                                ],
                                [
                                    -132.34122,
                                    57.080393
                                ],
                                [
                                    -132.16229,
                                    57.050317
                                ],
                                [
                                    -132.031859,
                                    57.028406
                                ],
                                [
                                    -132.107384,
                                    56.858753
                                ],
                                [
                                    -131.871558,
                                    56.79346
                                ],
                                [
                                    -131.865874,
                                    56.785708
                                ],
                                [
                                    -131.872411,
                                    56.77297
                                ],
                                [
                                    -131.882617,
                                    56.759146
                                ],
                                [
                                    -131.887966,
                                    56.747958
                                ],
                                [
                                    -131.886028,
                                    56.737055
                                ],
                                [
                                    -131.880705,
                                    56.728838
                                ],
                                [
                                    -131.864789,
                                    56.71349
                                ],
                                [
                                    -131.838976,
                                    56.682278
                                ],
                                [
                                    -131.830424,
                                    56.664759
                                ],
                                [
                                    -131.826574,
                                    56.644606
                                ],
                                [
                                    -131.832103,
                                    56.603368
                                ],
                                [
                                    -131.825592,
                                    56.593343
                                ],
                                [
                                    -131.799108,
                                    56.587658
                                ],
                                [
                                    -131.692293,
                                    56.585074
                                ],
                                [
                                    -131.585891,
                                    56.595048
                                ],
                                [
                                    -131.560363,
                                    56.594066
                                ],
                                [
                                    -131.536437,
                                    56.585229
                                ],
                                [
                                    -131.491659,
                                    56.560166
                                ],
                                [
                                    -131.345699,
                                    56.503271
                                ],
                                [
                                    -131.215604,
                                    56.45255
                                ],
                                [
                                    -131.100546,
                                    56.407669
                                ],
                                [
                                    -131.016934,
                                    56.38705
                                ],
                                [
                                    -130.839089,
                                    56.372452
                                ],
                                [
                                    -130.760334,
                                    56.345192
                                ],
                                [
                                    -130.645768,
                                    56.261942
                                ],
                                [
                                    -130.602256,
                                    56.247059
                                ],
                                [
                                    -130.495518,
                                    56.232434
                                ],
                                [
                                    -130.47229,
                                    56.22489
                                ],
                                [
                                    -130.458053,
                                    56.210653
                                ],
                                [
                                    -130.427926,
                                    56.143964
                                ],
                                [
                                    -130.418159,
                                    56.129702
                                ],
                                [
                                    -130.403974,
                                    56.121898
                                ],
                                [
                                    -130.290311,
                                    56.10097
                                ],
                                [
                                    -130.243156,
                                    56.092391
                                ],
                                [
                                    -130.211246,
                                    56.089962
                                ],
                                [
                                    -130.116756,
                                    56.105646
                                ],
                                [
                                    -130.094328,
                                    56.101486
                                ],
                                [
                                    -130.071539,
                                    56.084123
                                ],
                                [
                                    -130.039319,
                                    56.045521
                                ],
                                [
                                    -130.026632,
                                    56.024101
                                ],
                                [
                                    -130.01901,
                                    56.002216
                                ],
                                [
                                    -130.014695,
                                    55.963252
                                ],
                                [
                                    -130.016788,
                                    55.918913
                                ],
                                [
                                    -130.019612,
                                    55.907978
                                ],
                                [
                                    -130.019618,
                                    55.907952
                                ],
                                [
                                    -130.022817,
                                    55.901353
                                ],
                                [
                                    -130.049387,
                                    55.871405
                                ],
                                [
                                    -130.104726,
                                    55.825263
                                ],
                                [
                                    -130.136627,
                                    55.806464
                                ],
                                [
                                    -130.148834,
                                    55.795356
                                ],
                                [
                                    -130.163482,
                                    55.771145
                                ],
                                [
                                    -130.167307,
                                    55.766262
                                ],
                                [
                                    -130.170806,
                                    55.759833
                                ],
                                [
                                    -130.173655,
                                    55.749498
                                ],
                                [
                                    -130.170806,
                                    55.740953
                                ],
                                [
                                    -130.163808,
                                    55.734565
                                ],
                                [
                                    -130.160064,
                                    55.727118
                                ],
                                [
                                    -130.167388,
                                    55.715399
                                ],
                                [
                                    -130.155914,
                                    55.700141
                                ],
                                [
                                    -130.142893,
                                    55.689521
                                ],
                                [
                                    -130.131825,
                                    55.676581
                                ],
                                [
                                    -130.126454,
                                    55.653998
                                ],
                                [
                                    -130.12857,
                                    55.63642
                                ],
                                [
                                    -130.135121,
                                    55.619127
                                ],
                                [
                                    -130.153147,
                                    55.58511
                                ],
                                [
                                    -130.148671,
                                    55.578192
                                ],
                                [
                                    -130.146881,
                                    55.569322
                                ],
                                [
                                    -130.146962,
                                    55.547187
                                ],
                                [
                                    -130.112172,
                                    55.509345
                                ],
                                [
                                    -130.101674,
                                    55.481147
                                ],
                                [
                                    -130.095082,
                                    55.472113
                                ],
                                [
                                    -130.065419,
                                    55.446112
                                ],
                                [
                                    -130.057525,
                                    55.434882
                                ],
                                [
                                    -130.052561,
                                    55.414008
                                ],
                                [
                                    -130.054311,
                                    55.366645
                                ],
                                [
                                    -130.05012,
                                    55.345445
                                ],
                                [
                                    -130.039296,
                                    55.330756
                                ],
                                [
                                    -129.989247,
                                    55.284003
                                ],
                                [
                                    -130.031239,
                                    55.26435
                                ],
                                [
                                    -130.050038,
                                    55.252875
                                ],
                                [
                                    -130.067494,
                                    55.239
                                ],
                                [
                                    -130.078236,
                                    55.233791
                                ],
                                [
                                    -130.100494,
                                    55.230292
                                ],
                                [
                                    -130.104726,
                                    55.225653
                                ],
                                [
                                    -130.105702,
                                    55.211127
                                ],
                                [
                                    -130.10912,
                                    55.200751
                                ],
                                [
                                    -130.115793,
                                    55.191596
                                ],
                                [
                                    -130.126454,
                                    55.180976
                                ],
                                [
                                    -130.151967,
                                    55.163275
                                ],
                                [
                                    -130.159983,
                                    55.153713
                                ],
                                [
                                    -130.167592,
                                    55.129584
                                ],
                                [
                                    -130.173695,
                                    55.117743
                                ],
                                [
                                    -130.200266,
                                    55.104153
                                ],
                                [
                                    -130.211781,
                                    55.084133
                                ],
                                [
                                    -130.228871,
                                    55.04385
                                ],
                                [
                                    -130.238678,
                                    55.03441
                                ],
                                [
                                    -130.261342,
                                    55.022895
                                ],
                                [
                                    -130.269846,
                                    55.016547
                                ],
                                [
                                    -130.275706,
                                    55.006985
                                ],
                                [
                                    -130.286366,
                                    54.983222
                                ],
                                [
                                    -130.294342,
                                    54.971869
                                ],
                                [
                                    -130.326568,
                                    54.952094
                                ],
                                [
                                    -130.335561,
                                    54.938707
                                ],
                                [
                                    -130.365387,
                                    54.907294
                                ],
                                [
                                    -130.385243,
                                    54.896552
                                ],
                                [
                                    -130.430816,
                                    54.881252
                                ],
                                [
                                    -130.488759,
                                    54.844184
                                ],
                                [
                                    -130.580312,
                                    54.806383
                                ],
                                [
                                    -130.597485,
                                    54.803391
                                ],
                                [
                                    -130.71074,
                                    54.733215
                                ],
                                [
                                    -131.160718,
                                    54.787192
                                ]
                            ]
                        ]
                    ]
                }
            }
        ]
    },
    "featureIcons": {
        "airstrip-shadow": {
            "12": [
                0,
                0
            ],
            "18": [
                0,
                0
            ],
            "24": [
                0,
                0
            ]
        },
        "airstrip": {
            "12": [
                0,
                34
            ],
            "18": [
                0,
                34
            ],
            "24": [
                0,
                34
            ]
        },
        "balata-shadow": {
            "12": [
                0,
                60
            ],
            "18": [
                0,
                60
            ],
            "24": [
                0,
                60
            ]
        },
        "balata": {
            "12": [
                0,
                94
            ],
            "18": [
                0,
                94
            ],
            "24": [
                0,
                94
            ]
        },
        "bamboo-shadow": {
            "12": [
                0,
                120
            ],
            "18": [
                0,
                120
            ],
            "24": [
                0,
                120
            ]
        },
        "bamboo": {
            "12": [
                0,
                154
            ],
            "18": [
                0,
                154
            ],
            "24": [
                0,
                154
            ]
        },
        "boundary-shadow": {
            "12": [
                0,
                180
            ],
            "18": [
                0,
                180
            ],
            "24": [
                0,
                180
            ]
        },
        "boundary": {
            "12": [
                0,
                214
            ],
            "18": [
                0,
                214
            ],
            "24": [
                0,
                214
            ],
            "relation": [
                200,
                25
            ]
        },
        "bridge-shadow": {
            "12": [
                0,
                240
            ],
            "18": [
                0,
                240
            ],
            "24": [
                0,
                240
            ]
        },
        "bridge": {
            "12": [
                0,
                274
            ],
            "18": [
                0,
                274
            ],
            "24": [
                0,
                274
            ]
        },
        "building_material-shadow": {
            "12": [
                0,
                300
            ],
            "18": [
                0,
                300
            ],
            "24": [
                0,
                300
            ]
        },
        "building_material": {
            "12": [
                0,
                334
            ],
            "18": [
                0,
                334
            ],
            "24": [
                0,
                334
            ]
        },
        "burial_grounds-shadow": {
            "12": [
                0,
                360
            ],
            "18": [
                0,
                360
            ],
            "24": [
                0,
                360
            ]
        },
        "burial_grounds": {
            "12": [
                0,
                394
            ],
            "18": [
                0,
                394
            ],
            "24": [
                0,
                394
            ]
        },
        "bush-shadow": {
            "12": [
                0,
                420
            ],
            "18": [
                0,
                420
            ],
            "24": [
                0,
                420
            ]
        },
        "bush": {
            "12": [
                0,
                454
            ],
            "18": [
                0,
                454
            ],
            "24": [
                0,
                454
            ]
        },
        "church-shadow": {
            "12": [
                0,
                480
            ],
            "18": [
                0,
                480
            ],
            "24": [
                0,
                480
            ]
        },
        "church": {
            "12": [
                0,
                514
            ],
            "18": [
                0,
                514
            ],
            "24": [
                0,
                514
            ]
        },
        "clay-shadow": {
            "12": [
                0,
                540
            ],
            "18": [
                0,
                540
            ],
            "24": [
                0,
                540
            ]
        },
        "clay": {
            "12": [
                0,
                574
            ],
            "18": [
                0,
                574
            ],
            "24": [
                0,
                574
            ]
        },
        "coral-shadow": {
            "12": [
                0,
                600
            ],
            "18": [
                0,
                600
            ],
            "24": [
                0,
                600
            ]
        },
        "coral": {
            "12": [
                0,
                634
            ],
            "18": [
                0,
                634
            ],
            "24": [
                0,
                634
            ]
        },
        "craft_material-shadow": {
            "12": [
                0,
                660
            ],
            "18": [
                0,
                660
            ],
            "24": [
                0,
                660
            ]
        },
        "craft_material": {
            "12": [
                0,
                694
            ],
            "18": [
                0,
                694
            ],
            "24": [
                0,
                694
            ]
        },
        "crossing-shadow": {
            "12": [
                0,
                720
            ],
            "18": [
                0,
                720
            ],
            "24": [
                0,
                720
            ]
        },
        "crossing": {
            "12": [
                0,
                754
            ],
            "18": [
                0,
                754
            ],
            "24": [
                0,
                754
            ]
        },
        "egg_gathering-shadow": {
            "12": [
                0,
                780
            ],
            "18": [
                0,
                780
            ],
            "24": [
                0,
                780
            ]
        },
        "egg_gathering": {
            "12": [
                0,
                814
            ],
            "18": [
                0,
                814
            ],
            "24": [
                0,
                814
            ]
        },
        "eta-shadow": {
            "12": [
                0,
                840
            ],
            "18": [
                0,
                840
            ],
            "24": [
                0,
                840
            ]
        },
        "eta": {
            "12": [
                0,
                874
            ],
            "18": [
                0,
                874
            ],
            "24": [
                0,
                874
            ]
        },
        "farm-shadow": {
            "12": [
                0,
                900
            ],
            "18": [
                0,
                900
            ],
            "24": [
                0,
                900
            ]
        },
        "farm": {
            "12": [
                0,
                934
            ],
            "18": [
                0,
                934
            ],
            "24": [
                0,
                934
            ]
        },
        "firewood-shadow": {
            "12": [
                0,
                960
            ],
            "18": [
                0,
                960
            ],
            "24": [
                0,
                960
            ]
        },
        "firewood": {
            "12": [
                0,
                994
            ],
            "18": [
                0,
                994
            ],
            "24": [
                0,
                994
            ]
        },
        "forest_fruits-shadow": {
            "12": [
                0,
                1020
            ],
            "18": [
                0,
                1020
            ],
            "24": [
                0,
                1020
            ]
        },
        "forest_fruits": {
            "12": [
                0,
                1054
            ],
            "18": [
                0,
                1054
            ],
            "24": [
                0,
                1054
            ]
        },
        "health_hut-shadow": {
            "12": [
                0,
                1080
            ],
            "18": [
                0,
                1080
            ],
            "24": [
                0,
                1080
            ]
        },
        "health_hut": {
            "12": [
                0,
                1114
            ],
            "18": [
                0,
                1114
            ],
            "24": [
                0,
                1114
            ]
        },
        "historical_site-shadow": {
            "12": [
                0,
                1140
            ],
            "18": [
                0,
                1140
            ],
            "24": [
                0,
                1140
            ]
        },
        "historical_site": {
            "12": [
                0,
                1174
            ],
            "18": [
                0,
                1174
            ],
            "24": [
                0,
                1174
            ]
        },
        "homestead-shadow": {
            "12": [
                0,
                1200
            ],
            "18": [
                0,
                1200
            ],
            "24": [
                0,
                1200
            ]
        },
        "homestead": {
            "12": [
                0,
                1234
            ],
            "18": [
                0,
                1234
            ],
            "24": [
                0,
                1234
            ]
        },
        "hunting_camp-shadow": {
            "12": [
                0,
                1260
            ],
            "18": [
                0,
                1260
            ],
            "24": [
                0,
                1260
            ]
        },
        "hunting_camp": {
            "12": [
                0,
                1294
            ],
            "18": [
                0,
                1294
            ],
            "24": [
                0,
                1294
            ]
        },
        "island-shadow": {
            "12": [
                0,
                1320
            ],
            "18": [
                0,
                1320
            ],
            "24": [
                0,
                1320
            ]
        },
        "island": {
            "12": [
                0,
                1354
            ],
            "18": [
                0,
                1354
            ],
            "24": [
                0,
                1354
            ]
        },
        "lake-shadow": {
            "12": [
                0,
                1380
            ],
            "18": [
                0,
                1380
            ],
            "24": [
                0,
                1380
            ]
        },
        "lake": {
            "12": [
                0,
                1414
            ],
            "18": [
                0,
                1414
            ],
            "24": [
                0,
                1414
            ]
        },
        "landing-shadow": {
            "12": [
                0,
                1440
            ],
            "18": [
                0,
                1440
            ],
            "24": [
                0,
                1440
            ]
        },
        "landing": {
            "12": [
                0,
                1474
            ],
            "18": [
                0,
                1474
            ],
            "24": [
                0,
                1474
            ]
        },
        "line-shadow": {
            "12": [
                0,
                1500
            ],
            "18": [
                0,
                1500
            ],
            "24": [
                0,
                1500
            ]
        },
        "line": {
            "12": [
                0,
                1534
            ],
            "18": [
                0,
                1534
            ],
            "24": [
                0,
                1534
            ]
        },
        "marker-shadow": {
            "12": [
                0,
                1560
            ],
            "18": [
                0,
                1560
            ],
            "24": [
                0,
                1560
            ]
        },
        "marker-stroked-shadow": {
            "12": [
                0,
                1594
            ],
            "18": [
                0,
                1594
            ],
            "24": [
                0,
                1594
            ]
        },
        "marker-stroked": {
            "12": [
                0,
                1628
            ],
            "18": [
                0,
                1628
            ],
            "24": [
                0,
                1628
            ]
        },
        "marker": {
            "12": [
                0,
                1654
            ],
            "18": [
                0,
                1654
            ],
            "24": [
                0,
                1654
            ]
        },
        "medicinal_plants-shadow": {
            "12": [
                0,
                1680
            ],
            "18": [
                0,
                1680
            ],
            "24": [
                0,
                1680
            ]
        },
        "medicinal_plants": {
            "12": [
                0,
                1714
            ],
            "18": [
                0,
                1714
            ],
            "24": [
                0,
                1714
            ]
        },
        "no_go_zone-shadow": {
            "12": [
                0,
                1740
            ],
            "18": [
                0,
                1740
            ],
            "24": [
                0,
                1740
            ]
        },
        "no_go_zone": {
            "12": [
                0,
                1774
            ],
            "18": [
                0,
                1774
            ],
            "24": [
                0,
                1774
            ]
        },
        "old_farm-shadow": {
            "12": [
                0,
                1800
            ],
            "18": [
                0,
                1800
            ],
            "24": [
                0,
                1800
            ]
        },
        "old_farm": {
            "12": [
                0,
                1834
            ],
            "18": [
                0,
                1834
            ],
            "24": [
                0,
                1834
            ]
        },
        "old_homestead-shadow": {
            "12": [
                0,
                1860
            ],
            "18": [
                0,
                1860
            ],
            "24": [
                0,
                1860
            ]
        },
        "old_homestead": {
            "12": [
                0,
                1894
            ],
            "18": [
                0,
                1894
            ],
            "24": [
                0,
                1894
            ]
        },
        "old_hunting_camp-shadow": {
            "12": [
                0,
                1920
            ],
            "18": [
                0,
                1920
            ],
            "24": [
                0,
                1920
            ]
        },
        "old_hunting_camp": {
            "12": [
                0,
                1954
            ],
            "18": [
                0,
                1954
            ],
            "24": [
                0,
                1954
            ]
        },
        "old_timber-shadow": {
            "12": [
                0,
                1980
            ],
            "18": [
                0,
                1980
            ],
            "24": [
                0,
                1980
            ]
        },
        "old_timber": {
            "12": [
                0,
                2014
            ],
            "18": [
                0,
                2014
            ],
            "24": [
                0,
                2014
            ]
        },
        "old_village-shadow": {
            "12": [
                0,
                2040
            ],
            "18": [
                0,
                2040
            ],
            "24": [
                0,
                2040
            ]
        },
        "old_village": {
            "12": [
                0,
                2074
            ],
            "18": [
                0,
                2074
            ],
            "24": [
                0,
                2074
            ]
        },
        "out": {
            "12": [
                0,
                2100
            ],
            "18": [
                0,
                2100
            ],
            "24": [
                0,
                2100
            ]
        },
        "palms-shadow": {
            "12": [
                0,
                2134
            ],
            "18": [
                0,
                2134
            ],
            "24": [
                0,
                2134
            ]
        },
        "palms": {
            "12": [
                0,
                2168
            ],
            "18": [
                0,
                2168
            ],
            "24": [
                0,
                2168
            ]
        },
        "point-shadow": {
            "12": [
                0,
                2194
            ],
            "18": [
                0,
                2194
            ],
            "24": [
                0,
                2194
            ]
        },
        "point": {
            "12": [
                0,
                2228
            ],
            "18": [
                0,
                2228
            ],
            "24": [
                0,
                2228
            ]
        },
        "poison-shadow": {
            "12": [
                0,
                2254
            ],
            "18": [
                0,
                2254
            ],
            "24": [
                0,
                2254
            ]
        },
        "poison": {
            "12": [
                0,
                2288
            ],
            "18": [
                0,
                2288
            ],
            "24": [
                0,
                2288
            ]
        },
        "pond-shadow": {
            "12": [
                0,
                2314
            ],
            "18": [
                0,
                2314
            ],
            "24": [
                0,
                2314
            ]
        },
        "pond": {
            "12": [
                0,
                2348
            ],
            "18": [
                0,
                2348
            ],
            "24": [
                0,
                2348
            ]
        },
        "pools-shadow": {
            "12": [
                0,
                2374
            ],
            "18": [
                0,
                2374
            ],
            "24": [
                0,
                2374
            ]
        },
        "pools": {
            "12": [
                0,
                2408
            ],
            "18": [
                0,
                2408
            ],
            "24": [
                0,
                2408
            ]
        },
        "precious_stones-shadow": {
            "12": [
                0,
                2434
            ],
            "18": [
                0,
                2434
            ],
            "24": [
                0,
                2434
            ]
        },
        "precious_stones": {
            "12": [
                0,
                2468
            ],
            "18": [
                0,
                2468
            ],
            "24": [
                0,
                2468
            ]
        },
        "ranch-shadow": {
            "12": [
                0,
                2494
            ],
            "18": [
                0,
                2494
            ],
            "24": [
                0,
                2494
            ]
        },
        "ranch": {
            "12": [
                0,
                2528
            ],
            "18": [
                0,
                2528
            ],
            "24": [
                0,
                2528
            ]
        },
        "rapids-shadow": {
            "12": [
                0,
                2554
            ],
            "18": [
                0,
                2554
            ],
            "24": [
                0,
                2554
            ]
        },
        "rapids": {
            "12": [
                0,
                2588
            ],
            "18": [
                0,
                2588
            ],
            "24": [
                0,
                2588
            ]
        },
        "rare_bird-shadow": {
            "12": [
                0,
                2614
            ],
            "18": [
                0,
                2614
            ],
            "24": [
                0,
                2614
            ]
        },
        "rare_bird": {
            "12": [
                0,
                2648
            ],
            "18": [
                0,
                2648
            ],
            "24": [
                0,
                2648
            ]
        },
        "resin-shadow": {
            "12": [
                0,
                2674
            ],
            "18": [
                0,
                2674
            ],
            "24": [
                0,
                2674
            ]
        },
        "resin": {
            "12": [
                0,
                2704
            ],
            "18": [
                0,
                2704
            ],
            "24": [
                0,
                2704
            ]
        },
        "river-shadow": {
            "12": [
                0,
                2726
            ],
            "18": [
                0,
                2726
            ],
            "24": [
                0,
                2726
            ]
        },
        "river": {
            "12": [
                0,
                2760
            ],
            "18": [
                0,
                2760
            ],
            "24": [
                0,
                2760
            ]
        },
        "rock_carvings-shadow": {
            "12": [
                0,
                2786
            ],
            "18": [
                0,
                2786
            ],
            "24": [
                0,
                2786
            ]
        },
        "rock_carvings": {
            "12": [
                0,
                2820
            ],
            "18": [
                0,
                2820
            ],
            "24": [
                0,
                2820
            ]
        },
        "sacred_site-shadow": {
            "12": [
                0,
                2846
            ],
            "18": [
                0,
                2846
            ],
            "24": [
                0,
                2846
            ]
        },
        "sacred_site": {
            "12": [
                0,
                2880
            ],
            "18": [
                0,
                2880
            ],
            "24": [
                0,
                2880
            ]
        },
        "satellite_village-shadow": {
            "12": [
                0,
                2906
            ],
            "18": [
                0,
                2906
            ],
            "24": [
                0,
                2906
            ]
        },
        "satellite_village": {
            "12": [
                0,
                2940
            ],
            "18": [
                0,
                2940
            ],
            "24": [
                0,
                2940
            ]
        },
        "savannah-shadow": {
            "12": [
                0,
                2966
            ],
            "18": [
                0,
                2966
            ],
            "24": [
                0,
                2966
            ]
        },
        "savannah": {
            "12": [
                0,
                3000
            ],
            "18": [
                0,
                3000
            ],
            "24": [
                0,
                3000
            ]
        },
        "school-shadow": {
            "12": [
                0,
                3026
            ],
            "18": [
                0,
                3026
            ],
            "24": [
                0,
                3026
            ]
        },
        "school": {
            "12": [
                0,
                3060
            ],
            "18": [
                0,
                3060
            ],
            "24": [
                0,
                3060
            ]
        },
        "swamp-shadow": {
            "12": [
                0,
                3086
            ],
            "18": [
                0,
                3086
            ],
            "24": [
                0,
                3086
            ]
        },
        "swamp": {
            "12": [
                0,
                3132
            ],
            "18": [
                0,
                3132
            ],
            "24": [
                0,
                3132
            ]
        },
        "timber-shadow": {
            "12": [
                0,
                3170
            ],
            "18": [
                0,
                3170
            ],
            "24": [
                0,
                3170
            ]
        },
        "timber": {
            "12": [
                0,
                3199
            ],
            "18": [
                0,
                3199
            ],
            "24": [
                0,
                3199
            ]
        },
        "track-shadow": {
            "12": [
                0,
                3220
            ],
            "18": [
                0,
                3220
            ],
            "24": [
                0,
                3220
            ]
        },
        "track": {
            "12": [
                0,
                3254
            ],
            "18": [
                0,
                3254
            ],
            "24": [
                0,
                3254
            ]
        },
        "trapping-shadow": {
            "12": [
                0,
                3280
            ],
            "18": [
                0,
                3280
            ],
            "24": [
                0,
                3280
            ]
        },
        "trapping": {
            "12": [
                0,
                3314
            ],
            "18": [
                0,
                3314
            ],
            "24": [
                0,
                3314
            ]
        },
        "turtle-shadow": {
            "12": [
                0,
                3340
            ],
            "18": [
                0,
                3340
            ],
            "24": [
                0,
                3340
            ]
        },
        "turtle": {
            "12": [
                0,
                3374
            ],
            "18": [
                0,
                3374
            ],
            "24": [
                0,
                3374
            ]
        },
        "village-shadow": {
            "12": [
                0,
                3400
            ],
            "18": [
                0,
                3400
            ],
            "24": [
                0,
                3400
            ]
        },
        "village": {
            "12": [
                0,
                3434
            ],
            "18": [
                0,
                3434
            ],
            "24": [
                0,
                3434
            ]
        },
        "waterfall-shadow": {
            "12": [
                0,
                3460
            ],
            "18": [
                0,
                3460
            ],
            "24": [
                0,
                3460
            ]
        },
        "waterfall": {
            "12": [
                0,
                3494
            ],
            "18": [
                0,
                3494
            ],
            "24": [
                0,
                3494
            ]
        },
        "highway-motorway": {
            "line": [
                20,
                25
            ]
        },
        "highway-trunk": {
            "line": [
                80,
                25
            ]
        },
        "highway-primary": {
            "line": [
                140,
                25
            ]
        },
        "highway-secondary": {
            "line": [
                200,
                25
            ]
        },
        "highway-tertiary": {
            "line": [
                260,
                25
            ]
        },
        "highway-motorway-link": {
            "line": [
                320,
                25
            ]
        },
        "highway-trunk-link": {
            "line": [
                380,
                25
            ]
        },
        "highway-primary-link": {
            "line": [
                440,
                25
            ]
        },
        "highway-secondary-link": {
            "line": [
                500,
                25
            ]
        },
        "highway-tertiary-link": {
            "line": [
                560,
                25
            ]
        },
        "highway-residential": {
            "line": [
                620,
                25
            ]
        },
        "highway-unclassified": {
            "line": [
                680,
                25
            ]
        },
        "highway-service": {
            "line": [
                740,
                25
            ]
        },
        "highway-road": {
            "line": [
                800,
                25
            ]
        },
        "highway-track": {
            "line": [
                860,
                25
            ]
        },
        "highway-living-street": {
            "line": [
                920,
                25
            ]
        },
        "highway-path": {
            "line": [
                980,
                25
            ]
        },
        "highway-cycleway": {
            "line": [
                1040,
                25
            ]
        },
        "highway-footway": {
            "line": [
                1100,
                25
            ]
        },
        "highway-bridleway": {
            "line": [
                1160,
                25
            ]
        },
        "highway-steps": {
            "line": [
                1220,
                25
            ]
        },
        "railway-rail": {
            "line": [
                1280,
                25
            ]
        },
        "railway-disused": {
            "line": [
                1340,
                25
            ]
        },
        "railway-abandoned": {
            "line": [
                1400,
                25
            ]
        },
        "railway-subway": {
            "line": [
                1460,
                25
            ]
        },
        "railway-light-rail": {
            "line": [
                1520,
                25
            ]
        },
        "railway-monorail": {
            "line": [
                1580,
                25
            ]
        },
        "waterway-river": {
            "line": [
                1640,
                25
            ]
        },
        "waterway-stream": {
            "line": [
                1700,
                25
            ]
        },
        "waterway-canal": {
            "line": [
                1760,
                25
            ]
        },
        "waterway-ditch": {
            "line": [
                1820,
                25
            ]
        },
        "power-line": {
            "line": [
                1880,
                25
            ]
        },
        "other-line": {
            "line": [
                1940,
                25
            ]
        },
        "category-roads": {
            "line": [
                2000,
                25
            ]
        },
        "category-rail": {
            "line": [
                2060,
                25
            ]
        },
        "category-path": {
            "line": [
                2120,
                25
            ]
        },
        "category-water": {
            "line": [
                2180,
                25
            ]
        },
        "ferry": {
            "line": [
                2240,
                25
            ]
        },
        "pipeline": {
            "line": [
                2300,
                25
            ]
        },
        "relation": {
            "relation": [
                20,
                25
            ]
        },
        "restriction": {
            "relation": [
                80,
                25
            ]
        },
        "multipolygon": {
            "relation": [
                140,
                25
            ]
        },
        "route": {
            "relation": [
                260,
                25
            ]
        },
        "route-road": {
            "relation": [
                320,
                25
            ]
        },
        "route-bicycle": {
            "relation": [
                380,
                25
            ]
        },
        "route-foot": {
            "relation": [
                440,
                25
            ]
        },
        "route-bus": {
            "relation": [
                500,
                25
            ]
        },
        "route-train": {
            "relation": [
                560,
                25
            ]
        },
        "route-detour": {
            "relation": [
                620,
                25
            ]
        },
        "route-tram": {
            "relation": [
                680,
                25
            ]
        },
        "route-ferry": {
            "relation": [
                740,
                25
            ]
        },
        "route-power": {
            "relation": [
                800,
                25
            ]
        },
        "route-pipeline": {
            "relation": [
                860,
                25
            ]
        },
        "route-master": {
            "relation": [
                920,
                25
            ]
        }
    },
    "operations": {
        "icon-operation-delete": [
            0,
            140
        ],
        "icon-operation-circularize": [
            20,
            140
        ],
        "icon-operation-straighten": [
            40,
            140
        ],
        "icon-operation-split": [
            60,
            140
        ],
        "icon-operation-disconnect": [
            80,
            140
        ],
        "icon-operation-reverse": [
            100,
            140
        ],
        "icon-operation-move": [
            120,
            140
        ],
        "icon-operation-merge": [
            140,
            140
        ],
        "icon-operation-orthogonalize": [
            160,
            140
        ],
        "icon-operation-rotate": [
            180,
            140
        ],
        "icon-operation-simplify": [
            200,
            140
        ],
        "icon-operation-continue": [
            220,
            140
        ],
        "icon-operation-disabled-delete": [
            0,
            160
        ],
        "icon-operation-disabled-circularize": [
            20,
            160
        ],
        "icon-operation-disabled-straighten": [
            40,
            160
        ],
        "icon-operation-disabled-split": [
            60,
            160
        ],
        "icon-operation-disabled-disconnect": [
            80,
            160
        ],
        "icon-operation-disabled-reverse": [
            100,
            160
        ],
        "icon-operation-disabled-move": [
            120,
            160
        ],
        "icon-operation-disabled-merge": [
            140,
            160
        ],
        "icon-operation-disabled-orthogonalize": [
            160,
            160
        ],
        "icon-operation-disabled-rotate": [
            180,
            160
        ],
        "icon-operation-disabled-simplify": [
            200,
            160
        ],
        "icon-operation-disabled-continue": [
            220,
            160
        ]
    },
    "locales": [
        "af",
        "ar",
        "ast",
        "bn",
        "bs",
        "bg-BG",
        "ca",
        "zh",
        "zh-CN",
        "zh-CN.GB2312",
        "zh-TW",
        "hr",
        "cs",
        "da",
        "nl",
        "en-GB",
        "et",
        "fi",
        "fr",
        "de",
        "el",
        "hu",
        "is",
        "id",
        "it",
        "ja",
        "ko",
        "lv",
        "lt",
        "no",
        "nn",
        "pl",
        "pt",
        "pt-BR",
        "ru",
        "sc",
        "sr",
        "sr-RS",
        "sk",
        "sl",
        "es",
        "sv",
        "te",
        "tr",
        "uk",
        "vi"
    ],
    "en": {
        "modes": {
            "add_area": {
                "title": "Area",
                "description": "Add parks, buildings, lakes or other areas to the map.",
                "tail": "Click on the map to start drawing an area, like a park, lake, or building."
            },
            "add_line": {
                "title": "Line",
                "description": "Add highways, streets, pedestrian paths, canals or other lines to the map.",
                "tail": "Click on the map to start drawing a road, path, or route."
            },
            "add_point": {
                "title": "Point",
                "description": "Add restaurants, monuments, postal boxes or other points to the map.",
                "tail": "Click on the map to add a point."
            },
            "browse": {
                "title": "Browse",
                "description": "Pan and zoom the map."
            },
            "draw_area": {
                "tail": "Click to add nodes to your area. Click the first node to finish the area."
            },
            "draw_line": {
                "tail": "Click to add more nodes to the line. Click on other lines to connect to them, and double-click to end the line."
            }
        },
        "operations": {
            "add": {
                "annotation": {
                    "point": "Added a point.",
                    "vertex": "Added a node to a way.",
                    "relation": "Added a relation."
                }
            },
            "start": {
                "annotation": {
                    "line": "Started a line.",
                    "area": "Started an area."
                }
            },
            "continue": {
                "key": "A",
                "title": "Continue",
                "description": "Continue this line.",
                "not_eligible": "No line can be continued here.",
                "multiple": "Several lines can be continued here. To choose a line, press the Shift key and click on it to select it.",
                "annotation": {
                    "line": "Continued a line.",
                    "area": "Continued an area."
                }
            },
            "cancel_draw": {
                "annotation": "Canceled drawing."
            },
            "change_role": {
                "annotation": "Changed the role of a relation member."
            },
            "change_tags": {
                "annotation": "Changed tags."
            },
            "circularize": {
                "title": "Circularize",
                "description": {
                    "line": "Make this line circular.",
                    "area": "Make this area circular."
                },
                "key": "O",
                "annotation": {
                    "line": "Made a line circular.",
                    "area": "Made an area circular."
                },
                "not_closed": "This can't be made circular because it's not a loop."
            },
            "orthogonalize": {
                "title": "Square",
                "description": {
                    "line": "Square the corners of this line.",
                    "area": "Square the corners of this area."
                },
                "key": "S",
                "annotation": {
                    "line": "Squared the corners of a line.",
                    "area": "Squared the corners of an area."
                },
                "not_squarish": "This can't be made square because it is not squarish."
            },
            "straighten": {
                "title": "Straighten",
                "description": "Straighten this line.",
                "key": "S",
                "annotation": "Straightened a line.",
                "too_bendy": "This can't be straightened because it bends too much."
            },
            "delete": {
                "title": "Delete",
                "description": "Remove this from the map.",
                "annotation": {
                    "point": "Deleted a point.",
                    "vertex": "Deleted a node from a way.",
                    "line": "Deleted a line.",
                    "area": "Deleted an area.",
                    "relation": "Deleted a relation.",
                    "multiple": "Deleted {n} objects."
                },
                "incomplete_relation": "This feature can't be deleted because it hasn't been fully downloaded."
            },
            "add_member": {
                "annotation": "Added a member to a relation."
            },
            "delete_member": {
                "annotation": "Removed a member from a relation."
            },
            "connect": {
                "annotation": {
                    "point": "Connected a way to a point.",
                    "vertex": "Connected a way to another.",
                    "line": "Connected a way to a line.",
                    "area": "Connected a way to an area."
                }
            },
            "disconnect": {
                "title": "Disconnect",
                "description": "Disconnect these lines/areas from each other.",
                "key": "D",
                "annotation": "Disconnected lines/areas.",
                "not_connected": "There aren't enough lines/areas here to disconnect."
            },
            "merge": {
                "title": "Merge",
                "description": "Merge these lines.",
                "key": "C",
                "annotation": "Merged {n} lines.",
                "not_eligible": "These features can't be merged.",
                "not_adjacent": "These lines can't be merged because they aren't connected.",
                "restriction": "These lines can't be merged because at least one is a member of a \"{relation}\" relation."
            },
            "move": {
                "title": "Move",
                "description": "Move this to a different location.",
                "key": "M",
                "annotation": {
                    "point": "Moved a point.",
                    "vertex": "Moved a node in a way.",
                    "line": "Moved a line.",
                    "area": "Moved an area.",
                    "multiple": "Moved multiple objects."
                },
                "incomplete_relation": "This feature can't be moved because it hasn't been fully downloaded."
            },
            "rotate": {
                "title": "Rotate",
                "description": "Rotate this object around its center point.",
                "key": "R",
                "annotation": {
                    "line": "Rotated a line.",
                    "area": "Rotated an area."
                }
            },
            "reverse": {
                "title": "Reverse",
                "description": "Make this line go in the opposite direction.",
                "key": "V",
                "annotation": "Reversed a line."
            },
            "split": {
                "title": "Split",
                "description": {
                    "line": "Split this line into two at this node.",
                    "area": "Split the boundary of this area into two.",
                    "multiple": "Split the lines/area boundaries at this node into two."
                },
                "key": "X",
                "annotation": {
                    "line": "Split a line.",
                    "area": "Split an area boundary.",
                    "multiple": "Split {n} lines/area boundaries."
                },
                "not_eligible": "Lines can't be split at their beginning or end.",
                "multiple_ways": "There are too many lines here to split."
            }
        },
        "undo": {
            "tooltip": "Undo: {action}",
            "nothing": "Nothing to undo."
        },
        "redo": {
            "tooltip": "Redo: {action}",
            "nothing": "Nothing to redo."
        },
        "tooltip_keyhint": "Shortcut:",
        "browser_notice": "This editor is supported in Firefox, Chrome, Safari, Opera, and Internet Explorer 9 and above. Please upgrade your browser or use Potlatch 2 to edit the map.",
        "translate": {
            "translate": "Translate",
            "localized_translation_label": "Multilingual name",
            "localized_translation_language": "Choose language",
            "localized_translation_name": "Name"
        },
        "zoom_in_edit": "Zoom in to Edit",
        "logout": "logout",
        "loading_auth": "Connecting to OpenStreetMap...",
        "report_a_bug": "report a bug",
        "status": {
            "error": "Unable to connect to API.",
            "offline": "The API is offline. Please try editing later.",
            "readonly": "The API is read-only. You will need to wait to save your changes."
        },
        "commit": {
            "title": "Save Changes",
            "description_placeholder": "Brief description of your contributions",
            "message_label": "Commit message",
            "upload_explanation": "The changes you upload will be visible on all maps that use OpenStreetMap data.",
            "upload_explanation_with_user": "The changes you upload as {user} will be visible on all maps that use OpenStreetMap data.",
            "save": "Save",
            "cancel": "Cancel",
            "warnings": "Warnings",
            "modified": "Modified",
            "deleted": "Deleted",
            "created": "Created"
        },
        "contributors": {
            "list": "Edits by {users}",
            "truncated_list": "Edits by {users} and {count} others"
        },
        "geocoder": {
            "search": "Search worldwide...",
            "no_results_visible": "No results in visible map area",
            "no_results_worldwide": "No results found"
        },
        "geolocate": {
            "title": "Show My Location"
        },
        "inspector": {
            "no_documentation_combination": "There is no documentation available for this tag combination",
            "no_documentation_key": "There is no documentation available for this key",
            "show_more": "Show More",
            "view_on_osm": "View on openstreetmap.org",
            "all_tags": "All tags",
            "all_members": "All members",
            "all_relations": "All relations",
            "new_relation": "New relation...",
            "role": "Role",
            "choose": "Select feature type",
            "results": "{n} results for {search}",
            "reference": "View on OpenStreetMap Wiki",
            "back_tooltip": "Change feature",
            "remove": "Remove",
            "search": "Search",
            "unknown": "Unknown",
            "incomplete": "<not downloaded>",
            "feature_list": "Search features",
            "edit": "Edit feature"
        },
        "background": {
            "title": "Background",
            "description": "Background settings",
            "percent_brightness": "{opacity}% brightness",
            "custom": "Custom",
            "custom_prompt": "Enter a tile template. Valid tokens are {z}, {x}, {y} for Z/X/Y scheme and {u} for quadtile scheme.",
            "fix_misalignment": "Fix misalignment",
            "reset": "reset"
        },
        "restore": {
            "heading": "You have unsaved changes",
            "description": "Do you wish to restore unsaved changes from a previous editing session?",
            "restore": "Restore",
            "reset": "Reset"
        },
        "save": {
            "title": "Save",
            "help": "Save changes to OpenStreetMap, making them visible to other users.",
            "no_changes": "No changes to save.",
            "error": "An error occurred while trying to save",
            "uploading": "Uploading changes to OpenStreetMap.",
            "unsaved_changes": "You have unsaved changes"
        },
        "success": {
            "edited_osm": "Edited OSM!",
            "just_edited": "You just edited OpenStreetMap!",
            "view_on_osm": "View on OSM",
            "facebook": "Share on Facebook",
            "twitter": "Share on Twitter",
            "google": "Share on Google+",
            "help_html": "Your changes should appear in the \"Standard\" layer in a few minutes. Other layers, and certain features, may take longer\n(<a href='https://help.openstreetmap.org/questions/4705/why-havent-my-changes-appeared-on-the-map' target='_blank'>details</a>).\n"
        },
        "confirm": {
            "okay": "Okay"
        },
        "splash": {
            "welcome": "Welcome to the iD OpenStreetMap editor",
            "text": "iD is a friendly but powerful tool for contributing to the world's best free world map. This is version {version}. For more information see {website} and report bugs at {github}.",
            "walkthrough": "Start the Walkthrough",
            "start": "Edit Now"
        },
        "source_switch": {
            "live": "live",
            "lose_changes": "You have unsaved changes. Switching the map server will discard them. Are you sure you want to switch servers?",
            "dev": "dev"
        },
        "tag_reference": {
            "description": "Description",
            "on_wiki": "{tag} on wiki.osm.org",
            "used_with": "used with {type}"
        },
        "validations": {
            "untagged_point": "Untagged point",
            "untagged_line": "Untagged line",
            "untagged_area": "Untagged area",
            "many_deletions": "You're deleting {n} objects. Are you sure you want to do this? This will delete them from the map that everyone else sees on openstreetmap.org.",
            "tag_suggests_area": "The tag {tag} suggests line should be area, but it is not an area",
            "deprecated_tags": "Deprecated tags: {tags}"
        },
        "zoom": {
            "in": "Zoom In",
            "out": "Zoom Out"
        },
        "cannot_zoom": "Cannot zoom out further in current mode.",
        "gpx": {
            "local_layer": "Local GPX file",
            "drag_drop": "Drag and drop a .gpx file on the page"
        },
        "help": {
            "title": "Help",
            "help": "# Help\n\nThis is an editor for [OpenStreetMap](http://www.openstreetmap.org/), the\nfree and editable map of the world. You can use it to add and update\ndata in your area, making an open-source and open-data map of the world\nbetter for everyone.\n\nEdits that you make on this map will be visible to everyone who uses\nOpenStreetMap. In order to make an edit, you'll need a\n[free OpenStreetMap account](https://www.openstreetmap.org/user/new).\n\nThe [iD editor](http://ideditor.com/) is a collaborative project with [source\ncode available on GitHub](https://github.com/systemed/iD).\n",
            "editing_saving": "# Editing & Saving\n\nThis editor is designed to work primarily online, and you're accessing\nit through a website right now.\n\n### Selecting Features\n\nTo select a map feature, like a road or point of interest, click\non it on the map. This will highlight the selected feature, open a panel with\ndetails about it, and show a menu of things you can do with the feature.\n\nTo select multiple features, hold down the 'Shift' key. Then either click\non the features you want to select, or drag on the map to draw a rectangle.\nThis will draw a box and select all the points within it.\n\n### Saving Edits\n\nWhen you make changes like editing roads, buildings, and places, these are\nstored locally until you save them to the server. Don't worry if you make\na mistake - you can undo changes by clicking the undo button, and redo\nchanges by clicking the redo button.\n\nClick 'Save' to finish a group of edits - for instance, if you've completed\nan area of town and would like to start on a new area. You'll have a chance\nto review what you've done, and the editor supplies helpful suggestions\nand warnings if something doesn't seem right about the changes.\n\nIf everything looks good, you can enter a short comment explaining the change\nyou made, and click 'Save' again to post the changes\nto [OpenStreetMap.org](http://www.openstreetmap.org/), where they are visible\nto all other users and available for others to build and improve upon.\n\nIf you can't finish your edits in one sitting, you can leave the editor\nwindow and come back (on the same browser and computer), and the\neditor application will offer to restore your work.\n",
            "roads": "# Roads\n\nYou can create, fix, and delete roads with this editor. Roads can be all\nkinds: paths, highways, trails, cycleways, and more - any often-crossed\nsegment should be mappable.\n\n### Selecting\n\nClick on a road to select it. An outline should become visible, along\nwith a small tools menu on the map and a sidebar showing more information\nabout the road.\n\n### Modifying\n\nOften you'll see roads that aren't aligned to the imagery behind them\nor to a GPS track. You can adjust these roads so they are in the correct\nplace.\n\nFirst click on the road you want to change. This will highlight it and show\ncontrol points along it that you can drag to better locations. If\nyou want to add new control points for more detail, double-click a part\nof the road without a node, and one will be added.\n\nIf the road connects to another road, but doesn't properly connect on\nthe map, you can drag one of its control points onto the other road in\norder to join them. Having roads connect is important for the map\nand essential for providing driving directions.\n\nYou can also click the 'Move' tool or press the `M` shortcut key to move the entire road at\none time, and then click again to save that movement.\n\n### Deleting\n\nIf a road is entirely incorrect - you can see that it doesn't exist in satellite\nimagery and ideally have confirmed locally that it's not present - you can delete\nit, which removes it from the map. Be cautious when deleting features -\nlike any other edit, the results are seen by everyone and satellite imagery\nis often out of date, so the road could simply be newly built.\n\nYou can delete a road by clicking on it to select it, then clicking the\ntrash can icon or pressing the 'Delete' key.\n\n### Creating\n\nFound somewhere there should be a road but there isn't? Click the 'Line'\nicon in the top-left of the editor or press the shortcut key `2` to start drawing\na line.\n\nClick on the start of the road on the map to start drawing. If the road\nbranches off from an existing road, start by clicking on the place where they connect.\n\nThen click on points along the road so that it follows the right path, according\nto satellite imagery or GPS. If the road you are drawing crosses another road, connect\nit by clicking on the intersection point. When you're done drawing, double-click\nor press 'Return' or 'Enter' on your keyboard.\n",
            "gps": "# GPS\n\nGPS data is the most trusted source of data for OpenStreetMap. This editor\nsupports local traces - `.gpx` files on your local computer. You can collect\nthis kind of GPS trace with a number of smartphone applications as well as\npersonal GPS hardware.\n\nFor information on how to perform a GPS survey, read\n[Surveying with a GPS](http://learnosm.org/en/beginner/using-gps/).\n\nTo use a GPX track for mapping, drag and drop the GPX file onto the map\neditor. If it's recognized, it will be added to the map as a bright green\nline. Click on the 'Background Settings' menu on the right side to enable,\ndisable, or zoom to this new GPX-powered layer.\n\nThe GPX track isn't directly uploaded to OpenStreetMap - the best way to\nuse it is to draw on the map, using it as a guide for the new features that\nyou add, and also to [upload it to OpenStreetMap](http://www.openstreetmap.org/trace/create)\nfor other users to use.\n",
            "imagery": "# Imagery\n\nAerial imagery is an important resource for mapping. A combination of\nairplane flyovers, satellite views, and freely-compiled sources are available\nin the editor under the 'Background Settings' menu on the left.\n\nBy default a [Bing Maps](http://www.bing.com/maps/) satellite layer is\npresented in the editor, but as you pan and zoom the map to new geographical\nareas, new sources will become available. Some countries, like the United\nStates, France, and Denmark have very high-quality imagery available for some areas.\n\nImagery is sometimes offset from the map data because of a mistake on the\nimagery provider's side. If you see a lot of roads shifted from the background,\ndon't immediately move them all to match the background. Instead you can adjust\nthe imagery so that it matches the existing data by clicking 'Fix alignment' at\nthe bottom of the Background Settings UI.\n",
            "addresses": "# Addresses\n\nAddresses are some of the most useful information for the map.\n\nAlthough addresses are often represented as parts of streets, in OpenStreetMap\nthey're recorded as attributes of buildings and places along streets.\n\nYou can add address information to places mapped as building outlines\nas well as those mapped as single points. The optimal source of address\ndata is from an on-the-ground survey or personal knowledge - as with any\nother feature, copying from commercial sources like Google Maps is strictly\nforbidden.\n",
            "inspector": "# Using the Inspector\n\nThe inspector is the user interface element on the right-hand side of the\npage that appears when a feature is selected and allows you to edit its details.\n\n### Selecting a Feature Type\n\nAfter you add a point, line, or area, you can choose what type of feature it\nis, like whether it's a highway or residential road, supermarket or cafe.\nThe inspector will display buttons for common feature types, and you can\nfind others by typing what you're looking for in the search box.\n\nClick the 'i' in the bottom-right-hand corner of a feature type button to\nlearn more about it. Click a button to choose that type.\n\n### Using Forms and Editing Tags\n\nAfter you choose a feature type, or when you select a feature that already\nhas a type assigned, the inspector will display fields with details about\nthe feature like its name and address.\n\nBelow the fields you see, you can click icons to add other details,\nlike [Wikipedia](http://www.wikipedia.org/) information, wheelchair\naccess, and more.\n\nAt the bottom of the inspector, click 'Additional tags' to add arbitrary\nother tags to the element. [Taginfo](http://taginfo.openstreetmap.org/) is a\ngreat resource for learn more about popular tag combinations.\n\nChanges you make in the inspector are automatically applied to the map.\nYou can undo them at any time by clicking the 'Undo' button.\n\n### Closing the Inspector\n\nYou can close the inspector by clicking the close button in the top-right,\npressing the 'Escape' key, or clicking on the map.\n",
            "buildings": "# Buildings\n\nOpenStreetMap is the world's largest database of buildings. You can create\nand improve this database.\n\n### Selecting\n\nYou can select a building by clicking on its border. This will highlight the\nbuilding and open a small tools menu and a sidebar showing more information\nabout the building.\n\n### Modifying\n\nSometimes buildings are incorrectly placed or have incorrect tags.\n\nTo move an entire building, select it, then click the 'Move' tool. Move your\nmouse to shift the building, and click when it's correctly placed.\n\nTo fix the specific shape of a building, click and drag the nodes that form\nits border into better places.\n\n### Creating\n\nOne of the main questions around adding buildings to the map is that\nOpenStreetMap records buildings both as shapes and points. The rule of thumb\nis to _map a building as a shape whenever possible_, and map companies, homes,\namenities, and other things that operate out of buildings as points placed\nwithin the building shape.\n\nStart drawing a building as a shape by clicking the 'Area' button in the top\nleft of the interface, and end it either by pressing 'Return' on your keyboard\nor clicking on the first node drawn to close the shape.\n\n### Deleting\n\nIf a building is entirely incorrect - you can see that it doesn't exist in satellite\nimagery and ideally have confirmed locally that it's not present - you can delete\nit, which removes it from the map. Be cautious when deleting features -\nlike any other edit, the results are seen by everyone and satellite imagery\nis often out of date, so the building could simply be newly built.\n\nYou can delete a building by clicking on it to select it, then clicking the\ntrash can icon or pressing the 'Delete' key.\n",
            "relations": "# Relations\n\nA relation is a special type of feature in OpenStreetMap that groups together\nother features. For example, two common types of relations are *route relations*,\nwhich group together sections of road that belong to a specific freeway or\nhighway, and *multipolygons*, which group together several lines that define\na complex area (one with several pieces or holes in it like a donut).\n\nThe group of features in a relation are called *members*. In the sidebar, you can\nsee which relations a feature is a member of, and click on a relation there\nto select the it. When the relation is selected, you can see all of its\nmembers listed in the sidebar and highlighted on the map.\n\nFor the most part, iD will take care of maintaining relations automatically\nwhile you edit. The main thing you should be aware of is that if you delete a\nsection of road to redraw it more accurately, you should make sure that the\nnew section is a member of the same relations as the original.\n\n## Editing Relations\n\nIf you want to edit relations, here are the basics.\n\nTo add a feature to a relation, select the feature, click the \"+\" button in the\n\"All relations\" section of the sidebar, and select or type the name of the relation.\n\nTo create a new relation, select the first feature that should be a member,\nclick the \"+\" button in the \"All relations\" section, and select \"New relation...\".\n\nTo remove a feature from a relation, select the feature and click the trash\nbutton next to the relation you want to remove it from.\n\nYou can create multipolygons with holes using the \"Merge\" tool. Draw two areas (inner\nand outer), hold the Shift key and click on each of them to select them both, and then\nclick the \"Merge\" (+) button.\n"
        },
        "intro": {
            "navigation": {
                "title": "Navigation",
                "drag": "The main map area shows OpenStreetMap data on top of a background. You can navigate by dragging and scrolling, just like any web map. **Drag the map!**",
                "select": "Map features are represented three ways: using points, lines or areas. All features can be selected by clicking on them. **Click on the point to select it.**",
                "header": "The header shows us the feature type.",
                "pane": "When a feature is selected, the feature editor is displayed. The header shows us the feature type and the main pane shows the feature's attributes, such as its name and address. **Close the feature editor with the close button in the top right.**"
            },
            "points": {
                "title": "Points",
                "add": "Points can be used to represent features such as shops, restaurants and monuments. They mark a specific location, and describe what's there. **Click the Point button to add a new point.**",
                "place": "The point can be placed by clicking on the map. **Place the point on top of the building.**",
                "search": "There are many different features that can be represented by points. The point you just added is a Cafe. **Search for '{name}'**",
                "choose": "**Choose Cafe from the list.**",
                "describe": "The point is now marked as a cafe. Using the feature editor, we can add more information about the feature. **Add a name**",
                "close": "The feature editor can be closed by clicking on the close button. **Close the feature editor**",
                "reselect": "Often points will already exist, but have mistakes or be incomplete. We can edit existing points. **Select the point you just created.**",
                "fixname": "**Change the name and close the feature editor.**",
                "reselect_delete": "All features on the map can be deleted. **Click on the point you created.**",
                "delete": "The menu around the point contains operations that can be performed on it, including delete. **Delete the point.**"
            },
            "areas": {
                "title": "Areas",
                "add": "Areas are a more detailed way to represent features. They provide information on the boundaries of the feature. Areas can be used for most feature types points can be used for, and are often preferred. **Click the Area button to add a new area.**",
                "corner": "Areas are drawn by placing nodes that mark the boundary of the area. **Place the starting node on one of the corners of the playground.**",
                "place": "Draw the area by placing more nodes. Finish the area by clicking on the starting node. **Draw an area for the playground.**",
                "search": "**Search for '{name}'.**",
                "choose": "**Choose Playground from the list.**",
                "describe": "**Add a name, and close the feature editor**"
            },
            "lines": {
                "title": "Lines",
                "add": "Lines are used to represent features such as roads, railroads and rivers. **Click the Line button to add a new line.**",
                "start": "**Start the line by clicking on the end of the road.**",
                "intersect": "Click to add more nodes to the line. You can drag the map while drawing if necessary. Roads, and many other types of lines, are part of a larger network. It is important for these lines to be connected properly in order for routing applications to work. **Click on Flower Street, to create an intersection connecting the two lines.**",
                "finish": "Lines can be finished by clicking on the last node again. **Finish drawing the road.**",
                "road": "**Select Road from the list**",
                "residential": "There are different types of roads, the most common of which is Residential. **Choose the Residential road type**",
                "describe": "**Name the road and close the feature editor.**",
                "restart": "The road needs to intersect Flower Street.",
                "wrong_preset": "You didn't select the Residential road type. **Click here to choose again**"
            },
            "startediting": {
                "title": "Start Editing",
                "help": "More documentation and this walkthrough are available here.",
                "save": "Don't forget to regularly save your changes!",
                "start": "Start mapping!"
            }
        },
        "presets": {
            "categories": {
                "category-amenity": {
                    "name": "Amenity"
                },
                "category-community": {
                    "name": "Community"
                },
                "category-fauna": {
                    "name": "Fauna"
                },
                "category-flora": {
                    "name": "Flora"
                },
                "category-infrastructure": {
                    "name": "Infrastructure"
                },
                "category-landcover": {
                    "name": "Landcover"
                },
                "category-landrights": {
                    "name": "Land Rights"
                },
                "category-other": {
                    "name": "Other"
                },
                "category-water": {
                    "name": "Water"
                }
            },
            "fields": {
                "access": {
                    "label": "Access",
                    "placeholder": "Unknown",
                    "types": {
                        "access": "General",
                        "foot": "Foot",
                        "motor_vehicle": "Motor Vehicles",
                        "bicycle": "Bicycles",
                        "horse": "Horses"
                    },
                    "options": {
                        "yes": {
                            "title": "Allowed",
                            "description": "Access permitted by law; a right of way"
                        },
                        "no": {
                            "title": "Prohibited",
                            "description": "Access not permitted to the general public"
                        },
                        "permissive": {
                            "title": "Permissive",
                            "description": "Access permitted until such time as the owner revokes the permission"
                        },
                        "private": {
                            "title": "Private",
                            "description": "Access permitted only with permission of the owner on an individual basis"
                        },
                        "designated": {
                            "title": "Designated",
                            "description": "Access permitted according to signs or specific local laws"
                        },
                        "destination": {
                            "title": "Destination",
                            "description": "Access permitted only to reach a destination"
                        }
                    }
                },
                "access_toilets": {
                    "label": "Access"
                },
                "address": {
                    "label": "Address",
                    "placeholders": {
                        "housename": "Housename",
                        "number": "123",
                        "street": "Street",
                        "city": "City",
                        "postcode": "Postal code"
                    }
                },
                "admin_level": {
                    "label": "Admin Level"
                },
                "aeroway": {
                    "label": "Type"
                },
                "amenity": {
                    "label": "Type"
                },
                "artist": {
                    "label": "Artist"
                },
                "artwork_type": {
                    "label": "Type"
                },
                "atm": {
                    "label": "ATM"
                },
                "backrest": {
                    "label": "Backrest"
                },
                "barrier": {
                    "label": "Type"
                },
                "bicycle_parking": {
                    "label": "Type"
                },
                "boundary": {
                    "label": "Type"
                },
                "building": {
                    "label": "Building"
                },
                "building_area": {
                    "label": "Building"
                },
                "building_yes": {
                    "label": "Building"
                },
                "capacity": {
                    "label": "Capacity",
                    "placeholder": "50, 100, 200..."
                },
                "cardinal_direction": {
                    "label": "Direction"
                },
                "clock_direction": {
                    "label": "Direction",
                    "options": {
                        "clockwise": "Clockwise",
                        "anticlockwise": "Counterclockwise"
                    }
                },
                "collection_times": {
                    "label": "Collection Times"
                },
                "construction": {
                    "label": "Type"
                },
                "country": {
                    "label": "Country"
                },
                "crossing": {
                    "label": "Type"
                },
                "cuisine": {
                    "label": "Cuisine"
                },
                "denomination": {
                    "label": "Denomination"
                },
                "denotation": {
                    "label": "Denotation"
                },
                "description": {
                    "label": "Description"
                },
                "elevation": {
                    "label": "Elevation"
                },
                "emergency": {
                    "label": "Emergency"
                },
                "entrance": {
                    "label": "Type"
                },
                "fax": {
                    "label": "Fax",
                    "placeholder": "+31 42 123 4567"
                },
                "fee": {
                    "label": "Fee"
                },
                "fire_hydrant/type": {
                    "label": "Type"
                },
                "fixme": {
                    "label": "Fix Me"
                },
                "generator/method": {
                    "label": "Method"
                },
                "generator/source": {
                    "label": "Source"
                },
                "generator/type": {
                    "label": "Type"
                },
                "highway": {
                    "label": "Type"
                },
                "historic": {
                    "label": "Type"
                },
                "iata": {
                    "label": "IATA"
                },
                "icao": {
                    "label": "ICAO"
                },
                "incline": {
                    "label": "Incline"
                },
                "internet_access": {
                    "label": "Internet Access",
                    "options": {
                        "yes": "Yes",
                        "no": "No",
                        "wlan": "Wifi",
                        "wired": "Wired",
                        "terminal": "Terminal"
                    }
                },
                "landuse": {
                    "label": "Type"
                },
                "lanes": {
                    "label": "Lanes",
                    "placeholder": "1, 2, 3..."
                },
                "layer": {
                    "label": "Layer"
                },
                "leisure": {
                    "label": "Type"
                },
                "levels": {
                    "label": "Levels",
                    "placeholder": "2, 4, 6..."
                },
                "lit": {
                    "label": "Lit"
                },
                "location": {
                    "label": "Location"
                },
                "man_made": {
                    "label": "Type"
                },
                "maxspeed": {
                    "label": "Speed Limit",
                    "placeholder": "40, 50, 60..."
                },
                "name": {
                    "label": "Name",
                    "placeholder": "Common name (if any)"
                },
                "natural": {
                    "label": "Natural"
                },
                "network": {
                    "label": "Network"
                },
                "note": {
                    "label": "Note",
                    "placeholder": "Any story or description of this place"
                },
                "office": {
                    "label": "Type"
                },
                "oneway": {
                    "label": "One Way"
                },
                "oneway_yes": {
                    "label": "One Way"
                },
                "opening_hours": {
                    "label": "Hours"
                },
                "operator": {
                    "label": "Operator"
                },
                "owner": {
                    "label": "Owner",
                    "placeholder": "Owner (if any)"
                },
                "park_ride": {
                    "label": "Park and Ride"
                },
                "parking": {
                    "label": "Type"
                },
                "phone": {
                    "label": "Phone",
                    "placeholder": "+31 42 123 4567"
                },
                "place": {
                    "label": "Type"
                },
                "power": {
                    "label": "Type"
                },
                "railway": {
                    "label": "Type"
                },
                "ref": {
                    "label": "Reference"
                },
                "relation": {
                    "label": "Type"
                },
                "religion": {
                    "label": "Religion",
                    "options": {
                        "christian": "Christian",
                        "muslim": "Muslim",
                        "buddhist": "Buddhist",
                        "jewish": "Jewish",
                        "hindu": "Hindu",
                        "shinto": "Shinto",
                        "taoist": "Taoist"
                    }
                },
                "restriction": {
                    "label": "Type"
                },
                "route": {
                    "label": "Type"
                },
                "route_master": {
                    "label": "Type"
                },
                "sac_scale": {
                    "label": "Path Difficulty"
                },
                "school_type": {
                    "label": "School Age Group",
                    "options": {
                        "primary": "Primary",
                        "secondary": "Secondary"
                    }
                },
                "service": {
                    "label": "Type"
                },
                "shelter": {
                    "label": "Shelter"
                },
                "shop": {
                    "label": "Type"
                },
                "source": {
                    "label": "Source"
                },
                "sport": {
                    "label": "Sport"
                },
                "status": {
                    "label": "Status",
                    "options": {
                        "proposed": "Proposed",
                        "submitted": "Submitted to government",
                        "granted": "Granted by government"
                    }
                },
                "structure": {
                    "label": "Structure",
                    "placeholder": "Unknown",
                    "options": {
                        "bridge": "Bridge",
                        "tunnel": "Tunnel",
                        "embankment": "Embankment",
                        "cutting": "Cutting"
                    }
                },
                "supervised": {
                    "label": "Supervised"
                },
                "surface": {
                    "label": "Surface"
                },
                "toilets/disposal": {
                    "label": "Disposal"
                },
                "tourism": {
                    "label": "Type"
                },
                "towertype": {
                    "label": "Tower type"
                },
                "tracktype": {
                    "label": "Type"
                },
                "trail_visibility": {
                    "label": "Trail Visibility"
                },
                "vending": {
                    "label": "Type of Goods"
                },
                "village": {
                    "label": "Village",
                    "placeholder": "Village Name (if this belongs to a particular village)"
                },
                "water": {
                    "label": "Type"
                },
                "waterway": {
                    "label": "Type"
                },
                "website": {
                    "label": "Website",
                    "placeholder": "http://example.com/"
                },
                "wetland": {
                    "label": "Type"
                },
                "wheelchair": {
                    "label": "Wheelchair Access"
                },
                "wikipedia": {
                    "label": "Wikipedia"
                },
                "wood": {
                    "label": "Type"
                }
            },
            "presets": {
                "amenity": {
                    "name": "Amenity",
                    "terms": ""
                },
                "amenity/church": {
                    "name": "Church",
                    "terms": "abbey,basilica,bethel,cathedral,chancel,chantry,chapel,church,fold,house of God,house of prayer,house of worship,minster,mission,mosque,oratory,parish,sacellum,sanctuary,shrine,synagogue,tabernacle,temple"
                },
                "amenity/health_hut": {
                    "name": "Health Hut",
                    "terms": "clinic,emergency room,health service,hospice,infirmary,institution,nursing home,rest home,sanatorium,sanitarium,sick bay,surgery,ward,hospital"
                },
                "amenity/school": {
                    "name": "School",
                    "terms": "academy,alma mater,blackboard,college,department,discipline,establishment,faculty,hall,halls of ivy,institute,institution,jail*,schoolhouse,seminary,university"
                },
                "area": {
                    "name": "Area",
                    "terms": ""
                },
                "community": {
                    "name": "Community",
                    "terms": ""
                },
                "community/burial_grounds": {
                    "name": "Burial Grounds",
                    "terms": ""
                },
                "community/farm": {
                    "name": "Farm",
                    "terms": ""
                },
                "community/homestead": {
                    "name": "Homestead",
                    "terms": ""
                },
                "community/hunting_camp": {
                    "name": "Hunting Camp",
                    "terms": ""
                },
                "community/landing": {
                    "name": "Landing",
                    "terms": ""
                },
                "community/old_farm": {
                    "name": "Old Farm",
                    "terms": ""
                },
                "community/old_homestead": {
                    "name": "Old Homestead",
                    "terms": ""
                },
                "community/old_hunting_camp": {
                    "name": "Old Hunting Camp",
                    "terms": ""
                },
                "community/old_village": {
                    "name": "Farm",
                    "terms": ""
                },
                "community/ranch": {
                    "name": "Ranch",
                    "terms": ""
                },
                "community/satellite_village": {
                    "name": "Satellite Village",
                    "terms": ""
                },
                "community/village": {
                    "name": "Village",
                    "terms": ""
                },
                "fauna": {
                    "name": "Fauna",
                    "terms": ""
                },
                "fauna/egg_gathering": {
                    "name": "Egg Gathering",
                    "terms": ""
                },
                "fauna/rare_bird": {
                    "name": "Rare Bird",
                    "terms": ""
                },
                "fauna/trapping": {
                    "name": "Trapping",
                    "terms": ""
                },
                "fauna/turtle": {
                    "name": "Turtle",
                    "terms": ""
                },
                "flora": {
                    "name": "Flora",
                    "terms": ""
                },
                "flora/balata": {
                    "name": "Balata",
                    "terms": ""
                },
                "flora/bamboo": {
                    "name": "Bamboo",
                    "terms": ""
                },
                "flora/building_material": {
                    "name": "Building Material",
                    "terms": ""
                },
                "flora/craft_material": {
                    "name": "Craft Material",
                    "terms": ""
                },
                "flora/eta": {
                    "name": "Eta Palm",
                    "terms": ""
                },
                "flora/firewood": {
                    "name": "Firewood Gathering Area",
                    "terms": ""
                },
                "flora/forest_fruits": {
                    "name": "Forest Fruits",
                    "terms": ""
                },
                "flora/medicinal_plants": {
                    "name": "Medicinal Plants",
                    "terms": ""
                },
                "flora/old_timber": {
                    "name": "Old timber area",
                    "terms": ""
                },
                "flora/palms": {
                    "name": "Palms",
                    "terms": ""
                },
                "flora/poison": {
                    "name": "Poison collecting area",
                    "terms": ""
                },
                "flora/resin": {
                    "name": "Resin",
                    "terms": ""
                },
                "flora/timber": {
                    "name": "Timber Area",
                    "terms": ""
                },
                "heritage": {
                    "name": "Heritage",
                    "terms": ""
                },
                "heritage/historical_site": {
                    "name": "Historical Site",
                    "terms": ""
                },
                "heritage/rock_carvings": {
                    "name": "Rock Carvings",
                    "terms": ""
                },
                "infrastructure": {
                    "name": "Infrastructure",
                    "terms": ""
                },
                "infrastructure/airstrip": {
                    "name": "Historical Site",
                    "terms": ""
                },
                "infrastructure/bridge": {
                    "name": "Bridge",
                    "terms": ""
                },
                "infrastructure/coral": {
                    "name": "Coral",
                    "terms": ""
                },
                "landrights/extension": {
                    "name": "Land Title Extension",
                    "terms": ""
                },
                "landrights/landclaim": {
                    "name": "Land Claim Boundary",
                    "terms": ""
                },
                "landrights/title": {
                    "name": "Land Title",
                    "terms": ""
                },
                "landscape/bush": {
                    "name": "Bush",
                    "terms": ""
                },
                "landscape/bush_island": {
                    "name": "Bush Island",
                    "terms": ""
                },
                "landscape/savannah": {
                    "name": "Savannah",
                    "terms": ""
                },
                "landscape/savannah_island": {
                    "name": "Savannah Island",
                    "terms": ""
                },
                "landscape/swamp": {
                    "name": "Swamp",
                    "terms": ""
                },
                "landuse/conservation": {
                    "name": "Conservation Area",
                    "terms": ""
                },
                "landuse/fishing": {
                    "name": "Fishing Area",
                    "terms": ""
                },
                "landuse/hunting": {
                    "name": "Hunting Area",
                    "terms": ""
                },
                "line": {
                    "name": "Line",
                    "terms": ""
                },
                "mineral": {
                    "name": "Mineral",
                    "terms": ""
                },
                "mineral/clay": {
                    "name": "Clay",
                    "terms": ""
                },
                "mineral/precious_stones": {
                    "name": "Precious Stones",
                    "terms": ""
                },
                "point": {
                    "name": "Point",
                    "terms": ""
                },
                "relation": {
                    "name": "Relation",
                    "terms": ""
                },
                "spiritual/no_go_zone": {
                    "name": "No Go Zone",
                    "terms": ""
                },
                "spiritual/sacred_site": {
                    "name": "Sacred Site",
                    "terms": ""
                },
                "territory": {
                    "name": "Territory",
                    "terms": ""
                },
                "vertex": {
                    "name": "Other",
                    "terms": ""
                },
                "water": {
                    "name": "Water",
                    "terms": ""
                },
                "water/crossing": {
                    "name": "River/Creek Crossing",
                    "terms": ""
                },
                "water/island": {
                    "name": "Island",
                    "terms": ""
                },
                "water/lake": {
                    "name": "Lake",
                    "terms": ""
                },
                "water/pond": {
                    "name": "Pond",
                    "terms": ""
                },
                "water/pools": {
                    "name": "Deep Pools",
                    "terms": ""
                },
                "water/rapids": {
                    "name": "Rapids",
                    "terms": ""
                },
                "water/river": {
                    "name": "River",
                    "terms": "beck,branch,brook,course,creek,estuary,rill,rivulet,run,runnel,stream,tributary,watercourse"
                },
                "water/waterfall": {
                    "name": "Waterfall",
                    "terms": ""
                },
                "way": {
                    "name": "Way",
                    "terms": ""
                },
                "way/line": {
                    "name": "Hunting Line",
                    "terms": ""
                },
                "way/track": {
                    "name": "Track",
                    "terms": ""
                }
            }
        }
    }
};