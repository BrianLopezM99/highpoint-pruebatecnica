const WHATSAPP_URL = "https://wa.me/525525386374";

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:bottom-6 md:right-6">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/svg/whatsapp.svg"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-auto h-[50px] md:h-[56px] object-contain"
        />
      </a>
    </div>
  );
}
