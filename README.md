# Примеры языка Пес (публичные)

Примеры для самостоятельной сборки через [Pes.NET.Sdk](https://www.nuget.org/packages/Pes.NET.Sdk) **0.1.8** с nuget.org.  
SDK скачивается автоматически при сборке проекта.

## Требования

- [.NET SDK 10](https://dotnet.microsoft.com/download)
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
| [`collections/`](collections/) | массивы, соответствия, LINQ | |
| [`sets/`](sets/) | множества | литералы `{…}`, `ВоМножество` |
| [`structures/`](structures/) | структуры, перечисления | |
| [`generics/`](generics/) | обобщённые типы и методы | |
| [`extensions/`](extensions/) | методы расширения | LINQ, `расширение метод` |
| [`functional/`](functional/) | лямбды | через `.КакПоследовательность()` |
| [`exceptions/`](exceptions/) | исключения | `попытка` / `поймать` / `вконце` |
| [`scopes/`](scopes/) | области, импорт | + [`lib/Вспомогательный.pes`](scopes/lib/Вспомогательный.pes) |
| [`types/`](types/) | системные типы | ууид / неизвестно — комментарии |
| [`idioms/`](idioms/) | типовые приёмы | |

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
| [`TotpAuth/`](TotpAuth/) | классы, исключения |
| [`EratosthenesSieve/`](EratosthenesSieve/) | массивы, циклы |


# Песочница

Пощупать без скачивания можно по ссылке https://peslang-playground-c071.twc1.net