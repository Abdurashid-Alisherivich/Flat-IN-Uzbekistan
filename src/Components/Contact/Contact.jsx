import React from 'react';
import contactImage from '../Assets/ContactImage.svg';
import Footer from '../Footer/Footer';
import NavbarPage from '../Navbar/Navbar';
import { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessaga] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            Name: name,
            LastName: lastName,
            PhoneNumber: phoneNumber,
            Message: message,
            Date: new Date().toLocaleDateString()
        }

        axios.post('https://sheet.best/api/sheets/c563f66e-00b6-4280-a6c8-aec137018d39', data).then((response) => {
            console.log(response);
            setName('');
            setLastName('');
            setPhoneNumber('');
            setMessaga('');
        })
    }
    return (
        <div>
            <NavbarPage />
            <div className="contactWrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <h3 className='titleOfCntact'>Biz bilan aloqa!</h3>
                            <p className='smallTeaxtOfContact'>
                                Siz qulay sharoitlarga ega <b>UY-JOY</b> izlayapsizmi? <br /> Unday bo'lsa siz to'g'ri manzildasiz!
                            </p>
                            <img className='contactImage' src={contactImage} alt="Have a img" />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="input-gro4up">
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        className="form-control contactInputs"
                                        placeholder="Ism"
                                    />
                                    <input
                                        type="text"
                                        onChange={(e) => setLastName(e.target.value)}
                                        value={lastName}
                                        className="form-control contactInputs my-3"
                                        placeholder="Familya"
                                    />
                                    <input
                                        type="number"
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        value={phoneNumber}
                                        className="form-control contactInputs"
                                        placeholder="Telefon"
                                    />
                                    <textarea
                                        onChange={(e) => setMessaga(e.target.value)}
                                        value={message}
                                        className="form-control contactTextArea my-3"
                                        placeholder='Xabar yuboring'
                                    />
                                    <button
                                        type="submit"
                                        className="btn btn-primary my-3"
                                    >
                                        Xabar yuborish
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}
