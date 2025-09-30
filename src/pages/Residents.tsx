import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Residents = () => {
  const organizers = [
    {
      name: "Anya Sharma",
      role: "Lead Organizer",
      description: "Anya is a dynamic leader with a proven track record in community development and project management.",
    },
    {
      name: "Ben Carter",
      role: "Logistics Coordinator",
      description: "Ben excels at operational aspects, from venue setup to resource allocation, ensuring smooth event execution.",
    },
    {
      name: "Chloe Lee",
      role: "Marketing Director",
      description: "Chloe drives the outreach and communication strategy, ensuring the Startup Weekend reaches top talent.",
    },
    {
      name: "David Kim",
      role: "Volunteer Manager",
      description: "David is the heart of our volunteer team, recruiting and coordinating the dedicated individuals who make events shine.",
    },
  ];

  const judges = [
    {
      name: "Dr. Elena Petrova",
      role: "Venture Capitalist",
      description: "Dr. Petrova brings extensive experience in early-stage startup investment and strategic guidance.",
    },
    {
      name: "Michael Chen",
      role: "Angel Investor",
      description: "A successful serial entrepreneur, Michael now dedicates his time to mentoring and investing in startups.",
    },
    {
      name: "Sophia Rodriguez",
      role: "Tech Innovator",
      description: "Sophia is a leading figure in AI development, known for her groundbreaking applications.",
    },
    {
      name: "Omar Hassan",
      role: "Startup Mentor",
      description: "Omar has guided numerous startups through their initial challenges with his expertise and advice.",
    },
    {
      name: "Isabel Garcia",
      role: "Legal Advisor",
      description: "As a seasoned attorney, Isabel provides essential guidance on protecting new ventures.",
    },
    {
      name: "Liam O'Connell",
      role: "Product Design Lead",
      description: "Liam specializes in user-centered design and product experience, helping teams build intuitive products.",
    },
  ];

  const supervisors = [
    {
      name: "Sarah Miller",
      role: "Technical Supervisor (AI/ML)",
      description: "Sarah provides deep technical mentorship in artificial intelligence and machine learning.",
    },
    {
      name: "Tom Wicks",
      role: "Business Model Supervisor",
      description: "Tom specializes in business models and financial frameworks, helping teams articulate their value proposition.",
    },
    {
      name: "Jessica Tran",
      role: "Pitch Coach",
      description: "Jessica is an expert in public speaking and presentation, coaching teams to deliver compelling pitches.",
    },
    {
      name: "Alex Volkov",
      role: "Design Thinking Supervisor",
      description: "Alex facilitates design thinking workshops, helping teams empathize with users and prototype solutions.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Meet Our Innovators, Mentors, and Leaders
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the brilliant minds guiding Startup Weekend – from dedicated organizers and
            experienced judges to insightful supervisors, each contributing to an unforgettable journey
            of innovation.
          </p>
        </div>

        <Tabs defaultValue="organizers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="organizers" className="data-[state=active]:bg-secondary">
              Organizers
            </TabsTrigger>
            <TabsTrigger value="judges" className="data-[state=active]:bg-secondary">
              Judges
            </TabsTrigger>
            <TabsTrigger value="supervisors" className="data-[state=active]:bg-secondary">
              Supervisors
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organizers" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">Organizers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizers.map((person, index) => (
                <ProfileCard key={index} {...person} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="judges" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">Judges</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {judges.map((person, index) => (
                <ProfileCard key={index} {...person} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="supervisors" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">Supervisors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supervisors.map((person, index) => (
                <ProfileCard key={index} {...person} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Residents;
