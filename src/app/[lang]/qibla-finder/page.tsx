import QiblaFinder from "./qibla-finder";


export async function generateMetadata({ params }: any) {
  const lang = params.lang;

  let title = '';
  let description = '';

  switch (lang) {
    case 'fr':
      title = `Trouver la Qibla – Direction de Prière Précise | Global Salah`;
      description = `Utilisez notre outil de localisation de la Qibla pour déterminer avec précision la direction de la Mecque depuis n’importe où dans le monde.`;
      break;
    case 'ar':
      title = `تحديد اتجاه القبلة – اعرف اتجاه مكة بدقة | جلوبال صلاح`;
      description = `استخدم أداة تحديد اتجاه القبلة لمعرفة الاتجاه الصحيح للصلاة أينما كنت حول العالم.`;
      break;
    default:
      title = `Qibla Finder – Accurate Prayer Direction | Global Salah`;
      description = `Use our Qibla Finder tool to determine the accurate direction of Makkah from anywhere in the world. Align your prayers with precision.`;
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.globalsalah.com/${lang}/qibla-finder`,
      en: `https://www.globalsalah.com/en/qibla-finder`,
      fr: `https://www.globalsalah.com/fr/qibla-finder`,
      ar: `https://www.globalsalah.com/ar/qibla-finder`,
      'x-default': `https://www.globalsalah.com/en/qibla-finder`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}


export default function Home() {
  return (
    <main className="py-10 bg-gradient-to-b from-emerald-50 to-white dark:from-emerald-950 dark:to-gray-900 dark:text-white">
      <QiblaFinder />
    </main>
  )
}
