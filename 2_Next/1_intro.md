1_ слиентский и серверный рендеринг
        - "use clbtnt" - рендеринг на стороне клиента в среде браузера
        - "use server" - рендеринг на стороне сервера в среде node

2_ Параметр роитинга [id]
        export default async function Page({ params }: { params: { id: string } }) {
                const id = params.id;
                // ...
        }


-   Подключение скрипта

    -   https://geshov.ru/posts/yandex-metrika-next/

-   Jquery можно использовать через npm
    -   https://www.npmjs.com/package/jquery
        - ЭТО РАБОТАЕТ ТОЛЬКО в браузере - "use client"
        - после этого можно испольховать любой код jquery

- Перенаправления
  - Статчные ссылки на странице
    - <Link> // перенаправление без перезагрузки страницы
    - <a> // перенаправление с перезагрузкой страницы
  - Перенаправление из функции
    - router.push()
      - https://stackoverflow.com/questions/65086108/next-js-link-vs-router-push-vs-a-tag


- Поисковые параметры
  - useSearchParam - работают только на клиенте!!
  - На сервекре:
    - export async function GET(req: any, res: any){
    console.log( req.nextUrl.searchParams.get('search-key')


- ENV - все переменные по умолчанию сервенные, чтобы сделать их доступными в клиенте нужно добавить NEXT_PUBLIC_
    - console.log(process.env.NEXT_PUBLIC_REACT_APP_YANDEX_KEY )


- В цикле map нельзя заворачивать элемент ы пустые кавычки, а нужно верхний элемент задавать key props
     {globalParamsObject.discounts.discountsCategory.map(
                                    (item: string, index: number) => {
                                        return (
                                            <Select.Option key={index + 1} value={index + 1}>{item}</Select.Option>
                                        );
                                    }
                                )}

- В конце всегда прверять соответствие компонентов их именам!ъ