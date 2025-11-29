# SEO Setup voor Domain Migratie

Dit document bevat alle informatie over de SEO-configuratie voor de CrossFit Leiden website.

## ✅ Wat is al ingesteld

### 1. Sitemap.xml (/app/sitemap.ts)
- **Automatische generatie** van sitemap voor alle pagina's
- **Beide locales** (nl & en) worden gegenereerd
- **Toegankelijk via**: `https://crossfitleiden.nl/sitemap.xml`
- **Bevat alle pagina's**:
  - Homepage
  - Over ons
  - Team
  - Locatie
  - Pricing
  - Rooster
  - Ervaringen
  - Starten
  - Contact

### 2. Robots.txt (/app/robots.ts)
- **Automatische generatie** van robots.txt
- **Toegankelijk via**: `https://crossfitleiden.nl/robots.txt`
- **Configuratie**:
  - Toestaat alle crawlers (`User-agent: *`)
  - Staat crawling toe van alle publieke pagina's
  - Blokkeert `/api/` en `/_next/` directories
  - Verwijst naar sitemap.xml

### 3. Locale Redirects (vercel.json)
- **Root redirect**: Automatische redirect van `/` naar `/nl` of `/en` op basis van browser taal
- **Browser detectie**: Nederlands sprekende bezoekers → `/nl`, anderen → `/en`

## 📋 Wat je moet doen na domain migratie

### 1. Update Base URL (als nodig)
Als je nieuwe domain **NIET** `crossfitleiden.nl` is, update de volgende bestanden:

**app/sitemap.ts** - Regel 3:
```typescript
const baseUrl = 'https://jouw-nieuwe-domain.nl';
```

**app/robots.ts** - Regel 4:
```typescript
const baseUrl = 'https://jouw-nieuwe-domain.nl';
```

### 2. Google Search Console

#### Stap 1: Voeg nieuwe property toe
1. Ga naar [Google Search Console](https://search.google.com/search-console)
2. Klik op "Property toevoegen"
3. Kies "URL prefix" en voer je nieuwe domain in
4. Volg de verificatie instructies (HTML tag of DNS record)

#### Stap 2: Dien sitemap in
1. Ga naar je nieuwe property in Search Console
2. Klik op "Sitemaps" in het menu links
3. Voer in: `sitemap.xml`
4. Klik op "Indienen"

#### Stap 3: Monitor na 1 week
1. Check "Coverage" voor crawl errors
2. Check "Performance" voor indexering status
3. Los eventuele errors op

### 3. 301 Redirects instellen

Als je **oude URLs** hebt die moeten redirecten naar nieuwe URLs, voeg deze toe aan `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/oude-pagina",
      "destination": "/nl/nieuwe-pagina",
      "permanent": true
    },
    {
      "source": "/oude-blog/:slug",
      "destination": "/nl/nieuws/:slug",
      "permanent": true
    }
  ]
}
```

**Let op**: `"permanent": true` = 301 redirect (behoudt SEO rankings)

### 4. Als je van een oud domein migreert

#### Optie A: Domein blijft van jou
Stel redirects in op je oude hosting:
- Alle pagina's → Redirect naar nieuw domein + locale
- Voorbeeld: `ouddomain.nl/pagina` → `crossfitleiden.nl/nl/pagina`

#### Optie B: Vercel host beide domeinen
Voeg in `vercel.json` toe:
```json
{
  "redirects": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "oud-domein.nl"
        }
      ],
      "destination": "https://crossfitleiden.nl/nl/:path*",
      "permanent": true
    }
  ]
}
```

## 🔍 Verificatie checklist

Na deployment, test het volgende:

- [ ] `https://crossfitleiden.nl/sitemap.xml` → Toont sitemap
- [ ] `https://crossfitleiden.nl/robots.txt` → Toont robots
- [ ] `https://crossfitleiden.nl/` → Redirect naar `/nl` of `/en`
- [ ] Google Search Console property toegevoegd
- [ ] Sitemap ingediend in Search Console
- [ ] 301 redirects werken (indien van toepassing)
- [ ] Geen crawl errors na 1 week

## 📊 Monitoring

**Eerste week na migratie:**
- Check dagelijks Search Console voor errors
- Monitor indexering status
- Check of oude URLs correct redirecten

**Na 2-4 weken:**
- Check rankings voor belangrijkste zoekwoorden
- Monitor organisch verkeer in Analytics
- Los eventuele issues op

## ❓ Hulp nodig?

Als je vragen hebt of errors tegenkomt:
1. Check Google Search Console → Coverage → Errors
2. Test redirects met [Redirect Checker](https://httpstatus.io/)
3. Valideer sitemap met [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
