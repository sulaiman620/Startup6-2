import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">{t("home.footer.quickLinks")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("home.footer.about")}</a>
            <a href="#" className="hover:text-accent transition-colors">{t("home.footer.community")}</a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm opacity-80">
              © {new Date().getFullYear()} {t("nav.siteTitle")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
