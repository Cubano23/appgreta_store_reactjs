import React, { Component } from 'react';

const FormCommande = () => {
    return ( 
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-6">
                    <label for="inputPassword4">Mot de passe</label>
                    <input type="password" className="form-control" id="inputPassword4" placeholder="Mot de passe"/>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Adresse</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Paris 75001"/>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Adresse 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartement, studio"/>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label for="inputCity">Ville</label>
                    <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label for="inputState">Departement</label>
                    <select id="inputState" className="form-control">
                        <option selected>Choisissez...</option>
                        <option>...</option>
                    </select>
                    </div>
                    <div className="form-group col-md-2">
                    <label for="inputZip">Code postal</label>
                    <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>              
                <button type="submit" className="btn btn-primary">Valider</button>
            </form>
        </>
     );
}
 
export default FormCommande;