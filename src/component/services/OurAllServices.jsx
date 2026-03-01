import React, { useState } from "react";
import { Search, X, Filter } from "lucide-react";

function OurAllServices() {
  const servicesData = [
    {
      id: 1,
      title: "Visitor Registration",
      category: "Security",
      description:
        "Digital visitor check-in with ID verification and badge printing.",
      image:
        "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
    },
    {
      id: 2,
      title: "Access Control",
      category: "Security",
      description:
        "Advanced access permissions to secure restricted areas.",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    },
    {
      id: 3,
      title: "Real-Time Monitoring",
      category: "Monitoring",
      description:
        "Live visitor tracking with instant activity reports.",
      image:
        "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
    },
    {
      id: 4,
      title: "Analytics & Reports",
      category: "Analytics",
      description:
        "Detailed reporting dashboards for better decisions.",
      image:
        "https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg",
    },
    {
      id: 5,
      title: "Pre-Registration",
      category: "Management",
      description:
        "Pre-book and approve visitors before arrival.",
      image:
        "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg",
    },
    {
      id: 6,
      title: "Emergency Alerts",
      category: "Security",
      description:
        "Instant emergency notification & evacuation tracking.",
      image:
        "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg",
    },
    {
      id: 7,
      title: "Badge Printing",
      category: "Management",
      description:
        "Custom visitor badges with QR identification.",
      image:
        "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg",
    },
    {
      id: 8,
      title: "Digital NDA Signing",
      category: "Security",
      description:
        "Secure digital document signing at check-in.",
      image:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg",
    },
    {
      id: 9,
      title: "Multi-Location Control",
      category: "Management",
      description:
        "Manage visitors across multiple branches centrally.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    },
    {
      id: 10,
      title: "Appointment Scheduling",
      category: "Monitoring",
      description:
        "Smart appointment booking with reminders.",
      image:
        "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    },
    {
      id: 11,
      title: "Visitor Logs",
      category: "Analytics",
      description:
        "Complete visitor history with exportable data.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg",
    },
    {
      id: 12,
      title: "Cloud Backup",
      category: "Analytics",
      description:
        "Secure encrypted cloud data storage.",
      image:
        "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const categories = [
    "All",
    "Security",
    "Monitoring",
    "Analytics",
    "Management",
  ];

  const filteredServices = servicesData.filter((service) => {
    const categoryMatch =
      activeCategory === "All" || service.category === activeCategory;
    const searchMatch =
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive visitor management solutions tailored for modern enterprises.
          </p>
        </div>

        {/* Search + Filter - Desktop */}
        <div className="hidden md:flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          {/* Search Bar */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services by name or description..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-green-600 text-white shadow-md shadow-green-200"
                    : "bg-white border border-gray-200 text-gray-600 hover:bg-green-50 hover:border-green-200"
                }`}
              >
                {cat}
              </button>
            ))}

            {(activeCategory !== "All" || searchTerm) && (
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchTerm("");
                }}
                className="px-6 py-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition text-sm font-medium"
              >
                Reset All
              </button>
            )}
          </div>
        </div>

        {/* Mobile Search & Filter */}
        <div className="md:hidden mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            onClick={() => setShowMobileFilter(!showMobileFilter)}
            className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-3 text-gray-700 font-medium"
          >
            <Filter className="w-5 h-5" />
            Filter by Category
          </button>

          {showMobileFilter && (
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setShowMobileFilter(false);
                    }}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                      activeCategory === cat
                        ? "bg-green-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-sm text-gray-600">
          Showing {filteredServices.length} of {servicesData.length} services
        </div>

        {/* Cards Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-semibold rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center text-green-600 font-medium hover:text-green-700 transition-colors">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">No services found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter to find what you're looking for.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchTerm("");
              }}
              className="px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default OurAllServices;