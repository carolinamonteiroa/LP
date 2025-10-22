# Freelaw - Landing Page de Demonstração

Landing Page premium de demonstração para apresentações ao vivo da Freelaw (legaltech brasileira). Substitui apresentações em PowerPoint com uma experiência de scroll vertical elegante, responsiva e com controles de modo apresentador.

## 🎯 Objetivo

Esta landing page foi projetada para ser usada em reuniões de venda, permitindo que o apresentador role a página contando a história, em vez de trocar slides. Inclui personalização dinâmica via query params e modo apresentador com atalhos de teclado.

## ✨ Funcionalidades

### Modo Apresentação
- **Atalhos de teclado**:
  - `↓` ou `Space`: Avançar para próxima seção
  - `↑`: Voltar para seção anterior
  - `G`: Abrir/fechar minimapa de navegação
  - `M`: Ativar/desativar Modo Minimal (esconde header/rodapé)
  - `N`: Mostrar/esconder Notas do Apresentador
  - `Esc`: Fechar overlays

- **Progress bar** de leitura no topo
- **Indicador visual** discreto "Pressione ↓"
- **Minimapa** lateral com navegação rápida entre seções
- **Notas do apresentador** (apenas visíveis para você, não aparecem no PDF)

### Personalização Dinâmica
Use query params para personalizar a apresentação:
- `?cliente=Dr%20João` - Substitui {{CLIENTE}} no texto
- `?cidade=Sorocaba` - Substitui {{CIDADE}} no texto

Exemplo: `http://localhost:3000?cliente=Dr%20João&cidade=Sorocaba`

### Exportar PDF
- Botão "Exportar PDF" otimizado para impressão
- Print CSS dedicado (fundo branco, margens A4, quebras por seção)
- Remove elementos de navegação e animações

## 🚀 Começando

### Pré-requisitos
- Node.js 18+
- pnpm (ou npm/yarn)

### Instalação

```bash
# Instalar dependências
pnpm install

# Rodar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Iniciar servidor de produção
pnpm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 🎨 Customização

### 1. Editar Cores e Tipografia

As cores e fontes seguem o Brand Book da Freelaw e estão centralizadas em `tailwind.config.ts`:

```typescript
// Cores
colors: {
  brand: {
    primary: "#6B3C9B",    // Roxo principal
    secondary: "#A986D1",  // Lilás secundário
  },
  neutral: {
    white: "#FFFFFF",
    light: "#F8F8F8",
    dark: "#1E1E1E",
  }
}

