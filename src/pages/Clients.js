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

    const handleAction = (id) => {
        const div = document.getElementById(id);
        div.classList.toggle('hidden')
    }

    const deleteClient = (id) => {
        axios.delete(`http://localhost:8000/api/deleteclient/${id}`).then((res) => {
            console.log(res.data.message)
            console.log(res.data.client)
        })
    }

    const listClients = loading ? (
        <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
        </div>
    ):(
        <>
        {
            clients.map((client) => (
                <div className="relative" key={client.id} itemScope="row">
                    <div className=" row mb-2 item pt-3">
                        <div className="col-3 d-flex flex-column">
                                <h6>{client.name}</h6>
                                <p className="mail">{client.pseudo}</p>
                        </div>
                        <div className="col-2 d-flex align-items-center">
                            <span className={client.status ==="true" ? 'active' : 'inactive'}></span>
                            <span className="ml-2">{client.status==="true" ? 'Active':'Inactive'}</span>
                        </div>
                            <p className="col-2 d-flex align-items-center">{client.location}</p>
                            <p className="col-2 d-flex align-items-center">{client.phone}</p>
                            <div className="col-2">
                                <button className="btn btn-primary ">Contact</button>
                            </div>
                            <div className="col-1 d-flex justify-content-end">
                                <button onClick={() => handleAction(client.id) }>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
                                        style={{'fill': 'rgba(1, 105, 217, 1)',transform:'' ,msFilter:''}}>
                                        <path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 
                                        2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                                    </svg>
                                </button>
                            </div>
                    </div>
                    <div className="action py-2 pl-1 hidden" id={client.id}>
                        <Link to={`/editclient/${client.id}`} className ="d-flex align-items-center">
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
                        <button className="d-flex align-items-center" onClick={()=>deleteClient(client.id)}>
                            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10 16C10 16.55 9.55 17 9 17C8.45 17 8 16.55 8 
                            16V12C8 11.45 8.45 11 9 11C9.55 11 10 11.45 10 12V16ZM16 16C16 16.55 15.55 17 15 17C14.45 17 14 16.55 14 
                            16V12C14 11.45 14.45 11 15 11C15.55 11 16 11.45 16 12V16ZM18 19C18 19.551 17.552 20 17 20H7C6.448 20 6 19.551 6 
                            19V8H18V19ZM10 4.328C10 4.173 10.214 4 10.5 4H13.5C13.786 4 14 4.173 14 4.328V6H10V4.328ZM21 6H20H16V4.328C16 
                            3.044 14.879 2 13.5 2H10.5C9.121 2 8 3.044 8 4.328V6H4H3C2.45 6 2 6.45 2 7C2 7.55 2.45 8 3 8H4V19C4 20.654 5.346 
                            22 7 22H17C18.654 22 20 20.654 20 19V8H21C21.55 8 22 7.55 22 7C22 6.45 21.55 6 21 6Z" fill="#FF0000"/>
                            </svg>

                            <span className="text-danger">Delete</span>
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
                    <div className="d-flex align-items-center justify-content-between">
                        <h1>Liste des Clients</h1>
                        <Link to="/addclient" className="btn btn-primary">Ajouter</Link>
                    </div>
                    {
                        clients.length ? (
                            <>
                            <div className="row  mt-5 mb-3">
                            <h6 className="col-3">Client</h6>
                            <h6 className="col-2">Status</h6>
                            <h6 className="col-2">Location</h6>
                            <h6 className="col-2">Phone</h6>
                            <h6 className="col-2">Contact</h6>
                            <h6 className="col-1">Actions</h6>                      
                                </div>
                                {listClients}  
                            </>
                        ) : (
                            <p>Pas de clients, veuillez cliquer sur le bouton ajouter pour enregistrer un client</p>
                        )
                    }
                   
                                     
                </div>
            </div>
        </div>
    )
}

export default Clients
