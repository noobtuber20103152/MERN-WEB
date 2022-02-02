import React from 'react';

function SingleStory(props) {
    return <>
        <div class="accordion my-2" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {props.title} - {props.tag}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        {props.description}
                    </div>
                    <div className="accordion-body muted my-0 py-0">
                        <p className='text-muted my-0 py-0'><strong>Author Name:</strong> {props.name}</p>
                    </div>
                    <div className="accordion-body text-muted my-0 py-0">
                       <p className='muted my-0 py-0'> <strong>Upload Date: </strong> {props.date.slice(0,10)}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default SingleStory;
