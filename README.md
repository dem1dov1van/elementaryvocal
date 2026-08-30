# Elementaryvocal

Nuxt-фронтенд, PocketBase и Caddy-gateway.

## Локальная разработка

Нужен только фронтенд. Данные PocketBase берутся с прода (`https://elementaryvocal.ru/api`), локальный PocketBase запускать не нужно.

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up frontend
```

Открыть: [http://localhost:3001](http://localhost:3001)

Порт на хосте — `3001`, потому что `3000` часто занят. В контейнере Nuxt слушает `3000`.

Остановить:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml stop frontend
```

## Продакшен

Полный стек: frontend + PocketBase + Caddy.

```bash
docker compose up -d
```

Сайт: `https://elementaryvocal.ru`  
Админка PocketBase: `https://elementaryvocal.ru/_/`

## Правила API

Не хардкодить URL PocketBase в страницах. Используются две переменные:

| Переменная | Где используется | Локально | Прод |
|---|---|---|---|
| `NUXT_PUBLIC_POCKETBASE_URL` | браузер | `https://elementaryvocal.ru/api` | `/api` |
| `NUXT_POCKETBASE_INTERNAL_URL` | SSR в контейнере | `https://elementaryvocal.ru/api` | `http://pocketbase:8090/api` |

Локальные значения заданы в `docker-compose.dev.yml`, продовые — в `docker-compose.yml`. Переопределение через `.env`, шаблон — `.env.example`.

На проде браузер ходит на `/api` через Caddy, сервер — во внутренний `pocketbase:8090`. Не ставить прод-домен в `docker-compose.yml`.
