import React from 'react'

const Services = () => {
    const Offerings = [
        {
            id: 1,
            title: "AI Shop Assist",
            description:
                "Great in-store salespeople, but why leave eCommerce customers unsupported?",
            points: [
                "B2B solution for eCommerce and marketplace portals",
                "AI agents that represent your brand online, bring sales, increase ROI",
            ],
            btn: "Claim Your FREE AI Agent Now!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/AI.svg",
        },
        {
            id: 2,
            title: "Geo Spatial Analytics",
            description:
                "You can change decor, layout, or offerings—but how often can you change location?",
            points: [
                "Find your next best location",
                "Revenue and footfall prediction",
                "Competitor & complementor impact analysis",
            ],
            btn: "Start your FREE TRIAL today!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/geo.svg",
        },
        {
            id: 3,
            title: "In Store Analytics",
            description: "Lifeline of any retail store that uses powerful AI/ML algorithms and analytics like:",
            points: [
                "Store Budgeting & Forecasting through POS analytics",
                "Market Basket Analysis (MBA)",
                "Recency Frequency Monetary (RFM)",
            ],
            btn: "Get your FREE DEMO account now!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/pos.svg",
        },
        {
            id: 4,
            title: "SCM Analytics",
            description: "Predict IJOUr ROI on logistics with simplified shipment and warehouse analytics.",
            points: [
                "Shipment TAT analysis",
                "Warehousing and reverse logistics analytics",
            ],
            btn: "Speak with our Team, now!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/SCM.svg",
        },
        {
            id: 5,
            title: "Video Analytics",
            description: "Understand customer telemetry using our most powerful and advanced VMS",
            points: [
                "In-store video analytics (patentfiled)", "Anonymous customer profiling",
                "Map footfall and dwell time with revenue",
            ],
            btn: "Activate FREE VMS account today!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/vms.svg",
        },
        {
            id: 6,
            title: "Robotics",
            description: "Enhance your presence and digital footprint, get gour Robot deployed today",
            points: [
                "Make gour store PHYGITAL",
                "Best suited for events",
                "Functional and visual assistant",
                "Store Loss Prevention (SLP)"
            ],
            btn: "Call us for FREE DEMO, now!",
            img: "https://www.waysaheadglobal.com/assets/images/Offerings/robotics.svg",
        },
    ];
    return (
        <section id='service'>
            <h2
                className="text-3xl md:text-4xl font-bold text-gray-800 text-center pt-30"
                style={{ fontFamily: "Times New Roman" }}
            >
                Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-6 w-[80%] mx-auto">
                {Offerings.map((offer) => (
                    <div
                        key={offer.id}
                        className="relative shadow-lg rounded-2xl p-6 md:p-8 text-center flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-2xl z-10 cursor-pointer  transform min-h-[650px] hover:scale-105"
                    >
                        <h1 className="text-xl  font-semibold ">
                            {offer.title}
                        </h1>

                        <img
                            src={offer.img}
                            alt={offer.title} className="shadow-2xl"
                        />

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {offer.description}
                        </p>

                        <ul className="text-gray-700 text-sm md:text-base space-y-2 text-left">
                            {offer.points.map((point, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    ✅ {point}
                                </li>
                            ))}
                        </ul>
                        <div className="absolute bottom-6">

                            <button className=" w-full px-6 py-3 bg-orange-600 text-white text-xs font-semibold md:text-sm rounded-md transition-all duration-300 hover:bg-orange-700 cursor-pointer shadow-md hover:shadow-lg">
                                {offer.btn}
                            </button>

                            <p className="text-gray-600 text-sm  py-2">
                                Already registered?{" "}
                                <span className="font-semibold text-orange-600 cursor-pointer hover:underline">
                                    Login
                                </span>
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
