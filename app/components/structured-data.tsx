export function GeneratorStructuredData() {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "WebApplication",
                    "name": "New Year's Ideas Generator",
                    "applicationCategory": "Entertainment",
                    "operatingSystem": "Any",
                    "offers": {
                        "@type": "Offer",
                        "price": "0",
                        "priceCurrency": "USD"
                    },
                    "description": "Generate creative New Year celebration ideas instantly! Find unique party games, family activities, and budget-friendly ways to celebrate.",
                    "inLanguage": ["en", "ru"],
                    "author": {
                        "@type": "Person",
                        "name": "Timur Isachenko",
                        "url": "https://timurisa.com"
                    },
                    "featureList": [
                        "Random idea generation",
                        "Difficulty levels",
                        "Cost estimation",
                        "Fun factor rating",
                        "Multi-language support",
                        "Social sharing"
                    ]
                })
            }}
        />
    )
} 