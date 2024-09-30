```js
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import Spinner from "react-bootstrap/Spinner";

import Button from "react-bootstrap/Button";


    <Spinner variant="danger" animation="border" />


    <Button variant="danger" onClick={createGoodsItemFunction} >Создать</Button>
    

    <Row className="mb-3">
        {/* TEXT */}
        <Form.Group as={Col} md="6" className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Ширина (мм):"> {/* вставить сюда уникальный controlID */} 
            <Form.Control
                type="text"
                placeholder="Ширина (мм):"
                onChange={(e) => setWidth(e.target.value)}
                value={width}
            /> 
            </FloatingLabel>
        </Form.Group>


        {/* SELECT */}
        <Form.Group as={Col} md="6" className="mb-3">
            <FloatingLabel controlId="floatingSelect" label="Шаг люверсов*:">  {/* вставить сюда уникальный controlID */} 
                <Form.Select aria-label="Floating label select example" 
                    onChange={(e) =>setLuvers(e.target.value)}
                        value={luvers} >
                    <option value="0">Без люверсов</option>
                    <option value="1">200 миллиметров</option>
                    <option value="2">300 миллиметров</option>
                </Form.Select>
            </FloatingLabel>
        </Form.Group>


        {/* FILE */}
        <Form.Group as={Col} md="12" className="mb-3">
            <FloatingLabel controlId="floatingPassword" label="Размер файла до 10 Mb"> {/* вставить сюда уникальный controlID */} 
                <Form.Control
                    type="file"
                    placeholder="Размер файла до 10 Mb"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </FloatingLabel>
        </Form.Group>
    </Row>

