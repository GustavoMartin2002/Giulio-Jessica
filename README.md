# Site do Casamento - Giulio & Jessica💍

Uma Single Page Application (SPA) criada para celebrar e compartilhar os detalhes do casamento de Giulio e Jessica com seus convidados.

### Funcionalidades✨
- **💌Mensagem dos Noivos:** Uma mensagem de boas-vindas para os convidados.
- **📸Galeria de Fotos:** Um carrossel com fotos profissionais do casal.
- **📅Detalhes do Evento:** Todas as informações essenciais em um só lugar (Data e Horário, Local da Cerimônia, Manual do Convidado).
- **📍Mapa Interativo:** Integração com o Google Maps para facilitar a chegada ao local.
- **🎁Lista de Presentes:** Opções para presentear os noivos, incluindo (PIX, Lista de Presentes).
- **✅Confirmação de Presença:** Um formulário inteligente que envia os dados para um Google Forms, com validações prévias para garantir a integridade das respostas.

### Tecnologias Utilizadas🚀
Este projeto foi construído utilizando uma combinação inteligente de tecnologias para o frontend e para a manipulação dos dados do formulário.

**Frontend:**
- [Next.js](https://nextjs.org/) - Framework React para aplicações web.
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS para estilização rápida e responsiva.

**Formulários e Dados:**
- [React Hook Form](https://react-hook-form.com/) - Para validação de formulários no lado do cliente.
- [Google Forms](https://www.google.com/forms/about/) - Utilizado como o destino final para receber e armazenar as confirmações de presença.
- [Google Sheets](https://www.google.com/sheets/about/) - Planilha vinculada ao Google Forms, servindo como "banco de dados" para as validações.

**Backend & Integrações:**
- [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) - Funciona como um *backend* intermediário que lê a planilha do Google Sheets para realizar validações customizadas, antes de permitir o envio dos dados para o Google Forms.
- [Google APIs (googleapis)](https://github.com/googleapis/google-api-nodejs-client) - Permite a conexão segura da API Route com a planilha no Google Sheets.

**UX/UI:**
- [SweetAlert2](https://sweetalert2.github.io/) - Para exibir alertas e feedbacks visuais amigáveis ao usuário.

### Detalhes da Validação do Formulário📝
O fluxo de confirmação de presença é projetado para ser seguro e eficiente. A API do Next.js atua como uma camada de proteção que consulta a planilha (populada pelo Google Forms) antes de permitir que o frontend envie uma nova resposta.

As seguintes validações são realizadas pela API:
- **✅ Sucesso:** Se todas as validações passarem, a API retorna uma resposta positiva, e o frontend prossegue com o envio dos dados para o Google Forms. O convidado recebe uma mensagem de agradecimento.
- **👥 Convidado Já Confirmado:** A API verifica na planilha se já existe uma entrada com o mesmo nome. Se existir, retorna um erro, e o frontend exibe um alerta informando sobre a duplicidade.
- **⏳ Prazo Expirado:** A API verifica a data atual contra a data limite de confirmação (02/10/2025) e bloqueia o envio se o prazo tiver passado.
- **🎉 Evento Passado:** Após a data do casamento (04/10/2025), a validação também falha, desativando permanentemente o formulário.
- **❌ Erro de Servidor:** Caso ocorra qualquer falha de comunicação entre a API e a planilha do Google, uma mensagem de erro genérica é retornada.
