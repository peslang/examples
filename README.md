# Примеры языка Пес (публичные)

Примеры для самостоятельной сборки через [Pes.NET.Sdk](https://www.nuget.org/packages/Pes.NET.Sdk) **0.2.10** с nuget.org.  
SDK скачивается автоматически при сборке проекта.

## Требования

- [.NET SDK 10](https://dotnet.microsoft.com/download) (host для Pes.NET.Sdk)
- Пользовательский `<TargetFramework>` в примерах — `net10.0`; поддерживается также `net8.0+`
- Доступ к nuget.org (SDK подтягивается автоматически при первой сборке)

## Сборка и запуск

Из корня каталога `public/` (или корня репозитория примеров):

```bash
dotnet build <имя>/<имя>.psproj
dotnet run --project <имя>/<имя>.psproj
```

Пример:

```bash
dotnet run --project controlflow/controlflow.psproj
```

## Тематические примеры

| Пример | Темы | Примечания |
|--------|------|------------|
| [`controlflow/`](controlflow/) | условия, циклы | `прервать` / `продолжить` |
| [`variables/`](variables/) | переменные, присваивание | `пер`, `конст`, `область`, `ничто` |
| [`operators/`](operators/) | операторы, `is`, `as`, `новый` | часть nullable — комментарий в коде |
| [`literals/`](literals/) | литералы, числа, байты | байты — ограничение codegen |
| [`strings/`](strings/) | строки | |
| [`stringinterpolation/`](stringinterpolation/) | интерполяция | `%`, `$`, `${}` |
| [`datetime/`](datetime/) | дата, время, момент, длительность | |
| [`collections/`](collections/) | массивы, соответствия, LINQ, `Обходимое` / `породить` | |
| [`sets/`](sets/) | множества | литералы `{…}`, `.ВМножество()` |
| [`structures/`](structures/) | структуры, перечисления | |
| [`generics/`](generics/) | обобщенные типы и методы | |
| [`extensions/`](extensions/) | методы расширения | LINQ, `расширение метод` |
| [`functional/`](functional/) | лямбды | через `.КакПоследовательность()` |
| [`exceptions/`](exceptions/) | исключения | `попытка` / `поймать` / `вконце`, union `A\|B` |
| [`scopes/`](scopes/) | области, импорт | + [`lib/Вспомогательный.pes`](scopes/lib/Вспомогательный.pes) |
| [`types/`](types/) | системные типы | ууид / неизвестно — комментарии |
| [`idioms/`](idioms/) | типовые приемы | |
| [`iterators/`](iterators/) | `Обходимое`, `Обходчик`, `породить` | O-46 |
| [`aliases/`](aliases/) | `@Алиас`, BCL `.pesmap` | O-38 |

## Дополнительные примеры

| Пример | Темы |
|--------|------|
| [`annotations/`](annotations/) | аннотации |
| [`aspnet/`](aspnet/) | ASP.NET Core, веб-приложение |
| [`MultiFile/`](MultiFile/) | импорт, несколько файлов |
| [`QuicksortHoare/`](QuicksortHoare/) | массивы, циклы |
| [`async/`](async/) | асинхронность |
| [`XmlSerialization/`](XmlSerialization/) | классы, сериализация |
| [`HelloGtk/`](HelloGtk/), [`CalculatorGtk/`](CalculatorGtk/) | GTK, NuGet |
| [`TotpAuth/`](TotpAuth/) | классы, TOTP, QR (NuGet QRCoder) |
| [`EratosthenesSieve/`](EratosthenesSieve/) | массивы, циклы |
| [`Dijkstra/`](Dijkstra/) | графы, алгоритм Дейкстры |
| [`Wasm/`](Wasm/) | .NET WebAssembly (`browser-wasm`), браузер |


# Песочница

Пощупать без скачивания можно по ссылке https://peslang-playground-c071.twc1.net