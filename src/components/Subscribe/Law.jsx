import { FaRegLightbulb, FaMobileAlt, FaHeadset, FaLock, FaShieldAlt, FaComments, FaClock, FaBicycle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Law = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl tracking-tight font-bold text-primary-800">Overview of UK Data Protection Law</h2>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap -mb-4 -mx-2">
          {/* Law of Definition */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaRegLightbulb />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Definition:</h3>
              <p className="text-sm">The first step to establishing a successful business or project is to define your goals, products, and services with clarity and precision. Clear objectives will guide your strategies.</p>
            </div>
          </motion.div>

          {/* Law of Consistency */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaMobileAlt />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Consistency:</h3>
              <p className="text-sm">Stay consistent in your messaging, marketing, and operations. Consistency builds trust and helps develop a recognizable brand identity over time.</p>
            </div>
          </motion.div>

          {/* Law of Value */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaHeadset />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Value:</h3>
              <p className="text-sm">Your customers must see value in what you're offering. The perceived value should exceed the price they pay, fostering customer loyalty and satisfaction.</p>
            </div>
          </motion.div>

          {/* Law of Relationships */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaLock />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Relationships:</h3>
              <p className="text-sm">Establish and nurture strong relationships with your customers, suppliers, and partners. A positive relationship leads to long-term success and opportunities for collaboration.</p>
            </div>
          </motion.div>

          {/* Law of Innovation */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaShieldAlt />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Innovation:</h3>
              <p className="text-sm">To stay competitive, you must innovate continuously. Innovating helps you adapt to new challenges, solve problems creatively, and differentiate yourself in the market.</p>
            </div>
          </motion.div>

          {/* Law of Communication */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaComments />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Communication:</h3>
              <p className="text-sm">Effective communication is vital to maintaining good relationships and ensuring all stakeholders understand your intentions and strategies. Clear communication builds trust.</p>
            </div>
          </motion.div>

          {/* Law of Time */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaClock />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Time:</h3>
              <p className="text-sm">Time is a finite resource. Prioritize tasks that add the most value and invest in efficient processes to maximize productivity and outcomes.</p>
            </div>
          </motion.div>

          {/* Law of Persistence */}
          <motion.div
            className="w-full sm:w-1/2 mb-4 px-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
          >
            <div className="h-full py-6 px-6 border border-blue-500 border-t-0 border-l-0 rounded-br-xl bg-gray-100 text-gray-800 shadow-lg transform transition-all hover:bg-blue-500 hover:text-white">
              <div className="text-4xl text-primary-800 mb-4">
                <FaBicycle />
              </div>
              <h3 className="text-2xl font-bold text-md mb-6">Law of Persistence:</h3>
              <p className="text-sm">Success doesn’t come overnight. Persistence and resilience are key to overcoming challenges and achieving long-term goals, especially when facing setbacks.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Law;
