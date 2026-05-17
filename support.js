const supportTranslations = {
  'pt-BR': {
    pageTitle: 'Reviva — Apoie o Projeto',
    description: 'Apoie o projeto Reviva via Pix no Brasil ou GitHub Sponsors no exterior.',
    navFixes: 'Fixes',
    navGames: 'Jogos',
    navCommunity: 'Comunidade',
    navFaq: 'FAQ',
    badge: 'APOIE O PROJETO',
    title: 'Ajude a manter a Reviva viva.',
    subtitle: 'Seu apoio ajuda no desenvolvimento de novos fixes, testes em jogos e melhorias para GPUs antigas.',
    backHome: '← Voltar para o site',
    pixTitle: 'Brasil — Apoie via Pix',
    pixText: 'Para quem é do Brasil, envie qualquer valor usando a chave Pix abaixo.',
    pixLabel: 'Chave Pix e-mail',
    copyPix: 'Copiar chave Pix',
    copiedPix: 'Chave Pix copiada!',
    pixNote: 'Depois de copiar, abra o app do seu banco e cole a chave Pix.',
    sponsorTitle: 'Resto do mundo — GitHub Sponsor',
    sponsorText: 'Para quem está fora do Brasil, apoie o projeto pelo GitHub Sponsors.',
    sponsorButton: 'Abrir GitHub Sponsor',
    sponsorNote: 'O apoio ajuda a manter os repositórios, testes e atualizações da comunidade.',
    footer: 'Projeto de Compatibilidade para GPUs Antigas',
    langLabel: 'Selecionar idioma'
  },
  en: {
    pageTitle: 'Reviva — Support the Project',
    description: 'Support Reviva with Pix in Brazil or GitHub Sponsors worldwide.',
    navFixes: 'Fixes',
    navGames: 'Games',
    navCommunity: 'Community',
    navFaq: 'FAQ',
    badge: 'SUPPORT THE PROJECT',
    title: 'Help keep Reviva alive.',
    subtitle: 'Your support helps us develop new fixes, test games and improve compatibility for older GPUs.',
    backHome: '← Back to site',
    pixTitle: 'Brazil — Support with Pix',
    pixText: 'For people in Brazil, send any amount using the Pix key below.',
    pixLabel: 'Pix e-mail key',
    copyPix: 'Copy Pix key',
    copiedPix: 'Pix key copied!',
    pixNote: 'After copying, open your bank app and paste the Pix key.',
    sponsorTitle: 'Rest of the world — GitHub Sponsor',
    sponsorText: 'For people outside Brazil, support the project through GitHub Sponsors.',
    sponsorButton: 'Open GitHub Sponsor',
    sponsorNote: 'Your support helps maintain repositories, testing and community updates.',
    footer: 'Legacy GPU Compatibility Project',
    langLabel: 'Select language'
  },
  ru: {
    pageTitle: 'Reviva — поддержать проект',
    description: 'Поддержите Reviva через Pix в Бразилии или GitHub Sponsors в других странах.',
    navFixes: 'Фиксы',
    navGames: 'Игры',
    navCommunity: 'Сообщество',
    navFaq: 'FAQ',
    badge: 'ПОДДЕРЖАТЬ ПРОЕКТ',
    title: 'Помогите Reviva жить дальше.',
    subtitle: 'Ваша поддержка помогает создавать новые фиксы, тестировать игры и улучшать совместимость старых GPU.',
    backHome: '← Назад на сайт',
    pixTitle: 'Бразилия — поддержка через Pix',
    pixText: 'Для пользователей из Бразилии: отправьте любую сумму по Pix-ключу ниже.',
    pixLabel: 'Pix-ключ e-mail',
    copyPix: 'Скопировать Pix-ключ',
    copiedPix: 'Pix-ключ скопирован!',
    pixNote: 'После копирования откройте приложение банка и вставьте Pix-ключ.',
    sponsorTitle: 'Другие страны — GitHub Sponsor',
    sponsorText: 'Если вы не в Бразилии, поддержите проект через GitHub Sponsors.',
    sponsorButton: 'Открыть GitHub Sponsor',
    sponsorNote: 'Поддержка помогает поддерживать репозитории, тесты и обновления сообщества.',
    footer: 'Проект совместимости для старых GPU',
    langLabel: 'Выбрать язык'
  },
  es: {
    pageTitle: 'Reviva — Apoya el proyecto',
    description: 'Apoya Reviva con Pix en Brasil o GitHub Sponsors en el exterior.',
    navFixes: 'Fixes',
    navGames: 'Juegos',
    navCommunity: 'Comunidad',
    navFaq: 'FAQ',
    badge: 'APOYA EL PROYECTO',
    title: 'Ayuda a mantener Reviva viva.',
    subtitle: 'Tu apoyo ayuda a desarrollar nuevos fixes, probar juegos y mejorar la compatibilidad para GPUs antiguas.',
    backHome: '← Volver al sitio',
    pixTitle: 'Brasil — Apoya vía Pix',
    pixText: 'Para quienes están en Brasil, envía cualquier valor usando la clave Pix abajo.',
    pixLabel: 'Clave Pix e-mail',
    copyPix: 'Copiar clave Pix',
    copiedPix: '¡Clave Pix copiada!',
    pixNote: 'Después de copiar, abre la app de tu banco y pega la clave Pix.',
    sponsorTitle: 'Resto del mundo — GitHub Sponsor',
    sponsorText: 'Para quienes están fuera de Brasil, apoya el proyecto por GitHub Sponsors.',
    sponsorButton: 'Abrir GitHub Sponsor',
    sponsorNote: 'El apoyo ayuda a mantener repositorios, pruebas y actualizaciones de la comunidad.',
    footer: 'Proyecto de Compatibilidad para GPUs Antiguas',
    langLabel: 'Seleccionar idioma'
  }
};

const applySupportLanguage = (lang) => {
  const t = supportTranslations[lang] || supportTranslations['pt-BR'];
  document.documentElement.lang = lang;
  document.title = t.pageTitle;

  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', t.description);

  const switcher = document.querySelector('.language-switcher');
  if (switcher) switcher.setAttribute('aria-label', t.langLabel);

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (t[key]) element.textContent = t[key];
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  localStorage.setItem('reviva-lang', lang);
};

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => applySupportLanguage(button.dataset.lang));
});

const copyButton = document.querySelector('[data-copy-pix]');
if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const key = document.querySelector('#pixKey')?.textContent?.trim() || '';
    const lang = localStorage.getItem('reviva-lang') || 'pt-BR';
    const t = supportTranslations[lang] || supportTranslations['pt-BR'];

    try {
      await navigator.clipboard.writeText(key);
      copyButton.textContent = t.copiedPix;
      setTimeout(() => copyButton.textContent = t.copyPix, 1800);
    } catch (error) {
      const temp = document.createElement('textarea');
      temp.value = key;
      document.body.appendChild(temp);
      temp.select();
      document.execCommand('copy');
      temp.remove();
      copyButton.textContent = t.copiedPix;
      setTimeout(() => copyButton.textContent = t.copyPix, 1800);
    }
  });
}

applySupportLanguage(localStorage.getItem('reviva-lang') || 'pt-BR');
