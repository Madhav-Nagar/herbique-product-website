export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918319070306"
      target="_blank"
      rel="noopener noreferrer"
      className="sm:hidden fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#3A5C3E] text-[#F7F2E9] rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform"
      aria-label="Order Now on WhatsApp"
      style={{
        boxShadow: "0 4px 14px rgba(58, 92, 62, 0.4)",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-7 h-7"
        style={{ transform: "translate(1px, -1px)" }}
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.333 4.982L2 22l5.202-1.362a9.92 9.92 0 0 0 4.808 1.236h.005c5.507 0 9.99-4.478 9.99-9.987C22.005 6.479 17.519 2 12.012 2Zm5.82 14.33c-.244.688-1.42 1.312-1.922 1.385-.452.065-.89.068-1.554-.153-2.617-1.01-4.305-3.692-4.437-3.868-.131-.176-1.066-1.42-1.066-2.709 0-1.288.665-1.92.902-2.176.236-.256.513-.32.684-.32l.492.003c.15 0 .285-.01.409.288.156.376.536 1.309.582 1.402.046.094.076.203.013.33-.063.126-.094.204-.189.314-.094.11-.197.246-.282.329-.094.094-.193.197-.083.388.11.19.49 1.83 1.05 2.33.722.643 1.332.843 1.52.923.189.08.3-.01.411-.137.11-.127.48-.56.608-.75.127-.19.255-.16.43-.095.176.065 1.11.524 1.3.618.19.095.317.14.364.223.047.083.047.48-.198 1.168Z" />
      </svg>
    </a>
  )
}
