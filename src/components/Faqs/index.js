// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {faqsList: props.faqsList}
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> FAQs</h1>
          <ul className="ul">
            {faqsList.map(each => (
              <FaqItem
                key={each.id}
                id={each.id}
                onClickBtnSaveId={this.onClickBtnSaveId}
                question={each.questionText}
                answer={each.answerText}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
