import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from '@/components/ui/icon';

const Index = () => {
  const services = [
    {
      icon: "Target",
      title: "Контекстная реклама",
      description: "Настройка и ведение рекламных кампаний в Яндекс.Директ и Google Ads",
      result: "+350% ROI"
    },
    {
      icon: "TrendingUp",
      title: "SEO продвижение",
      description: "Комплексная поисковая оптимизация для роста органического трафика",
      result: "+280% трафика"
    },
    {
      icon: "Users",
      title: "SMM продвижение",
      description: "Управление социальными сетями и создание вовлекающего контента",
      result: "+500% охвата"
    },
    {
      icon: "BarChart3",
      title: "Веб-аналитика",
      description: "Настройка аналитики и создание отчетов для принятия решений",
      result: "100% точность"
    }
  ];

  const cases = [
    {
      title: "Интернет-магазин электроники",
      description: "Увеличили продажи на 400% за 6 месяцев работы",
      metrics: ["400% рост продаж", "60% снижение CPA", "250% ROI"],
      category: "E-commerce"
    },
    {
      title: "B2B сервис автоматизации",
      description: "Привлекли 150+ квалифицированных лидов в месяц",
      metrics: ["150+ лидов/месяц", "35% конверсия", "180% рост клиентов"],
      category: "B2B"
    },
    {
      title: "Медицинская клиника",
      description: "Увеличили количество записей на 300%",
      metrics: ["300% больше записей", "45% выше CTR", "80% меньше стоимость лида"],
      category: "Медицина"
    }
  ];

  const testimonials = [
    {
      name: "Алексей Петров",
      company: "ООО «ТехноСтрой»",
      text: "За 8 месяцев работы команда увеличила наши продажи в 3 раза. Профессиональный подход!",
      result: "300% рост продаж"
    },
    {
      name: "Мария Кузнецова", 
      company: "Медцентр «Здоровье»",
      text: "Отличная настройка рекламы! Количество пациентов выросло в 2,5 раза при снижении бюджета.",
      result: "250% больше клиентов"
    },
    {
      name: "Дмитрий Волков",
      company: "IT-агентство «Инновации»",
      text: "Качественно настроенная аналитика помогла нам принимать правильные решения.",
      result: "200% эффективность"
    }
  ];

  const team = [
    {
      name: "Анна Смирнова",
      role: "Директор по маркетингу",
      experience: "8 лет в digital",
      specialization: "Стратегия и аналитика"
    },
    {
      name: "Максим Козлов",
      role: "Специалист по контекстной рекламе",
      experience: "5 лет в PPC",
      specialization: "Google Ads & Яндекс.Директ"
    },
    {
      name: "Екатерина Попова",
      role: "SEO-специалист",
      experience: "6 лет в SEO",
      specialization: "Техническое SEO"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-inter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              MarketPro
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Услуги', 'Кейсы', 'О компании', 'Команда', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
              Получить консультацию
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold font-inter mb-6 bg-gradient-to-r from-primary via-secondary to-green-500 bg-clip-text text-transparent">
              Увеличиваем продажи через контекстную рекламу
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Профессиональное управление рекламными кампаниями с гарантированным результатом. 
              Работаем с бюджетами от 50 000 ₽/месяц.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 py-6">
                <Icon name="Rocket" className="mr-2" size={20} />
                Запустить рекламу
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть кейсы
              </Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "250+", label: "Проектов" },
                { number: "350%", label: "Средний ROI" },
                { number: "8 лет", label: "На рынке" },
                { number: "95%", label: "Довольных клиентов" }
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для роста вашего бизнеса в интернете
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1 border-0 bg-white/80 backdrop-blur">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={service.icon} className="text-white" size={24} />
                  </div>
                  <CardTitle className="font-inter">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4">{service.description}</CardDescription>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-200 text-green-800">
                    {service.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="кейсы" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Кейсы клиентов</h2>
            <p className="text-xl text-gray-600">Реальные результаты наших клиентов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cases.map((case_, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <Badge className="w-fit mb-2">{case_.category}</Badge>
                  <CardTitle className="font-inter">{case_.title}</CardTitle>
                  <CardDescription>{case_.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {case_.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center">
                        <Icon name="TrendingUp" size={16} className="text-green-500 mr-2" />
                        <span className="text-sm">{metric}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur border-0">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                      <Icon name="User" className="text-white" size={20} />
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.company}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <Badge variant="secondary" className="bg-gradient-to-r from-green-100 to-green-200 text-green-800">
                    {testimonial.result}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="команда" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-inter mb-4">Наша команда</h2>
            <p className="text-xl text-gray-600">Профессионалы с опытом работы в крупных агентствах</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" className="text-white" size={32} />
                  </div>
                  <CardTitle className="font-inter">{member.name}</CardTitle>
                  <CardDescription>{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>Опыт: {member.experience}</div>
                    <div>Специализация: {member.specialization}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-inter mb-4">Готовы увеличить продажи?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Запишитесь на бесплатную консультацию и получите аудит рекламных кампаний
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: "Phone", title: "+7 (495) 123-45-67", subtitle: "Звоните в любое время" },
                { icon: "Mail", title: "hello@marketpro.ru", subtitle: "Ответим в течение часа" },
                { icon: "MapPin", title: "Москва, ул. Тверская, 1", subtitle: "Приезжайте в офис" }
              ].map((contact, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                    <Icon name={contact.icon} className="text-white" size={24} />
                  </div>
                  <div className="font-semibold mb-1">{contact.title}</div>
                  <div className="text-gray-600 text-sm">{contact.subtitle}</div>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-12 py-6">
              <Icon name="Calendar" className="mr-2" size={20} />
              Записаться на консультацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold font-inter bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                MarketPro
              </div>
              <p className="text-gray-400">
                Профессиональное digital-агентство с 8-летним опытом работы
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <div className="space-y-2 text-gray-400">
                <div>Контекстная реклама</div>
                <div>SEO продвижение</div>
                <div>SMM продвижение</div>
                <div>Веб-аналитика</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <div className="space-y-2 text-gray-400">
                <div>О нас</div>
                <div>Команда</div>
                <div>Кейсы</div>
                <div>Контакты</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div>+7 (495) 123-45-67</div>
                <div>hello@marketpro.ru</div>
                <div>Москва, ул. Тверская, 1</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MarketPro. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;