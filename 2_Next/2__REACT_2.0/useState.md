https://dev.to/shareef/how-to-work-with-arrays-in-reactjs-usestate-4cmi

How to work with Arrays in ReactJS useState.

=======================================

Passing array to useEffect dependency list - https://stackoverflow.com/questions/59467758/passing-array-to-useeffect-dependency-list
// Массивы и объекты не работают в каччестве списка зивисимостей для useEffect (он будет перезагружаться бесконечно) - решение: использзовать JSON
        useEffect(() => {
        console.log(outcomes)
        }, [JSON.stringify(outcomes)])