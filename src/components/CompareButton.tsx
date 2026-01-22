import { useState } from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import PackageComparison from "./PackageComparison";

const CompareButton = () => {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsCompareOpen(true)}
        className="fixed bottom-6 left-6 z-40 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        title="Compare Packages"
      >
        <Scale className="w-6 h-6" />
      </motion.button>

      <PackageComparison
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
      />
    </>
  );
};

export default CompareButton;
