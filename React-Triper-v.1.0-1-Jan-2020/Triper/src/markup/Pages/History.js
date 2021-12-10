import { useEffect, useState } from "react"
import Footer from "../Layout/Footer"
import Header2 from "../Layout/Header2"
import React, { Component } from 'react'
import OrderApi from "../../api/order"
import { useHistory } from "react-router-dom";

const TableItem = (props) => {
    console.log(props)
    return (
        <tr>
            <td>{props.stt}</td>
            <th>{props.data.ID}</th>
            <th>{props.data.StartTime}</th>
            <th>{props.data.EndTime}</th>
            <th>{props.data.TotalPrice}</th>
            <th>{props.data.button}</th>
        </tr>
    )
}

const History = () => {
    const history = useHistory();
    const [newsList, setNewsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(3);
    
    const deleteOrder = async (id) => {
        let obj = {
            orderId: id
        };
        let response = await OrderApi.DeleteOrder(obj);
        return history.push("./profile")
    }

    useEffect(async () => {
        let skip = (currentPage-1)*10;
        let limit = currentPage*10;
        let listOrder = await OrderApi.ListOrder(skip, limit);
        console.log("listOrder : -----> ", listOrder);
        let newListOrder = listOrder.data.data.map((item, index) => {
            console.log("item : ----> ", item)
            let obj = {
                ID: item._tourDetailID,
                StartTime: item._createTime,
                EndTime: item._endTime,
                TotalPrice: item._totalPrice,
                button : <button onClick={()=> deleteOrder(item._id)}>Delete</button>
            };
            
            return obj;
        });
        setNewsList(newListOrder);
    }, [])
    
    console.log("list order : -------> ", newsList);
    const chosePage = (event) => {
        setCurrentPage(event.target.id);

    }

    const select = (event) => {
        setNewsPerPage(event.target.value);
    }

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = newsList.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
        console.log(todo)
        return <TableItem stt={index + 1 + (currentPage - 1) * newsPerPage} key={index} data={todo} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    

    return (
        <div>
            <Header2 />
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Id Tour</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                            <th>Total price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderTodos}
                    </tbody>
                </table>
                <div className="news-per-page">
                    <select defaultValue="0" onChange={(event) => select(event)} >
                        <option value="0" disabled>Get by</option>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                    </select>
                </div>
                <div className="pagination-custom">
                    <ul id="page-numbers">
                        {
                            pageNumbers.map(number => {
                                if (currentPage === number) {
                                    return (
                                        <li key={number} id={number} className="active">
                                            {number}
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={number} id={number} onClick={(event) => chosePage(event)} >
                                            {number}
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
            <Footer />
        </div>

    );

}

export default History;