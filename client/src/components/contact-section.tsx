import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        variant: "default"
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    },
    onError: (error) => {
      toast({
        title: "Error sending message",
        description: error.message || "Please try again later.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All form fields are required.",
        variant: "destructive"
      });
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    submitContactForm.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section 
      id="contact" 
      className="py-20 bg-white"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`animate-on-scroll ${isVisible ? 'animated' : ''}`}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 gradient-text" data-testid="contact-title">Get In Touch</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900" data-testid="contact-connect-title">Let's Connect</h3>
              <p className="text-lg text-gray-600 mb-8" data-testid="contact-description">
                I'm actively seeking contract-based opportunities in cloud automation and DevOps consulting. 
                Let's discuss how I can help optimize your infrastructure and development workflows.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center" data-testid="contact-email-info">
                  <i className="fas fa-envelope text-2xl text-primary mr-4"></i>
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <a href="mailto:shoryadwivedi00@gmail.com" className="text-gray-600 hover:text-primary transition-colors">
                      shoryadwivedi00@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center" data-testid="contact-phone-info">
                  <i className="fas fa-phone text-2xl text-primary mr-4"></i>
                  <div>
                    <p className="font-medium text-gray-900">Phone</p>
                    <a href="tel:+919137349571" className="text-gray-600 hover:text-primary transition-colors">
                      (+91) 9137349571
                    </a>
                  </div>
                </div>
                <div className="flex items-center" data-testid="contact-location-info">
                  <i className="fas fa-map-marker-alt text-2xl text-primary mr-4"></i>
                  <div>
                    <p className="font-medium text-gray-900">Location</p>
                    <p className="text-gray-600">Kharghar, Navi-Mumbai, India</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-6 mt-8">
                <a 
                  href="https://linkedin.com/in/shoryadubey" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  data-testid="contact-linkedin-link"
                >
                  <i className="fab fa-linkedin text-3xl"></i>
                </a>
                <a 
                  href="https://github.com/shorya33" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                  data-testid="contact-github-link"
                >
                  <i className="fab fa-github text-3xl"></i>
                </a>
              </div>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-xl">
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div>
                  <Label htmlFor="name" data-testid="label-name">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleInputChange('name')}
                    placeholder="Your Name"
                    required
                    data-testid="input-name"
                  />
                </div>
                <div>
                  <Label htmlFor="email" data-testid="label-email">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange('email')}
                    placeholder="your.email@example.com"
                    required
                    data-testid="input-email"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" data-testid="label-subject">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleInputChange('subject')}
                    placeholder="Project Discussion"
                    required
                    data-testid="input-subject"
                  />
                </div>
                <div>
                  <Label htmlFor="message" data-testid="label-message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange('message')}
                    placeholder="Tell me about your project requirements..."
                    className="resize-none"
                    required
                    data-testid="textarea-message"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={submitContactForm.isPending}
                  data-testid="button-send-message"
                >
                  {submitContactForm.isPending ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
