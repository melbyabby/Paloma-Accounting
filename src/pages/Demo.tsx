import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { User, Building2, FileText, Heart, Upload, CheckCircle2, ArrowRight } from "lucide-react";
import palomaLogo from "figma:asset/31f930a355888a6b2f87c26a540ce31ce4ef9940.png";

type ClientType = "individual" | "business" | "trust" | "nonprofit" | null;
type Step = "select" | "intake" | "documents" | "agreements" | "payment" | "complete";

export default function Demo() {
  const [clientType, setClientType] = useState<ClientType>(null);
  const [step, setStep] = useState<Step>("select");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    filingStatus: "Single",
    priorYear: "Yes",
    notes: ""
  });

  const clientTypes = [
    {
      id: "individual" as const,
      icon: User,
      title: "Individual",
      description: "Person tax returns, investment income, retirement planning",
      details: "W-2s, 1099s, Schedule C, rental properties"
    },
    {
      id: "business" as const,
      icon: Building2,
      title: "Business",
      description: "Person tax returns, investment income, retirement planning",
      details: "1120S, 1065, payroll, financials"
    },
    {
      id: "trust" as const,
      icon: FileText,
      title: "Trust",
      description: "Person tax returns, investment income, retirement planning",
      details: "1041, trust agreements, beneficiary info"
    },
    {
      id: "nonprofit" as const,
      icon: Heart,
      title: "Nonprofit",
      description: "Person tax returns, investment income, retirement planning",
      details: "990, 990-EZ, program revenue, donations"
    }
  ];

  const handleClientTypeSelect = (type: ClientType) => {
    setClientType(type);
    setStep("intake");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmitDemoRequest = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/demo-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          clientType
        })
      });

      if (response.ok) {
        console.log('Demo request submitted successfully');
        setStep("documents");
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
    }
  };

  if (step === "select") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        {/* Header */}
        <header className="px-6 py-6 border-b border-black/5 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
              <span className="text-black tracking-wide">Paloma</span>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 py-16">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Hero */}
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl text-black mb-4">
                  Become a Client
                </h1>
                <p className="text-xl text-black/60">
                  A simple, secure process to get started with our firm
                </p>
              </div>

              {/* How This Works */}
              <div className="bg-[#dce7f5] rounded-lg p-8 mb-16">
                <h2 className="text-lg text-black mb-6">How This Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {[
                    { num: 1, title: "Share Info", desc: "Tell us about yourself" },
                    { num: 2, title: "Upload Documents", desc: "Prior returns & records" },
                    { num: 3, title: "Review & Sign", desc: "Confirm fees & engagement" },
                    { num: 4, title: "Get Portal Access", desc: "Secure communication hub" }
                  ].map((item) => (
                    <div key={item.num} className="flex gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0066cc] text-white flex items-center justify-center">
                        {item.num}
                      </div>
                      <div>
                        <p className="text-black mb-1">{item.title}</p>
                        <p className="text-sm text-black/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Client Type Selection */}
              <div>
                <h2 className="text-2xl text-black text-center mb-8">
                  What type of client are you?
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {clientTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <motion.button
                        key={type.id}
                        onClick={() => handleClientTypeSelect(type.id)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-start gap-4 p-6 bg-white rounded-lg border border-black/10 hover:border-[#5b8db8] hover:shadow-lg transition-all text-left"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#f5f5f7] flex items-center justify-center">
                          <Icon className="w-6 h-6 text-black/70" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg text-black mb-1">{type.title}</h3>
                          <p className="text-sm text-black/60">{type.description}</p>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-6 border-t border-black/5 bg-white">
          <div className="container mx-auto px-6 text-center">
            <p className="text-sm text-black/40">Secure and encrypted</p>
          </div>
        </footer>
      </div>
    );
  }

  if (step === "intake") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        {/* Header */}
        <header className="px-6 py-6 border-b border-black/5 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
              <span className="text-black tracking-wide">Paloma</span>
            </div>
          </div>
        </header>

        {/* Progress */}
        <div className="bg-white border-b border-black/5 px-6 py-4">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
            </div>
            <p className="text-sm text-black/60 mt-2">Step 1 of 4</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-12">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl text-black mb-2">Tell us about yourself</h1>
              <p className="text-black/60 mb-8">This helps us prepare your documents correctly.</p>

              <div className="bg-white rounded-lg border border-black/10 p-8 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-black mb-2">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-[#f5f5f7] border-black/10"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-black mb-2">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-[#f5f5f7] border-black/10"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-black mb-2">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-[#f5f5f7] border-black/10"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-black mb-2">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-[#f5f5f7] border-black/10"
                  />
                </div>

                <div>
                  <Label htmlFor="filingStatus" className="text-black mb-2">Filing Status</Label>
                  <select
                    id="filingStatus"
                    value={formData.filingStatus}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#f5f5f7] border border-black/10 rounded-md"
                  >
                    <option>Single</option>
                    <option>Married Filing Jointly</option>
                    <option>Married Filing Separately</option>
                    <option>Head of Household</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="priorYear" className="text-black mb-2">Did you file taxes last year?</Label>
                  <select
                    id="priorYear"
                    value={formData.priorYear}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-[#f5f5f7] border border-black/10 rounded-md"
                  >
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="notes" className="text-black mb-2">Anything else we should know?</Label>
                  <Textarea
                    id="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleInputChange}
                    className="bg-[#f5f5f7] border-black/10"
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep("select")}
                  className="border-black/20 text-black hover:bg-black/5"
                >
                  Back
                </Button>
                <Button
                  onClick={handleSubmitDemoRequest}
                  className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  if (step === "documents") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        {/* Header */}
        <header className="px-6 py-6 border-b border-black/5 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
              <span className="text-black tracking-wide">Paloma</span>
            </div>
          </div>
        </header>

        {/* Progress */}
        <div className="bg-white border-b border-black/5 px-6 py-4">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
            </div>
            <p className="text-sm text-black/60 mt-2">Step 2 of 4</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-12">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl text-black mb-2">Upload your documents</h1>
              <p className="text-black/60 mb-8">We need these to prepare your return.</p>

              <div className="space-y-4">
                {[
                  { name: "Prior year tax return (2023)", required: true },
                  { name: "W-2 forms", required: true },
                  { name: "1099 forms", required: false },
                  { name: "Mortgage interest statement (1098)", required: false },
                  { name: "Student loan interest (1098-E)", required: false },
                  { name: "Charitable donation receipts", required: false }
                ].map((doc, index) => (
                  <div key={index} className="bg-white rounded-lg border border-black/10 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-black">{doc.name}</p>
                        {doc.required && (
                          <p className="text-sm text-red-500">Required</p>
                        )}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#5b8db8] text-[#5b8db8] hover:bg-[#5b8db8]/10"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={() => setStep("intake")}
                  className="border-black/20 text-black hover:bg-black/5"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep("agreements")}
                  className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
                >
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  if (step === "agreements") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        {/* Header */}
        <header className="px-6 py-6 border-b border-black/5 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
              <span className="text-black tracking-wide">Paloma</span>
            </div>
          </div>
        </header>

        {/* Progress */}
        <div className="bg-white border-b border-black/5 px-6 py-4">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-black/10 rounded-full" />
            </div>
            <p className="text-sm text-black/60 mt-2">Step 3 of 4</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-12">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl text-black mb-2">Review and sign</h1>
              <p className="text-black/60 mb-8">Please review the engagement letter and pricing.</p>

              <div className="bg-white rounded-lg border border-black/10 p-8 mb-6">
                <h2 className="text-xl text-black mb-4">Engagement Letter</h2>
                <div className="bg-[#f5f5f7] rounded p-6 mb-6 max-h-64 overflow-y-auto">
                  <p className="text-sm text-black/70 leading-relaxed">
                    This engagement letter confirms our understanding of the services we will provide...
                    <br /><br />
                    [Full engagement letter content would appear here]
                  </p>
                </div>

                <h2 className="text-xl text-black mb-4">Power of Attorney (Form 2848)</h2>
                <div className="bg-[#f5f5f7] rounded p-6 mb-6">
                  <p className="text-sm text-black/70">
                    This authorizes us to represent you before the IRS...
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6">
                  <h2 className="text-xl text-black mb-4">Service Fee</h2>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-black/60">Individual Tax Return (1040)</span>
                    <span className="text-2xl text-black">$450</span>
                  </div>
                  <p className="text-sm text-black/60">Due upon signing</p>
                </div>
              </div>

              <div className="bg-white rounded-lg border border-black/10 p-6 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-sm text-black">
                    I have read and agree to the engagement letter and authorize the firm to represent me before the IRS via Form 2848.
                  </span>
                </label>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setStep("documents")}
                  className="border-black/20 text-black hover:bg-black/5"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep("payment")}
                  className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
                >
                  Sign & Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  if (step === "payment") {
    return (
      <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
        {/* Header */}
        <header className="px-6 py-6 border-b border-black/5 bg-white">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
              <span className="text-black tracking-wide">Paloma</span>
            </div>
          </div>
        </header>

        {/* Progress */}
        <div className="bg-white border-b border-black/5 px-6 py-4">
          <div className="container mx-auto max-w-3xl">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
              <div className="flex-1 h-1 bg-[#5b8db8] rounded-full" />
            </div>
            <p className="text-sm text-black/60 mt-2">Step 4 of 4</p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 py-12">
          <div className="container mx-auto px-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl text-black mb-2">Payment</h1>
              <p className="text-black/60 mb-8">Complete your payment to finalize onboarding.</p>

              <div className="bg-white rounded-lg border border-black/10 p-8 mb-6">
                <div className="mb-6 pb-6 border-b border-black/10">
                  <div className="flex justify-between items-center">
                    <span className="text-black">Individual Tax Return</span>
                    <span className="text-2xl text-black">$450</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cardName" className="text-black mb-2">Name on Card</Label>
                    <Input id="cardName" className="bg-[#f5f5f7] border-black/10" />
                  </div>

                  <div>
                    <Label htmlFor="cardNumber" className="text-black mb-2">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="bg-[#f5f5f7] border-black/10" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry" className="text-black mb-2">Expiry</Label>
                      <Input id="expiry" placeholder="MM/YY" className="bg-[#f5f5f7] border-black/10" />
                    </div>
                    <div>
                      <Label htmlFor="cvv" className="text-black mb-2">CVV</Label>
                      <Input id="cvv" placeholder="123" className="bg-[#f5f5f7] border-black/10" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setStep("agreements")}
                  className="border-black/20 text-black hover:bg-black/5"
                >
                  Back
                </Button>
                <Button
                  onClick={() => setStep("complete")}
                  className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
                >
                  Complete Payment
                  <CheckCircle2 className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

  // Complete step
  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        <div className="w-20 h-20 rounded-full bg-[#5b8db8]/20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10 text-[#5b8db8]" />
        </div>
        <h1 className="text-4xl text-black mb-4">You're all set!</h1>
        <p className="text-xl text-black/60 mb-8">
          Welcome to the firm. We'll be in touch within 24 hours to get started on your return.
        </p>
        <Button
          onClick={() => window.location.href = "/"}
          className="bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
        >
          Back to Home
        </Button>
      </motion.div>
    </div>
  );
}
