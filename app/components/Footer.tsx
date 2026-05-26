import EmailIcon from "./icons/EmailIcon";
import PhoneIcon from "./icons/PhoneIcon";

const WHATSAPP_URL = "https://wa.me/525525386374";

export default function Footer() {
  return (
    <div className="w-full font-sans" id="contacto">
      <footer className="bg-[#F9F9F9] px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mx-auto w-full text-center text-hp-leon-dorado">
            <h2 className="text-3xl sm:text-[2.375rem] lg:text-[3rem] leading-none uppercase font-cities-typeface">
              Contáctanos
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10 sm:gap-[8rem] pt-8">
            <div className="flex flex-col gap-6 items-start">
              <div className="flex items-center gap-2">
                <div>
                  <EmailIcon />
                </div>
                <a
                  href="mailto:xael@inside.com"
                  className="text-[#212529] text-lg font-medium"
                >
                  xael@inside.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <PhoneIcon />
                </div>
                <a
                  href="tel:5525386374"
                  className="text-[#212529] text-lg font-medium"
                >
                  5525386374
                </a>
              </div>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-hp-leon-dorado text-hp-leon-dorado text-base font-medium px-5 py-2 transition-colors hover:bg-hp-leon-dorado hover:text-white"
              >
                Agenda tu cita
              </a>
            </div>

            <div className="flex justify-center items-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="cursor-pointer transition-transform hover:scale-105"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/svg/whatsapp.svg"
                  alt="WhatsApp"
                  width={120}
                  height={120}
                  className="w-auto h-[120px] object-contain drop-shadow-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-hp-leon-azul px-8 py-6 text-center">
        <p className="text-white text-sm m-0 font-normal">
          High Point Querétaro © 2025 | Aviso de privacidad
        </p>
      </div>
    </div>
  );
}
