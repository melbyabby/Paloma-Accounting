import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import palomaLogo from "figma:asset/31f930a355888a6b2f87c26a540ce31ce4ef9940.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f5f7] flex flex-col">
      {/* Header */}
      <header className="px-6 py-6 border-b border-black/5 bg-white">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={palomaLogo} alt="Paloma" className="h-8 w-8" />
            <span className="text-black tracking-wide">Paloma</span>
          </div>
          <Button
            onClick={() => (window as any).navigateTo('home')}
            variant="outline"
            className="border-black/20 text-black hover:bg-black/5"
          >
            Back to Home
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-black mb-4">
              Request a Demo
            </h1>
            <p className="text-xl text-black/60">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-black/10 p-8 space-y-6">
            <div>
              <Label htmlFor="name" className="text-black mb-2">Name</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="bg-[#f5f5f7] border-black/10"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-black mb-2">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-[#f5f5f7] border-black/10"
                required
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-black mb-2">Message</Label>
              <Textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleInputChange}
                className="bg-[#f5f5f7] border-black/10"
                placeholder="Tell us about your needs..."
                required
              />
            </div>

            {submitted && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-green-800 text-center">
                  ✓ Thank you! Your message has been sent.
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-[#5b8db8] text-white hover:bg-[#4a7c9e]"
            >
              Submit
            </Button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-black/5 bg-white">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-black/40">© 2025 Paloma</p>
        </div>
      </footer>
    </div>
  );
}
