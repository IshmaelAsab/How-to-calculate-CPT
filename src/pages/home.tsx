import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, RotateCcw } from "lucide-react";
import { websiteConfig } from "../../website.config";

export default function Home() {
  const [campaignCost, setCampaignCost] = useState<string>("");
  const [totalImpressions, setTotalImpressions] = useState<string>("");
  const [cptResult, setCptResult] = useState<number | null>(null);

  const calculateCPT = () => {
    const cost = parseFloat(campaignCost);
    const impressions = parseFloat(totalImpressions);

    if (isNaN(cost) || isNaN(impressions) || impressions === 0) {
      return;
    }

    const cpt = (cost / impressions) * 1000;
    setCptResult(cpt);
  };

  const resetCalculator = () => {
    setCampaignCost("");
    setTotalImpressions("");
    setCptResult(null);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-white">
      <header className="border-b border-gray-800 bg-[#0d1420]">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded">
            <Calculator className="w-5 h-5 text-blue-400" />
          </div>
          <h1 className="text-xl font-semibold">{websiteConfig.site.name}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-2xl">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold mb-3">CPT Calculator</h2>
            <p className="text-gray-400 text-lg">
              Enter your campaign details below to calculate the Cost Per Thousand impressions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <Label htmlFor="campaignCost" className="text-base font-medium">
                Total Campaign Cost
              </Label>
              <div className="relative">
                <Input
                  id="campaignCost"
                  type="number"
                  placeholder="e.g., 5000"
                  value={campaignCost}
                  onChange={(e) => setCampaignCost(e.target.value)}
                  className="bg-[#0d1420] border-gray-700 h-14 text-lg pr-12"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
                  $
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="totalImpressions" className="text-base font-medium">
                Total Impressions
              </Label>
              <Input
                id="totalImpressions"
                type="number"
                placeholder="e.g., 250000"
                value={totalImpressions}
                onChange={(e) => setTotalImpressions(e.target.value)}
                className="bg-[#0d1420] border-gray-700 h-14 text-lg"
              />
            </div>

            <div className="flex gap-4 pt-2">
              <Button
                onClick={calculateCPT}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8"
              >
                <Calculator className="w-4 h-4 mr-2" />
                Calculate
              </Button>
              <Button
                onClick={resetCalculator}
                size="lg"
                variant="secondary"
                className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-8"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {cptResult !== null && (
            <div className="bg-[#0d1420] border border-gray-800 rounded-lg p-8 mt-8">
              <p className="text-gray-400 text-lg mb-2">Your CPT is:</p>
              <p className="text-6xl font-bold text-emerald-400">
                ${cptResult.toFixed(2)}
              </p>
            </div>
          )}

          <div className="space-y-8 pt-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-blue-400">What is CPT?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                CPT, or Cost Per Thousand, is a common metric in advertising used to measure the cost 
                of an advertising campaign for every one thousand views or impressions on a particular 
                advertisement. It's a key indicator for comparing the relative cost-effectiveness of 
                different advertising opportunities.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white">The Formula</h3>
              <div className="bg-[#0d1420] border border-gray-800 rounded-lg p-8">
                <pre className="text-gray-300 text-lg font-mono text-center">
                  CPT = (Total Cost / Total Impressions) × 1000
                </pre>
              </div>
              <p className="text-gray-400 text-base leading-relaxed">
                For example, if your campaign costs $5,000 and receives 250,000 impressions, 
                your CPT would be $20.00. This means you're paying $20 for every thousand 
                people who see your advertisement.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-3xl font-semibold text-white">Why Use CPT?</h3>
              <ul className="space-y-3 text-gray-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Compare costs across different media channels and campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Evaluate the efficiency of your advertising spend</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Make informed decisions about budget allocation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-400 mt-1">•</span>
                  <span>Benchmark your campaigns against industry standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-gray-500 text-sm">
          <p>
            For demo and training purposes. Learn more about CPT calculations at{" "}
            <a 
              href="https://www.thinkbox.tv/training-and-tools/useful-resources/how-to-calculate-cpts" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Thinkbox TV
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
