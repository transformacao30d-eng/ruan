import React from 'react';
import { X, ShieldCheck, Mail, FileText } from 'lucide-react';
import { PRODUCT_INFO } from '../config';

interface LegalModalProps {
  type: 'terms' | 'privacy' | 'contact' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto text-left">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {type === 'terms' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#4F7DF3]">
              <FileText className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">Termos de Uso</h3>
            </div>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Ao adquirir o produto digital <strong>{PRODUCT_INFO.name}</strong>, você concorda com os seguintes termos:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>O material é estritamente digital no formato PDF para download e impressão.</li>
                <li>É permitido imprimir as atividades para uso pessoal, em casa, em sala de aula ou em atendimentos pedagógicos.</li>
                <li>É proibida a revenda, distribuição não autorizada ou comercialização dos arquivos digitais em plataformas de terceiros.</li>
                <li>O direito de arrependimento pode ser exercido no prazo legal de 7 dias a contar da confirmação do pagamento.</li>
              </ul>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#22C55E]">
              <ShieldCheck className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">Política de Privacidade</h3>
            </div>
            <div className="text-sm text-slate-600 space-y-3 leading-relaxed">
              <p>
                Sua privacidade e segurança de dados são prioridades fundamentais para nós:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Coletamos apenas os dados essenciais para o processamento do seu pedido e envio do acesso do produto por e-mail.</li>
                <li>Os dados de pagamento são criptografados e processados diretamente pela plataforma de checkout segura. Não armazenamos números de cartão.</li>
                <li>Seus dados de contato não serão vendidos ou compartilhados com terceiros.</li>
              </ul>
            </div>
          </div>
        )}

        {type === 'contact' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[#FF8FA3]">
              <Mail className="w-6 h-6" />
              <h3 className="text-xl font-bold text-slate-900">Atendimento e Contato</h3>
            </div>
            <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
              <p>
                Ficou com alguma dúvida ou precisa de auxílio com seu acesso? Nossa equipe de suporte pedagógico está à disposição!
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
                <p className="font-semibold text-slate-800">
                  📧 E-mail de Suporte: <span className="text-[#4F7DF3] font-normal">{PRODUCT_INFO.contactEmail}</span>
                </p>
                <p className="font-semibold text-slate-800">
                  📱 Atendimento WhatsApp: <span className="text-[#22C55E] font-normal">{PRODUCT_INFO.supportWhatsApp}</span>
                </p>
                <p className="text-xs text-slate-500 pt-1">
                  Horário de atendimento: Segunda a Sexta, das 09h às 18h.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
