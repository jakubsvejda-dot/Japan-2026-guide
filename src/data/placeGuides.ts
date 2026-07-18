import type { PlaceImage, PlaceStory } from './dayTypes';

const maps = (query: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const photo = (src: string, alt: string, credit: string, license: string, sourceUrl: string): PlaceImage => ({
  src,
  alt,
  credit,
  license,
  sourceUrl,
});

const guide = (data: PlaceStory): PlaceStory => data;

// All images are locally bundled derivatives of the linked Wikimedia Commons files.
// Attribution and source URLs are deliberately kept next to the card data for offline use.
export const placeGuidesByDay: Record<string, PlaceStory[]> = {
  'tokyo-22': [
    guide({
      id: 'meiji-jingu', time: 'dopoledne', name: 'Meiji Jingu', japanese: '明治神宮',
      image: photo('assets/places/meiji.jpg', 'Lesní cesta vedoucí k Meiji Jingu v Tokiu.', 'Nightcrafter', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Meiji-jingu-pathway.jpg'),
      whyWeGo: ['Po příjezdu do Tokia začínáme v místě, které dává dni klidný rytmus, než se přesuneme do Harajuku a k rezervovanému teamLabu.', 'Lesní cesta je příjemný kontrast k okolnímu městu a dává všem čas naladit se na Japonsko bez spěchu.'],
      highlights: ['velké dřevěné torii', 'lesní cesta ke svatyni', 'sudy se saké u cesty'],
      practicalTip: 'Od vstupu k hlavní svatyni počítejte s pohodovou chůzí; není to zastávka na rychlé dvě minuty.',
      mapsUrl: maps('Meiji Jingu'),
    }),
    guide({
      id: 'harajuku', time: 'po svatyni', name: 'Harajuku / Takeshita Street', japanese: '原宿',
      image: photo('assets/places/harajuku.jpg', 'Pěší zóna Takeshita Street v Harajuku.', 'Syced', 'CC0', 'https://commons.wikimedia.org/wiki/File:Takeshita_Street.jpg'),
      whyWeGo: ['Po tichu Meiji Jingu je Harajuku krátká změna tempa, ne další povinný program.', 'Stačí projít okolní ulice, dát si malou svačinu a včas pokračovat k odpolední rezervaci.'],
      highlights: ['pěší ulice a výlohy', 'rychlá svačina podle chuti', 'kontrast s lesem Meiji Jingu'],
      practicalTip: 'Nezdržujte se dlouhými frontami — pohodlný přesun do teamLabu má přednost.',
      mapsUrl: maps('Takeshita Street Harajuku'),
    }),
    guide({
      id: 'teamlab-planets', time: 'odpoledne', name: 'teamLab Planets', japanese: 'チームラボプラネッツ',
      image: photo('assets/places/teamlab.jpg', 'Světelná instalace v teamLab Planets v Tokiu.', 'Sasa0403', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Photos_at_teamlab_planets_tokyo.jpg'),
      whyWeGo: ['Tohle je rezervovaná společná zkušenost dne: prostor, kde se nechodí jen dívat, ale prochází se jím celým tělem.', 'Po ranním městě nabízí jiný druh soustředění a přirozeně připraví večerní pohled na Tokio z výšky.'],
      highlights: ['světlo reagující na pohyb', 'prostor vnímaný chůzí', 'proměnu měřítka mezi instalacemi'],
      practicalTip: 'Vezměte si oblečení, které lze vyhrnout nad kolena; uvnitř se chodí bosky a část trasy vede vodou.',
      mapsUrl: maps('teamLab Planets TOKYO'),
    }),
    guide({
      id: 'shibuya-crossing', time: 'před podvečerem', name: 'Shibuya Crossing', japanese: '渋谷スクランブル交差点',
      image: photo('assets/places/shibuya-crossing.jpg', 'Pohled shora na Shibuya Crossing v Tokiu.', 'David Kernan', 'CC BY 4.0', 'https://commons.wikimedia.org/wiki/File:Shibuya_Crossing,_Aerial.jpg'),
      whyWeGo: ['Shibuya není samostatný úkol navíc, ale přirozená kulisa před rezervovanou vyhlídkou.', 'Přechod je nejzajímavější jako krátký okamžik v pohybu — pak pokračujeme do Scramble Square.'],
      highlights: ['vlna lidí po rozsvícení zelené', 'pohled z okolí nádraží', 'měnící se rytmus čtvrti'],
      practicalTip: 'Držte se spolu a neplánujte dlouhé zastávky uprostřed nejrušnějších proudů lidí.',
      mapsUrl: maps('Shibuya Scramble Crossing'),
    }),
    guide({
      id: 'shibuya-sky', time: 'podvečer', name: 'Shibuya Sky', japanese: '渋谷スカイ',
      image: photo('assets/places/shibuya-sky.jpg', 'Budova Shibuya Scramble Square, kde se nachází Shibuya Sky.', 'Syced', 'CC0', 'https://commons.wikimedia.org/wiki/File:Shibuya_Scramble_Square_2.jpg'),
      whyWeGo: ['Je to klidné zakončení dne nad čtvrtí Shibuya po svatyni a teamLabu.', 'Z výšky je vidět město jako celek a pod ním i pohyb kolem přechodu, který jsme právě prošli.'],
      highlights: ['Shibuya Crossing z výšky', 'proměnu města při rozsvícení', 'výhled do dálky při dobré viditelnosti'],
      practicalTip: 'Před vstupem ověřte, zda je kvůli počasí otevřená venkovní střecha; vnitřní část zůstává záloha.',
      mapsUrl: maps('SHIBUYA SKY'),
    }),
  ],
  'fuji-23': [
    guide({
      id: 'chureito-pagoda', time: 'Fuji Five Lakes tour', name: 'Chureito Pagoda', japanese: '忠霊塔',
      image: photo('assets/places/chureito.jpg', 'Chureito Pagoda a hora Fuji ve Fudžijošidě.', 'Supanut Arunoprayote', 'CC BY 4.0', 'https://commons.wikimedia.org/wiki/File:Chureito_Pagoda_and_Mount_Fuji_20241022.jpg'),
      whyWeGo: ['V aktuálních datech výletu je Chureito jeden z hlavních obrazů Fuji dne.', 'Po ranním odjezdu je to místo, kde se krajina, hora a tradiční stavba spojí do jednoho jasného motivu.'],
      highlights: ['pagodu v krajině', 'výhled směrem k Fuji', 'změnu nálady oproti Tokiu'],
      practicalTip: 'Nechte si čas na společnou fotku i na chvilku bez obrazovky; pořadí zastávek určuje tour.',
      mapsUrl: maps('Chureito Pagoda'),
    }),
    guide({
      id: 'lake-kawaguchiko', time: 'Fuji Five Lakes tour', name: 'Lake Kawaguchiko', japanese: '河口湖',
      image: photo('assets/places/kawaguchiko.jpg', 'Jezero Kawaguchiko a hora Fuji s třešňovými květy.', 'Midori', 'CC BY 3.0', 'https://commons.wikimedia.org/wiki/File:Lake_Kawaguchiko_Sakura_Mount_Fuji_4.JPG'),
      whyWeGo: ['Kawaguchiko je v datech cesty uvedené jako druhý velký obraz dne pod Fuji.', 'Po městských dnech dává rodině prostor dívat se do dálky a jen vnímat krajinu mezi jednotlivými zastávkami tour.'],
      highlights: ['jezero a otevřený horizont', 'měnící se pohled na Fuji', 'klid mezi přesuny'],
      practicalTip: 'Počasí určí podobu výhledu; berte jezero jako cíl samo o sobě, i když hora nebude vidět.',
      mapsUrl: maps('Lake Kawaguchiko'),
    }),
    guide({
      id: 'oshino-hakkai', time: 'Fuji Five Lakes tour', name: 'Oshino Hakkai', japanese: '忍野八海',
      image: photo('assets/places/oshino-hakkai.jpg', 'Pramen v oblasti Oshino Hakkai.', 'MaedaAkihiko', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Oshino-Hakkai-Nakaike.jpg'),
      whyWeGo: ['Oshino Hakkai doplňuje panoramata Fuji o vodu, vesnické měřítko a kratší procházku.', 'Je to dobrý rodinný protipól k dlouhým výhledům: je zde co pozorovat i zblízka.'],
      highlights: ['čisté prameny', 'voda v malém měřítku', 'klidnější tempo tour'],
      practicalTip: 'Držte se společně s tour; přesné pořadí a délku zastávky určuje její potvrzení.',
      mapsUrl: maps('Oshino Hakkai'),
    }),
  ],
  'kyoto-25': [
    guide({
      id: 'kiyomizu-dera', time: 'ráno', name: 'Kiyomizu-dera', japanese: '清水寺',
      image: photo('assets/places/kiyomizu.jpg', 'Hlavní část chrámu Kiyomizu-dera v Kjótu.', 'Martin Falbisoner', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Kiyomizu-dera,_Kyoto,_November_2016_-01.jpg'),
      whyWeGo: ['Ráno začínáme na jednom výrazném místě Kjóta, aby zbytek dne mohl plynout pěšky do starých uliček a Gionu.', 'Je to společný orientační bod dne, ne závod za každým detailem chrámového areálu.'],
      highlights: ['dřevěnou architekturu', 'pohled přes svah Kjóta', 'pomalý začátek dne'],
      practicalTip: 'Po návštěvě pokračujte dolů plynule směrem k Sannenzace a Ninenzace; den je postavený hlavně na chůzi.',
      mapsUrl: maps('Kiyomizu-dera'),
    }),
    guide({
      id: 'sannenzaka-ninenzaka', time: 'dopoledne', name: 'Sannenzaka a Ninenzaka', japanese: '産寧坂・二年坂',
      image: photo('assets/places/sannenzaka.jpg', 'Dlážděná ulice Sannenzaka v Kjótu.', 'Zairon', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Kyoto_Sannenzaka_1.jpg'),
      whyWeGo: ['Tyto uličky propojí Kiyomizu-deru s pozdější částí dne bez nutnosti hledat další atrakci.', 'Jsou tu hlavně pro atmosféru, pomalou procházku a možnost všimnout si detailů starého Kjóta.'],
      highlights: ['dlážděné svahy', 'dřevěné fasády', 'malé pohledy do bočních uliček'],
      practicalTip: 'Není potřeba stihnout každý obchod; nechte prostor na pohodovou chůzi a další část programu.',
      mapsUrl: maps('Sannenzaka Ninenzaka Kyoto'),
    }),
    guide({
      id: 'gion', time: 'podvečer', name: 'Gion', japanese: '祇園',
      image: photo('assets/places/gion.jpg', 'Dřevěná fasáda v ulici Shinbashi-dori v Gionu.', 'Basile Morin', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Facade_of_a_dwelling_with_sudare,_wooden_balustrades_and_yellow_lamp,_Shinbashi-dori,_Gion,_Kyoto,_Japan.jpg'),
      whyWeGo: ['Gion je večerní tečka za pěším dnem východním Kjótem.', 'Nejde o hledání konkrétního představení, ale o vnímání čtvrti, která má po setmění jiný rytmus než ráno.'],
      highlights: ['dřevěné průčelí domů', 'světlo v úzkých ulicích', 'klidnější tempo při procházce'],
      practicalTip: 'Zůstaňte na veřejných ulicích a berte čtvrť jako místo k pozorování, ne jako kulisu pro dlouhé focení lidí.',
      mapsUrl: maps('Gion Kyoto'),
    }),
    guide({
      id: 'kodai-ji', time: 'odpoledne', name: 'Kōdai-ji', japanese: '高台寺',
      image: photo('assets/places/kodai-ji.jpg', 'Areál chrámu Kōdai-ji v Kjótu.', 'Guilhem Vellut', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Kodai-ji_Temple_@_Kyoto_(13310546423).jpg'),
      whyWeGo: ['Kōdai-ji je klidná mezizastávka mezi čajovým obřadem a večerním Gionem.', 'Dává odpoledni jedno konkrétní místo, aniž by rozbilo pěší tempo historické části Kjóta.'],
      highlights: ['chrámový areál', 'přechod od uliček ke Gionu', 'pomalejší odpolední rytmus'],
      practicalTip: 'Po čajovém obřadu nechte dostatečnou časovou rezervu; rezervace má v tomto dni přednost.',
      mapsUrl: maps('Kodai-ji Temple Kyoto'),
    }),
  ],
  'kyoto-26': [
    guide({
      id: 'arashiyama-bamboo-grove', time: 'ráno', name: 'Arashiyama Bamboo Grove', japanese: '嵐山竹林',
      image: photo('assets/places/arashiyama.jpg', 'Bambusový háj v Arashiyamě v Kjótu.', 'Basile Morin', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Bamboo_Grove,_Arashiyama,_Kyoto,_Japan.jpg'),
      whyWeGo: ['Arashiyama dává dni před samurajským workshopem jeden přírodní motiv a jasný začátek.', 'Bambusový háj má fungovat jako krátká společná procházka, ne jako seznam dalších míst k odběhnutí.'],
      highlights: ['vysoký bambus nad cestou', 'zvuk a stín háje', 'kontrast s městem'],
      practicalTip: 'Počítejte s návratem podle programu workshopu; ranní část je schválně časově ohraničená.',
      mapsUrl: maps('Arashiyama Bamboo Grove'),
    }),
  ],
  'osaka-27': [
    guide({
      id: 'fushimi-inari', time: 'ráno', name: 'Fushimi Inari Taisha', japanese: '伏見稲荷大社',
      image: photo('assets/places/fushimi-inari.jpg', 'Cesta torii s lucernou ve Fushimi Inari Taisha.', 'Basile Morin', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg'),
      whyWeGo: ['Je to poslední ranní obraz Kjóta před přesunem do Ósaky: červené brány a chůze místo dalšího městského programu.', 'Stačí soustředit se na společnou cestu branami a pak zachovat energii na odpoledne v novém městě.'],
      highlights: ['řady červených torii', 'lucerny u cesty', 'přechod od Kjóta k Ósace'],
      practicalTip: 'Řiďte se plánovaným přesunem do hotelu; není potřeba měnit den na dlouhý výstup.',
      mapsUrl: maps('Fushimi Inari Taisha'),
    }),
    guide({
      id: 'den-den-town', time: 'odpoledne', name: 'Den Den Town', japanese: 'でんでんタウン',
      image: photo('assets/places/den-den-town.jpg', 'Ulice Den Den Town v Ósace.', 'Fabio Achilli', 'CC BY 2.0', 'https://commons.wikimedia.org/wiki/File:Den_Den_Town,_Osaka_(44195719941).jpg'),
      whyWeGo: ['Po přesunu do Ósaky je Den Den Town krátká a přirozená zastávka pro hry, techniku a popkulturu.', 'Zapadá do dne jako lehká část mezi ochutnávkami a večerním Dotonbori, ne jako nákupní mise.'],
      highlights: ['výlohy s hrami a technikou', 'atmosféru čtvrti', 'krátké zastávky podle zájmu'],
      practicalTip: 'Držte si čas na Dotonbori; obě místa jsou v programu, ale není nutné projít každý obchod.',
      mapsUrl: maps('Den Den Town Osaka'),
    }),
    guide({
      id: 'dotonbori', time: 'večer', name: 'Dotonbori', japanese: '道頓堀',
      image: photo('assets/places/dotonbori.jpg', 'Neonové nápisy v Dotonbori v Ósace v noci.', 'Martin Falbisoner', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg'),
      whyWeGo: ['Dotonbori je večerní obraz první Ósaky: světla, lidé a úplně jiný rytmus než Kjóto.', 'Má to být společná procházka a večeře podle chuti, ne seznam povinných podniků.'],
      highlights: ['neonové nápisy u kanálu', 'večerní pohyb čtvrti', 'atmosféru Ósaky po setmění'],
      practicalTip: 'Jídlo zůstává flexibilní; vybírejte podle energie a front, ne podle snahy stihnout všechno.',
      mapsUrl: maps('Dotonbori Osaka'),
    }),
  ],
  'osaka-29': [
    guide({
      id: 'osaka-castle-park', time: 'ráno', name: 'Osaka Castle Park', japanese: '大阪城公園',
      image: photo('assets/places/osaka-castle.jpg', 'Hlavní věž hradu Ósaka při pohledu z jihu.', 'DXR', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Osaka_Castle,_Keep_tower,_South_view_20190415_1.jpg'),
      whyWeGo: ['Hradní park otevírá hravý den jedním velkým místem venku, než se přesuneme do čtvrtí a vnitřních aktivit.', 'Je to ranní procházka, ne důvod měnit tempo dne na dlouhou prohlídku každé části areálu.'],
      highlights: ['hlavní věž v parku', 'otevřený prostor po ranním metru', 'přechod k odpoledni v Umedě'],
      practicalTip: 'Po ranní zastávce pokračujte podle zbytku dne; odpolední Round1 je hlavní hravá aktivita.',
      mapsUrl: maps('Osaka Castle Park'),
    }),
  ],
  'nara-28': [
    guide({
      id: 'nara-park', time: 'během dne', name: 'Nara Park', japanese: '奈良公園',
      image: photo('assets/places/nara-park.jpg', 'Jelen v parku Nara.', 'DimiTalen', 'CC0', 'https://commons.wikimedia.org/wiki/File:Deer_(Cervus_nippon_centralis)_drinking_from_a_ditch,_Nara_Park,_Nara,_2016.jpg'),
      whyWeGo: ['Nara Park spojuje cestu k Tōdai-ji s lehčím rodinným tempem mezi městskými dny.', 'Je to prostor na procházku, pozorování jelenů a odpočinek, ne další den s přesným rozpisem po minutách.'],
      highlights: ['jeleny v otevřeném parku', 'cestu směrem k Tōdai-ji', 'volnější rodinné tempo'],
      practicalTip: 'Nechte dostatek času na přechod parkem; Tōdai-ji je hlavní bod dne a nemá se kvůli obědu uspěchat.',
      mapsUrl: maps('Nara Park'),
    }),
    guide({
      id: 'todai-ji', time: 'během dne', name: 'Tōdai-ji', japanese: '東大寺',
      image: photo('assets/places/todai-ji.jpg', 'Hlavní síň Tōdai-ji v Naře.', 'Wiiii', 'CC BY-SA 3.0', 'https://commons.wikimedia.org/wiki/File:Tōdai-ji_Kon-dō.jpg'),
      whyWeGo: ['Tōdai-ji je jeden jasný cíl naráckého dne, který dává procházce parkem směr.', 'Po lehčím tempu v parku je to společný okamžik, kdy se všichni zastaví u opravdu velkého prostoru.'],
      highlights: ['velkou dřevěnou síň', 'velkého Buddhu', 'měřítko chrámového areálu'],
      practicalTip: 'Nedovolte, aby se hlavní návštěva ztratila v dlouhé polední frontě; v programu má přednost.',
      mapsUrl: maps('Todai-ji'),
    }),
  ],
  'miyajima-30': [
    guide({
      id: 'itsukushima', time: 'odpoledne a večer', name: 'Itsukushima Shrine a torii', japanese: '厳島神社',
      image: photo('assets/places/itsukushima.jpg', 'Torii svatyně Itsukushima při západu slunce na Mijadžimě.', 'Jakub Hałun', 'CC BY 4.0', 'https://commons.wikimedia.org/wiki/File:Itsukushima-jinja_torii_at_sunset,_Miyajima,_Japan,_20240816_1812_4144.jpg'),
      whyWeGo: ['Po cestě z Ósaky je Mijadžima záměrně pomalejší: svatyně a torii jsou hlavní motiv, ne začátek dalšího nabitého programu.', 'Večerní ostrov dává celé části cesty prostor zvolnit po velkých městech.'],
      highlights: ['torii u moře', 'cestu směrem ke svatyni', 'večerní atmosféru ostrova'],
      practicalTip: 'Neplňte večer dalšími zastávkami; právě pomalé tempo po odjezdu denních návštěvníků je součástí plánu.',
      mapsUrl: maps('Itsukushima Shrine'),
    }),
  ],
  'naoshima-01': [
    guide({
      id: 'yellow-pumpkin', time: 'e-bike den', name: 'Yellow Pumpkin', japanese: '黄かぼちゃ',
      image: photo('assets/places/yellow-pumpkin.jpg', 'Žlutá dýně na Naošimě.', 'KimonBerlin', 'CC BY-SA 2.0', 'https://commons.wikimedia.org/wiki/File:With_Pumpkin_(7046726329).jpg'),
      whyWeGo: ['Žlutá dýně je jeden z mála konkrétních motivů, které dávají e-bike dni na Naošimě společný obraz.', 'Přijde až po Honmuře a pobřežní jízdě, takže funguje spíš jako zastávka na cestě k pláži než jako cíl, který je nutné dlouze řešit.'],
      highlights: ['žlutou dýni u moře', 'pobřežní cestu na kole', 'spojení umění a ostrova'],
      practicalTip: 'Řiďte se podmínkami půjčovny kol a nenechávejte je v zakázaných muzejních zónách.',
      mapsUrl: maps('Yellow Pumpkin Naoshima'),
    }),
  ],
  'naoshima-02': [
    guide({
      id: 'chichu-art-museum', time: 'hlavní rezervace dne', name: 'Chichu Art Museum', japanese: '地中美術館',
      image: photo('assets/places/chichu.jpg', 'Vstupní cesta k Chichu Art Museum na Naošimě.', '663highland', 'CC BY 2.5', 'https://commons.wikimedia.org/wiki/File:Chichu_art_museum01s2560.jpg'),
      whyWeGo: ['Chichu je potvrzený hlavní zážitek dne a důvod, proč má Naoshima druhý den zůstat jednoduchá.', 'Po návštěvě už není potřeba dokazovat, že jsme viděli všechno: odpoledne patří pláži, koupání nebo odpočinku podle chuti.'],
      highlights: ['architekturu zasazenou do terénu', 'soustředěný čas na jedno místo', 'pomalé pokračování dne'],
      practicalTip: 'Časovaný vstup má přednost; přesný odjezd shuttle ověřte předem a nechte si rezervu.',
      mapsUrl: maps('Chichu Art Museum'),
    }),
  ],
  'himeji-03': [
    guide({
      id: 'himeji-castle', time: 'odpoledne', name: 'Himeji Castle', japanese: '姫路城',
      image: photo('assets/places/himeji.jpg', 'Hlavní věž hradu Himedži.', 'Drivephotographer', 'CC0', 'https://commons.wikimedia.org/wiki/File:Himeji_castle.jpg'),
      whyWeGo: ['Himedži je jediná velká zastávka na cestě zpět do Tokia, proto má být silná, ale přehledná.', 'Hrad a zahrada dávají cestovnímu dni jeden společný cíl, než se vrátíme na rezervovaný vlak do Tokia.'],
      highlights: ['bílou hlavní věž', 'pohled od Otemae-dori', 'zahradu Koko-en, pokud vyjde čas'],
      practicalTip: 'Čas návratu k nádraží plánujte podle rezervovaného NOZOMI 46; ten má přednost před dalším programem.',
      mapsUrl: maps('Himeji Castle'),
    }),
    guide({
      id: 'koko-en', time: 'po hradu', name: 'Koko-en Garden', japanese: '好古園',
      image: photo('assets/places/koko-en.jpg', 'Zahrada Koko-en v Himedži.', 'ScribblingGeek', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Koko-en,_Himeji.jpg'),
      whyWeGo: ['Koko-en je klidný protějšek k velkému hradu, pokud po návštěvě vyjde plánovaný čas.', 'Je to poslední pomalejší zastávka před návratem na nádraží a večerním Nozomi do Tokia.'],
      highlights: ['zahradní cesty', 'kontrast k měřítku hradu', 'pomalé zakončení Himedži'],
      practicalTip: 'Hlídáme návrat k nádraží: rezervovaný NOZOMI 46 má vždy přednost.',
      mapsUrl: maps('Koko-en Garden Himeji'),
    }),
  ],
  'tokyo-04': [
    guide({
      id: 'senso-ji', time: 'dopoledne', name: 'Sensō-ji', japanese: '浅草寺',
      image: photo('assets/places/sensoji.jpg', 'Hlavní síň chrámu Sensō-ji v Asakuse.', 'Jakub Hałun', 'CC BY 4.0', 'https://commons.wikimedia.org/wiki/File:Main_Hall,_Sensō-ji_Temple,_Tokyo,_20240824_1104_5619.jpg'),
      whyWeGo: ['Poslední společné dopoledne začíná pěšky v Asakuse, bez další složité dopravy před sushi a Akihabarou.', 'Sensō-ji je tak klidný poslední obraz staršího Tokia, než se den přepne do her, obchodů a odletu.'],
      highlights: ['hlavní chrámovou síň', 'Nakamise a boční uličky', 'pěší tempo Asakusy'],
      practicalTip: 'Zůstaňte v pěší oblasti kolem hotelu a nekomplikujte si dopoledne dalšími přesuny.',
      mapsUrl: maps('Senso-ji'),
    }),
    guide({
      id: 'akihabara', time: 'odpoledne', name: 'Akihabara', japanese: '秋葉原',
      image: photo('assets/places/akihabara.jpg', 'Herní jeřáby v Akihabaře v Tokiu.', 'Basile Morin', 'CC BY-SA 4.0', 'https://commons.wikimedia.org/wiki/File:Claw_cranes_with_kawaii_stuffed_mascots_and_a_woman_playing,_Akihabara,_Chiyoda,_Tokyo,_Japan.jpg'),
      whyWeGo: ['Akihabara je poslední společné odpoledne pro věci, které jsou dětem opravdu blízké: hry, gachapon a techniku.', 'Po Senso-ji a sushi přináší jinou energii, ale končí včas návratem do hotelu před odjezdem na letiště.'],
      highlights: ['Yodobashi', 'gachapon', 'rodinné herny a arkády'],
      practicalTip: 'Nastavte si předem čas návratu k hotelu — večerní odjezd na Hanedu se nemá stát poslední stresovou hrou.',
      mapsUrl: maps('Akihabara Tokyo'),
    }),
  ],
};
