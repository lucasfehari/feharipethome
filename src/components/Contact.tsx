import React from 'react';
import { Phone, Mail, MapPin, PawPrint } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-4 opacity-0 animate-slide-down" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-slide-down" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Entre em Contato Conosco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-slide-down" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Utilize nossos canais de comunicação para falar conosco diretamente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <PawPrint className="mr-2 text-primary" size={20} />
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Phone className="mr-4 text-primary/80" size={20} />
                <div>
                  <p className="font-medium">Telefone</p>
                  <p className="text-gray-600">(11) 99999-9999</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="mr-4 text-primary/80" size={20} />
                <div>
                  <p className="font-medium">E-mail</p>
                  <p className="text-gray-600">contato@petspa.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="mr-4 text-primary/80" size={20} />
                <div>
                  <p className="font-medium">Área de Atendimento</p>
                  <p className="text-gray-600">Atendemos em toda a cidade e região metropolitana</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Horários de Atendimento</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-600">Segunda-Sexta:</span>
                <span className="font-medium">8h - 20h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Sábado:</span>
                <span className="font-medium">9h - 18h</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Domingo:</span>
                <span className="font-medium">Fechado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
