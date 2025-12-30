export function AppShowcase() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-bold mb-6" style={{ fontSize: "1.5rem" }}>
              App Services Overview
            </h3>
            <p className="text-gray-500 mb-6">
              Experience all services in our mobile app with an intuitive interface, real-time tracking, and easy
              booking.
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/group-2019.png"
              alt="Mobile app screenshot"
              style={{ maxWidth: "300px", width: "100%", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
