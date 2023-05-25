import Img1 from "../../../assets/timelineImages/Img1.jpg";
import Img2 from "../../../assets/timelineImages/Img2.jpg";
import Img3 from "../../../assets/timelineImages/Img3.jpg";
import Img4 from "../../../assets/timelineImages/Img4.jpg";
import Img5 from "../../../assets/timelineImages/Img5.jpg";
import Img6 from "../../../assets/timelineImages/Img6.jpg";
import Img7 from "../../../assets/timelineImages/Img7.jpg";
import Doc1 from "../../../assets/docs/Cartilla1LosYamparas.pdf";
import Doc2 from "../../../assets/docs/Cartilla2LaFundacion.pdf";
import Doc3 from "../../../assets/docs/Cartilla3CiudadUniversitaria.pdf";
import Doc4 from "../../../assets/docs/Cartilla4Sublevacionesindígenas.pdf";
import Doc5 from "../../../assets/docs/Cartilla5Revolución25demayo.pdf";
import Doc6 from "../../../assets/docs/Cartilla6LasRepubliquetas.pdf";
import Doc7 from "../../../assets/docs/Cartilla7AsambleaConstituyenteBicentenario.pdf";
import { Pajarito } from "../../../assets/icons/pajarito";

export const timelineItems = [
    {
        id: 1,
        title: "Los yampara",
        content: [
            "Los yampara a fines del siglo XVI y principios del XVII habitaban en los valles alrededor de Wayapaccha en lo que es la actual ciudad de Sucre, provincia Oropeza, en el norte del actual departamento de Chuquisaca.",
            " El incario, del que los yampara formaron parte por varias décadas, estableció en territorio de estos el más importante centro estatal de Charcas. Las autoridades yampara administraban las estructuras militares, guarniciones, trojes (qollqas), templos y tambos que se distribuían por toda la línea fronteriza que hacia el este demarcaba simbólicamente su territorio.",
        ],
        icon: <Pajarito />,
        image: Img1,
        bgcolor: "#870950",
        doc: Doc1,
    },
    {
        id: 2,
        title: "La fundación",
        content: [
            "Pasando el río Pilcomayo los españoles ingresaron en tierras de los yampara. Su cacique principal Aymoro salió a su encuentro logrando un pacto con los mismos, consiguiendo ventajas para su linaje y población como ser la propiedad de sus extensas tierras, tributos y exención posterior del trabajo de la mita en las minas de Potosí.",
            "Con las informaciones llevadas al Cuzco por sus hermanos sobre el pacto con los yamparas, así como la riqueza argentífera de Porco, Francisco Pizarro vio la conveniencia de establecer en el Collasuyo un poblado hispano en Chuquisaca. Eligió para el cometido al capitán Pedro Anzúrez de Campo Redondo llamado Peránzures, quien cumpliría esta misión el 16 de abril de 1540.",
        ],
        icon: <Pajarito />,
        image: Img2,
        bgcolor: "#057084",
        doc: Doc2,
    },
    {
        id: 3,
        title: "Ciudad Universitaria",
        content: [
            "Desde principios del siglo XVII se efectuarían desde La Plata diversos pedidos de creación de una Universidad en Chuquisaca a concretarse legal y regularmente a partir del año 1624.",
            "Los estudiantes de las provincias del Alto Perú y del Río de La Plata acudían a Chuquisaca   atraídos por la fama de sus estudios, los que adquirían mayor relevancia por el hecho de ser la ciudad sede de la Real Audiencia de Charcas ante la cual se tramitaban los asuntos administrativos, políticos y civiles de todas las provincias del Alto Perú y del Río de La Plata.",
        ],
        icon: <Pajarito />,
        image: Img3,
        bgcolor: "#0A0516",
        doc: Doc3,
    },
    {
        id: 4,
        title: "Sublevaciones indígenas",
        content: [
            "Tomás Katari llevó adelante la sublevación indígena más importante en este territorio en 1780, la misma que se constituyó en el primer acontecimiento de este tipo en el continente, dándosele muerte en una acción desarrollada en la región de Chataquila. Dámaso y Nicolás Katari tomaron la posta de su hermano Tomás, cada uno por separado.",
            "Esta sublevación indígena en Charcas, estuvo ligada a las acciones desarrolladas por Gabriel Condorcanqui (Tupac Amaru) en el Cuzco y posteriormente las acciones desarrolladas por Tupac Katari (quien tomaría su nombre tanto de los Katari como de Tupac Amaru) que consolidarían la mirada rebelde indígena de la región y serían determinantes a la hora de consolidar la caída del poder colonial.",
        ],
        icon: <Pajarito />,
        image: Img4,
        bgcolor: "#A5084A",
        doc: Doc4,
    },
    {
        id: 5,
        title: "Revolución del 25 de Mayo de 1809",
        content: [
            "Son numerosos los antecedentes que determinaron los hechos del 25 de Mayo de 1809 en Chuquisaca. Entre los más importantes se pueden señalar: las reformas borbónicas y la invasión napoleónica a España, así como los constantes conflictos entre autoridades en la Plata, hechos que fueron alentando, conjuntamente la influencia de pensadores de la ilustración, un caldo de cultivo para lo que sería los hechos que acaecerían en lo que conocemos como el “primer grito libertario de América”.",
        ],
        icon: <Pajarito />,
        image: Img5,
        bgcolor: "#7B3406",
        doc: Doc5,
    },
    {
        id: 6,
        title: "Las Republiquetas",
        content: [
            "Los grupos guerrilleros que se encontraban en un determinado territorio ofreciendo resistencia ante las fuerzas realistas, fueron denominadas como “republiquetas”. Estas fuerzas que se encontraban afincadas en el corazón de Charcas tenían una independencia de decisiones, mayor en algunos casos que en otros y un nivel de sujeción variable en relación de Río de La Plata, donde se había instalado una Junta independiente en Buenos Aires.",
        ],
        icon: <Pajarito />,
        image: Img6,
        bgcolor: "#752469",
        doc: Doc6,
    },
    {
        id: 7,
        title: "La Asamblea Constituyente. El Acta del 6 de agosto de 1825",
        content: [
            "Se formó una comisión para redactar la “Declaración de la Independencia” firmada por 48 miembros de la Asamblea Constituyente en forma unánime.",
            "El acta sería firmada el sábado 6 de agosto de 1825. Bolivia sería creada con una deuda hacia su población mayoritaria, los indígenas, los que relegados esperarían durante más de siglo y medio para constituir mediante una instancia similar (una Asamblea constituyente) el actual Estado Plurinacional de Bolivia, que actualmente rige su destino.",
        ],
        icon: <Pajarito />,
        image: Img7,
        bgcolor: "#015151",
        doc: Doc7,
    },
];
