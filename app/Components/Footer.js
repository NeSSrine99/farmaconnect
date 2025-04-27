
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {

    return (
      <footer className="inline-flex flex-col items-start justify-start w-full gap-10 p-4 bg-gradient-to-b from-teal-50 via-teal-400 to-cyan-700">
        <a href="/" className="flex items-end "><img src="FarmaconnectLogo.svg" alt="logo" width={30} height={40} className="mb-2"/>
            <span className="text-center justify-center   text-2xl font-normal  bg-[conic-gradient(from_180deg_at_50.00%_50.00%,_#26ECF6_0deg,_#18959C_189deg,_#0D5356_360deg)] bg-cover bg-clip-text text-transparent">Farmaconnect</span>
            </a>

        <div className="inline-flex flex-wrap items-start content-start self-stretch justify-between p-4 ">
          <div className="w-full max-w-[550px] min-w-64 inline-flex flex-col justify-start items-start gap-10">
            <p className="font-medium text-textDark">Moyens de paiment </p>
            <div className="inline-flex flex-wrap items-center content-center self-stretch justify-between  ">
              <img src="/footer/Mastercard 2.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />
              <img src="/footer/visa 2.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />
              <img src="/footer/Payoneer logo 1.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />
              <img src="/footer/Paypal 2.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />

            </div>
          </div>
          <div className="justify-end w-full max-w-[550px] min-w-64 inline-flex flex-col  items-start gap-10 ">
            <p className="font-medium text-textDark ">Moyens de Livraison </p>
            <div className="inline-flex flex-wrap items-center content-center self-stretch px-4">
              <img src="/footer/COLISSIMO 1.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />
              <img src="/footer/Etiqueta 1.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />
              <img src="/footer/aramex 1.png" alt="Logo" className="w-full h-20 max-w-28 min-w-24 max-h-20 min-h-14" />

            </div>
          </div>
        </div>


        <div className="inline-flex flex-wrap items-start content-start self-stretch justify-center gap-5 wrap  ">
          <div  className="inline-flex flex-col items-start justify-start w-full gap-10 max-w-72 min-w-48">
            <p className="self-stretch justify-center  font-semibold text-white text-[16px]">Nous contacter</p>
            <div className="text-[14px]">
              <p className="self-stretch justify-start  font-normal text-textDark">7, bis rue Emile Blanc 38420 Domene 04 76 77 23 08</p>
            </div>
          </div>

             {/* <hr className="w-[1.69px] h-64 origin-top-left rotate-[-89.64deg] shadow-[0px_0px_18px_18px_rgba(38,236,246,1.00)]  outline-2 outline-offset-[-1px] outline-zinc-300"></hr> */}

          <div  className="inline-flex flex-col items-start justify-start w-full gap-10 max-w-72 min-w-48">
            <p className="self-stretch justify-center  font-semibold text-white text-[16px]">Nous contacter</p>
            <div className="text-[14px]">
              <p className="self-stretch justify-start  font-normal text-textDark">Qui sommes nous ?</p>
              <p className="self-stretch justify-start  font-normal text-textDark">L'histoire de Pharmashopi
              Médicaments sur internet, quel avenir ?</p>
              <p className="self-stretch justify-start  font-normal text-textDark">Parapharmacie en ligne</p>
              <p className="self-stretch justify-start  font-normal text-textDark">Pharmacovigilance</p>

            </div>

            {/* <hr className="w-[1.69px] h-64 origin-top-left rotate-[-89.64deg] shadow-[0px_0px_18px_18px_rgba(38,236,246,1.00)]  outline-2 outline-offset-[-1px] outline-zinc-300"></hr> */}

          </div>
          <div  className="inline-flex flex-col items-start justify-start w-full gap-10 max-w-72 min-w-48">
            <p className="self-stretch justify-center  font-semibold text-white text-[16px]">Nous contacter</p>
            <div className="text-[14px]">
              <ul>
                <li className="self-stretch justify-start  font-normal text-textDark"><a>Paiement</a></li>
                <li className="self-stretch justify-start  font-normal text-textDark"><a>Expédition | Livraison</a></li>
                <li className="self-stretch justify-start font-normal text-textDark"><a>Retour</a></li>
                <li className="self-stretch justify-start  font-normal text-textDark"><a>Foire aux questions</a></li>
                <li className="self-stretch justify-start  font-normal text-textDark"><a>Contact</a></li>
              </ul>

            </div>
          </div>

          {/* <hr className="w-[1.69px] h-64 origin-top-left rotate-[-89.64deg] shadow-[0px_0px_18px_18px_rgba(38,236,246,1.00)]  outline-2 outline-offset-[-1px] outline-zinc-300"></hr> */}

          <div  className="inline-flex flex-col items-start justify-start w-full gap-10 max-w-72 min-w-48">
            <p className="self-stretch justify-center  font-semibold text-white text-[16px]">Nous contacter</p>
            <div className="flex flex-col gap-4 text-[14px]">
              <p className="self-stretch justify-start  font-normal text-textDark">Vous souhaitez rester informé(e) de nos dernières nouvelles et promotions ? Inscrivez-vous à notre newsletter.</p>
              <input type="email" placeholder="email"className="p-4 bg-white rounded-md"/>

            </div>
          </div>
        </div>
      </footer>
    );
  }
  