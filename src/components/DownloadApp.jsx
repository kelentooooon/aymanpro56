export function DownloadApp() {
  return (
    <section className="py-12 bg-white text-center">
      <div className="w-full px-4">
        <h2 className="mb-3 font-bold" style={{ fontSize: "2.5rem" }}>
          Download App Now
        </h2>
        <p className="text-gray-500 mb-6">Enjoy our exceptional services with the Car Maintenance app.</p>
        <p className="mb-6 font-bold" style={{ color: "#c41e3a" }}>
          The app is available on both stores.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <a href="#" className="no-underline">
            <img
              src="/icons/app-store.svg"
              alt="Apple App Store"
              className="max-h-12 object-contain h-10"
              loading="lazy"
            />
          </a>
          <a href="#" className="no-underline">
            <img
              src="/icons/GooglePlay.svg"
              alt="Google Play Store"
              className="max-h-12 object-contain h-10"
              loading="lazy"
            />
          </a>
          <a href="#" className="no-underline">
            <img
              src="/icons/App-Gallery.svg"
              alt="App Gallery"
              className="max-h-12 object-contain h-10"
              loading="lazy"
            />
          </a>
        </div>
      </div>
    </section>
  )
}
