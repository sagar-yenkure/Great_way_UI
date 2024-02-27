

export const CardSection = () => {
  const cardItems = [
    {
      title: "E-waste Management",
      content:
        "IT companies should take responsibility for proper e-waste disposal and recycling. They can establish e-waste recycling programs, offer trade-in or take-back options for electronic devices, and ensure responsible sourcing and recycling of electronic components.",
    },
    {
      title: "Ethical Sourcing and Supply Chain",
      content:
        "IT companies should ensure their supply chain follows ethical practices, such as fair labor standards and responsible sourcing of raw materials. Engaging suppliers who share similar ethical values can help maintain a responsible supply chain.",
    },
    {
      title: "Privacy and Data Security",
      content:
        "Data protection and privacy are crucial considerations for IT companies. They should prioritize the security of user data, comply with relevant regulations, and implement robust measures to safeguard against data breaches and unauthorized access.",
    },
    {
      title: "Access to Technology",
      content:
        "IT companies can contribute to bridging the digital divide by promoting access to technology in underserved communities. This can include initiatives like providing affordable or free devices, internet connectivity, and digital literacy programs.",
    },
    {
      title: "Skills Development and Education",
      content:
        "IT companies can support initiatives that enhance technology skills and education. This can involve offering internships, scholarships, and training programs, as well as partnering with educational institutions to promote STEM education.",
    },
    {
      title: "Responsible Product Development",
      content:
        "IT companies should consider the social and environmental impact of their products and services. They can design products with energy efficiency in mind, reduce packaging waste, and strive for sustainability throughout the product lifecycle.",
    },
  ];
  return (
    <div className="mt-10 w-[100%] h-auto flex justify-center items-center p-2">
     <div className="w-[80%] flex flex-wrap justify-center gap-10">
     {cardItems.map((item) => (
          <div
            key={item.title}
            className="w-80  flex flex-col justify-center items-center bg-opacity-70 gap-4 p-7 rounded-xl bg-slate-800 hover:bg-indigo-900 hover:bg-opacity-30 hover:rotate-3 hover:scale-105 transition-all duration-150 ease-linear cursor-pointer"
          >
            <h4 className="text-indigo-400 font-headingFont font-semibold text-xl">
              {item.title}
            </h4>
            <p className="text-slate-300 font-navlistFont">{item.content}</p>
          </div>
        ))}
        ;
     </div>
    </div>
  );
};
