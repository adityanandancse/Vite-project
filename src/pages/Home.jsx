import { motion } from 'framer-motion';
import Hero from '../components/Hero';

function Home() {
  return (
    <div>
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Fabrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add ProductCard components here */}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">Premium fabrics sourced from the finest manufacturers worldwide.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Wholesale Prices</h3>
              <p className="text-gray-600">Competitive pricing for bulk orders with flexible payment terms.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping to destinations worldwide.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 