export const applyTemplate = (
    subject: string,
    name: string,
    email: string,
    message: string,
    phone?: string
) => {
    return `
    <html>
        <head>
            <style>
                body {
                margin: 0;
                    font-family: 'Arial', sans-serif;
                }
                
                .template-body {
                padding: 24px;
                
                h2 {
                    color: #333;
                    }

                    p {
                        color: #555;
                        margin-bottom: 10px;
                    }

                    strong {
                        color: #A12212;
                    }
                }

            
                .template-footer {
                padding: 20px;
                background-color: #06202D
                }
            </style>
        </head>
        <body>
            <div class="template-body">
                <h2>${subject}</h2>
                <p><strong>Naam :</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                ${
                    phone !== undefined
                        ? `<p><strong>Telefoonnummer:</strong>${phone}</p>
                        <p><strong>Message:</strong> ${message}</p>`
                        : `<p><strong>Message:</strong> ${message}</p>`
                }
            </div>
        </body>
    </html>
`
}
