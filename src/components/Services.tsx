
import React, { useEffect, useRef } from 'react';
import { Bath, Scissors, PawPrint, Shield, Home, Award } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="glass-card rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl opacity-0 animate-slide-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <div className="bg-secondary/50 p-4 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes to children
          entry.target.classList.add('observed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      icon: <Bath size={24} className="text-primary" />,
      title: "Banho Completo",
      description: "Banho com shampoo e condicionador especial para cada tipo de pelo, secagem e escovação.",
      delay: 100
    },
    {
      icon: <Scissors size={24} className="text-primary" />,
      title: "Tosa Higiênica",
      description: "Corte das áreas íntimas, patas e face para melhor higiene e conforto do pet.",
      delay: 200
    },
    {
      icon: <PawPrint size={24} className="text-primary" />,
      title: "Corte de Unhas",
      description: "Corte e lixamento das unhas do seu pet com equipamentos profissionais e seguros.",
      delay: 300
    },
    {
      icon: <Shield size={24} className="text-primary" />,
      title: "Tratamentos Especiais",
      description: "Hidratação, redução de queda de pelos e tratamentos para pele sensível.",
      delay: 400
    },
    {
      icon: <Home size={24} className="text-primary" />,
      title: "Conforto do Lar",
      description: "Seu pet é atendido no ambiente que ele conhece, reduzindo o estresse e ansiedade.",
      delay: 500
    },
    {
      icon: <Award size={24} className="text-primary" />,
      title: "Profissionais Certificados",
      description: "Equipe treinada em bem-estar animal, técnicas de tosa e primeiros socorros.",
      delay: 600
    }
  ];

  return (
    <section 
      id="serviços"
      ref={sectionRef} 
      className="py-24 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-4 opacity-0 animate-slide-down" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-slide-down" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Cuidados Personalizados para Seu Pet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-slide-down" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Oferecemos serviços de alta qualidade focados no bem-estar e na saúde do seu animal de estimação, tudo isso no conforto da sua casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
