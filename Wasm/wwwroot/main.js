import { dotnet } from './_framework/dotnet.js';

const status = document.getElementById('status');

try {
  await dotnet
    .withDiagnosticTracing(false)
    .withApplicationArgumentsFromQuery()
    .create();

  status.textContent = 'Runtime готов — выполняется Program.pes…';
  await dotnet.run();
  status.textContent = 'Program.pes завершён. Смотрите вывод в Console (F12).';
  status.classList.add('ok');
} catch (err) {
  console.error(err);
  status.textContent = `Ошибка: ${err?.message ?? err}`;
  status.classList.add('err');
}
