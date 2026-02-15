interface JsonLdProps {
  locale: string;
}

const descriptions: Record<string, string> = {
  en: "Software engineer with 10+ years of experience specializing in website and application development for businesses. Expert in React, Next.js, .NET, and modern web technologies.",
  pt: "Engenheiro de software com mais de 10 anos de experiência, especializado em criação de sites e aplicações para empresas. Especialista em React, Next.js, .NET e tecnologias web modernas.",
  es: "Ingeniero de software con más de 10 años de experiencia, especializado en creación de sitios web y aplicaciones para empresas. Experto en React, Next.js, .NET y tecnologías web modernas.",
};

const jobTitles: Record<string, string> = {
  en: "Software Engineer",
  pt: "Engenheiro de Software",
  es: "Ingeniero de Software",
};

export function JsonLd({ locale }: JsonLdProps) {
  const baseUrl = "https://arthurhauenstein.com";

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Arthur Hauenstein",
        jobTitle: jobTitles[locale] ?? jobTitles.en,
        description: descriptions[locale] ?? descriptions.en,
        url: baseUrl,
        sameAs: [
          "https://github.com/arthurhauenstein",
          "https://linkedin.com/in/arthurhauenstein",
        ],
        knowsAbout: [
          "React",
          "Next.js",
          "TypeScript",
          "Node.js",
          ".NET",
          "C#",
          "React Native",
          "Tailwind CSS",
          "JavaScript",
          "HTML",
          "CSS",
          "UI/UX Design",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#service`,
        name: "Arthur Hauenstein - Software Development",
        description: descriptions[locale] ?? descriptions.en,
        url: baseUrl,
        provider: {
          "@id": `${baseUrl}/#person`,
        },
        areaServed: "Worldwide",
        serviceType: "Software Development",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
