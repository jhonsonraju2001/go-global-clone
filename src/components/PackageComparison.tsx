import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Check, Minus, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { allDestinations, DestinationPackage } from "@/data/itineraries";
import { Link } from "react-router-dom";

interface PackageComparisonProps {
  isOpen: boolean;
  onClose: () => void;
  initialPackages?: DestinationPackage[];
}

const PackageComparison = ({ isOpen, onClose, initialPackages = [] }: PackageComparisonProps) => {
  const [selectedPackages, setSelectedPackages] = useState<DestinationPackage[]>(initialPackages);
  const [showPackageSelector, setShowPackageSelector] = useState(false);

  // Get all packages from all destinations
  const allPackages = Object.values(allDestinations).flatMap(dest => 
    dest.packages.map(pkg => ({ ...pkg, destinationName: dest.name }))
  );

  const addPackage = (pkg: DestinationPackage & { destinationName: string }) => {
    if (selectedPackages.length < 4 && !selectedPackages.find(p => p.id === pkg.id)) {
      setSelectedPackages([...selectedPackages, pkg]);
    }
    setShowPackageSelector(false);
  };

  const removePackage = (pkgId: string) => {
    setSelectedPackages(selectedPackages.filter(p => p.id !== pkgId));
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN").format(price);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="min-h-screen py-8 px-4"
          onClick={e => e.stopPropagation()}
        >
          <div className="max-w-7xl mx-auto bg-background rounded-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-primary p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Compare Packages</h2>
                <p className="text-white/80 text-sm">Select 2-4 packages to compare side by side</p>
              </div>
              <button onClick={onClose} className="text-white/80 hover:text-white p-2">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              {selectedPackages.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-muted-foreground mb-4">No packages selected for comparison</p>
                  <Button onClick={() => setShowPackageSelector(true)}>
                    <Plus className="w-4 h-4 mr-2" /> Add Package
                  </Button>
                </div>
              ) : (
                <>
                  {/* Comparison Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                      <thead>
                        <tr>
                          <th className="text-left p-4 bg-muted/50 rounded-tl-lg font-semibold">Feature</th>
                          {selectedPackages.map((pkg, index) => (
                            <th key={pkg.id} className={`p-4 bg-muted/50 ${index === selectedPackages.length - 1 ? 'rounded-tr-lg' : ''}`}>
                              <div className="relative">
                                <button
                                  onClick={() => removePackage(pkg.id)}
                                  className="absolute -top-2 -right-2 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center hover:bg-destructive/80"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                                <img src={pkg.image} alt={pkg.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                                <h3 className="font-semibold text-sm">{pkg.name}</h3>
                              </div>
                            </th>
                          ))}
                          {selectedPackages.length < 4 && (
                            <th className="p-4 bg-muted/50 rounded-tr-lg">
                              <button
                                onClick={() => setShowPackageSelector(true)}
                                className="w-full h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg flex flex-col items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors"
                              >
                                <Plus className="w-8 h-8" />
                                <span className="text-sm">Add Package</span>
                              </button>
                            </th>
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {/* Destination */}
                        <tr className="border-b">
                          <td className="p-4 font-medium">Destination</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4 text-center">
                              {(pkg as any).destinationName || "—"}
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Duration */}
                        <tr className="border-b bg-muted/20">
                          <td className="p-4 font-medium">Duration</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4 text-center font-semibold text-primary">
                              {pkg.duration}
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Price */}
                        <tr className="border-b">
                          <td className="p-4 font-medium">Price (per person)</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4 text-center">
                              <div className="text-muted-foreground line-through text-sm">₹{formatPrice(pkg.originalPrice)}</div>
                              <div className="text-xl font-bold text-primary">₹{formatPrice(pkg.currentPrice)}</div>
                              <div className="text-green-600 text-sm">{pkg.discount}% Off</div>
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Highlights */}
                        <tr className="border-b bg-muted/20">
                          <td className="p-4 font-medium align-top">Highlights</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4">
                              <ul className="space-y-1">
                                {pkg.highlights.slice(0, 4).map((h, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Inclusions */}
                        <tr className="border-b">
                          <td className="p-4 font-medium align-top">Inclusions</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4">
                              <ul className="space-y-1">
                                {pkg.inclusions.slice(0, 5).map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Exclusions */}
                        <tr className="border-b bg-muted/20">
                          <td className="p-4 font-medium align-top">Exclusions</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4">
                              <ul className="space-y-1">
                                {pkg.exclusions.slice(0, 4).map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm">
                                    <Minus className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Itinerary Days */}
                        <tr className="border-b">
                          <td className="p-4 font-medium">Itinerary Days</td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4 text-center">
                              {pkg.itinerary.length} Days
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                        {/* Action */}
                        <tr>
                          <td className="p-4"></td>
                          {selectedPackages.map(pkg => (
                            <td key={pkg.id} className="p-4 text-center">
                              <Link to={`/packages/${pkg.id}`}>
                                <Button className="w-full">
                                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                              </Link>
                            </td>
                          ))}
                          {selectedPackages.length < 4 && <td></td>}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>

            {/* Package Selector Modal */}
            <AnimatePresence>
              {showPackageSelector && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-60 bg-black/50 flex items-center justify-center p-4"
                  onClick={() => setShowPackageSelector(false)}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="bg-background rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
                    onClick={e => e.stopPropagation()}
                  >
                    <div className="p-4 border-b flex items-center justify-between">
                      <h3 className="font-semibold text-lg">Select a Package</h3>
                      <button onClick={() => setShowPackageSelector(false)}>
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="p-4 overflow-y-auto max-h-[60vh]">
                      <div className="grid gap-3">
                        {allPackages
                          .filter(pkg => !selectedPackages.find(p => p.id === pkg.id))
                          .map(pkg => (
                            <button
                              key={pkg.id}
                              onClick={() => addPackage(pkg)}
                              className="flex items-center gap-4 p-3 rounded-lg border hover:border-primary hover:bg-primary/5 transition-all text-left"
                            >
                              <img src={pkg.image} alt={pkg.name} className="w-20 h-16 object-cover rounded" />
                              <div className="flex-1">
                                <h4 className="font-medium">{pkg.name}</h4>
                                <p className="text-sm text-muted-foreground">{pkg.destinationName} • {pkg.duration}</p>
                              </div>
                              <div className="text-right">
                                <div className="font-bold text-primary">₹{formatPrice(pkg.currentPrice)}</div>
                                <div className="text-xs text-green-600">{pkg.discount}% Off</div>
                              </div>
                            </button>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PackageComparison;
