import React, {useEffect, Component} from 'react'

// const Phone = () => {
//   return <div>Phone</div>
// }

class Phone extends Component {
  componentDidMount() {
    this.props.fetchPhoneById()
  }

  render() {
    return <div>Phone</div>
  }
}

export default Phone
