import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-teal-50 via-teal-400 to-cyan-700 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Logo */}
        <a href="/" className="flex items-end gap-2 w-10 h-12">
          <img
            src="/FarmaconnectLogo.svg"
            alt="logo"
            width={40}
            height={40}
            className="mb-2"
          />
          <span className="text-2xl font-bold bg-[conic-gradient(from_180deg_at_50%_50%,_#26ECF6_0deg,_#18959C_189deg,_#0D5356_360deg)] bg-clip-text text-transparent">
            Farmaconnect
          </span>
        </a>

        {/* Grids */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-textDark">
          {/* Paiement */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Moyens de Paiement
            </h3>
            <div className="flex flex-wrap gap-4">
              <img
                src="/footer/Mastercard 2.png"
                alt="Mastercard"
                className="w-24 h-14"
              />
              <img src="/footer/visa 2.png" alt="Visa" className="w-24 h-14" />
              <img
                src="/footer/Payoneer logo 1.png"
                alt="Payoneer"
                className="w-24 h-14"
              />
              <img
                src="/footer/Paypal 2.png"
                alt="Paypal"
                className="w-24 h-14"
              />
            </div>
          </div>

          {/* Livraison */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Moyens de Livraison
            </h3>
            <div className="flex flex-wrap gap-4">
              <img
                src="/footer/COLISSIMO 1.png"
                alt="Colissimo"
                className="w-24 h-14"
              />
              <img
                src="/footer/Etiqueta 1.png"
                alt="Etiqueta"
                className="w-24 h-14"
              />
              <img
                src="/footer/aramex 1.png"
                alt="Aramex"
                className="w-24 h-14"
              />
            </div>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>Qui sommes-nous ?</li>
              <li>L'histoire de Pharmashopi</li>
              <li>Médicaments sur internet</li>
              <li>Parapharmacie en ligne</li>
              <li>Pharmacovigilance</li>
            </ul>
          </div>

          {/* Aide & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Aide & Contact</h3>
            <ul className="space-y-2">
              <li>Paiement</li>
              <li>Expédition | Livraison</li>
              <li>Retour</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>

            <div className="pt-4">
              <p className="mb-2">Recevez nos promos & actus :</p>
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-2 rounded-md text-gray-800"
              />
            </div>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="border-t border-white/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white">
            📍 7, bis rue Emile Blanc 38420 Domene - 04 76 77 23 08
          </p>
          <div className="flex items-center gap-4 text-xl">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
