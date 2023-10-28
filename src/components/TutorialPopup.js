import React, { useState } from 'react';
import ReactModal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TutorialPopup.css'; // Import CSS file

import { FaInfoCircle } from 'react-icons/fa';

const TutorialPopup = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };


    return (
        <div>
            {/* <button onClick={openModal}>Show Tutorial</button> */}
            <FaInfoCircle onClick={openModal} size={32} style={{ cursor: 'pointer' }} />
            <ReactModal isOpen={isOpen} onRequestClose={closeModal} className="modal">
                <div className='tut-header-container'>
                    <h2>Tutorial / Users Overview</h2>
                    <button onClick={closeModal} className="close-btn">X</button>
                </div>

                <br />

                <h4>Admin:</h4>
                <hr />
                <p>Name: Arne</p>
                <p>Password: 123456</p>
                <p>Privileges: User management, Note management</p>
                <br />

                <h4>Manager:</h4>
                <hr />
                <p>Name: Mike</p>
                <p>Password: 123456</p>
                <p>Privileges: User management, Note management</p>
                <br />

                <h4>Employee:</h4>
                <hr />
                <p>Name: Einar</p>
                <p>Password: 123456</p>
                <p>Privileges: Note creation</p>
                <br />
                <hr />

                <h3>Getting Started:</h3>
                <br />

                <p className='paragraph-centered'>I</p>
                <p className='paragraph-centered'>Log in with either the manager 'Mike' or admin 'Arne'.</p>
                <br />
                <p className='paragraph-centered'>II</p>
                <p className='paragraph-centered'>Create your own user</p>
                <br />
                <p className='paragraph-centered'>III</p>
                <p className='paragraph-centered'>Create notes, and assign them to a user</p>
                <br />
                <p className='paragraph-centered'>IV</p>
                <p className='paragraph-centered'>Mark your notes as 'open' or 'completed'. Only Managers or Admins can delete notes.</p>
                <br />
                <p className='paragraph-centered'>V</p>
                <p className='paragraph-centered'>User Management: If you're a Manager or an Admin, you can add or remove users. However, users 'Arne', 'Mike', and 'Einar' are fixed and cannot be altered.</p>

                {/* Add more paragraphs if needed */}
            </ReactModal>
        </div>
    );
};

export default TutorialPopup;

