import React, { useState, useEffect, useContext } from "react";
import { Context } from "../../index";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { fetchUsersOrders, checkPayStatus } from "../../http/deviceAPI";

// Таблица заказанных товаров
const PrivateCab = () => {
    const { helpers, user } = useContext(Context);

    const [page, setPage] = useState(1);
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [flag, setFlag] = useState(0);


    useEffect(() => {
        if(!orders.length) return;

        const fetchDataMid = async () => {
            for (let x of orders) {
                console.log(x.id)
                if(x.status_pay == false){
                    await checkPayStatus({orderId: x.id});
                }
            }
            setFlag(flag + 1)
        }
        fetchDataMid()
        .catch((error) => {
            console.log('dev', error);
            alert('Ошибка 528 - Обратитесь к администратору!');
        });
    }, [ JSON.stringify(orders) ]);




    useEffect(() => {
        fetchUsersOrders({page: `${page}`, userId: `${user.user.id}`})
            .then((data) => {
                setOrders(data.rows);
                setCount(data.count);
            })
            .catch((error) => {
                console.log('dev', error);
                alert('Ошибка 512 - Обратитесь к администратору!');
            });
    }, [page, flag]);




    useEffect(() => {
        if(orders.length <= 0){ return;}

        const fetchDataMid = async () => {
            for (let x of orders) {
                if(x.status_pay == false){
                    await checkPayStatus({orderId: x.id});
                }
            }
            setFlag(flag + 1)
        }
        fetchDataMid()
        .catch((error) => {
            console.log('dev', error);
            alert('Ошибка 528 - Обратитесь к администратору!');
        });
    }, [ ]);

    // #########################################################################################

    return (
        <>
            <h1>Купленные товары:</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Цена</th>
                        <th>Наличная / Безналичная</th>
                        <th>Статус оплаты</th>
                        <th>Дата создания</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.length > 0 ? 
                        orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.value}</td>
                                <td>{order.cashless_status ?
                                        <p>Без наличная</p>
                                        :
                                        <p>Наличная</p>
                                    }
                                </td>
                                <td>
                                    {order.status_pay ? (
                                        <p><span href='#' style={{fontSize: 18, color: 'green'}}> оплачено</span></p>
                                    ) : (
                                        <p><span href='#' style={{fontSize: 18, color: 'red'}}>не оплачено</span>
                                            {/* <a href='#' >   - оплатить</a> */}
                                        </p>
                                    )}
                                </td>
                                <td>{order.createdAt.split('T')[0] + ' / ' + order.createdAt.split('T')[1].split('.')[0]}</td>
                                <td><a href={"/admin/bar/"+order.id} >  подробнее</a></td>
                            </tr>
                        ))
                     : 
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                </tbody>
            </Table>

            {paginationBasic}
        </>
    );
};

export default PrivateCab;
