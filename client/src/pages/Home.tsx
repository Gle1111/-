import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Banknote, Users, Clock, Plane, FileCheck } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ApplicationForm } from "@/components/ApplicationForm";
import { Button } from "@/components/ui/button";

// Images
import soldierPortrait from "@assets/generated_images/russian_soldier_portrait.png";
import formation from "@assets/generated_images/soldiers_in_formation.png";
import horizon from "@assets/generated_images/soldier_looking_at_horizon.png";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const benefits = [
    {
      icon: <Banknote className="w-8 h-8 text-primary" />,
      title: "Высокий доход",
      description: "Единовременная выплата до 2 300 000 рублей при заключении контракта. Ежемесячное довольствие от 210 000 рублей.",
      highlight: "2 300 000 ₽"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-primary" />,
      title: "Гражданство РФ",
      description: "Упрощенное получение гражданства Российской Федерации для иностранных граждан и членов их семей.",
      highlight: "Паспорт РФ"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Социальный пакет",
      description: "Статус ветерана боевых действий, кредитные каникулы, бюджетные места для детей в вузах, бесплатное лечение.",
      highlight: "Льготы 100%"
    },
    {
      icon: <Plane className="w-8 h-8 text-primary" />,
      title: "Полное обеспечение",
      description: "Оплачиваем проезд до места сбора, проживание и питание. Предоставляем современную экипировку.",
      highlight: "Всё включено"
    }
  ];

  const requirements = [
    "Мужчины в возрасте от 18 до 60 лет",
    "Отсутствие тяжелых хронических заболеваний (ВИЧ, Гепатит)",
    "Отсутствие судимости по тяжким статьям",
    "Желание служить и защищать интересы государства"
  ];

  const steps = [
    {
      title: "Заявка",
      desc: "Оставьте заявку на сайте или позвоните по телефону",
      icon: "01"
    },
    {
      title: "Консультация",
      desc: "Наш специалист свяжется с вами и ответит на вопросы",
      icon: "02"
    },
    {
      title: "Прибытие",
      desc: "Мы организуем и оплатим ваш проезд до пункта отбора",
      icon: "03"
    },
    {
      title: "Оформление",
      desc: "Медкомиссия и подписание контракта за 1-2 дня",
      icon: "04"
    },
    {
      title: "Служба",
      desc: "Получение экипировки, обучение и убытие в часть",
      icon: "05"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary selection:text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={formation} 
            alt="Военнослужащие РФ" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container-width relative z-10 pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-1.5 mb-6 border border-white/20 bg-white/10 backdrop-blur-sm rounded-full">
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Официальный набор на контрактную службу</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 uppercase leading-tight drop-shadow-2xl">
              Служи <span className="text-accent">своим</span>.<br />
              Защищай <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">будущее</span>.
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
              Заключи контракт на военную службу. Единовременная выплата до 2.3 млн рублей. 
              Гражданство РФ для иностранных граждан.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold text-lg px-8 py-6 uppercase tracking-wider shadow-[0_0_20px_rgba(85,107,47,0.4)] transition-all hover:scale-105"
              >
                Оставить заявку
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 font-bold text-lg px-8 py-6 uppercase tracking-wider backdrop-blur-sm"
                asChild
              >
                <a href="tel:+79990955559">
                  +7 999 095-55-59
                </a>
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap gap-8 text-white/60 text-sm font-medium uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 text-black">
  <ShieldCheck className="w-5 h-5 text-accent" />
  Гос. гарантии
</div>
<div className="flex items-center gap-2 text-black">
  <FileCheck className="w-5 h-5 text-accent" />
  Официальный договор
</div>
<div className="flex items-center gap-2 text-black">
  <Users className="w-5 h-5 text-accent" />
  Поддержка семьи
</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#556B2F" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-5.3C93.5,8.6,82.2,21.5,70.5,32.3C58.8,43.1,46.7,51.8,34.3,58.3C21.9,64.8,9.2,69.1,-2.9,74.1C-15,79.1,-26.5,84.8,-37.4,78.8C-48.3,72.8,-58.6,55.1,-65.4,37.3C-72.2,19.5,-75.5,1.6,-72.2,-13.6C-68.9,-28.8,-59,-41.3,-47.4,-49.4C-35.8,-57.5,-22.5,-61.2,-9.3,-62.7C3.9,-64.2,17.1,-63.5,30.5,-83.6L44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
              Условия и преимущества
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Государство гарантирует полное обеспечение, высокие выплаты и социальную защиту для каждого военнослужащего.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="military-card group"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-4 bg-secondary rounded-lg shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full">
                      {item.highlight}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip Section */}
      <section className="py-0 grid grid-cols-1 md:grid-cols-2 h-[400px] md:h-[500px]">
        <div className="relative overflow-hidden group">
          <img 
            src={soldierPortrait} 
            alt="Портрет бойца" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold font-display uppercase mb-2">Честь</h3>
            <p className="max-w-xs text-white/80">Защита интересов своего государства и народа</p>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <img 
            src={horizon} 
            alt="Служба на рубежах" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          <div className="absolute bottom-0 left-0 p-8 text-white">
            <h3 className="text-2xl font-bold font-display uppercase mb-2">Будущее</h3>
            <p className="max-w-xs text-white/80">Стабильность и уверенность в завтрашнем дне</p>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="section-padding bg-secondary/20">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8 uppercase">
                Требования к кандидатам
              </h2>
              <div className="space-y-6">
                {requirements.map((req, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-border"
                  >
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium text-lg text-foreground">{req}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <h4 className="font-bold text-primary text-lg mb-2 flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Важно знать
                </h4>
                <p className="text-muted-foreground">
                  Рассматриваются граждане РФ и иностранные граждане. Военный опыт приветствуется, но не является обязательным (проводится обучение).
                </p>
              </div>
            </div>
            
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3" />
              <div className="absolute inset-0 bg-accent/10 rounded-3xl transform -rotate-3" />
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-border">
                <h3 className="text-2xl font-display font-bold mb-6 text-center uppercase text-primary">Иностранным гражданам</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    Гражданство РФ в упрощенном порядке для вас и семьи
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    Контракт на 1 год с возможностью продления
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    Полный соцпакет наравне с гражданами РФ
                  </li>
                  <li className="flex gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                    Помощь в оформлении всех документов миграционной службой
                  </li>
                </ul>
                <Button onClick={scrollToContact} className="w-full mt-8 bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider">
                  Подать заявку как иностранец
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-background">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4 uppercase">
              Как заключить контракт
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6" />
            <p className="text-lg text-muted-foreground">
              Простая и прозрачная процедура оформления. Мы сопровождаем вас на каждом этапе.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10" />
            
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center bg-background md:bg-transparent p-4 md:p-0 rounded-xl border md:border-none border-border"
              >
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white border-4 border-secondary flex items-center justify-center text-xl md:text-3xl font-display font-bold text-primary mb-4 shadow-lg relative z-10">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold uppercase mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground max-w-[200px]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ApplicationForm />

      {/* Footer */}
      <footer className="bg-[#1a1c18] text-white py-12 border-t border-white/10">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-primary flex items-center justify-center rounded text-white font-display font-bold">
                  СВО
                </div>
                <span className="font-display font-bold text-xl tracking-wide uppercase">
                  Контракт - СВОим
                </span>
              </div>
              <p className="text-white/60 text-sm max-w-xs">
                Официальный информационный ресурс по набору на военную службу по контракту.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-4 text-primary">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>Телефон: <a href="tel:+79990955559" className="hover:text-white transition-colors">+7 999 095-55-59</a></li>
                <li>Почта military@rsa-space.ru</li>
                <li>Режим работы: Круглосуточно</li>
                
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-4 text-primary">Важно</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Обработка персональных данных</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 text-center text-white/40 text-xs">
            © {new Date().getFullYear()} Контракт - СВОим. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
