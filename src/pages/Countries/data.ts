import ImgNicaragua from '@assets/nicaragua.png'
import ImgCostaRica from '@assets/costa_rica.png'
import ImgElSalvador from '@assets/el_salvador.png'
import ImgMexico from '@assets/mexico.png'
import ImgColombia from '@assets/colombia.png'
import ImgPeru from '@assets/peru.png'

export interface ICountry {
    name: string
    welcome: string
    map: string
    history: Array<string>
    railways?: Array<string>
}

export const data: Array<ICountry> = [
    {
        name: 'Nicaragua',
        welcome:
            'BIENVENIDO A NICARAGUA, CONOCIDA COMO TIERRA DE LAGOS Y VOLCANES.',
        map: ImgNicaragua,
        history: [
            'Nicaragua, está situada en América Central, su capital es la cuidad de Managua, aunque anteriormente era León. El territorio de Nicaragua tiene una superficie aproximada de 130 374 km² constituyéndose con ello como el país más extenso de América Central.',
            'Nicaragua es famosa por su gran número de fiestas y tradiciones. El colorido, la comida y bebida, la pólvora, la música, los bailes típicos, los desfiles hípicos, las corridas de toros, los promesantes y los actos religiosos, forman parte de estas fiestas que pueden extenderse por varios días, constituyen la esencia de la cultura popular nicaragüense.',
            'En Gastronomía, el plato principal y el más famoso que se encuentra en cada rincón de Nicaragua es la famosa FRITANGA.',
        ],
        railways: [
            'El transporte ferroviario en Nicaragua empezó su historia en la década de 1860, cuando se planificaron las primeras líneas de ferrocarril en Nicaragua.',
            'La primera línea ferroviaria en Nicaragua se abrió en 1882 con líneas por la costa del Pacífico, conectando las ciudades más importantes de la zona.',
            'Una tercera división, la división Central, se construyó entre 1900 y 1902. Esta conectaba las divisiones Occidentales y Orientales entre La Paz Vieja y Managua. Esto hizo obsoleta la conexión a Managua por barco de vapor a través del lago Xolotlán. Por esa razón se abandonó el ramal a Puerto Momotombo en 1903.',
            'La división occidental llegó a tener 93 kilómetros de vías en la línea principal y otros 5,5 kilómetros en las líneas secundarias.',
            'Las obras en la división oriental comenzaron en 1883. En 1884, la línea logró llegar a Masaya y la construcción se concluyó al llegar a Granada en 1886. La división oriental tenía 50 kilómetros de vías en la línea principal y otros 3 kilómetros en las líneas secundarias.',
        ],
    },

    {
        name: 'El Salvador',
        welcome:
            'BIENVENIDOS A EL SALVADOR, CONOCIDO COMO EL PULGARACITO DE AMERICA.',
        map: ImgElSalvador,
        history: [
            'El Salvador, está situada en América Central, su capital es la cuidad de San Salvador. El territorio de El Salvador tiene una superficie aproximada de 21 041 km².',
            'El Salvador es la capital más antigua de Centroamérica en esta se encuentran 7 pueblos indígenas, La cultura popular de El Salvador comprende tradiciones y costumbres ancestrales, provenientes de las culturas prehispánicas, que se fusionaron con las costumbres españolas y africanas.',
            'En Gastronomía, El maíz es el ingrediente principal de la cocina tradicional un gran ejemplo seria lo que la riquísima pupusa con su encurtido de repollo y salsa de tomate.',
        ],
        railways: [
            'Ferrocarriles Nacionales de El Salvador (FENADESAL) es una empresa estatal adscrita a la Comisión Ejecutiva Portuaria Autónoma que presta servicio de transporte ferroviario.',
            'La primera locomotora arribó a este país el 28 de marzo de 1882, procedente de Inglaterra.',
            'Supervisa 554.8 km de líneas de ferrocarril de vía estrecha de 3 pies (914 mm) que conectan ciudades importantes (San Salvador, SantaAna, Acajutla, Sonsonate, Soyapango, Zacatecoluca)y anteriormente estaba enlazado con los ferrocarriles de Guatemala en Anguiatú.',
            'El ferrocarril nació con la finalidad de conectar los puertos con los puntos de consumo más importantes dentro del territorio salvadoreño. Facilitó el transporte de pasajeros y de carga, y potenció importantes acuerdos comerciales, como el primer tratado con Estados Unidos, firmado en 1853, cuando el principal producto de exportación era el café.',
        ],
    },

    {
        name: 'Costa Rica',
        welcome:
            'BIENVENIDOS A COSTA RICA, CONOCIDO COMO EL PAIS MAS VERDE DE LA TIERRA.',
        map: ImgCostaRica,
        history: [
            'Costa Rica, está situada en América Central, su capital es la cuidad de San José. El territorio de Costa Rica tiene superficie de 51 179 km².',
            'Costa Rica la identidad nacional es el mosaico de características que definen la personalidad tica, originado en un cúmulo amplio de vivencias, costumbres, triunfos, hitos, leyendas y estructuras sociopolíticas que hacen a la población costarricense identificarse como tal, sentir arraigo por su entorno y mostrarse orgullosa de su origen.',
            'En gastronomía, es una cocina mestiza, de intenso carácter tropical y mediterráneo, que cuenta con la influencia culinaria aborigen, europea y africana. Su platillo más famoso es el casado es un almuerzo tradicional donde se integran el arroz euroasiático con el frijol precolombino.',
        ],
        railways: [
            'El transporte ferroviario en Costa Rica está a cargo de la institución autónoma y empresa pública estatal, el Instituto Costarricense de Ferrocarriles, Incofer. En Costa Rica se utiliza un ancho de vía de 1067 mm (3\' 6") en todo el país.',
            'La historia del ferrocarril en Costa Rica está profundamente ligada a su desarrollo socioeconómico, en particular con el modelo agroexportador y específicamente con la producción de café y banano. En 1857 instalan las primeras vías férreas en el litoral Pacífico costarricense.',
            'Desde 1910 y hasta 1991 existió un ferrocarril transcontinental haciendo uso de Ferrocarril al Atlántico y el Ferrocarril al Pacífico, atravesando la capital de San José.',
        ],
    },
    {
        name: 'Mexico',
        welcome:
            'BIENVENIDO A MEXICO, CONOCIDO COMO EL ESTADOS UNIDOS MEXICANOS.',
        map: ImgMexico,
        history: [
            'Mexico, esta situada en America del Norte, su capital es la Cuidad de México. El territorio de Mexico tiene una superficie de 1 964 375 km².',
            'México representan la identidad de la patria y refuerzan un sentimiento de pertenencia que busca la unión de aquellos que habitan el país. En términos étnicos y culturales, lo mexicano corresponde únicamente a todo aquello que es referido a la cultura mexica; por lo tanto, étnicamente los mexicanos son aquellos a quienes se conoce también como pueblos nahuas y cuya lengua es el idioma náhuatl.',
            'En gastronomía, el origen de la actual cocina mexicana se establece durante la colonización española, siendo una mezcla de las comidas de España y los indios nativos. De origen indígena es el maíz, el chile (conocido en casi todo el mundo hispanoparlante como ají), los frijoles, calabazas, aguacates, camote, jitomates, cacao, el guajolote y muchas frutas y condimentos más. Su platillo más famoso son los tacos al pastor y todo tipo de tacos.',
        ],
        railways: [
            'La República Mexicana posee una red ferroviaria que actualmente operan concesionarios del sector privado de la economía nacional, principalmente para el transporte de carga multimodal, y cuya extensión es mayor a los 26 mil kilómetros1 conectando los principales centros industriales con los puertos marítimos y conexiones fronterizas al extranjero.',
            'La historia del ferrocarril en México comenzó en 1837.',
        ],
    },
    {
        name: 'Colombia',
        welcome:
            'BIENVENIDOS A COLOMBIA, CONOCIDO COMO EL SEGUNDO PRODUCTOR MUNDIAL DEL CAFÉ.',
        map: ImgColombia,
        history: [
            'Colombia, está situada en América del Sur, su capital es la cuidad de Bogotá. El territorio de Colombia tiene una superficie 1 141 748 km², siendo el vigesimoquinto país más grande del mundo y el séptimo más grande América.',
            'Colombia es un país de regiones en el que la heterogeneidad obedece a variados factores como el aislamiento geográfico y la dificultad de acceso entre las diferentes zonas del país, la cual también comparte rasgos fundamentales con otras culturas hispanoamericanas en manifestaciones como la religión, la música, los bailes, las fiestas, las tradiciones, el dialecto, entre otras.',
            'En gastronomía, no tiene un plato nacional ya que esta es muy variada y cambia según cada región. Entre los platos regionales más representativos se encuentran el sancocho, la arepa, el ajiaco santafereño, la bandeja paisa.',
        ],
    },
    {
        name: 'Perú',
        welcome: 'BIENVENIDOS A PERÚ, CONOCIDO COMO EL PAIS MULTICULTURAL',
        map: ImgPeru,
        history: [
            'Perú, está situada en América del sur, su capital es la cuidad de Lima. El territorio de Perú tiene una superficie 1 285 215 km², Su territorio se compone de diversos paisajes: los valles, las mesetas y las altas cumbres de los Andes se despliegan al oeste hacia la costa desértica, desde el norte hasta el sureste del país y el este hacia la Amazonia. Es uno de los países con mayor diversidad biológica14 y mayores recursos minerales del mundo.',
            'Perú tiene sus raíces principales en las tradiciones amerindias y españolas,352 aunque también ha sido influenciada por diversos grupos étnicos de África, Asia y Europa. La tradición artística peruana se remonta a la elaborada cerámica, textilería, orfebrería y escultura de las civilizaciones del Antiguo Perú. Los incas mantuvieron esos oficios e hicieron grandes logros arquitectónicos incluyendo la construcción de Machu Picchu.',
            'En gastronomía, la cocina peruana es considerada la más variada del mundo, tiene el récord Guiness a la mayor variedad y diversidad de platos típicos en el mundo, tiene una gran influencia por la gastronomía Japonés e Italiana, el palto más representativos son el ceviche en la costa, la pachamanca en la sierra y el juane en la selva.',
        ],
    },
]

export const countriesList: Array<string> = data.map(item => item.name)
