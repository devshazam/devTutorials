1_CDN
    CDN (сеть распределения контента)



- Шрифты
    - использовать только локально woff2

- lazy-load vs suspence - https://sitedominion.medium.com/lazy-vs-dynamic-loading-components-in-next-js-7c4b1775f9b0
- "use client" - ,tp кешированияя и предрендеринга - использовать по минимуму
- Ссылки
    - <Link href="/dashboard" prefetch={false}> - в зоне экрана все ссылки предварительн скачиваются - для предотвращения prefetch
    - rel="nofollow"

- Style
    - все стили нужно писать через модули для быстрой разработки - !!globa.css замедляет работу
    - удалить весь неиспользуемый код: импорты, библиотеки из packege.json

- PostCss
    - autoprefixer 