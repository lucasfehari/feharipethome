import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="início"
      ref={heroRef}
      className="min-h-screen pt-28 pb-16 px-6 md:px-12 flex items-center justify-center opacity-0 transition-opacity duration-1000"
      style={{
        background: 'linear-gradient(90deg, hsla(0, 0%, 99%, 1) 0%, hsla(0, 0%, 95%, 1) 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-4 animate-slide-up opacity-0" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Banho e Tosa em Casa
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 animate-slide-up opacity-0" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Cuidado Premium para seu Pet, no Conforto do Lar
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl animate-slide-up opacity-0" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
            Serviço de banho e tosa profissional que vem até você. Sem estresse, sem deslocamentos, apenas conforto para você e seu animal de estimação.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{animationDelay: '900ms', animationFillMode: 'forwards'}}>
            <a 
              href="https://wa.me/seunumerodetelefone" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-primary/90 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Agendar Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#serviços" 
              className="bg-white text-primary border border-primary/20 px-6 py-3 rounded-lg font-medium inline-flex items-center justify-center hover:bg-secondary transition-all duration-300 ease-in-out"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 relative animate-scale-in opacity-0" style={{animationDelay: '1000ms', animationFillMode: 'forwards'}}>
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
              alt="Cachorro tomando banho" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 -left-6 p-6 rounded-xl max-w-xs hidden md:block opacity-0 animate-fade-in" style={{animationDelay: '1500ms', animationFillMode: 'forwards'}}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <p className="font-medium">+2,000 pets atendidos</p>
            </div>
            <p className="text-sm text-gray-700">
              Nossos especialistas são treinados para lidar com todas as raças e temperamentos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
