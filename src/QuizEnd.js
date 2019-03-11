import React, {Component} from 'react';

class QuizEnd extends Component {

    handleResetQuiz() {
        this.props.resetClickHandler();
    }

    render() {
        return (
            <div>
                <p>Thanks for playing!</p>
                <a href='' onClick={this.handleResetQuiz.bind(this)}>Reset Quiz</a>
            </div>
        );
    }
}

export default QuizEnd;
