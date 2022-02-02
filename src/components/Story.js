import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SingleStory from './SingleStory';

export class Story extends Component {
    static propTypes = {};
    constructor(props) {
        super(props);
        this.state = {
            story: [],
            loading:false
        }
    }
    async componentDidMount() {
        const url = "http://localhost:5000/api/blog/story";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            story: parseData,
        })
       
        for (var i = this.state.story.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = this.state.story[i];
            this.state.story[i] = this.state.story[j];
            this.state.story[j] = temp;
          this.setState({loading:true})
        }
        console.log(this.state.story)
    }

    render() {
        return <>
            <div className="container my-3">
                {this.state.loading && this.state.story.map((element) => {
                    return <SingleStory tag={element.tag} date={element.date} name={element.name} title={element.title} description={element.description} />
                })}

            </div>
        </>
    }
}

export default Story;
