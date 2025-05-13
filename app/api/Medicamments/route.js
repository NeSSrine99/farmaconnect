const Medicamments = [
  {
    id: 23,
    marque: "Panadol",
    nom: "Panadol Extra",
    prix: "12.00 TND",
    discount: "15.00 TND",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ2D0gyX5s0CKEsQk9UrN_hAcrJvY87LUG3A&s",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Analgésique et antipyrétique pour soulager douleurs et fièvre.",
    category: "Médicaments",
  },
  {
    id: 24,
    marque: "Voltaren",
    nom: "Voltaren Emulgel",
    prix: "25.00 TND",
    discount: "30.00 TND",
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/voltaren-delta/en_CA/capa-updates/voltaren-emugel-back-muscle-pain-ff-740.png?auto=format",
    nouveaux: "Top Vente",
    rupture: "En stock",
    Description:
      "Gel anti-inflammatoire pour douleurs musculaires et articulaires.",
    category: "Médicaments",
  },
  {
    id: 25,
    marque: "Dafalgan",
    nom: "Dafalgan 500mg",
    prix: "10.00 TND",
    discount: "12.00 TND",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIeqSYIpHwsr2dOgmtXlOJqoDXZNU9niYUCQ&s",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description: "Traitement des douleurs modérées et fièvre légère.",
    category: "Médicaments",
  },
  {
    id: 26,
    marque: "Nurofen",
    nom: "Nurofen 400mg",
    prix: "15.00 TND",
    discount: "18.00 TND",
    image:
      "https://purepharmacy.ie/cdn/shop/products/nurofen-express-maximum-strength-tablets-400mg-24-pack_large.jpg?v=1686559014",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Soulagement des douleurs et inflammations légères à modérées.",
    category: "Médicaments",
  },
  {
    id: 27,
    marque: "Advil",
    nom: "Advil 200mg",
    prix: "13.00 TND",
    discount: "16.00 TND",
    image:
      "https://www.pharmacie-en-ligne.com/26079-large_default/advil-200mg-douleurs-fi%C3%A8vre-30-comprim%C3%A9s-enrob%C3%A9s.jpg",
    nouveaux: "Top Vente",
    rupture: "En stock",
    Description:
      "Soulagement rapide des douleurs légères à modérées et fièvre.",
    category: "Médicaments",
  },
  {
    id: 28,
    marque: "Doliprane",
    nom: "Doliprane 1000mg",
    prix: "11.50 TND",
    discount: "14.00 TND",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1TZzEaMmBDbzz6Y42L57_tgbk5fK7s85Bg&s",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Analgésique et antipyrétique pour douleurs fortes et fièvre élevée.",
    category: "Médicaments",
  },
  {
    id: 29,
    marque: "Efferalgan",
    nom: "Efferalgan Vitamine C",
    prix: "14.00 TND",
    discount: "17.00 TND",
    image:
      "https://www.pharmacie-en-ligne.com/29499-thickbox_default/efferalgan-vitamine-c-16-comprimes-effervescents.jpg",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Soulagement des douleurs et renforcement du système immunitaire.",
    category: "Médicaments",
  },
  {
    id: 30,
    marque: "Spasfon",
    nom: "Spasfon Lyoc",
    prix: "19.00 TND",
    discount: "22.00 TND",
    image:
      "https://www.pharma-gdd.com/media/cache/resolve/product_show/746576612d73706173666f6e2d6c796f632d38306d672d7831302d66616365c41388d8.jpg",
    nouveaux: "Top Vente",
    rupture: "En stock",
    Description:
      "Traitement des douleurs spasmodiques abdominales et urinaires.",
    category: "Médicaments",
  },
  {
    id: 31,
    marque: "Gripex",
    nom: "Gripex Max",
    prix: "8.50 TND",
    discount: "10.00 TND",
    image: "https://azcdn.doz.pl/image/d/product/af4fd3cb-scale-350x350.jpg",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description: "Traitement des symptômes du rhume et de la grippe.",
    category: "Médicaments",
  },
  {
    id: 32,
    marque: "Thermacare",
    nom: "Thermacare Patch",
    prix: "18.00 TND",
    discount: "22.00 TND",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJac4Inp-m9nEEZxzoQIgLB72kMQVKh-BdTQ&s",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Patch chauffant pour soulager les douleurs musculaires et articulaires.",
    category: "Médicaments",
  },
  {
    id: 33,
    marque: "Calmosine",
    nom: "Calmosine Enfants",
    prix: "15.00 TND",
    discount: "18.00 TND",
    image:
      "https://calmosine.com/wp-content/uploads/2023/01/CALMOSINE_FICHE_PRODUIT-2025_DIG-1-scaled.jpg",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Infusion apaisante pour enfants contre les coliques et les douleurs abdominales.",
    category: "Médicaments",
  },
  {
    id: 34,
    marque: "Mucosolvan",
    nom: "Mucosolvan 30mg",
    prix: "20.00 TND",
    discount: "25.00 TND",
    image:
      "https://www.nahdionline.com/_next/image?url=https%3A%2F%2Fecombe.nahdionline.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F0%2F100020519_mainimage_3.jpg%3Fwidth%3D500%26height%3D500%26canvas%3D500%2C500%26optimize%3Dhigh%26bg-color%3D255%2C255%2C255%26fit%3Dbounds&w=256&q=75",
    nouveaux: "Top Vente",
    rupture: "En stock",
    Description:
      "Traitement des affections des voies respiratoires supérieures.",
    category: "Médicaments",
  },
  {
    id: 35,
    marque: "L52",
    nom: "L52",
    prix: "8.00 TND",
    discount: "10.00 TND",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9mBQFZHX-7_uNRtB575ykwepbBVZcqZW2ww&s",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Traitement des troubles digestifs et des douleurs abdominales.",
    category: "Médicaments",
  },
  {
    id: 36,
    marque: "Pansement",
    nom: "Pansement Compeed",
    prix: "5.00 TND",
    discount: "7.00 TND",
    image:
      "https://www.compeed.fr/wp-content/uploads/sites/33/fly-images/2392/Blister-Medium_packshot-520x600-c.png",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Pansement hydrocolloïde pour soulager et accélérer la guérison des ampoules.",
    category: "Produits de soin",
  },
  {
    id: 37,
    marque: "Bion 3",
    nom: "Bion 3",
    prix: "30.00 TND",
    discount: "35.00 TND",
    image:
      "https://images.ctfassets.net/780fwmx0jzhx/8j1Jv73e4psHANsjSeSr0/c41daf35cf2649b2ae278f5e9e93d09c/Bion3_Gummies_Energy_FR_gummies.png",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Complément alimentaire pour renforcer les défenses immunitaires.",
    category: "Vitamines",
  },
  {
    id: 38,
    marque: "Vicks",
    nom: "Vicks VapoRub",
    prix: "10.00 TND",
    discount: "12.00 TND",
    image:
      "https://images-cdn.ubuy.co.in/66788d640cd737179d5898e1-vicks-vaporub-topical-cough-chest-rub.jpg",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Baume apaisant pour soulager la toux et les douleurs musculaires.",
    category: "Produits de soin",
  },
  {
    id: 39,
    marque: "Osteocare",
    nom: "Osteocare Plus",
    prix: "22.00 TND",
    discount: "26.00 TND",
    image:
      "https://www.vitabiotics.com/cdn/shop/products/osteocare_plus_front_CTOST084C1T28WL1E_5ec16e9e-3eff-4033-924b-e17df78472a3.png?crop=center&height=1024&v=1676470293&width=1024",
    nouveaux: "Top Vente",
    rupture: "En stock",
    Description:
      "Complément alimentaire pour maintenir une bonne santé osseuse.",
    category: "Vitamines",
  },
  {
    id: 40,
    marque: "Biogaran",
    nom: "Biogaran Vitamine D3",
    prix: "8.00 TND",
    discount: "10.00 TND",
    image:
      "https://cdn.pim.mesoigner.fr/mesoigner/b3546a7e566d0f80635d07a66147dd5d/mesoigner-thumbnail-1000-1000-inset/522/903/cholecalciferol-biogaran-100-000-ui-solution-buvable-en-ampoule.webp",
    nouveaux: "Recommandé",
    rupture: "En stock",
    Description:
      "Complément alimentaire pour renforcer les os et le système immunitaire.",
    category: "Vitamines",
  },
  {
    id: 41,
    marque: "Inofolic",
    nom: "Inofolic",
    prix: "27.00 TND",
    discount: "30.00 TND",
    image: "https://pharma-shop.tn/1759-large_default/inofolic-sachets-b30.jpg",
    nouveaux: "Nouveau",
    rupture: "En stock",
    Description:
      "Complément alimentaire pour réguler le cycle menstruel et améliorer la fertilité.",
    category: "Produits de soin",
  },
];
export async function GET(request) {
  return new Response(JSON.stringify(Medicamments), { status: 200 });
}
