const TOKEN = '7169124052:AAG8McQOQARtwt1lvskAYv9NUoGnlulotGA';
const CHAT_ID = -1001890228314;

const URI_API: string = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

export const sendMessage = async (message: string) => {
  try {
    const response = await fetch(URI_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}`);
    }

    return response.json();
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(`Ошибка ${e.message}`);
    }
  }
};
