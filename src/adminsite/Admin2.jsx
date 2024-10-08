import React, { useState } from "react";
import './Admin2.css';
import Swal from 'sweetalert2';
import { useCreateNewsLetterMutation } from '../apis';
import { useGetAllNewsLettersQuery } from "../apis";

function Admin2() {
    const [showModal, setShowModal] = useState(false);
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [createNewsletter, { isLoading, isError, isSuccess }] = useCreateNewsLetterMutation();
    const { data, isLoading: newsLetterLoding, isError: newsLetterError } = useGetAllNewsLettersQuery()

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSubject('');
        setContent('');
    };

    const handleSubmit = async () => {
        if (!subject || !content) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Please fill in both subject and content.',
            });
            return;
        }

        try {
            await createNewsletter({ subject, content }).unwrap();
            Swal.fire({
                icon: 'success',
                title: 'Newsletter Sent!',
                text: 'Your newsletter has been sent to all subscribers.',
            }).then(() => {
                handleCloseModal();
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: 'Failed to send newsletter. Please try again later.',
            });
        }
    };

    return (
        <>
            <div className="main-container">
                <button
                    onClick={handleShowModal}
                    className="addButton"
                    type="button"
                >
                    Add New
                </button>

                {showModal && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <h2>Add Newsletter</h2>
                            <input
                                type="text"
                                placeholder="Enter Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="modal-input"
                            />
                            <textarea
                                placeholder="Enter Content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                className="modal-textarea"
                            />
                            <button
                                onClick={handleSubmit}
                                disabled={isLoading}
                                className="modal-button"
                            >
                                {isLoading ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </div>
                )}

                <div className="container-table">
                    <div className="tableDiv">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Content</th>
                                    <th>createdAt</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((newsletter, index) => (
                                    <tr key={index}>
                                        <td>{newsletter.subject}</td>
                                        <td>{newsletter.content}</td>
                                        <td>{newsletter.createdAt}</td>
                                        <td>
                                            <div className="d-flex">
                                                <button className="editButton">Edit</button>
                                                <button className="delButton">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>

                {isError && <p className="error-message">Failed to send newsletter. Please try again.</p>}
                {isSuccess && <p className="success-message">Newsletter sent successfully!</p>}
            </div>
        </>
    );
}

export default Admin2;
