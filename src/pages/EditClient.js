import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'

const EditClient = (route) => {
    const initialData = {
        name: '',
        pseudo: '',
        phone: '',
        location: '',
        status: 'false'
    }
    const [client, setClient] = useState(initialData)
    const [loading, setloading] = useState(true)
    const history = useHistory()

   

    const {name, pseudo, status, phone, location} = client

    useEffect(() => {
        const currentClientId =  route.match.params.id

        axios.get(`http://localhost:8000/api/editclient/${currentClientId}`).then((res) => {
            setClient(res.data.client)
            setloading(false)
        })
    }, [route])
    const handleChange = e => {
        setClient({...client, [e.target.id]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        axios.put(`http://localhost:8000/api/updateclient/${client.id}`, client).then((res) =>{
            console.log(res.data.message)
            history.push("/")

        })

       
    }

    return (
        <div className="container py-5">
        <div className="row">
            <div className="col-12 col-md-8 d-flex justify-content-center">
                <div className="card flex-fill">
                    <div className="card-header">
                        <h3>Edition d'un client</h3>
                    </div>
                    <div className="card-body">
                        {
                            loading ? (
                                 <div className="spinner-border text-primary" role="status">
                                <span className="sr-only">Loading...</span>
                                </div>
                            ) : (

                            <form action="" className="" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Nom Complet du client</label>
                                    <input type="text" className="form-control" 
                                        name="name" id="name" required
                                        value={name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pseudo">Pseudo</label>
                                    <input type="text" className="form-control" 
                                        name="pseudo" id="pseudo" required
                                        value={pseudo}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="tel" className="form-control" 
                                        name="phone" id="phone" required
                                        value={phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="location">Adresse</label>
                                    <input type="text" className="form-control" 
                                        name="location" id="location" required
                                        value={location}
                                        onChange={handleChange}
                                    />
                                </div>
                                <select className="form-control" value={status} name="status" id="status" onChange={handleChange}>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>
                                </select>
                                <button type="submit" className="btn btn-primary mt-3">Editer</button>
                            </form>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default EditClient
