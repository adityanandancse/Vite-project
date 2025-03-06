import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="relative bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium Fabric Solutions for Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Your trusted partner in wholesale fabric trading, offering quality materials at competitive prices.
            </p>
            <button className="btn-primary">
              Explore Products
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-64 md:h-96"
          >
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 bg-primary-100 rounded-lg">
              <div className="flex items-center justify-center h-full">
                <span className="text-primary-500">Hero Image Placeholder</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 