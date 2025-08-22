import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const projects = [
    {
      id: 1,
      title: "Жилой комплекс \"Мегаполис\"",
      description: "Современный многоквартирный комплекс с развитой инфраструктурой",
      image: "/img/d42886de-e567-4edc-bd22-9c6238065d8c.jpg",
      area: "45,000 м²",
      floors: "25 этажей"
    },
    {
      id: 2,
      title: "Квартал \"Новые горизонты\"",
      description: "Комплексное градостроительное решение для современного района",
      image: "/img/a54d75fe-932a-4bd7-beaa-8a23876cb28b.jpg",
      area: "120,000 м²",
      floors: "12-18 этажей"
    },
    {
      id: 3,
      title: "Башни \"Стеклянный город\"",
      description: "Высотный жилой комплекс премиум-класса в центре города",
      image: "/img/eb7a8cde-ee9f-4a32-9e1e-5bacba5254d4.jpg",
      area: "80,000 м²",
      floors: "35 этажей"
    }
  ];

  const services = [
    {
      icon: "Building2",
      title: "Архитектурное проектирование",
      description: "Разработка концептуальных и рабочих проектов жилых комплексов"
    },
    {
      icon: "MapPin",
      title: "Градостроительное планирование",
      description: "Комплексное планирование городских территорий и кварталов"
    },
    {
      icon: "Cog",
      title: "Сопровождение строительства",
      description: "Полный контроль реализации проекта от начала до сдачи объекта"
    },
    {
      icon: "Users",
      title: "Консультационные услуги",
      description: "Экспертная поддержка на всех этапах проектирования и строительства"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">ARCHITECTURAL BUREAU</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Связаться с нами
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 gradient-bg">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Архитектура <br />
              <span className="text-white/90">будущего</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Комплексные услуги в области архитектурно-градостроительного проектирования многоквартирных жилых комплексов и городских кварталов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4">
                Наши проекты
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Реализованные и планируемые архитектурные решения, которые формируют современный облик городов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="overflow-hidden hover-scale animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-4">
                    <span>Площадь: {project.area}</span>
                    <span>{project.floors}</span>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Полный спектр услуг от концептуальной проработки до сопровождения строительства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover-scale animate-scale-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground mb-12 animate-fade-in">
              Готовы обсудить ваш проект? Мы поможем воплотить архитектурные идеи в жизнь
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center animate-scale-in">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (495) 123-45-67</p>
              </div>
              
              <div className="text-center animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@bureau.ru</p>
              </div>
              
              <div className="text-center animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Архитекторов, 15</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-12 py-4 animate-fade-in">
              Заказать консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ARCHITECTURAL BUREAU</h3>
              <p className="text-secondary-foreground/80">
                Создаем архитектуру будущего с 2010 года
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Архитектурное проектирование</li>
                <li>Градостроительство</li>
                <li>Сопровождение строительства</li>
                <li>Консультации</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Проекты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Жилые комплексы</li>
                <li>Городские кварталы</li>
                <li>Коммерческая недвижимость</li>
                <li>Общественные здания</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-secondary-foreground/80">
                <p>+7 (495) 123-45-67</p>
                <p>info@bureau.ru</p>
                <p>Москва, ул. Архитекторов, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/80">
            <p>&copy; 2024 Architectural Bureau. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}