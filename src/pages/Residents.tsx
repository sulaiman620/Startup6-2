import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import images
import ahmedImage from "@/assets/profiles/ahmed-alharthi.jpg";
import fatimaImage from "@/assets/profiles/fatima-almaqbali.jpg";
import sarahImage from "@/assets/profiles/sarah-albalushi.jpg";
import khalidImage from "@/assets/profiles/khalid-alshehhi.jpg";
import laylaImage from "@/assets/profiles/layla-alamri.jpg";
import mohammedImage from "@/assets/profiles/mohammed-alhinai.jpg";
import monaImage from "@/assets/profiles/mona-alfarsi.jpg";
import omarImage from "@/assets/profiles/omar-albahri.jpg";
import nouraImage from "@/assets/profiles/noura-alkalbani.jpg";
import youssefImage from "@/assets/profiles/youssef-alrawahi.jpg";
import aishaImage from "@/assets/profiles/aisha-alsaidi.jpg";
import tariqImage from "@/assets/profiles/tariq-almaamari.jpg";
import reemImage from "@/assets/profiles/reem-alshakili.jpg";
import hamadImage from "@/assets/profiles/hamad-alghafri.jpg";

const Residents = () => {
  const organizers = [
    {
      name: "أحمد الحارثي",
      role: "Lead Organizer",
      description: "أحمد قائد ديناميكي ذو سجل حافل في تنمية المجتمع وإدارة المشاريع.",
      imagePath: ahmedImage,
    },
    {
      name: "فاطمة المقبالي",
      role: "Logistics Coordinator",
      description: "فاطمة تتفوق في الجوانب التشغيلية، من إعداد المكان إلى تخصيص الموارد.",
      imagePath: fatimaImage,
    },
    {
      name: "سارة البلوشي",
      role: "Marketing Director",
      description: "سارة تقود استراتيجية التواصل والتسويق، مما يضمن وصول الحدث لأفضل المواهب.",
      imagePath: sarahImage,
    },
    {
      name: "خالد الشحي",
      role: "Volunteer Manager",
      description: "خالد هو قلب فريق المتطوعين، يقوم بتوظيف وتنسيق الأفراد المخلصين.",
      imagePath: khalidImage,
    },
  ];

  const judges = [
    {
      name: "د. ليلى العامري",
      role: "Venture Capitalist",
      description: "د. ليلى تجلب خبرة واسعة في الاستثمار في الشركات الناشئة والإرشاد الاستراتيجي.",
      imagePath: laylaImage,
    },
    {
      name: "محمد الهنائي",
      role: "Angel Investor",
      description: "رائد أعمال متسلسل ناجح، محمد يكرس الآن وقته لتوجيه الشركات الناشئة والاستثمار فيها.",
      imagePath: mohammedImage,
    },
    {
      name: "منى الفارسي",
      role: "Tech Innovator",
      description: "منى شخصية رائدة في تطوير الذكاء الاصطناعي، معروفة بتطبيقاتها الرائدة.",
      imagePath: monaImage,
    },
    {
      name: "عمر البحري",
      role: "Startup Mentor",
      description: "عمر قد وجه العديد من الشركات الناشئة من خلال تحدياتها الأولية بخبرته ونصائحه.",
      imagePath: omarImage,
    },
    {
      name: "نورة الكلباني",
      role: "Legal Advisor",
      description: "كمحامية متمرسة، نورة تقدم التوجيه الأساسي حول حماية المشاريع الجديدة.",
      imagePath: nouraImage,
    },
    {
      name: "يوسف الرواحي",
      role: "Product Design Lead",
      description: "يوسف متخصص في التصميم المتمحور حول المستخدم، مساعداً الفرق على بناء منتجات بديهية.",
      imagePath: youssefImage,
    },
  ];

  const supervisors = [
    {
      name: "عائشة السعيدي",
      role: "Technical Supervisor (AI/ML)",
      description: "عائشة تقدم إرشاداً تقنياً عميقاً في الذكاء الاصطناعي والتعلم الآلي.",
      imagePath: aishaImage,
    },
    {
      name: "طارق المعمري",
      role: "Business Model Supervisor",
      description: "طارق متخصص في نماذج الأعمال والأطر المالية، يساعد الفرق على توضيح عرض القيمة.",
      imagePath: tariqImage,
    },
    {
      name: "ريم الشكيلي",
      role: "Pitch Coach",
      description: "ريم خبيرة في التحدث أمام الجمهور والعروض التقديمية، تدرب الفرق على تقديم عروض مقنعة.",
      imagePath: reemImage,
    },
    {
      name: "حمد الغافري",
      role: "Design Thinking Supervisor",
      description: "حمد يسهل ورش عمل التفكير التصميمي، يساعد الفرق على التعاطف مع المستخدمين وتطوير الحلول.",
      imagePath: hamadImage,
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
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card border border-border p-1">
            <TabsTrigger 
              value="organizers" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              Organizers
            </TabsTrigger>
            <TabsTrigger 
              value="judges" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              Judges
            </TabsTrigger>
            <TabsTrigger 
              value="supervisors" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
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
