export function Services() {
  const services = [
    { icon: "/icons/maintenance.svg", title: "Car maintenance", color: "#c41e3a" },
    { icon: "/icons/alert.svg", title: "Car Inspection", color: "#c41e3a" },
    { icon: "/icons/oil.svg", title: "Change oil", color: "#c41e3a" },
    { icon: "/icons/spray.svg", title: "Car Wash", color: "#c41e3a" },
    { icon: "/icons/spray.svg", title: "Car Spray", color: "#c41e3a" },
    { icon: "/icons/wrench.svg", title: "Fix Brake", color: "#c41e3a" },
    { icon: "/icons/wheel.svg", title: "Car Accessories", color: "#c41e3a" },
    { icon: "/icons/phone.svg", title: "Call service", color: "#c41e3a" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="w-full px-4">
        <h2 className="mb-6 font-bold" style={{ fontSize: "1.5rem" }}>
          Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
            <div key={idx}>
              <div className="p-4 border-l-4" style={{ borderColor: service.color }}>
                <img
                  src={service.icon || "/placeholder.svg"}
                  alt={service.title}
                  style={{ width: "40px", height: "40px", objectFit: "contain", color: service.color }}
                  className="mb-2"
                  loading="lazy"
                />
                <h6 className="font-bold mb-2" style={{ color: service.color }}>
                  {service.title}
                </h6>
                <p className="text-gray-500 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
