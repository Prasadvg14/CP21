// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  constructor(props) {
    super(props)
    const {question, answer} = this.props
    this.state = {show: false, ques: question, ans: answer}
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show,
    }))
  }

  onClick = () => {
    const {onClickBtnSaveId, id} = this.props
    onClickBtnSaveId(id)
  }

  render() {
    const {show, ques, ans} = this.state
    const getAns = () => show && <p className="ans">{ans}</p>
    const btn = show
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const btnAlt = show ? 'minus' : 'plus'

    return (
      <li className={btnAlt}>
        <div className={btnAlt}>
          <div className="ques">
            <h2>{ques}</h2>
            <button type="button" onClick={this.toggleShow}>
              <img src={btn} alt={btnAlt} />
            </button>
          </div>

          {getAns()}
        </div>
      </li>
    )
  }
}

export default FaqItem
