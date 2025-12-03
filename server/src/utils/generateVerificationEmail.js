const generateVerificationEmail = (code) => {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body style="margin:0;padding:0;background-color:#f4f6f8;font-family:Arial,Helvetica,sans-serif;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table width="600" cellpadding="0" cellspacing="0" role="presentation" style="max-width:600px;background:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 18px rgba(0,0,0,0.06);">

                <!-- Header -->
                <tr>
                  <td style="padding:20px 24px;background:linear-gradient(90deg,#320709,#a7181b);color:#ffffff;">
                    <h1 style="margin:0;font-size:20px;letter-spacing:0.2px;">[Video Streaming]</h1>
                    <p style="margin:6px 0 0;font-size:13px;opacity:0.95;">Código de verificação de e-mail</p>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:28px 24px 12px;color:#0f172a;">
                    <h2 style="margin:0 0 8px;font-size:18px;">Olá!</h2>
                    <p style="margin:0 0 16px;font-size:14px;line-height:1.45;color:#334155;">
                      Recebemos um pedido para verificar seu e-mail. Use o código abaixo para confirmar sua conta.
                    </p>

                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin:18px 0;">
                      <tr>
                        <td align="center">
                          <div style="display:inline-block;padding:18px 26px;border-radius:10px;background:#0f172a;color:#fff;font-weight:700;font-size:28px;letter-spacing:2px;font-family:'Courier New',monospace;">
                            ${code}
                          </div>
                        </td>
                      </tr>
                    </table>

                    <p style="margin:8px 0 0;font-size:13px;color:#64748b;">
                      O código expira em <strong>10 minutos</strong>. Caso não tenha solicitado este código, ignore este e-mail.
                    </p>

                    <hr style="border:none;border-top:1px solid #eef2f7;margin:22px 0;">

                    <p style="margin:0;font-size:13px;color:#475569;">
                      Precisa de ajuda? Responda este e-mail ou visite nosso suporte.
                    </p>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="padding:16px 24px 24px;background:#f8fafc;color:#64748b;font-size:12px;">
                    <p style="margin:0;">© ${new Date().getFullYear()} Video Streaming. Todos os direitos reservados.</p>
                    <p style="margin:6px 0 0;">Se você não quis receber este e-mail, pode ignorá-lo — nenhuma ação será tomada.</p>
                  </td>
                </tr>

              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `

  const text = `
    Video Streaming - Código de verificação
    Seu código é: ${code}

    Válido por 10 minutos.

    Se você não solicitou este código, ignore este e-mail.

    © ${new Date().getFullYear()} Video Streaming
  `

  return { html, text }

}

export default generateVerificationEmail
