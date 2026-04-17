const commitments = [
  {
    key: 'PADRÕES',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 003 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-1.954-.467-3.8-1.297-5.432A11.952 11.952 0 0112 2.714z" />
    ),
    title: 'Padrões Internacionais',
    body: 'Todas as pesquisas realizadas na América Latina seguem os estritos padrões éticos das principais organizações internacionais que regulam a atividade na Europa e nos Estados Unidos.',
  },
  {
    key: 'PRIVACIDADE',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    ),
    title: 'Privacidade & LGPD',
    body: 'Seus dados pessoais jamais serão compartilhados com terceiros nem vinculados às suas respostas. A única exceção são casos de saúde pública ou Eventos Adversos (AE), apenas quando previamente aceito pelo participante.',
  },
  {
    key: 'HONORÁRIOS',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    ),
    title: 'Transparência nos Honorários',
    body: 'Os honorários são pagos sempre nos prazos combinados. Após cada participação, você recebe um e-mail confirmando o valor, a modalidade e a data de crédito. Tudo acessível na sua conta a qualquer momento.',
  },
  {
    key: 'VOLUNTARIEDADE',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    ),
    title: 'Participação Voluntária',
    body: 'A participação é sempre voluntária. Você pode se cadastrar, atualizar seus dados ou solicitar exclusão completa da base a qualquer momento, sem qualquer ônus.',
  },
  {
    key: 'AUTONOMIA',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    ),
    title: 'Somente Pesquisa de Mercado',
    body: 'A P+ Health não realiza atividades de promoção, publicidade, nem estudos clínicos. Nossa atuação limita-se à pesquisa de mercado e de opinião, à apresentação de novos conceitos para fins de pesquisa e à divulgação de artigos de revistas médicas credenciadas.',
  },
  {
    key: 'MISSÃO',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    ),
    title: 'Nossa Missão',
    body: 'Ser um instrumento de pesquisa e comunicação que, pela difusão de novidades e troca de opiniões entre profissionais, contribui para o avanço do conhecimento médico e o desenvolvimento de tratamentos mais eficazes para pacientes.',
  },
]

export default function EthicsSection() {
  return (
    <section id="etica" className="bg-white py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-5 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14 reveal">
          <p className="text-[11px] font-bold text-brand-600 uppercase tracking-[0.14em] mb-4">
            Compromissos
          </p>
          <h2 className="text-3xl lg:text-[2.2rem] font-extrabold text-gray-900 leading-tight">
            Nossos Compromissos Éticos
          </h2>
          <p className="text-xl lg:text-[1.4rem] font-light text-gray-400 mt-2">
            As regras que regem cada experiência de pesquisa.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger">
          {commitments.map(({ key, icon, title, body }) => (
            <div
              key={key}
              className="reveal bg-gray-50 rounded-2xl p-6 flex flex-col gap-3 border border-gray-100 hover:border-brand-200 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-brand-50 flex items-center justify-center flex-shrink-0">
                <svg className="w-4.5 h-4.5 text-brand-500" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" style={{ width: 18, height: 18 }}>
                  {icon}
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-brand-500 uppercase tracking-widest mb-1">{key}</p>
                <h3 className="font-bold text-gray-800 text-[13.5px] leading-snug mb-2">{title}</h3>
                <p className="text-[12.5px] text-gray-400 font-light leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="reveal text-center text-[11px] text-gray-300 font-light mt-10 max-w-2xl mx-auto leading-relaxed">
          A P+ Health é uma comunidade de participantes em pesquisas com presença no Brasil, Argentina e Paraguai, direcionada exclusivamente a médicos e profissionais de saúde legalmente registrados. As opiniões expressadas nas pesquisas são de responsabilidade exclusiva dos participantes.
        </p>

      </div>
    </section>
  )
}
