import { motion } from "framer-motion";
import { Gamepad2, Users } from "lucide-react";
import { Link } from "wouter";

export default function FeatureBoxes() {
  const features = [
    {
      name: "Games",
      icon: Gamepad2,
      description: "Play the latest unblocked games",
      color: "from-purple-500 to-indigo-500",
      iconColor: "text-indigo-200",
      url: "/games"
    },
    {
      name: "Partners",
      icon: Users,
      description: "Connect with our collaborators",
      color: "from-green-500 to-emerald-500",
      iconColor: "text-emerald-200",
      url: "/partners"
    },
  ];

  return (
    <div className="w-full flex flex-col gap-10 md:flex-row md:gap-6 max-w-4xl mx-auto justify-center items-center mt-14 mb-10 px-4">
      {features.map((feature, index) => (
        <Link key={feature.name} href={feature.url} className="w-full md:w-1/2">
          <motion.div
            className="relative w-full min-h-[220px] rounded-xl overflow-hidden 
                     cursor-pointer backdrop-blur-sm border border-white/20 bg-black/30 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: index * 0.2, duration: 0.5 },
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Gradient background */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${feature.color} 
                        opacity-0 group-hover:opacity-30 
                        transition-opacity duration-500 ease-in-out z-0`}
            ></div>
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
              {/* Icon with circle background */}
              <div className="rounded-full p-4 bg-white/10 mb-4 relative">
                <feature.icon 
                  className={`w-10 h-10 ${feature.iconColor} 
                            group-hover:text-white transition-colors duration-300`} 
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100
                              transition-opacity duration-500 blur-md -z-10"
                    style={{background: `radial-gradient(circle, ${feature.iconColor}, transparent 70%)`}}></div>
              </div>
              
              {/* Text content */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                {feature.name}
              </h3>
              <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}