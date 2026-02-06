import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Настройка почты (заглушка, если нет пароля)
  const transporter = nodemailer.createTransport({
    host: "smtp.rsa-space.ru",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "military@rsa-space.ru",
      pass: process.env.SMTP_PASSWORD || "dummy-pass", // Нужно будет установить в секретах
    },
  });

  app.post(api.requests.create.path, async (req, res) => {
    try {
      const input = api.requests.create.input.parse(req.body);
      const request = storage.createRequest(input);
      
      // Логируем для отладки
      console.log(`Новая заявка: ${JSON.stringify(request)}`);

      // Отправка письма
      const mailOptions = {
        from: '"Контракт - СВОим" <military@rsa-space.ru>',
        to: "military@rsa-space.ru",
        subject: `Новая заявка: ${request.name}`,
        text: `
          Имя: ${request.name}
          Телефон: ${request.phone}
          Гражданство: ${request.citizenship || "Не указано"}
          Возраст: ${request.age || "Не указано"}
          Сообщение: ${request.message || "Нет сообщения"}
        `,
      };

      transporter.sendMail(mailOptions).catch(err => {
        console.error("Ошибка при отправке почты:", err.message);
      });

      res.status(201).json(request);
    } catch (err) {
      console.error("Критическая ошибка при создании заявки:", err);
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
        });
      }
      res.status(500).json({ 
        message: "Internal Server Error",
        details: err instanceof Error ? err.message : String(err)
      });
    }
  });

  app.get("/api/admin/requests", (req, res) => {
    const allRequests = storage.getAllRequests();
    res.json(allRequests);
  });

  return httpServer;
}
