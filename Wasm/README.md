# Пес в WebAssembly

Консольная программа на Пес, собранная SDK `Microsoft.NET.Sdk.WebAssembly` и запущенная в браузере (.NET `browser-wasm`).

Логика — целиком в [`Program.pes`](Program.pes). Страница [`wwwroot/`](wwwroot/) только поднимает runtime; вывод `Консоль.*` идёт в **консоль браузера** (F12).

## Требования

```bash
dotnet workload install wasm-tools
```

Используется [Pes.NET.Sdk](https://www.nuget.org/packages/Pes.NET.Sdk) **0.2.3** с nuget.org (вместе с `Microsoft.NET.Sdk.WebAssembly`).

## Запуск

Из каталога `public/`:

```bash
dotnet run --project Wasm/Wasm.psproj
```

Откроется `http://localhost:5088`. Откройте DevTools → Console — там будут строки Фибоначчи / факториала / суммы.

## Сборка

```bash
dotnet build Wasm/Wasm.psproj
```
