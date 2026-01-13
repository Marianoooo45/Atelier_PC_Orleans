// Builds data with detailed stories
export const builds = [
    {
        id: 1,
        slug: "rtx-4090-beast",
        title: "RTX 4090 Beast",
        subtitle: "La config ultime pour un streamer exigeant",
        description: "Config ultra haut de gamme pour gaming 4K et création de contenu",
        image: "/build1.png",
        specs: {
            cpu: "Intel Core i9-14900K",
            gpu: "RTX 4090 24GB (ASUS TUF Gaming OC)",
            ram: "64GB DDR5-6000 CL30 (Corsair Vengeance RGB)",
            storage: "4TB NVMe PCIe 4.0 (WD Black SN850X)",
            cooling: "Corsair iCUE H150i ELITE LCD XT 360mm",
            case: "Corsair 5000D AIRFLOW",
            psu: "ASUS TUF Gaming 1000W 80+ Gold",
            motherboard: "ASUS ROG STRIX Z790-F Gaming WiFi",
            monitor: "ASUS ROG Swift OLED PG27AQDM 27\" 1440p 240Hz",
            audio: "SteelSeries Arctis Nova Pro",
        },
        budget: "~3400€",
        clientType: "Streamer / Créateur de contenu",
        clientStory: `
            Thomas, streamer sur Twitch avec une communauté grandissante, avait besoin d'une machine capable de streamer en 1080p60 tout en jouant en 4K sans aucun compromis.

            Son ancien PC, un config de 2019, commençait à montrer ses limites : drops de frames pendant les streams, temps de rendu vidéo interminables, et impossibilité de jouer aux derniers AAA dans de bonnes conditions.
        `,
        challenge: `
            Le défi principal était de créer une config silencieuse malgré la puissance demandée. Thomas streame depuis son salon, et le bruit était un critère non-négociable.

            J'ai opté pour un watercooling AIO 360mm avec des ventilateurs Corsair AF120 ELITE pour un airflow optimal tout en maintenant des niveaux sonores acceptables.
        `,
        result: `
            Le résultat ? Une machine qui stream en 4K, encode en temps réel avec NVENC, et reste quasi-silencieuse même après des heures de streaming intensif.

            Thomas a pu upgrader la qualité de son stream et ses viewers ont immédiatement remarqué la différence. Mission accomplie.
        `,
        buildDate: "Décembre 2024",
    },
    {
        id: 2,
        slug: "white-dream",
        title: "White Dream",
        subtitle: "L'élégance au service de la performance",
        description: "Build épuré avec AIO RGB et écran 1440p 165Hz inclus",
        image: "/build2.png",
        specs: {
            cpu: "AMD Ryzen 7 7800X3D",
            gpu: "RX 7900 GRE 16GB (ASRock Steel Legend)",
            ram: "32GB DDR5-6000 CL30 (TEAMGROUP Delta RGB)",
            storage: "2TB NVMe PCIe 4.0 (Crucial P3 Plus)",
            cooling: "ARCTIC Liquid Freezer III 240 A-RGB",
            case: "Deepcool CH560 DIGITAL",
            psu: "Corsair RM850e 80+ Gold",
            motherboard: "ASRock X670E Steel Legend",
            monitor: "AOC CQ32G2S 32\" 1440p 165Hz",
        },
        budget: "~1250€",
        clientType: "Gamer 1440p / Rapport qualité-prix",
        clientStory: `
            Marie, architecte de profession, voulait une machine qui soit aussi belle que performante. Son bureau à domicile est un espace de travail soigné, et le PC devait s'intégrer parfaitement à la déco.

            Elle utilise principalement des logiciels de CAO (AutoCAD, Revit, SketchUp) mais aime aussi se détendre sur des jeux comme Cities Skylines et les Sims en fin de journée.
        `,
        challenge: `
            Trouver des composants blancs de qualité sans sacrifier les performances était le défi. Beaucoup de composants "gaming" sont noirs avec RGB criard, ce qui ne correspondait pas du tout à ses attentes.

            J'ai sourcé des câbles custom blanc et rouge, une carte mère blanche ASUS, et coordonné chaque élément pour créer un ensemble cohérent.
        `,
        result: `
            Le build final ressemble à une pièce de design autant qu'à un PC. Marie l'a installé sur son bureau et reçoit régulièrement des compliments de ses clients en visio.

            Côté performances, Revit tourne comme un charme et les rendus 3D sont 5x plus rapides qu'avec son ancien laptop.
        `,
        buildDate: "Novembre 2024",
    },
    {
        id: 3,
        slug: "starter-gaming",
        title: "Le Starter Gaming",
        subtitle: "Premier PC pour un jeune gamer",
        description: "Config budget optimisée pour le 1080p 144fps",
        image: "/starter_pack.png",
        specs: {
            cpu: "AMD Ryzen 5 7500F",
            gpu: "RTX 3070 8GB (NVIDIA Founders Edition)",
            ram: "32GB DDR5-6200 CL40 (OLOy Blade RGB)",
            storage: "1TB NVMe PCIe 4.0 (TEAMGROUP T-Force G50)",
            cooling: "APNX AP1-V",
            case: "Cooler Master Elite 301 (MicroATX)",
            psu: "MSI MAG A550BN 550W 80+ Bronze",
            motherboard: "ASUS PRIME B650M-A AX6 II",
        },
        budget: "~720€",
        clientType: "Étudiant / Premier PC Gaming",
        clientStory: `
            Lucas, 17 ans, économisait depuis 2 ans pour s'offrir son premier vrai PC gaming. Ses parents, un peu perdus dans le monde du hardware, m'ont contacté pour les guider.

            Lucas jouait jusque-là sur un laptop familial qui peinait à faire tourner Fortnite en low. Son rêve ? Jouer à Valorant et Apex en 144fps smooth.
        `,
        challenge: `
            Avec un budget serré de 720€, chaque euro comptait. L'objectif était de maximiser les performances gaming sans sacrifier la qualité et la durabilité des composants.

            J'ai passé du temps à comparer les prix, dénicher une RTX 3070 Founders Edition d'occasion en excellent état, et choisir des composants qui offrent le meilleur rapport qualité-prix du moment.
        `,
        result: `
            Lucas a maintenant une machine qui fait tourner tous ses jeux en 144fps+ en 1080p high/ultra. Le sourire sur son visage quand il a vu Valorant tourner pour la première fois valait tout l'or du monde.

            Bonus : la config est évolutive. Dans 2-3 ans, un upgrade GPU lui permettra de passer au 1440p sans problème.
        `,
        buildDate: "Octobre 2024",
    },
];

export function getBuildBySlug(slug: string) {
    return builds.find(build => build.slug === slug);
}
