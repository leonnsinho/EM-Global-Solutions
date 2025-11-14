# Guia de SEO - EM Global Solutions

## Configuração Completa de SEO Implementada

Este documento descreve todas as otimizações de SEO implementadas no site da EM Global Solutions.

---

## 1. Meta Tags (index.html)

### Tags Implementadas:
- **Title**: Título otimizado com palavras-chave principais
- **Description**: Descrição atrativa e informativa (155-160 caracteres)
- **Keywords**: Palavras-chave relevantes para o negócio
- **Canonical URL**: Evita conteúdo duplicado
- **Language**: Definido como espanhol (es)
- **Robots**: Configurado para "index, follow"

### Open Graph (Facebook/LinkedIn):
- og:type, og:url, og:title, og:description, og:image
- Otimizado para compartilhamento em redes sociais

### Twitter Cards:
- twitter:card, twitter:title, twitter:description, twitter:image
- Otimizado para compartilhamento no Twitter/X

### Structured Data (JSON-LD):
- Schema.org do tipo "Organization"
- Inclui serviços oferecidos
- Links para redes sociais
- Informações de contato

---

## 2. Componente SEO Dinâmico

**Localização**: `src/components/SEO.tsx`

### Funcionalidades:
- Usa `react-helmet-async` para gerenciar meta tags dinamicamente
- Permite personalizar SEO por página/seção
- Atualiza title, description, keywords, OG tags e canonical URL

### Como Usar:

```tsx
import SEO from './components/SEO';

// Usando valores padrão
<SEO />

// Personalizando para uma página específica
<SEO
  title="Serviços de Marketing Digital - EM Global Solutions"
  description="Conheça nossos serviços de marketing digital..."
  keywords="marketing, social media, ads"
  canonicalUrl="https://masterllc.online/servicios"
/>
```

---

## 3. Sitemap.xml

**Localização**: `public/sitemap.xml`

### URLs Incluídas:
- Homepage (priority: 1.0)
- Seção de Serviços (priority: 0.8)
- Seção de Benefícios (priority: 0.7)
- Seção de Depoimentos (priority: 0.6)
- Seção de FAQ (priority: 0.6)

### Atualização:
- Atualize a data `<lastmod>` quando houver alterações
- Adicione novas páginas conforme o site cresce
- Após alterações, reenvie o sitemap ao Google Search Console

---

## 4. Robots.txt

**Localização**: `public/robots.txt`

### Configuração:
- Permite todos os bots rastrearem todo o site
- Referencia o sitemap.xml
- Pode ser personalizado para bloquear seções específicas

---

## 5. .htaccess (Apache)

**Localização**: `public/.htaccess`

### Otimizações Incluídas:
- **Redirecionamento HTTPS**: Força conexões seguras
- **Remoção/Adição de WWW**: Evita duplicação de conteúdo
- **Compressão Gzip**: Reduz tamanho dos arquivos
- **Cache do Navegador**: Melhora velocidade de carregamento
- **Headers de Segurança**: X-Frame-Options, X-Content-Type-Options, etc.
- **SPA Routing**: Redireciona todas as rotas para index.html

---

## 6. Imagem Open Graph

### IMPORTANTE - AÇÃO NECESSÁRIA:

Você precisa criar uma imagem OG profissional:

**Especificações:**
- Tamanho: 1200x630 pixels
- Formato: JPG ou PNG
- Nome: `og-image.jpg`
- Localização: `public/og-image.jpg`
- URL Final: `https://masterllc.online/og-image.jpg`

**Conteúdo Sugerido:**
- Logo da EM Global Solutions
- Slogan ou mensagem principal
- Design limpo e profissional
- Fundo em tons da marca (azul)

**Ferramentas para Criar:**
- Canva (https://www.canva.com/)
- Figma (https://www.figma.com/)
- Photoshop/GIMP

---

## 7. Checklist Pós-Deploy

**Domínio do Site**: https://masterllc.online/

### Google Search Console:
1. Adicione a propriedade do site (https://masterllc.online/)
2. Envie o sitemap.xml (https://masterllc.online/sitemap.xml)
3. Solicite indexação da homepage
4. Configure alertas de erros

### Google Analytics:
1. Crie uma propriedade GA4
2. Adicione o código de tracking ao site
3. Configure eventos importantes (cliques em CTA, envio de formulário)

### Google Business Profile:
1. Crie/otimize o perfil da empresa
2. Adicione endereço, telefone, horário
3. Publique posts regularmente

### Verificações Técnicas:
- [ ] Teste responsividade (mobile, tablet, desktop)
- [ ] Teste velocidade (PageSpeed Insights)
- [ ] Valide HTML (W3C Validator)
- [ ] Teste links quebrados
- [ ] Verifique imagens com alt text
- [ ] Teste formulário de contato

---

## 8. Otimizações Adicionais Recomendadas

### Performance:
- Implementar lazy loading de imagens
- Otimizar imagens (WebP, compressão)
- Minificar CSS/JS (Vite já faz isso no build)
- Implementar CDN para assets

### Conteúdo:
- Blog com artigos sobre marketing digital
- Estudos de caso de clientes
- Página de FAQ expandida
- Página sobre a empresa

### Tracking:
```bash
npm install @vercel/analytics
npm install react-ga4
```

### Schema Markup Adicional:
- LocalBusiness (se tiver endereço físico)
- FAQPage para a seção de FAQ
- Service para cada serviço individual

---

## 9. URLs Importantes para Monitoramento

- **Google Search Console**: https://search.google.com/search-console
- **Google Analytics**: https://analytics.google.com
- **PageSpeed Insights**: https://pagespeed.web.dev
- **Mobile-Friendly Test**: https://search.google.com/test/mobile-friendly
- **Rich Results Test**: https://search.google.com/test/rich-results
- **W3C Validator**: https://validator.w3.org

---

## 10. Manutenção Contínua

### Mensal:
- Verificar ranking de palavras-chave
- Analisar tráfego no Google Analytics
- Verificar erros no Search Console
- Atualizar conteúdo desatualizado

### Trimestral:
- Revisar e atualizar sitemap.xml
- Auditar todos os links
- Analisar concorrentes
- Atualizar estratégia de keywords

### Anual:
- Auditoria completa de SEO
- Revisar toda a estrutura de conteúdo
- Atualizar schema markup conforme necessário

---

## 11. Contato e Suporte

Para dúvidas sobre SEO ou implementações adicionais, consulte:
- Documentação React Helmet: https://github.com/staylor/react-helmet-async
- Google SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide

---

**Última atualização**: 14/11/2025
**Versão**: 1.0
