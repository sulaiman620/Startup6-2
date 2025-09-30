import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from "@/contexts/LanguageContext";

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
  const { t } = useLanguage();
  
  const organizers = [
    {
      name: t("name.ahmed"),
      role: t("role.leadOrganizer"),
      description: t("desc.ahmed"),
      imagePath: ahmedImage,
    },
    {
      name: t("name.fatima"),
      role: t("role.logisticsCoordinator"),
      description: t("desc.fatima"),
      imagePath: fatimaImage,
    },
    {
      name: t("name.sarah"),
      role: t("role.marketingDirector"),
      description: t("desc.sarah"),
      imagePath: sarahImage,
    },
    {
      name: t("name.khalid"),
      role: t("role.volunteerManager"),
      description: t("desc.khalid"),
      imagePath: khalidImage,
    },
  ];

  const judges = [
    {
      name: t("name.layla"),
      role: t("role.ventureCapitalist"),
      description: t("desc.layla"),
      imagePath: laylaImage,
    },
    {
      name: t("name.mohammed"),
      role: t("role.angelInvestor"),
      description: t("desc.mohammed"),
      imagePath: mohammedImage,
    },
    {
      name: t("name.mona"),
      role: t("role.techInnovator"),
      description: t("desc.mona"),
      imagePath: monaImage,
    },
    {
      name: t("name.omar"),
      role: t("role.startupMentor"),
      description: t("desc.omar"),
      imagePath: omarImage,
    },
    {
      name: t("name.noura"),
      role: t("role.legalAdvisor"),
      description: t("desc.noura"),
      imagePath: nouraImage,
    },
    {
      name: t("name.youssef"),
      role: t("role.productDesignLead"),
      description: t("desc.youssef"),
      imagePath: youssefImage,
    },
  ];

  const supervisors = [
    {
      name: t("name.aisha"),
      role: t("role.technicalSupervisor"),
      description: t("desc.aisha"),
      imagePath: aishaImage,
    },
    {
      name: t("name.tariq"),
      role: t("role.businessModelSupervisor"),
      description: t("desc.tariq"),
      imagePath: tariqImage,
    },
    {
      name: t("name.reem"),
      role: t("role.pitchCoach"),
      description: t("desc.reem"),
      imagePath: reemImage,
    },
    {
      name: t("name.hamad"),
      role: t("role.designThinkingSupervisor"),
      description: t("desc.hamad"),
      imagePath: hamadImage,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-down">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            {t("residents.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("residents.description")}
          </p>
        </div>

        <Tabs defaultValue="organizers" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12 bg-card border border-border p-1">
            <TabsTrigger 
              value="organizers" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              {t("residents.organizers")}
            </TabsTrigger>
            <TabsTrigger 
              value="judges" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              {t("residents.judges")}
            </TabsTrigger>
            <TabsTrigger 
              value="supervisors" 
              className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
            >
              {t("residents.supervisors")}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="organizers" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">{t("residents.organizers")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {organizers.map((person, index) => (
                <ProfileCard key={index} {...person} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="judges" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">{t("residents.judges")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {judges.map((person, index) => (
                <ProfileCard key={index} {...person} delay={index * 0.1} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="supervisors" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">{t("residents.supervisors")}</h2>
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
