import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { insertInquirySchema } from "@shared/schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrentSeason } from "@/lib/utils";

// Extend the inquiry schema with validation rules
const contactFormSchema = insertInquirySchema.extend({
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  eventDate: z.string().refine((val) => {
    const date = new Date(val);
    const today = new Date();
    return date >= today;
  }, "Event date must be in the future"),
  guestCount: z.coerce.number().min(1, "Guest count must be at least 1"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    document.title = "Contact Us | Shri Cooking & Catering Services";
  }, []);

  const currentSeason = getCurrentSeason();

  // Initialize the form with react-hook-form
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: 0,
      message: "",
      vegetarian: false,
      vegan: false,
      glutenFree: false,
      dairyFree: false,
      privacyPolicy: false,
    },
  });

  // Setup mutation for form submission
  const mutation = useMutation({
    mutationFn: async (data: Omit<ContactFormValues, "privacyPolicy">) => {
      const response = await apiRequest("POST", "/api/inquiries", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you! We'll be in touch within 24 hours.",
        variant: "default",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  // Form submission handler
  const onSubmit = (data: ContactFormValues) => {
    // Remove the privacyPolicy field as it's not part of the backend schema
    const { privacyPolicy, ...submissionData } = data;
    mutation.mutate(submissionData);
  };

  return (
    <main className="pt-24 pb-16">
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <span className="text-[#CC704B] font-medium mb-3 block">GET IN TOUCH</span>
            <h1 className="font-['Playfair_Display'] font-bold text-4xl md:text-5xl text-[#2C5F2D] mb-6">
              Let's Plan Your Event
            </h1>
            <p className="text-[#5A4A42] text-lg">
              Ready to discuss how we can create a seasonally-inspired menu for your next event? Fill out the form and our team will reach out within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-[#2C5F2D]/10 p-3 rounded-full mr-4">
                    <i className="fas fa-phone text-[#2C5F2D]"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C5F2D] text-lg">Phone</h3>
                    <p className="text-[#5A4A42]">+91 70289 26020</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2C5F2D]/10 p-3 rounded-full mr-4">
                    <i className="fas fa-envelope text-[#2C5F2D]"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C5F2D] text-lg">Email</h3>
                    <p className="text-[#5A4A42]">ithakurm@yahoo.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#2C5F2D]/10 p-3 rounded-full mr-4">
                    <i className="fas fa-map-marker-alt text-[#2C5F2D]"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#2C5F2D] text-lg">Location</h3>
                    <p className="text-[#5A4A42]">Satpala, Virar(W)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F9F5F0] p-6 rounded-lg">
                <h3 className="font-['Playfair_Display'] font-bold text-xl mb-4">Current Seasonal Availability</h3>
                <p className="text-[#5A4A42] mb-4">
                  We're currently booking events for the upcoming seasons. Secure your date to ensure availability of our seasonal menus.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${currentSeason === 'Summer' ? 'bg-yellow-500' : 'bg-green-500'} mr-3`}></span>
                    <span className="font-medium">Summer: {currentSeason === 'Summer' ? 'Limited availability' : 'Booking now'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${currentSeason === 'Fall' ? 'bg-yellow-500' : 'bg-green-500'} mr-3`}></span>
                    <span className="font-medium">Fall: {currentSeason === 'Fall' ? 'Limited availability' : 'Booking now'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${currentSeason === 'Winter' ? 'bg-yellow-500' : 'bg-green-500'} mr-3`}></span>
                    <span className="font-medium">Winter: {currentSeason === 'Winter' ? 'Limited availability' : 'Now accepting reservations'}</span>
                  </li>
                  <li className="flex items-center">
                    <span className={`w-3 h-3 rounded-full ${currentSeason === 'Spring' ? 'bg-yellow-500' : 'bg-green-500'} mr-3`}></span>
                    <span className="font-medium">Spring: {currentSeason === 'Spring' ? 'Limited availability' : 'Now accepting reservations'}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80" 
                  alt="Seasonal table setup" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            <div className="bg-[#F9F5F0] p-8 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">First Name*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">Last Name*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">Email Address*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="email"
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">Phone Number*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="tel"
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#5A4A42] font-medium">Event Type*</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          required
                        >
                          <FormControl>
                            <SelectTrigger className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg">
                              <SelectValue placeholder="Please select..." />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="wedding">Wedding</SelectItem>
                            <SelectItem value="corporate">Corporate Event</SelectItem>
                            <SelectItem value="private">Private Dinner/Party</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">Event Date*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="date"
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-[#5A4A42] font-medium">Guest Count*</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              type="number"
                              min="1"
                              className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                              required
                              onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#5A4A42] font-medium">Tell us about your event</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            className="border-[#E5E5E3] focus:ring-[#2C5F2D] rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <FormLabel className="text-[#5A4A42] font-medium mb-2 block">Do you have any dietary restrictions?</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <FormField
                        control={form.control}
                        name="vegetarian"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange} 
                                className="text-[#2C5F2D] focus:ring-[#2C5F2D]"
                              />
                            </FormControl>
                            <FormLabel className="text-[#5A4A42] cursor-pointer">Vegetarian</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="vegan"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange} 
                                className="text-[#2C5F2D] focus:ring-[#2C5F2D]"
                              />
                            </FormControl>
                            <FormLabel className="text-[#5A4A42] cursor-pointer">Vegan</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="glutenFree"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange} 
                                className="text-[#2C5F2D] focus:ring-[#2C5F2D]"
                              />
                            </FormControl>
                            <FormLabel className="text-[#5A4A42] cursor-pointer">Gluten-Free</FormLabel>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="dairyFree"
                        render={({ field }) => (
                          <FormItem className="flex items-center space-x-2 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange} 
                                className="text-[#2C5F2D] focus:ring-[#2C5F2D]"
                              />
                            </FormControl>
                            <FormLabel className="text-[#5A4A42] cursor-pointer">Dairy-Free</FormLabel>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="privacyPolicy"
                    render={({ field }) => (
                      <FormItem className="flex items-start space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox 
                            checked={field.value} 
                            onCheckedChange={field.onChange} 
                            className="text-[#2C5F2D] focus:ring-[#2C5F2D] mt-1"
                            required
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="text-[#5A4A42] text-sm cursor-pointer">
                            I agree to the <a href="#" className="text-[#2C5F2D] hover:underline">Privacy Policy</a> and consent to being contacted about my inquiry.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-[#2C5F2D] hover:bg-[#3A7F3B] text-white rounded-full font-medium"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
