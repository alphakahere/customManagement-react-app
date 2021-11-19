import React, { useState } from 'react'
import axios from 'axios'

const AddClient = () => {
    const initialData = {
        name: '',
        pseudo: '',
        phone: '',
        location: '',
        status: false
    }

    const [client, setClient] = useState(initialData)

    const {name, pseudo, phone, location} = client

    const handleChange = e => {
        setClient({...client, [e.target.id]:e.target.value})
    }

    const handleSubmit = async(e) => {
        e.preventDefault()

        const res = await axios.post('http://localhost:8000/api/addclient', client)

        if (res.data.status === 200) {
            console.log(res.data.message)
            setClient(initialData)
        }
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-8 d-flex justify-content-center">
                    <div className="card flex-fill">
                        <div className="card-header">
                            <h3>Ajouter un client</h3>
                        </div>
                        <div className="card-body">
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
                                <button type="submit" className="btn btn-primary">Ajouter</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient
