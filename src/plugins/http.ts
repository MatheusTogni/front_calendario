import type { App } from "vue";

async function HTTP(
  method: "get" | "post" | "put" | "delete",
  url: string,
  data?: any
) {
  const config: RequestInit = {
    method: method.toUpperCase(),
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data && method !== "get") {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`https://back-calendario.vercel.app/${url}`, config);
    const json = await response.json();
    if (!response.ok) throw new Error(json.message || "Erro na requisição");
    return json;
  } catch (error) {
    console.error("Erro na chamada HTTP:", error);
    throw error;
  }
}

export default {
  install(app: App) {
    app.config.globalProperties.HTTP = HTTP;
  },
};