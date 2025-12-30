export function HeroSection() {
  return (
    <section
      className="hero-section flex items-center relative"
      style={{
        backgroundImage: "url(/images/rectangle-203325.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
        color: "white",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: "rgba(0,0,0,0.3)" }}></div>
      <div className="w-full px-4 relative z-10">
        <div className="flex items-center">
          <div className="w-full lg:w-1/2">
            <h1 className="text-5xl font-bold mb-3">Welcome To</h1>
            <div className="mb-4" style={{ color: "#c41e3a", fontSize: "2.5rem", fontWeight: "bold" }}>
              <span style={{ color: "#c41e3a" }}>▬</span>rability
            </div>
            <p className="text-xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lorem sed, placerat a mauris ut, obligat
              quis lacus. Duis finibus nec, viverra et nunc venenatis. Phasellus eget malesuada augue iaculis. Donec
              accumsan fringilla porta.
            </p>
            <button
              className="font-bold px-4 py-2 rounded transition-colors"
              style={{ backgroundColor: "#c41e3a", borderColor: "#c41e3a" }}
            >
              Start Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
