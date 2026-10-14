# Site da Vetix Tecnologia

Site estático (HTML, CSS e JavaScript puros). Não tem build e não precisa de Node.

```
vetix-site/
├── index.html            ← todo o conteúdo do site (textos, seções)
├── render.yaml           ← configuração do Render
└── assets/
    ├── css/style.css     ← visual (cores e fontes no topo do arquivo)
    ├── js/main.js        ← menu do celular, vídeo, formulário → WhatsApp
    ├── img/              ← fotos, favicon
    └── video/            ← vídeo de fundo da abertura (horizontal e vertical)
```

## Ver no seu computador

No VS Code, instale a extensão **Live Server**, clique com o botão direito em `index.html` e escolha **Open with Live Server**.

## Publicar pela primeira vez

1. **GitHub** (conta marcelosouzars@gmail.com): crie um repositório novo chamado `vetix-site`. No VS Code: *Source Control* → **Publish to GitHub**.
2. **Render** (conta vetixtecnologia@gmail.com): **New → Static Site** → conecte o GitHub e escolha o repositório `vetix-site`.
   - Branch: `main`
   - Build Command: *(deixe em branco)*
   - Publish Directory: `.`
   - **Auto-Deploy: On Commit** (padrão)
3. Pronto: o Render gera um endereço do tipo `vetix-site.onrender.com`.

> As contas são diferentes: no passo 2, o Render pede para autorizar o app dele no seu GitHub. Escolha **Only select repositories** e marque `vetix-site`.

## Alterar o site depois

Edite no VS Code → **Commit** → **Sync Changes**. O Render publica sozinho em cerca de 1 minuto.

## Domínio vetixtecnologia.com.br (registro.br)

1. No Render: no site → **Settings → Custom Domains** → adicione `vetixtecnologia.com.br` e `www.vetixtecnologia.com.br`.
2. No registro.br: domínio → **DNS → Editar zona** e crie:

| Tipo  | Nome  | Valor                        |
|-------|-------|------------------------------|
| A     | (vazio / @) | `216.24.57.1`          |
| CNAME | `www` | `vetix-site.onrender.com` (o endereço que o Render deu) |

3. Apague registros **AAAA** antigos do domínio, se houver.
4. Volte ao Render e clique em **Verify**. O certificado HTTPS sai automático. A propagação pode levar algumas horas.

> **Atenção ao e-mail:** se o domínio já tem e-mail funcionando (registros **MX**), não mexa neles, altere só os registros acima.

## Antes de publicar, confira

- Seção **Sindilojas** (`id="sindilojas"` no `index.html`): só deixe no ar depois da parceria formalizada.
- E-mail `comercial@vetix.com.br`: confirme se é o correto (o domínio do site é vetixtecnologia.com.br).
- Lista de clientes: confirme se todos autorizam ser citados.
