const WHATSAPP_HREF =
  "https://wa.me/61438782206?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20resume%20writing%20services";

export function WhatsAppButton() {
  return (
    <a
      aria-label="Chat with Ramsey Resume on WhatsApp"
      className="fixed bottom-20 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-200 hover:scale-110 hover:shadow-[0_10px_32px_rgba(0,0,0,0.32)] sm:right-6 sm:h-16 sm:w-16 md:bottom-6"
      href={WHATSAPP_HREF}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span aria-hidden="true" className="whatsapp-fab-ring absolute inset-0 rounded-full bg-whatsapp/60" />
      <span className="whatsapp-fab relative flex h-full w-full items-center justify-center rounded-full bg-whatsapp">
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </span>
    </a>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.386.68 4.68 1.97 6.67L4 29l7.5-1.94A11.9 11.9 0 0 0 16.004 27C22.63 27 28 21.63 28 15S22.63 3 16.004 3Zm0 21.8c-1.94 0-3.84-.52-5.5-1.5l-.395-.234-4.45 1.15 1.19-4.34-.258-.406A9.77 9.77 0 0 1 5.2 15c0-5.96 4.85-10.8 10.804-10.8 5.95 0 10.796 4.84 10.796 10.8s-4.846 10.8-10.796 10.8Zm5.93-8.09c-.324-.163-1.917-.946-2.214-1.054-.297-.108-.513-.163-.73.163-.216.325-.837 1.054-1.026 1.27-.19.217-.378.244-.702.081-.324-.162-1.368-.504-2.607-1.61-.964-.86-1.615-1.92-1.804-2.245-.19-.325-.02-.5.142-.663.146-.145.324-.379.486-.568.163-.19.216-.325.324-.542.108-.217.054-.406-.027-.569-.081-.162-.73-1.76-1-2.41-.263-.632-.53-.546-.73-.556l-.622-.011c-.216 0-.568.081-.865.406-.297.325-1.135 1.108-1.135 2.703 0 1.596 1.162 3.137 1.324 3.353.163.217 2.287 3.492 5.542 4.898.774.334 1.377.534 1.848.684.776.247 1.482.212 2.04.129.622-.093 1.917-.783 2.187-1.54.27-.758.27-1.407.19-1.541-.081-.135-.297-.216-.622-.379Z" />
    </svg>
  );
}
