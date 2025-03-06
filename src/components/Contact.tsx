
import React, { useState } from 'react';
import { Phone, Mail, MapPin, PawPrint, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    petName: '',
    petType: '',
    service: '',
    message: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          phone: '',
          petName: '',
          petType: '',
          service: '',
          message: ''
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contato" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-sm font-medium rounded-full mb-4 opacity-0 animate-slide-down" style={{animationDelay: '100ms', animationFillMode: 'forwards'}}>
            Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 opacity-0 animate-slide-down" style={{animationDelay: '300ms', animationFillMode: 'forwards'}}>
            Agende um Serviço para Seu Pet
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto opacity-0 animate-slide-down" style={{animationDelay: '500ms', animationFillMode: 'forwards'}}>
            Preencha o formulário abaixo ou entre em contato diretamente através dos nossos canais de comunicação.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12 opacity-0 animate-fade-in" style={{animationDelay: '700ms', animationFillMode: 'forwards'}}>
          <div className="md:col-span-2 space-y-8">
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
          
          <div className="md:col-span-3">
            <div className="glass-card p-8 rounded-xl">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <Check className="text-green-600" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600 max-w-md">
                    Agradecemos pelo seu contato. Nossa equipe entrará em contato em breve para confirmar o agendamento.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome Completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Telefone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Nome do Pet</label>
                      <input
                        type="text"
                        name="petName"
                        value={formState.petName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Tipo de Pet</label>
                      <select
                        name="petType"
                        value={formState.petType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="dog">Cachorro</option>
                        <option value="cat">Gato</option>
                        <option value="other">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Serviço Desejado</label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        required
                      >
                        <option value="">Selecione...</option>
                        <option value="bath">Banho</option>
                        <option value="grooming">Tosa</option>
                        <option value="both">Banho e Tosa</option>
                        <option value="special">Tratamento Especial</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mensagem (opcional)</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-medium py-3 px-6 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
                  >
                    Agendar Serviço
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