// Fontes
fontFamily: {
  sans: ["var(--font-inter)", "Inter", ...],      // Fonte principal
  display: ["var(--font-poppins)", "Poppins", ...], // Títulos
}
```

### 2. Editar Conteúdo

Todo o conteúdo está em `content/demo.json`. Você pode:

- Alterar textos de qualquer seção
- Modificar métricas e números
- Adicionar/remover casos de sucesso
- Reordenar seções (campo `sections`)
- Atualizar notas do apresentador

Exemplo de edição em `content/demo.json`:

```json
{
  "hero": {
    "headline": "Seu novo headline aqui",
    "subheadline": "Demonstração para {{CLIENTE}}"
  },
  "stats": {
    "years": "10+",
    "documents": "200k+"
  }
}
```

### 3. Mostrar/Ocultar Seções

Em `content/demo.json`, no array `sections`:

```json
{
  "sections": [
    { "id": "hero", "title": "Início", "visible": true },
    { "id": "stats", "title": "Autoridade", "visible": false }  // Oculta seção
  ]
}
```

### 4. Adicionar Casos de Sucesso

Em `content/demo.json`, no array `cases`:

```json
{
  "cases": [
    {
      "name": "Novo Advogado",
      "area": "Direito X",
      "city": "Cidade Y",
      "result": "Resultado obtido",
      "description": "História detalhada...",
      "metrics": {
        "timeSaved": "20h/semana",
        "newClients": "+50%"
      },
      "quote": "Depoimento do cliente"
    }
  ]
}
```

## 📁 Estrutura do Projeto

```
├── app/
│   ├── layout.tsx          # Layout raiz (meta tags, fontes)
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globais + Print CSS
├── components/
│   ├── ui/                 # Componentes base (Button, Card, Badge)
│   ├── sections/           # Seções da landing page
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── SolutionSection.tsx
│   │   ├── BeforeAfterSection.tsx
│   │   ├── PilotPlanSection.tsx
│   │   ├── CasesSection.tsx
│   │   └── HowToStartSection.tsx
│   ├── ProgressBar.tsx     # Barra de progresso
│   ├── ScrollIndicator.tsx # Indicador de scroll
│   ├── Minimapa.tsx        # Navegação lateral
│   ├── PresenterNotes.tsx  # Notas do apresentador
│   └── Footer.tsx          # Rodapé
├── hooks/
│   └── usePresenterMode.ts # Hook de atalhos e navegação
├── lib/
│   └── utils.ts            # Utilitários (cn, replacePlaceholders)
├── content/
│   └── demo.json           # TODO O CONTEÚDO DA DEMO
├── tailwind.config.ts      # Tokens de design (cores, fontes)
└── package.json
```

## 🎨 Design System

### Cores (Brand Book)
- **Roxo principal**: `#6B3C9B`
- **Lilás secundário**: `#A986D1`
- **Gradiente oficial**: `linear-gradient(90deg, #6B3C9B 0%, #A986D1 100%)`
- **Branco**: `#FFFFFF`
- **Cinza claro**: `#F8F8F8`
- **Preto suave**: `#1E1E1E`

### Tipografia
- **Primária**: Inter (400-700)
- **Display**: Poppins (títulos)

### Espaçamentos
- Bordas arredondadas: `1rem` (border-radius)
- Seções: `6rem` desktop, `3rem` mobile
- Sombreamento: `shadow-soft`, `shadow-medium`, `shadow-strong`

## 🖨️ Exportar PDF

### Via Interface
Clique no botão "Exportar PDF" no canto superior direito.

### Via Teclado
`Ctrl+P` (Windows/Linux) ou `Cmd+P` (Mac)

### Print CSS
O arquivo `app/globals.css` contém estilos específicos para impressão:
- Remove elementos de navegação
- Define margens A4
- Garante quebras de página entre seções
- Força impressão de backgrounds/gradientes

## 🚀 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Deploy automático!

```bash
# Ou via CLI
npx vercel --prod
```

### Outras Plataformas
- **Netlify**: `pnpm build` → deploy pasta `.next`
- **AWS Amplify**: Suporte nativo para Next.js
- **Docker**: Use `Dockerfile` padrão do Next.js

## 📊 Performance & Acessibilidade

### Metas Lighthouse
- Performance: ≥ 95
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: ≥ 95

### Acessibilidade (A11y)
- ✅ Contraste AA (WCAG 2.1)
- ✅ Navegação por teclado completa
- ✅ `aria-labels` em botões/ícones
- ✅ Foco visível customizado
- ✅ Semântica HTML adequada

## 🔧 Troubleshooting

### Fonts não carregam
Verifique se `Inter` e `Poppins` estão importadas em `app/layout.tsx`:
```typescript
import { Inter, Poppins } from "next/font/google"
```

### Query params não funcionam
Certifique-se de usar `useSearchParams()` dentro de `<Suspense>` (já configurado).

### PDF não exporta corretamente
Teste com Chrome/Edge. Safari pode ter issues com print CSS. Verifique `@media print` em `globals.css`.

### Atalhos não respondem
Certifique-se de que não está com foco em input/textarea. Os atalhos são ignorados nesses casos.

## 📝 Licença

Propriedade da Freelaw. Todos os direitos reservados.

---

**Desenvolvido para Freelaw** • Legaltech Pioneira no Brasil 🇧🇷
