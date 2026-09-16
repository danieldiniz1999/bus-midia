# Bus Mídia

Plataforma institucional e comercial da **Bus Mídia**, especialista em publicidade em ônibus (Busdoor e Backbus) em Fortaleza e região metropolitana.

## Stack Tecnológica

- **Framework**: [React 19](https://react.dev/) + [TanStack Start](https://tanstack.com/start) & [TanStack Router](https://tanstack.com/router)
- **Bundler & SSR Server**: [Vite](https://vitejs.dev/) + [Nitro](https://nitro.build/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) + Lucide Icons + Radix UI
- **Deploy**: [Vercel](https://vercel.com/) (Build Output API v3 com suporte a SSR e Fluid Compute)

## Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/danieldiniz1999/bus-midia.git
   cd bus-midia
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Para testar o build de produção:
   ```bash
   npm run build
   npm run preview
   ```

## Deploy na Vercel

O projeto está configurado com preset nativo para **Vercel** via Nitro:

1. Acesse o painel da [Vercel](https://vercel.com/).
2. Clique em **Add New...** > **Project**.
3. Importe o repositório `danieldiniz1999/bus-midia`.
4. As configurações padrão de build (`npm run build`) e output (`.vercel/output`) serão detectadas automaticamente com zero configuração.
5. Clique em **Deploy**.
