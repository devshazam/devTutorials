
```js
- let m1 = <p> test </p>;
- {arr} // выводит весь массив последдовательно 

- IF
    - {show ? <p>text1</p> : <p>text2</p>} // вернет первый обзац если переменная show == true и тд.
    - {show && <p>text</p>} // если true то выведет или ничего не вернет в обратном случае
        - Не работает: {if(isLoggedIn){...}} 

- Function
    onClick={showMess} // () => {return 2;}
    onClick={() => showMess('user')} // (var) => {return var;}
    onChange={(e) => setDescriptionText(e.target.value)}
    onClick={event => func('eee', event)} // 

- arr.map((item, index) => {return return <p key={index}>{item}</p>;}) 
    - key={item.id} // элемент обертка должен содержать key


========================================================================

Валидация:
 Всегда использовать проверку не пустоты объектов и массивов
    { Object.keys(array).length !== 0 &&
        ...
    }