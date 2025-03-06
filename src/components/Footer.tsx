
import React from 'react';
import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-display font-bold mb-6">
              FehariPet<span className="text-primary/80">.</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Serviço de banho e tosa profissional que vai até sua casa. Conforto e qualidade para seu pet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Banho</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tosa</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Pacotes Especiais</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tratamentos</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sobre Nós</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Profissionais</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Trabalhe Conosco</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Política de Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Contato</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">
                (11) 99999-9999
              </li>
              <li className="text-gray-400">
                contato@petspa.com
              </li>
              <li className="text-gray-400">
                Atendimento: Segunda-Sexta (8h-20h)
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PetSpa. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Feito com <Heart size={14} className="mx-1 text-red-500" /> para seu pet
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
