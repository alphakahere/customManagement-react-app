import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Clients = () => {

    const [clients, setClients] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:8000/api/clients').then((res) => {
            setClients(res.data.clients)
            setloading(false)
        })
    }, [])

    const listClients = loading ? (
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
    ):(
        <>
        {
            clients.map((client) => (
                <div className="" key={client.id}>
                    <div className="d-flex justify-content-between mb-2 item py-1 align-items-center">
                    <div className="col-3 d-flex flex-column">
                            <h6>{client.name}</h6>
                            <p className="mail">{client.pseudo}</p>
                    </div>
                    <div className="col-2 d-flex align-items-center">
                        <span className="inactive"></span>
                        <span className="ml-2">{client.status ? 'Active':'Inactive'}</span>
                    </div>
                        <p className="col-2 d-flex align-items-center">{client.location}</p>
                        <p className="col-2 d-flex align-items-center">{client.phone}</p>
                        <button className="btn btn-primary d-flex align-items-center">Contact</button>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                style={{'fill': 'rgba(1, 105, 217, 1)',transform:'' ,msFilter:''}}>
                                <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 
                                2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                            </svg>
                        </button>
                </div>
                <div className="">
                    <Link to="/editclient" className ="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 24 24" width="20" height="16" 
                        style={{fill: 'rgba(0, 0, 0, 1)',transform:'',msFilter:''}}>
                            <path d="M4 21a1 1 0 0 0 .24 0l4-1a1 1 0 0 0 .47-.26L21 7.41a2 
                            2 0 0 0 0-2.82L19.42 3a2 2 0 0 0-2.83 0L4.3 15.29a1.06 1.06 0 0 
                            0-.27.47l-1 4A1 1 0 0 0 3.76 21 1 1 0 0 0 4 21zM18 4.41 19.59 6 18 7.59 
                            16.42 6zM5.91 16.51 15 7.41 16.59 9l-9.1 9.1-2.11.52z">
                        </path>
                        </svg>
                        <span className="">Edit</span>
                    </Link>
                    <button className="">
                        <span></span>
                    </button>
                </div>
             </div>
            ))
        }
        </>
    )
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12">
                   <h1>Liste des Clients</h1>
                   
                   <div className="d-flex justify-content-between mt-5 mb-3">
                        <h6 className="col-3">Client</h6>
                        <h6 className="col-2">Status</h6>
                        <h6 className="col-2">Location</h6>
                        <h6 className="col-2">Phone</h6>
                        <h6 className="col-2">Contact</h6>
                        <h6 className="col-1">Actions</h6>                      
                   </div>
                    {listClients}                   
                </div>
            </div>
        </div>
    )
}

export default Clients
