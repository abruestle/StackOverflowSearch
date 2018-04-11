import React from "react";
import "./SearchResult.css";
import Row from "../Row";
import Col from "../Col";
import API from "../../utils/API";

class SearchResult extends React.Component {
  state = {
    answers: [],
    error: ""
  };

  // constructor(props) {
  //   const { props } = props;
  //   this.state.props = {props};
	// };
	
  componentDidMount() {
	console.log("Search Result");
	console.log(JSON.stringify(this.props, null, 2));
  }
  showAnswers = event => {
    event.preventDefault();
    API.getAnswerIds(this.props.question_id)
      .then(res => {
        console.log("response");
        // console.log(JSON.stringify(res, null, 2));
        console.log(JSON.stringify(res.data.items[0], null, 2));
        console.log(JSON.stringify(res.data.items[0].answer_id, null, 2));
        var ids = res.data.items[0].answer_id;
        for(let i=1; i < res.data.items.length; i++){
          ids = ids + ";" + res.data.items[i].answer_id;
        }
        if (res.data.status === "error") {
          throw new Error(res.data.items);
        }
        API.getAnswersByArr(ids)
          .then(res => {
            console.log("response");
            // console.log(JSON.stringify(res, null, 2));
            console.log(JSON.stringify(res.data.items, null, 2));
            console.log(JSON.stringify(res.data.items[0].body, null, 2));
            let answers = res.data.items;
            if (res.data.status === "error") {
              throw new Error(res.data.items);
            }
            console.log(JSON.stringify(answers));
            this.setState({ answers: answers, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      })
      .catch(err => this.setState({ error: err.message }));
  };
	render () {
		return (<Row>
    <Col size="md-12">
				<div className="panel panel-default">
					<div className="panel-heading">
						 <a className="card-link"
             onClick={this.showAnswers}>{this.props.title}</a>
					</div>
					<div className="panel-body" id={`body-${this.props.question_id}`}>
              <a href={this.props.link}>Link to Source</a><br />
              Asked at {Date(this.props.creation_date)}, Score: {this.props.score}; Views: {this.props.view_count}; Answers: {this.props.answer_count}; Tags: {this.props.tags.toString().replace(/,/g, ", ")}<br />
							<ul className="list-group search-results">
							{this.state.answers.map(answer =>
								<li key={`list${answer.answer_id}`} className={`list-group-item accepted${answer.is_accepted}`} id={`${answer.answer_id}`}>
                  Answered at {Date(answer.creation_date)
                  }<br />
                  <div dangerouslySetInnerHTML={{ __html: answer.body }} />
								</li>
							)}
							</ul>
					</div>
				</div>
    </Col>
  </Row>)
	};
};

export default SearchResult;
//   "is_answered": false,
//   "view_count": 2,
//   "answer_count": 0,
//   "score": 0,

//Should display Score, Answer, Number of Views, Tags, Asked or Answered time
//for each question. (Highlight accepted answers).

//{
// "tags": [
//   "javascript",
//   "node.js",
//   "mongodb"
//   ],
//   "owner": {
//   "reputation": 31,
//   "user_id": 9417489,
//   "user_type": "registered",
//   "profile_image": "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=128",
//   "display_name": "Barry Bonds",
//   "link": "https://stackoverflow.com/users/9417489/barry-bonds"
//   },
//   "is_answered": false,
//   "view_count": 2,
//   "answer_count": 0,
//   "score": 0,
//   "last_activity_date": 1523386872,
//   "creation_date": 1523386872,
//   "question_id": 49761135,
//   "link": "https://stackoverflow.com/questions/49761135/javascript-mongodb-asynchronous-functions-not-working",
//   "title": "javascript/mongodb: Asynchronous functions not working"
//   },