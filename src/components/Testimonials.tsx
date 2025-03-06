
import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  pet: string;
  image: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ana Silva",
    pet: "Luna, Shih Tzu",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "O serviço de banho e tosa em casa foi perfeito! Minha Luna fica muito estressada em pet shops, mas com o atendimento domiciliar ela ficou super tranquila. Profissionais atenciosos e cuidadosos.",
    rating: 5
  },
  {
    id: 2,
    name: "Carlos Mendes",
    pet: "Thor, Golden Retriever",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "O Thor é um cachorro grande e sempre foi um desafio levá-lo ao pet shop. O serviço em casa foi uma mão na roda! Rápido, eficiente e muito profissional. Recomendo demais!",
    rating: 5
  },
  {
    id: 3,
    name: "Patricia Lopes",
    pet: "Mia, Gata Persa",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Minha gata Mia é muito medrosa, e encontrar um serviço de banho que vem até nossa casa foi uma benção. A equipe é muito paciente com ela e o resultado é incrível. Vale cada centavo!",
    rating: 5
  },
  {
    id: 4,
    name: "Rafael Oliveira",
    pet: "Nina, Poodle",
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
    content: "Excelente serviço, minha Nina ficou linda! Amei a praticidade de ter todo o serviço de pet shop no conforto de casa. Os produtos usados são de ótima qualidade e deixaram o pelo dela super macio.",
    rating: 4
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial; className?: string }> = ({ testimonial, className = "" }) => {
  return (
    <div className={`glass-card p-8 rounded-xl h-full flex flex-col ${className}`}>
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-gray-600">{testimonial.pet}</p>
        </div>
      </div>
      
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star 
            key={index} 
            size={16} 
            className={index < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-700 flex-grow">{testimonial.content}</p>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / 2));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + Math.ceil(testimonials.length / 2)) % Math.ceil(testimonials.length / 2));
  };
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add animation classes
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

  return (
    <section 
      id="depoimentos"
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-4 opacity-0 animate-slide-down" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-slide-down" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-slide-down" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Veja o que os tutores e seus pets acharam do nosso serviço de banho e tosa domiciliar.
          </p>
        </div>

        {/* Mobile Testimonials */}
        <div className="md:hidden opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-6 px-6 pb-8 space-x-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="snap-center w-full flex-shrink-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:block relative opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
          <div className="grid grid-cols-2 gap-8 transition-all duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="flex justify-center mt-10 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-all-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white border border-gray-200 hover:bg-gray-100 transition-all-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
