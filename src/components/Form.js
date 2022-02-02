import React, { useState } from 'react';
import AddStory from './AddStory';
var validator = require("email-validator");
function Form(props) {
    const [story, setstory] = useState({ name: '', email: '', title: '', description: '', tag: '' })
    const [pass, setpass] = useState('');
    const [passmessage, setpassmessage] = useState('')
    const [alert, setalert] = useState(false)
    const click = (e) => {
        e.preventDefault();
        if (story.name.length < 5) {
            setpass("Unsuccessful")
            setpassmessage("Name should be at least 5 character");
            setalert(true);
            setTimeout(() => {
                setalert(false)
            }, 3000);
            return;
        }
        if (!validator.validate(story.email)) {
            setpass("Unsuccessful")
            setpassmessage("Enter a valid email id");
            setalert(true);
            setTimeout(() => {
                setalert(false)
            }, 3000);
            return;
        }
        if (story.title.length < 5) {
            setpass("Unsuccessful")
            setpassmessage("Title should be at least 5 character");
            setalert(true);
            setTimeout(() => {
                setalert(false)
            }, 3000);
            return;
        }
        if (story.tag.length == 0) {
            setpass("Unsuccessful")
            setpassmessage("Tag is required!");
            setalert(true);
            setTimeout(() => {
                setalert(false)
            }, 3000);
            return;
        }
        if (story.description.length < 200) {
            setpass("Unsuccessful")
            setpassmessage("Description should be at least 200 character!");
            setalert(true);
            setTimeout(() => {
                setalert(false)
            }, 3000);
            return;
        }
        setpass("Success");
        setpassmessage("Your story has been uploaded successfully 🎆🎆")
        AddStory(story.name, story.email, story.title, story.description, story.tag);
        setalert(true);
        setTimeout(() => {
            setalert(false)
        }, 3000);
    }
    const onchange = (e) => {
        setstory({ ...story, [e.target.name]: e.target.value })
    }
    return <>
        <div className="container-fluid px-1 py-5 mx-auto">
            <div className="row d-flex justify-content-center">
                <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                    <div className="card">
                        <h5 className="text-center mb-4">Write your first story</h5>
                        {alert && <div class={`alert alert-${pass == 'Success' ? "success" : 'danger'}`} role="alert">
                            <strong>{pass}</strong> - {passmessage}
                        </div>}
                        <form className="form-card" onsubmit="event.preventDefault()">
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Your Name<span className="text-danger"> *</span></label>
                                    <input required onChange={onchange} type="text" id="name" name="name" placeholder="Enter your name" onBlur="validate(1)" />
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Email<span className="text-danger"> *</span></label>
                                    <input required type="text" id="email" name="email" onChange={onchange} placeholder="Enter your email id" onBlur="validate(3)" />
                                </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Story Title<span className="text-danger"> *</span></label>
                                    <input required type="text" onChange={onchange} id="title" name="title" placeholder="Enter your story title" onBlur="validate(5)" />
                                </div>
                                <div className="form-group col-sm-6 flex-column d-flex">
                                    <label className="form-control-label px-3">Tag<span className="text-danger"> *</span></label>
                                    <input required onChange={onchange} type="text" id="tag" name="tag" placeholder="Enter tag for your story" onBlur="validate(5)" />
                                </div>
                            </div>
                            <div className="row justify-content-between text-left">
                                <div className="form-group col-12 flex-column d-flex">
                                    <label className="form-control-label px-3">Story<span className="text-danger"> *</span></label>
                                    <textarea required onChange={onchange} style={{ resize: "none" }} placeholder='Write and start' className="form-control" id="exampleFormControlTextarea1" name='description' rows="5"></textarea>
                                </div>
                            </div>
                            <div className="row justify-content-end">
                                <div className="form-group col-sm-6"> <button type="submit" onClick={click} className="btn-block btn-primary">Upload</button> </div>
                            </div>
                        </form>
                        <p className='text-muted px-0'>Note: Please reload the page after upload your story to see your story on this page</p>
                    </div>
                </div>
            </div>
            
        </div>
    </>
}

export default Form;
